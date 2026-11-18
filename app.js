(function () {
  "use strict";

  var KEY = "rosebr-validations-v1";
  var state = load();
  var filter = "all";

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || "{}");
      return { name: s.name || "", results: s.results || {}, collapsed: s.collapsed || {} };
    } catch (e) {
      return { name: "", results: {}, collapsed: {} };
    }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* navegador sem armazenamento: segue sem salvar */ }
  }
  function result(id) { return state.results[id] || { status: "pend", note: "" }; }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  // ---------- validações ----------
  function renderTests() {
    var root = document.getElementById("sections");
    root.innerHTML = "";
    window.VALIDATIONS.forEach(function (sec) {
      var box = el("article", "section" + (state.collapsed[sec.id] ? " collapsed" : ""));
      box.dataset.section = sec.id;

      var head = el("div", "section-head");
      head.appendChild(el("span", "icon", sec.icon));
      head.appendChild(el("h2", null, sec.name));
      var mini = el("div", "mini");
      var mOk = el("div", "bar-ok"), mBad = el("div", "bar-bad");
      mini.appendChild(mOk); mini.appendChild(mBad);
      head.appendChild(mini);
      var count = el("span", "count");
      head.appendChild(count);
      head.appendChild(el("span", "chev", "▾"));
      head.addEventListener("click", function () {
        state.collapsed[sec.id] = !state.collapsed[sec.id];
        box.classList.toggle("collapsed");
        save();
      });
      box.appendChild(head);

      var list = el("div", "tests");
      sec.tests.forEach(function (t) { list.appendChild(renderTest(t)); });
      box.appendChild(list);

      box._update = function () {
        var ok = 0, bad = 0;
        sec.tests.forEach(function (t) {
          var r = result(t.id).status;
          if (r === "ok") ok++; else if (r === "bad") bad++;
        });
        var n = sec.tests.length;
        count.textContent = (ok + bad) + "/" + n;
        mOk.style.width = (ok / n * 100) + "%";
        mBad.style.width = (bad / n * 100) + "%";
      };
      box._update();
      root.appendChild(box);
    });
    applyFilter();
  }

  function renderTest(t) {
    var r = result(t.id);
    var row = el("div", "test " + r.status);
    row.dataset.id = t.id;

    var main = el("div");
    main.appendChild(el("h3", null, t.title));
    var ol = el("ol");
    t.steps.forEach(function (s) { ol.appendChild(el("li", null, s)); });
    main.appendChild(ol);
    var exp = el("div", "expected");
    exp.appendChild(el("b", null, "Esperado: "));
    exp.appendChild(document.createTextNode(t.expected));
    main.appendChild(exp);
    row.appendChild(main);

    var side = el("div", "side");
    var status = el("div", "status");
    [["ok", "✓ Passou"], ["bad", "✗ Falhou"], ["pend", "Pendente"]].forEach(function (p) {
      var b = el("button", "st " + p[0] + (r.status === p[0] ? " on" : ""), p[1]);
      b.type = "button";
      b.addEventListener("click", function () { setStatus(t.id, p[0], row); });
      status.appendChild(b);
    });
    side.appendChild(status);

    var ta = el("textarea");
    ta.placeholder = "Anotações (o que aconteceu, print, mapa, horário…)";
    ta.value = r.note || "";
    ta.addEventListener("input", function () {
      var cur = result(t.id);
      state.results[t.id] = { status: cur.status, note: ta.value };
      save();
    });
    side.appendChild(ta);
    row.appendChild(side);
    return row;
  }

  function setStatus(id, status, row) {
    var cur = result(id);
    state.results[id] = { status: status, note: cur.note || "" };
    save();
    row.className = "test " + status;
    Array.prototype.forEach.call(row.querySelectorAll(".st"), function (b) {
      b.classList.toggle("on", b.classList.contains(status));
    });
    var sec = row.closest(".section");
    if (sec && sec._update) sec._update();
    updateOverall();
    applyFilter();
  }

  function applyFilter() {
    document.querySelectorAll(".test").forEach(function (row) {
      var s = result(row.dataset.id).status;
      row.classList.toggle("hidden-by-filter", filter !== "all" && s !== filter);
    });
    document.querySelectorAll(".section").forEach(function (sec) {
      var visible = sec.querySelectorAll(".test:not(.hidden-by-filter)").length;
      sec.classList.toggle("hidden-by-filter", visible === 0);
    });
  }

  function allTests() {
    var out = [];
    window.VALIDATIONS.forEach(function (sec) { sec.tests.forEach(function (t) { out.push({ sec: sec, t: t }); }); });
    return out;
  }

  function updateOverall() {
    var all = allTests(), ok = 0, bad = 0;
    all.forEach(function (x) {
      var s = result(x.t.id).status;
      if (s === "ok") ok++; else if (s === "bad") bad++;
    });
    var n = all.length || 1;
    document.getElementById("overallText").textContent = (ok + bad) + " de " + all.length + " testados";
    document.getElementById("cntOk").textContent = ok + " ✓";
    document.getElementById("cntBad").textContent = bad + " ✗";
    document.getElementById("barOk").style.width = (ok / n * 100) + "%";
    document.getElementById("barBad").style.width = (bad / n * 100) + "%";
  }

  // ---------- notas do patch ----------
  function renderNotes() {
    var root = document.getElementById("notes");
    root.innerHTML = "";
    window.PATCH_NOTES.forEach(function (n) {
      var card = el("article", "note");
      card.appendChild(el("h2", null, n.title));
      if (n.items) {
        var ul = el("ul");
        n.items.forEach(function (i) { ul.appendChild(el("li", null, i)); });
        card.appendChild(ul);
      }
      (n.groups || []).forEach(function (g) {
        card.appendChild(el("h3", null, g.name));
        var ul = el("ul");
        g.items.forEach(function (i) { ul.appendChild(el("li", null, i)); });
        card.appendChild(ul);
      });
      if (n.table) {
        var tb = el("table"), thead = el("thead"), tr = el("tr");
        n.table.head.forEach(function (h) { tr.appendChild(el("th", null, h)); });
        thead.appendChild(tr); tb.appendChild(thead);
        var body = el("tbody");
        n.table.rows.forEach(function (r) {
          var row = el("tr");
          r.forEach(function (c) { row.appendChild(el("td", null, c)); });
          body.appendChild(row);
        });
        tb.appendChild(body);
        card.appendChild(tb);
      }
      root.appendChild(card);
    });
  }

  // ---------- relatório ----------
  function report() {
    var all = allTests(), ok = 0, bad = 0, pend = 0;
    all.forEach(function (x) {
      var s = result(x.t.id).status;
      if (s === "ok") ok++; else if (s === "bad") bad++; else pend++;
    });
    var d = new Date();
    var pad = function (v) { return (v < 10 ? "0" : "") + v; };
    var lines = [
      "VALIDAÇÃO DO PATCH — RoseOnBr",
      "Testador: " + (state.name || "(sem nome)"),
      "Data: " + pad(d.getDate()) + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()),
      "Resumo: " + ok + " passou · " + bad + " falhou · " + pend + " pendente (total " + all.length + ")",
      ""
    ];
    window.VALIDATIONS.forEach(function (sec) {
      lines.push("== " + sec.name + " ==");
      sec.tests.forEach(function (t) {
        var r = result(t.id);
        var mark = r.status === "ok" ? "[OK]   " : r.status === "bad" ? "[FALHA]" : "[ -- ] ";
        lines.push(mark + " " + t.title);
        if (r.note && r.note.trim()) {
          r.note.trim().split(/\r?\n/).forEach(function (l) { lines.push("        > " + l); });
        }
      });
      lines.push("");
    });
    return lines.join("\n");
  }

  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  function copyReport() {
    var text = report();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { toast("Relatório copiado! Cole no Discord ou WhatsApp."); }, fallback);
    } else {
      fallback();
    }
    function fallback() {
      var ta = el("textarea");
      ta.value = text;
      ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); toast("Relatório copiado!"); } catch (e) { toast("Não deu para copiar: use o botão .txt"); }
      document.body.removeChild(ta);
    }
  }

  function downloadReport() {
    var blob = new Blob([report()], { type: "text/plain;charset=utf-8" });
    var a = el("a");
    a.href = URL.createObjectURL(blob);
    a.download = "validacao-rosebr-" + (state.name || "teste").replace(/[^\w-]+/g, "_") + ".txt";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  // ---------- eventos ----------
  function init() {
    var name = document.getElementById("tester");
    name.value = state.name;
    name.addEventListener("input", function () { state.name = name.value.trim(); save(); });

    document.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll(".tab").forEach(function (x) { x.classList.toggle("active", x === b); });
        document.getElementById("tab-tests").hidden = b.dataset.tab !== "tests";
        document.getElementById("tab-notes").hidden = b.dataset.tab !== "notes";
      });
    });
    document.querySelectorAll(".filter[data-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        filter = b.dataset.filter;
        document.querySelectorAll(".filter[data-filter]").forEach(function (x) { x.classList.toggle("active", x === b); });
        applyFilter();
      });
    });
    document.getElementById("btnReset").addEventListener("click", function () {
      if (!confirm("Apagar todas as marcações e anotações deste navegador?")) return;
      state.results = {};
      save();
      renderTests();
      updateOverall();
      toast("Tudo limpo.");
    });
    document.getElementById("btnCopy").addEventListener("click", copyReport);
    document.getElementById("btnDownload").addEventListener("click", downloadReport);

    renderTests();
    renderNotes();
    updateOverall();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
