// Conteúdo da página: notas do patch e validações.
// Para mudar textos, edite só este arquivo. Cada validação precisa de um "id" único (é ele que guarda o progresso).

window.PATCH_NOTES = [
  {
    title: "Prison",
    items: ["Nerfada a precisão e o dano dos monstros."]
  },
  {
    title: "Drops",
    groups: [
      { name: "Sikuku Tiger Captain", items: ["Adicionado drop de Lisent (Cr)", "Aumentado o drop de Spiritual Stone of Earth"] },
      { name: "Sand Fish King", items: ["Aumentado o drop de Spiritual Stone of Oro", "Aumentado o drop de Spiritual Stone of Water", "Aumentado o drop de Spiritual Stone of Hebarn", "Aumentado o drop de Caixa de Stones"] },
      { name: "Neith Chair", items: ["Aumentado o drop de Spiritual Stone of Oro", "Aumentado o drop de Spiritual Stone of Hebarn", "Aumentado o drop de Caixa de Stones"] }
    ]
  },
  {
    title: "Item Mall",
    items: [
      "Removidos: Spark Charm, Ice Charm e Blood Charm.",
      "WorldShout: de 50 RC (3x) para 20 RC (3x).",
      "Busca por nome do item ou por status.",
      "Aba New: os últimos 50 itens lançados, em ordem aleatória.",
      "Nova categoria Pet: skins, acessórios, cupons e comida de pet.",
      "Janela mais larga e tooltip mostrando a duração que o item recebe ao ser comprado.",
      "Prazo dos itens no formato \"[Expira em X Dias, Y Horas, Z Minutos]\"."
    ]
  },
  {
    title: "Game Arena — novos horários",
    items: [
      "Requisito das arenas PvP reduzido de 14 para 8 jogadores.",
      "A premiação de todos os eventos PvP é a mesma."
    ],
    table: {
      head: ["Evento", "Inscrições", "Fecha inscrições e começa"],
      rows: [
        ["MVP Arena", "17:15", "17:25"],
        ["Zant Invasion", "18:15", "18:25"],
        ["Domination", "19:15", "19:25"],
        ["Dragon Hunter", "20:15", "20:25"],
        ["Team Death Match", "21:15", "21:25"],
        ["Crystal War", "22:15", "22:25"]
      ]
    }
  },
  {
    title: "Bosses — novo calendário",
    items: [
      "B2: sexta, sábado e domingo às 08:30.",
      "OCF Boss: sexta, sábado e domingo às 20:00.",
      "O portal do OCF fecha às 20:05."
    ]
  },
  {
    title: "Mapa B2",
    items: ["Agora são no máximo 2 contas por IP."]
  },
  {
    title: "Escudos — requisito de level",
    items: ["Skull Shield: 260 → 170.", "Mind Pure: 260 → 170."]
  },
  {
    title: "Novo sistema de pets",
    items: [
      "Cada pet tem 3 slots de acessório; para liberar todos é preciso o cupom Slot Expansion.",
      "Para renomear o pet é preciso o cupom Rename.",
      "Os pets têm danças e truques, liberados pelo level do pet (alimente-o para subir)."
    ]
  },
  {
    title: "Novo baú (storage)",
    items: [
      "Paginação e 3 abas: Conta, Personagem e Item Mall.",
      "Conta: 20 páginas, 4 grátis. Os itens que você já tinha foram para as páginas 1 a 4. Cada página extra custa 500 RC.",
      "Personagem: só itens vinculados ao personagem. 1 página grátis + 3 por 500 RC cada.",
      "Item Mall: itens do Item Mall ou vinculados à conta. 1 página grátis + 3 por 500 RC cada.",
      "Comprou no Item Mall com o inventário cheio? O item vai para a aba Item Mall (se o baú já foi aberto na sessão).",
      "Busca de itens dentro do baú: leva direto até a página do item.",
      "Tag [Item Mall] no tooltip dos itens do Item Mall."
    ]
  },
  {
    title: "Configurações (Alt+O)",
    items: [
      "Nova tela de opções e nova categoria Exibição.",
      "Exibição: nomes, ícone de quest, animação da caixa e efeitos (buff, fogueira, mina, anel, colar e brinco), cada um podendo ser desligado.",
      "Efeito de buff desligado esconde só os buffs; stun, sleep e outros debuffs continuam aparecendo."
    ]
  },
  {
    title: "Efeitos nas joias",
    items: [
      "Cada joia mostra o efeito da gema equipada: colar no peito, brinco na orelha, anel na mão.",
      "Todos podem ser desligados em Alt+O → Exibição."
    ]
  },
  {
    title: "Armory",
    items: [
      "Novo botão Armory no minimapa.",
      "Pesquise pelo nome do item ou do monstro e veja onde ele aparece e o que dropa."
    ]
  },
  {
    title: "Teleporte pelo Mapa Mundo",
    items: [
      "Clique no Mapa Mundo e teleporte para o mapa que quiser (20.000 zuly).",
      "Só dentro do mesmo planeta (Junon para Junon, Luna para Luna…).",
      "Não funciona para entrar em mapas PvP.",
      "Não funciona para sair de eventos da Game Arena, de mapas PvP, em duelo ou de mapas fechados."
    ]
  },
  {
    title: "Preview",
    items: [
      "A gema do item aparece no preview.",
      "O preview carrega na hora, sem a demora ao trocar de roupa."
    ]
  },
  {
    title: "Ajustes",
    items: [
      "Separador de milhar (vírgula) nos campos de preço: Marketplace, troca, baú etc.",
      "Minimapa: coordenadas no topo e hora do jogo removida.",
      "Novo inventário e fundo do chat sem manchas."
    ]
  },
  {
    title: "Interno",
    items: [
      "Melhor desempenho em lures e mais FPS.",
      "Alt+F mostra o contador de FPS."
    ]
  },
  {
    title: "Correções",
    items: [
      "Trocar de sexo não fecha mais o client.",
      "Colocar e tirar item da troca não derruba mais.",
      "Arma (ou escudo) sem os requisitos fica sem efeito: ataque, velocidade, precisão e alcance de quem está sem arma; skills bloqueadas; ícone vermelho.",
      "Arma do Visual de tipo diferente da arma equipada: skills bloqueadas.",
      "Kit de invocação: ao tirar o kit, a invocação mais recente que passar do limite some (vale para toda invocação).",
      "Tela que ficava \"pixelada\" depois de muito tempo online: o jogo reinicia a tela por alguns milissegundos.",
      "Chat da aliança agora é verde.",
      "Inspecionar um jogador que saiu da tela não fecha mais o jogo.",
      "Scroll de teleporte em zona PvP não derruba mais: aparece um aviso no chat.",
      "Invocação: ao morrer, a lista de invocações não era limpa (causava erro de tamanho/scale).",
      "Congelamento da tela ao trocar de mapa.",
      "Tooltip de item com duração que ainda não começou não fecha mais o jogo.",
      "Roupa do pet vencida atualiza o visual do pet para todos.",
      "O pet não dá mais Arua's Blessing a cada login."
    ]
  }
];

// Validações: cada seção tem testes com passo a passo e resultado esperado.
window.VALIDATIONS = [
  {
    id: "bau", name: "Baú (storage)", icon: "🧰",
    tests: [
      { id: "bau-migracao", title: "Itens antigos migrados em ordem",
        steps: ["Antes de atualizar, tire um print do seu baú antigo.", "Atualize, abra o baú no NPC e veja as páginas 1 a 4 da aba Conta."],
        expected: "Todos os itens estão lá, na mesma ordem do baú antigo (40 por página), sem item faltando ou repetido." },
      { id: "bau-guardar", title: "Guardar e retirar item",
        steps: ["Arraste um item do inventário para o baú.", "Retire o mesmo item de volta.", "Repita com um item empilhável (poção) usando uma quantidade parcial."],
        expected: "O item some de um lado e aparece do outro; a quantidade parcial está certa e a taxa de guardar foi cobrada." },
      { id: "bau-relogar", title: "Guardar e relogar",
        steps: ["Guarde 2 ou 3 itens em páginas diferentes.", "Deslogue, logue de novo e abra o baú."],
        expected: "Os itens estão nas mesmas páginas e posições." },
      { id: "bau-mover", title: "Mover item dentro da página",
        steps: ["Arraste um item do baú para outro slot vazio da mesma página.", "Arraste um item para cima de outro (troca de lugar)."],
        expected: "O item muda de lugar e, na troca, os dois trocam de posição." },
      { id: "bau-paginas", title: "Trocar de página",
        steps: ["Use as setas < > no topo do baú.", "Vá até a página 4 e volte para a 1."],
        expected: "O número da página muda e cada página mostra os próprios itens." },
      { id: "bau-bloqueada", title: "Página bloqueada",
        steps: ["Vá até a página 5 da aba Conta (ou a 2 de Personagem / Item Mall)."],
        expected: "Aparece \"Página bloqueada — clique para liberar (500 RC)\" e não dá para guardar nada nela." },
      { id: "bau-comprar", title: "Comprar página com RC",
        steps: ["Com pelo menos 500 RC, clique na página bloqueada e confirme.", "Guarde um item nela, relogue e confira."],
        expected: "Desconta 500 RC, a página libera, o item guardado continua lá depois de relogar." },
      { id: "bau-sem-rc", title: "Comprar página sem RC",
        steps: ["Com menos de 500 RC, tente liberar uma página."],
        expected: "Aparece \"RC insuficiente\", nada é cobrado e a página continua bloqueada (o aviso não some)." },
      { id: "bau-personagem", title: "Aba Personagem",
        steps: ["Tente guardar um item comum na aba Personagem.", "Guarde um item vinculado ao personagem.", "Troque de personagem na mesma conta e abra a aba."],
        expected: "Item comum é recusado; o vinculado entra; no outro personagem a aba é outra (cada personagem tem a sua)." },
      { id: "bau-itemmall", title: "Aba Item Mall",
        steps: ["Tente guardar um item comum na aba Item Mall.", "Guarde um item do Item Mall (tem a tag [Item Mall])."],
        expected: "Item comum é recusado; item do Item Mall ou vinculado à conta entra." },
      { id: "bau-im-cheio", title: "Compra no Item Mall com inventário cheio",
        steps: ["Abra o baú uma vez.", "Encha o inventário e compre algo no Item Mall."],
        expected: "Aparece a mensagem de inventário cheio e o item vai para a aba Item Mall do baú. O RC é descontado uma vez só." },
      { id: "bau-busca", title: "Busca no baú",
        steps: ["Digite parte do nome de um item que está em outra página ou aba.", "Use as setas enquanto busca."],
        expected: "O baú vai direto para a página do item, que aparece destacado em dourado; as setas pulam entre os resultados." },
      { id: "bau-zuly", title: "Zuly do baú",
        steps: ["Guarde e retire zuly pelos botões Depositar / Retirar.", "Relogue."],
        expected: "O valor do baú e do personagem bate, inclusive depois de relogar." },
      { id: "bau-dup", title: "Teste de duplicação (cliques rápidos)",
        steps: ["Guarde e retire o mesmo item muitas vezes, bem rápido.", "Arraste vários itens seguidos e relogue."],
        expected: "Nenhum item duplica ou some." }
    ]
  },
  {
    id: "itemmall", name: "Item Mall", icon: "🛒",
    tests: [
      { id: "im-busca", title: "Busca por nome e status",
        steps: ["Digite um nome de item.", "Digite um status (ex.: DEX)."],
        expected: "A lista mostra só os itens que batem com a busca." },
      { id: "im-new", title: "Aba New",
        steps: ["Abra a aba New algumas vezes."],
        expected: "Mostra itens lançados recentemente, em ordem variada." },
      { id: "im-pet", title: "Categoria Pet",
        steps: ["Abra a categoria Pet e compre uma skin ou acessório."],
        expected: "Os itens de pet aparecem e a compra funciona." },
      { id: "im-removidos", title: "Itens removidos e preço do WorldShout",
        steps: ["Procure Spark, Ice e Blood Charm.", "Veja o preço do WorldShout."],
        expected: "Os charms não aparecem; o WorldShout custa 20 RC (3x)." },
      { id: "im-tooltip", title: "Tooltip de duração e tag",
        steps: ["Passe o mouse em um item com prazo no Item Mall.", "Passe o mouse em um item do Item Mall no inventário."],
        expected: "Mostra a duração que o item recebe; no inventário aparece a tag [Item Mall] perto do fim do tooltip, em rosa." }
    ]
  },
  {
    id: "teleporte", name: "Teleporte (Mapa Mundo)", icon: "🌍",
    tests: [
      { id: "tp-normal", title: "Teleportar no mesmo planeta",
        steps: ["Abra o Mapa Mundo, clique em um mapa do seu planeta e confirme."],
        expected: "Desconta 20.000 zuly e leva até o mapa." },
      { id: "tp-planeta", title: "Outro planeta",
        steps: ["Abra a aba de outro planeta e clique em um mapa."],
        expected: "Os mapas aparecem apagados e aparece o aviso de que não dá para teleportar entre planetas." },
      { id: "tp-sem-zuly", title: "Sem zuly",
        steps: ["Com menos de 20.000 zuly, tente teleportar."],
        expected: "Aparece \"Zuly insuficiente\" e nada acontece." },
      { id: "tp-pvp", title: "Mapa PvP / evento / duelo",
        steps: ["Tente teleportar estando em um mapa PvP, inscrito na Game Arena ou em duelo."],
        expected: "Aparece \"É proibido usar teleporte ou scroll nesta zona\"." },
      { id: "tp-scroll", title: "Scroll em mapa PvP",
        steps: ["Use um scroll de teleporte em Lion Plains ou outro mapa PvP."],
        expected: "Não desconecta; aparece o aviso no chat e o scroll não é gasto." }
    ]
  },
  {
    id: "armory", name: "Armory e minimapa", icon: "🗺️",
    tests: [
      { id: "armory-abrir", title: "Abrir o Armory",
        steps: ["Clique no botão Armory do minimapa."],
        expected: "A janela abre; o botão fica acima do Mapa Mundo e não cobre as coordenadas." },
      { id: "armory-busca", title: "Busca por item e monstro",
        steps: ["Pesquise um monstro.", "Pesquise um item e veja quem o dropa."],
        expected: "Mostra onde o monstro aparece e a lista de drops; as barras de rolagem funcionam." },
      { id: "minimapa", title: "Minimapa",
        steps: ["Ande pelo mapa e olhe o minimapa."],
        expected: "As coordenadas ficam no topo e a hora do jogo não aparece mais." }
    ]
  },
  {
    id: "exibicao", name: "Configurações — Exibição", icon: "⚙️",
    tests: [
      { id: "exib-nomes", title: "Nomes e ícones",
        steps: ["Em Alt+O → Exibição, desligue nomes de jogador, NPC e monstro."],
        expected: "Os nomes somem; ao ligar, voltam." },
      { id: "exib-buff", title: "Efeito de buff",
        steps: ["Desligue Efeitos de buff, receba um buff e depois um stun ou sleep."],
        expected: "A partícula do buff some, mas o atributo continua; o stun/sleep aparece normalmente." },
      { id: "exib-fogueira-mina", title: "Fogueira e mina",
        steps: ["Desligue Fogueira e Mina e use os dois."],
        expected: "O fogo e a explosão não aparecem; não aparece nenhuma janela de erro." },
      { id: "exib-joias", title: "Anel, colar e brinco",
        steps: ["Desligue cada joia separadamente."],
        expected: "Só o efeito daquela joia some." },
      { id: "exib-caixa", title: "Animação da caixa",
        steps: ["Desligue Animação de caixa e abra uma caixa."],
        expected: "A caixa abre direto, sem a animação." },
      { id: "exib-salvar", title: "Salvar ao relogar",
        steps: ["Mude várias opções, feche o jogo e abra de novo."],
        expected: "As opções continuam como você deixou." }
    ]
  },
  {
    id: "visual", name: "Joias, preview e interface", icon: "💎",
    tests: [
      { id: "joia-efeito", title: "Efeito da gema nas joias",
        steps: ["Equipe colar, brinco e anel com gema."],
        expected: "O efeito aparece no peito, na orelha e na mão." },
      { id: "preview-gema", title: "Preview com gema e rapidez",
        steps: ["Ctrl + clique direito em uma arma com gema.", "Troque várias roupas no preview."],
        expected: "A gema aparece no preview e as roupas carregam na hora." },
      { id: "virgula", title: "Vírgula nos preços",
        steps: ["Digite um valor alto no Marketplace, na troca e no baú."],
        expected: "O número aparece com separador de milhar enquanto digita." },
      { id: "fps", title: "Contador de FPS",
        steps: ["Aperte Alt+F."],
        expected: "O FPS aparece acima do nome no painel; Alt+F de novo esconde." },
      { id: "chat-alianca", title: "Chat da aliança",
        steps: ["Mande uma mensagem no chat da aliança."],
        expected: "A cor é verde." }
    ]
  },
  {
    id: "correcoes", name: "Correções de bugs", icon: "🛠️",
    tests: [
      { id: "fix-arma", title: "Arma sem os requisitos",
        steps: ["Use uma gema para cumprir a DEX de uma arma, equipe a arma e tire a gema.", "Olhe o Alt+A e tente usar skill."],
        expected: "O ícone da arma fica vermelho; ataque, velocidade e precisão caem para os de quem está sem arma; skills são recusadas com aviso. Ao recolocar a gema, tudo volta." },
      { id: "fix-escudo", title: "Escudo sem os requisitos",
        steps: ["Repita o teste anterior com um escudo."],
        expected: "O escudo fica sem defesa e as skills são bloqueadas." },
      { id: "fix-costume", title: "Arma do Visual de outro tipo",
        steps: ["Inventário cheio, cajado no Visual, troque a arma normal para katar.", "Tente usar skill."],
        expected: "As skills são recusadas com o aviso da arma do Visual." },
      { id: "fix-kit", title: "Kit de invocação",
        steps: ["Equipe o kit, invoque acima do limite normal e tire o kit."],
        expected: "A invocação mais recente some e aparece o aviso; não dá para repassar o kit e manter as invocações." },
      { id: "fix-sexo", title: "Trocar de sexo",
        steps: ["Use a troca de sexo."],
        expected: "O client não fecha." },
      { id: "fix-troca", title: "Item na troca",
        steps: ["Coloque e tire itens da janela de troca várias vezes."],
        expected: "Ninguém é desconectado." },
      { id: "fix-inspect", title: "Inspecionar jogador fora da tela",
        steps: ["Inspecione um jogador e afaste-se até ele sumir."],
        expected: "O jogo não fecha." },
      { id: "fix-mapa", title: "Trocar de mapa",
        steps: ["Troque de mapa várias vezes (teleporte, portal, scroll)."],
        expected: "A tela não congela." },
      { id: "fix-pixelado", title: "Tela pixelada",
        steps: ["Fique bastante tempo online com o jogo aberto."],
        expected: "A tela não fica pixelada (se o FPS cair muito, ela pisca rapidamente e volta ao normal)." },
      { id: "fix-pet", title: "Pet",
        steps: ["Deixe a roupa do pet vencer.", "Relogue algumas vezes."],
        expected: "O pet perde a roupa para todos; você não ganha Arua's Blessing a cada login." }
    ]
  },
  {
    id: "conteudo", name: "Conteúdo (drops, eventos, bosses)", icon: "📅",
    tests: [
      { id: "cont-drops", title: "Drops",
        steps: ["Cace Sikuku Tiger Captain, Sand Fish King e Neith Chair."],
        expected: "Os drops novos/aumentados aparecem (Lisent no Tiger Captain; stones e Caixa de Stones)." },
      { id: "cont-prison", title: "Prison",
        steps: ["Enfrente os monstros da Prison."],
        expected: "Os monstros acertam menos e dão menos dano que antes." },
      { id: "cont-arena", title: "Horários da Game Arena",
        steps: ["Confira as inscrições nos horários da tabela das notas.", "Veja se o evento abre com 8 jogadores."],
        expected: "Inscrições e início nos horários certos; requisito de 8." },
      { id: "cont-boss", title: "Bosses B2 e OCF",
        steps: ["Sexta, sábado e domingo: B2 às 08:30 e OCF às 20:00."],
        expected: "Os bosses aparecem no horário e o portal do OCF fecha às 20:05." },
      { id: "cont-b2", title: "Mapa B2: 2 contas por IP",
        steps: ["Tente entrar no B2 com 3 contas do mesmo IP."],
        expected: "A terceira conta não entra." },
      { id: "cont-escudos", title: "Escudos level 170",
        steps: ["Equipe Skull Shield e Mind Pure com level 170."],
        expected: "Os dois equipam a partir do level 170." },
      { id: "cont-pets", title: "Sistema de pets",
        steps: ["Equipe acessórios, use o cupom de slot e o de renomear.", "Alimente o pet e veja danças/truques."],
        expected: "Os 3 slots liberam com o cupom, o nome muda e os truques liberam com o level." }
    ]
  }
];
