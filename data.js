// Conteúdo da página: notas do patch e validações.
// Para mudar textos, edite só este arquivo. Cada validação precisa de um "id" único (é ele que guarda o progresso).

window.PATCH_NOTES = [
  {
    title: "RoseOnBr no navegador",
    items: [
      "Agora dá para jogar pelo navegador do computador, do celular ou do tablet.",
      "Acesse https://roseonline.com.br e clique em \"Jogar agora no seu navegador\".",
      "Ainda está em desenvolvimento: vamos ajustando nos próximos patches até ficar 100%."
    ]
  },
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
      "Prazo dos itens no formato \"[Expira em X Dias, Y Horas, Z Minutos]\".",
      "Removido o antigo coletor do Item Mall."
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
    title: "Objetivos do Game Arena",
    items: [
      "Novo botão \"Objetivos\" na janela da Game Arena: missões diárias, semanais e de temporada (28 dias).",
      "Clique em \"Iniciar\" na missão e jogue os eventos da Game Arena: participar, vencer, abater, não morrer, ficar no top 3 e mais.",
      "Cada missão concluída dá pontos. Chegou na meta do período, resgate o baú (diário 20, semanal 140, temporada 560 pontos).",
      "Rastreio na tela com as missões em andamento: dá para arrastar, recolher e trocar de página.",
      "Dá para desistir de uma missão em andamento (o progresso dela zera).",
      "A diária vira às 00:00, a semanal na segunda-feira e a temporada a cada 28 dias."
    ]
  },
  {
    title: "Bosses — novo calendário",
    table: {
      head: ["Dia", "Boss", "Horário"],
      rows: [
        ["Segunda", "OCF", "20:00"],
        ["Terça", "B2 / Luna", "20:00"],
        ["Quarta", "OCF", "20:00"],
        ["Quinta", "B2 / Luna", "20:00"],
        ["Sexta", "OCF", "20:00"],
        ["Sábado", "B2 / Luna", "20:00"],
        ["Domingo", "B2 / Luna e OCF", "08:30 (B2 / Luna) e 20:00 (OCF)"]
      ]
    }
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
    title: "Novo Weapon Effect",
    items: [
      "8 novos efeitos de arma (Weapon Effect 1 ao 8) no Item Mall, por 120 RC cada, com duração de 30 dias.",
      "Vinculado à conta: não pode ser dropado, trocado ou vendido, mas pode ser guardado no baú.",
      "Para equipar: duplo clique ou arraste o item até o slot \"Weapon Effect\" na aba Visual do inventário.",
      "Para remover: duplo clique no slot (precisa de espaço no inventário). Equipar outro com um já equipado troca os dois de lugar.",
      "O efeito aparece na arma, no lugar da gema: arma da mão direita, escudo/sub-arma e nas duas mãos em katar e espada dupla.",
      "Os outros jogadores veem o seu efeito (dá para desligar o dos outros em Alt+O → Exibição).",
      "Segurar o botão direito no slot mostra as informações do item e o tempo restante."
    ]
  },
  {
    title: "Buy Back",
    items: ["Agora dá para comprar de volta os itens vendidos sem querer."]
  },
  {
    title: "Comando /siga (/follow)",
    items: [
      "Não funciona mais em mapas PvP (nem pelo menu do jogador).",
      "Se você ativou antes, ele é desligado ao entrar no mapa PvP."
    ]
  },
  {
    title: "Configurações (Alt+O)",
    items: [
      "Nova tela de opções e nova categoria Exibição.",
      "Exibição: nomes, ícone de quest, animação da caixa e efeitos (buff, fogueira, mina, anel, colar, brinco e efeito de arma), cada um podendo ser desligado.",
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
      "Só dentro do mesmo planeta (Junon para Junon, Luna para Luna…); entre planetas aparece um aviso.",
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
    title: "Interface e ajustes",
    items: [
      "Nova tela de opções (Alt+O) e novo inventário.",
      "Fundo do chat sem manchas.",
      "Minimapa: coordenadas no topo, botão Armory e hora do jogo removida.",
      "Separador de milhar (vírgula) nos campos de preço: Marketplace, troca, baú etc."
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
      "Arma do Visual de tipo diferente da arma equipada (ex.: katar equipada e cajado no Visual): skills bloqueadas.",
      "Kit de invocação: ao tirar o kit, a invocação que passar do limite some. Não dá mais para repassar o kit entre personagens.",
      "Tela que ficava \"pixelada\" depois de muito tempo online: o jogo reinicia a tela por alguns milissegundos.",
      "Chat da aliança agora é verde.",
      "Inspecionar um jogador que saiu da tela: não é mais possível ver quem está fora do alcance, e o jogo não fecha.",
      "Scroll de teleporte em zona PvP não derruba mais: aparece \"É proibido usar teleporte ou scroll nesta zona\" no chat.",
      "Invocação: ao morrer, a lista de invocações não era limpa (causava erro de tamanho/scale).",
      "Congelamento da tela ao trocar de mapa.",
      "Tooltip de item com duração que ainda não começou não fecha mais o jogo.",
      "Item de reset de status no level máximo: resetava só na tela, não gastava o item e voltava ao relogar.",
      "Montar durante emote ou scroll de dança (ou usar skill com alvo montado) não fecha mais o jogo.",
      "Mensagens \"?????\" no fim de efeitos com o client em inglês.",
      "Aviso \"Os preços mudaram\" aparecendo no chat do nada: agora só aparece com itens no carrinho e mudança real de preço.",
      "Apertar \"Y\" executava a hot-key do F10.",
      "Cart: ao usar teleporte, o cart ficava invertido e bugado.",
      "Pedir duelo desconectava o jogador: agora o convite chega normalmente.",
      "Roupa do pet vencida atualiza o visual do pet para todos.",
      "O pet não dá mais Arua's Blessing a cada login.",
      "Consumíveis: ao usar um item, só ele fica escuro (antes escurecia o grupo todo, ex.: todos os scrolls por 3 segundos).",
      "O jogo não fecha mais quando uma skill de efeito contínuo (cura/regeneração) atinge outro jogador ou monstro.",
      "O jogo não fecha mais ao carregar certos mapas (iluminação dos objetos)."
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
      { id: "bau-arrastar-aba", title: "Arrastar item do baú para outra aba",
        steps: ["Segure um item da aba Conta e pare o mouse em cima da aba Personagem ou Item Mall.", "Solte o item.", "Agora arraste um item do inventário para cima de outra aba."],
        expected: "Item do baú: a aba não troca nem fica destacada, aparece no chat \"Não é possível mover itens entre as abas do baú\" e o jogo não fecha. Item do inventário: a aba troca e dá para guardar nela." },
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
    id: "weaponfx", name: "Weapon Effect", icon: "✨",
    tests: [
      { id: "wfx-comprar", title: "Comprar no Item Mall",
        steps: ["Compre um Weapon Effect (1 ao 8) no Item Mall.", "Passe o mouse no item no inventário."],
        expected: "Custa 120 RC; o item tem duração de 30 dias e a tag de vinculado à conta." },
      { id: "wfx-equipar", title: "Equipar",
        steps: ["Dê duplo clique no item (ou arraste até o slot \"Weapon Effect\" na aba Visual do inventário)."],
        expected: "O item sai do inventário, vai para o slot e o efeito aparece na arma, no lugar da gema." },
      { id: "wfx-maos", title: "Mão direita, escudo e duas mãos",
        steps: ["Teste com arma de uma mão + escudo/sub-arma.", "Teste com katar e com espada dupla."],
        expected: "Arma de uma mão: efeito na arma e no escudo/sub-arma. Katar e espada dupla: efeito nas duas mãos." },
      { id: "wfx-trocar", title: "Trocar de efeito",
        steps: ["Com um efeito equipado, dê duplo clique em outro Weapon Effect do inventário."],
        expected: "Os dois trocam de lugar: o novo vai para o slot e o antigo volta para o inventário." },
      { id: "wfx-remover", title: "Remover",
        steps: ["Dê duplo clique no slot com espaço no inventário.", "Repita com o inventário cheio."],
        expected: "Com espaço, o item volta para o inventário. Cheio, aparece o aviso e o item continua no slot." },
      { id: "wfx-tooltip", title: "Informações no slot",
        steps: ["Segure o botão direito no slot."],
        expected: "Mostra as informações do item e o tempo restante; o item não é desequipado." },
      { id: "wfx-outros", title: "Outros jogadores e opção de exibição",
        steps: ["Peça para outro jogador olhar sua arma.", "Em Alt+O → Exibição, desligue o efeito de arma dos outros."],
        expected: "O outro jogador vê o seu efeito; com a opção desligada, você não vê o efeito dos outros." },
      { id: "wfx-relogar", title: "Relogar e trocar de mapa",
        steps: ["Com o efeito equipado, troque de mapa e relogue."],
        expected: "O efeito continua equipado e aparecendo; o item não duplica nem some." },
      { id: "wfx-vinculo", title: "Vínculo à conta",
        steps: ["Tente dropar, trocar e vender o item.", "Guarde no baú."],
        expected: "Dropar, trocar e vender são recusados; guardar no baú funciona." },
      { id: "wfx-preview", title: "Preview",
        steps: ["Ctrl + clique direito em um Weapon Effect."],
        expected: "O preview mostra o efeito na arma." }
    ]
  },
  {
    id: "novos", name: "Buy Back, /siga e navegador", icon: "🆕",
    tests: [
      { id: "buyback", title: "Buy Back",
        steps: ["Venda um item para um NPC.", "Abra o Buy Back e compre o item de volta."],
        expected: "O item volta para o inventário e o zuly é cobrado certo." },
      { id: "siga-pvp", title: "/siga em mapa PvP",
        steps: ["Em um mapa PvP, use /siga NOME (ou /follow) e o Follow do menu do jogador."],
        expected: "Não segue; aparece \"Não é possível seguir jogadores em mapas PvP.\" no chat." },
      { id: "siga-antes", title: "/siga ativado antes de entrar no PvP",
        steps: ["Ative o /siga em um mapa normal e entre em um mapa PvP."],
        expected: "O seguir é desligado ao entrar no mapa PvP, com o mesmo aviso." },
      { id: "siga-normal", title: "/siga em mapa normal",
        steps: ["Use /siga em um mapa normal."],
        expected: "Continua funcionando como antes." },
      { id: "browser", title: "Jogar pelo navegador",
        steps: ["Acesse https://roseonline.com.br e clique em \"Jogar agora no seu navegador\" (no PC e no celular)."],
        expected: "O jogo abre no navegador e dá para logar." },
      { id: "im-coletor", title: "Coletor antigo do Item Mall",
        steps: ["Procure o antigo coletor do Item Mall."],
        expected: "Ele não existe mais; as compras vão direto para o inventário (ou para a aba Item Mall do baú)." }
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
      { id: "fix-reset-status", title: "Reset de status no level máximo",
        steps: ["No level máximo, use o item de reset de status.", "Relogue."],
        expected: "O item é gasto e os pontos continuam resetados depois de relogar." },
      { id: "fix-montar", title: "Montar durante emote ou dança",
        steps: ["Comece um emote ou scroll de dança e monte.", "Montado, use uma skill com alvo."],
        expected: "O jogo não fecha." },
      { id: "fix-ingles", title: "Mensagens \"?????\" em inglês",
        steps: ["Com o client em inglês, receba um buff e espere acabar."],
        expected: "A mensagem do fim do efeito aparece com texto, sem \"?????\"." },
      { id: "fix-precos", title: "Aviso \"Os preços mudaram\"",
        steps: ["Abra e feche lojas de NPC sem nada no carrinho."],
        expected: "O aviso não aparece; só aparece com itens no carrinho e mudança real de preço." },
      { id: "fix-tecla-y", title: "Tecla Y",
        steps: ["Coloque algo no F10 da barra de atalhos e aperte Y."],
        expected: "O Y não ativa o atalho do F10." },
      { id: "fix-cart", title: "Cart no teleporte",
        steps: ["Montado no cart, use teleporte (NPC, scroll e Mapa Mundo)."],
        expected: "O cart chega na posição normal, sem ficar invertido." },
      { id: "fix-duelo", title: "Pedir duelo",
        steps: ["Peça duelo a outro jogador."],
        expected: "Ninguém desconecta e o convite chega normalmente." },
      { id: "fix-pet", title: "Pet",
        steps: ["Deixe a roupa do pet vencer.", "Relogue algumas vezes."],
        expected: "O pet perde a roupa para todos; você não ganha Arua's Blessing a cada login." },
      { id: "fix-consumivel", title: "Escurecimento dos consumíveis",
        steps: ["Coloque na barra vários scrolls (teleporte, buff) e várias poções.", "Use um scroll e depois uma poção."],
        expected: "Só o item usado fica escuro. Tentar usar outro do mesmo grupo logo em seguida ainda mostra \"não pode usar duas vezes\"." },
      { id: "fix-skill-continua", title: "Skill de cura/regeneração em outros",
        steps: ["Em grupo, use skills de cura e regeneração nos colegas e em você.", "Fique perto de monstros que usam skills de efeito contínuo."],
        expected: "O jogo não fecha; o HP/MP sobe normalmente." },
      { id: "fix-mapas", title: "Andar e teleportar entre mapas",
        steps: ["Ande e teleporte por vários mapas (cidades, Luna, Eldeon, Oro, dungeons).", "Depois veja se apareceu o arquivo LightMapErro.txt na pasta do jogo."],
        expected: "O jogo não fecha. Se o LightMapErro.txt aparecer, mande para a equipe (ele mostra qual mapa tem a iluminação errada)." }
    ]
  },
  {
    id: "arenaobj", name: "Objetivos do Game Arena", icon: "🎯",
    tests: [
      { id: "ao-abrir", title: "Abrir a janela",
        steps: ["Abra a Game Arena e clique em \"Objetivos\" (na linha das abas PvP/PvM/PvE)."],
        expected: "A janela abre à esquerda da Game Arena, com as abas Diária, Semanal e Temporada, 3 missões por página e o baú embaixo." },
      { id: "ao-temas", title: "Tema vermelho e azul",
        steps: ["Troque o tema em Alt+O com a janela e o rastreio abertos."],
        expected: "A janela, o botão e o rastreio aparecem certos nos dois temas." },
      { id: "ao-iniciar", title: "Iniciar missão",
        steps: ["Clique em \"Iniciar\" numa missão."],
        expected: "O botão vira \"Em andamento\", aparece \"Desistir\" ao lado e a missão entra no rastreio." },
      { id: "ao-desistir", title: "Desistir da missão",
        steps: ["Clique em \"Desistir\" (vira \"Confirmar?\") e clique de novo em até 4 segundos.", "Repita esperando mais de 4 segundos no segundo clique."],
        expected: "Com os 2 cliques: \"Você desistiu da missão\" e ela volta para \"Iniciar\" com progresso 0. Esperando demais: nada acontece." },
      { id: "ao-progresso", title: "Progresso no evento",
        steps: ["Inicie missões de participar, vencer e abater.", "Jogue um evento da Game Arena até o fim (fique pelo menos metade do tempo)."],
        expected: "O progresso sobe no fim do evento e aparece \"Missão concluída: ...\" no chat quando completa." },
      { id: "ao-presenca", title: "Presença mínima",
        steps: ["Inscreva-se num evento e saia logo no começo."],
        expected: "As missões não contam esse evento." },
      { id: "ao-bau", title: "Resgatar o baú",
        steps: ["Com os pontos da meta, clique em \"Resgatar baú\".", "Clique de novo."],
        expected: "Recebe o baú uma vez só; no segundo clique aparece \"Você já resgatou este baú\"." },
      { id: "ao-bau-cheio", title: "Baú com inventário cheio",
        steps: ["Encha o inventário e tente resgatar o baú."],
        expected: "Aparece \"Inventário cheio\" e o baú continua disponível para depois." },
      { id: "ao-rastreio", title: "Rastreio na tela",
        steps: ["Arraste o rastreio pela barra \"Objetivos\".", "Mova o minimapa.", "Use –/+ e < >.", "Relogue."],
        expected: "O rastreio não acompanha o minimapa, fica onde você deixou depois de relogar e o –/+ e as páginas funcionam." },
      { id: "ao-trocar-char", title: "Trocar de personagem",
        steps: ["Com missões em andamento, troque de personagem."],
        expected: "O rastreio continua na tela e mostra só as missões do personagem novo." },
      { id: "ao-viradas", title: "Virada do dia",
        steps: ["Deixe uma missão diária em andamento e passe da meia-noite."],
        expected: "A lista diária muda e o progresso da diária começa do zero." },
      { id: "ao-dup", title: "Cliques rápidos",
        steps: ["Clique muito rápido em Iniciar, Desistir, Resgatar e nas abas."],
        expected: "Aparece \"Aguarde um momento\" quando passa do limite; nada duplica e o jogo não trava." }
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
      { id: "cont-boss", title: "Bosses B2/Luna e OCF",
        steps: ["Confira o calendário: OCF segunda, quarta e sexta às 20:00; B2/Luna terça, quinta e sábado às 20:00; domingo B2/Luna às 08:30 e OCF às 20:00."],
        expected: "Cada boss aparece no dia e horário do calendário." },
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
