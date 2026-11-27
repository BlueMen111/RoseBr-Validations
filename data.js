// Conteúdo da página: notas do patch e validações.
// Para mudar textos, edite só este arquivo. Cada validação precisa de um "id" único (é ele que guarda o progresso).

window.PATCH_NOTES = [
  {
    title: "Segurança: PIN da conta e computadores liberados",
    items: [
      "Novo botão \"Segurança\" na seleção de servidor, abaixo de \"Fechar\".",
      "Crie um PIN de 4 números. A partir daí, cada computador que tentar entrar na sua conta aparece na sua lista, com o nome do PC e o IP.",
      "Computador novo começa bloqueado: ao clicar em Entrar aparece \"Acesso negado neste computador\". Só você, com o PIN, libera.",
      "Para cada computador você escolhe o que ele pode fazer: entrar no jogo, troca e loja pessoal, baú, drop e pegar do chão, comprar e vender em NPC, leilão, Item Mall, Game Arena e excluir personagem.",
      "Exemplo: no PC de um amigo, libere só \"Entrar no jogo\". Ele joga, mas não troca, não mexe no baú, não compra no Item Mall etc.",
      "Esqueceu o PIN? Informe o nome da mãe e o e-mail completo do cadastro da conta e crie um PIN novo na hora.",
      "5 PINs errados seguidos travam por um tempo, que vai aumentando.",
      "Conta sem PIN continua igual, mas recebe o aviso \"Security PIN desabilitado!\" em vermelho no chat ao entrar no jogo."
    ]
  },
  {
    title: "Game Arena: convite ao abrir as inscrições",
    items: [
      "Quando um evento abre as inscrições, aparece a pergunta \"Deseja participar?\" com Sim e Não. O Sim já faz a inscrição.",
      "A caixa não trava o jogo: dá para continuar andando e lutando.",
      "Não aparece se você já estiver inscrito, dentro de um evento ou impedido por AFK.",
      "Para não receber o convite: Alt+O → Comunidade → Convite do Game Arena."
    ]
  },
  {
    title: "Game Arena: ranking por patentes (nova condecoração)",
    items: [
      "Patentes de Bronze III até Lenda I (21 no total), com o ícone acima do nome.",
      "Contam os eventos PvP: Zant Invasion, Dragon Hunt, Crystal War, Team Death Match e Domination.",
      "Pontos no fim de cada evento: participar +10, vitória +25, desempenho (abates, dano, mortes) até +25 e top 3 até +15. Eventos cheios valem mais (até ×1,4). Máximo de 300 pontos por dia.",
      "Derrota não tira pontos. Sair do evento ou ficar AFK tira 15 pontos e deixa sem o prêmio do evento.",
      "7 dias sem jogar evento PvP: cai 1 divisão (e mais 1 a cada semana parado).",
      "Alt+G → Ranking: seus dados (patente, pontos, posição, quanto falta) e o top 100 com filtro por patente.",
      "Alt+P mostra a patente e os Pontos da Arena. A condecoração antiga, os BP por abate e as medalhas de evento foram desligados; o que você já tinha continua guardado.",
      "Team Death Match e Domination passam a contar vitória e derrota."
    ]
  },
  {
    title: "Game Arena: expulsão por AFK nos eventos PvP",
    items: [
      "Parado 2 minutos durante a luta (sem andar, atacar nem usar skill): aviso no chat e no meio da tela.",
      "Aos 3 minutos: sai do evento sem prêmio, vai para Junon, perde 15 pontos e fica 3 horas sem poder se inscrever em eventos PvP.",
      "Morto esperando renascer não conta como parado."
    ]
  },
  {
    title: "Game Arena: dificuldade pelo número de inscritos",
    items: [
      "Em Dragon Hunt, Crystal War e Zant Invasion os monstros ficam mais fortes quando o evento está cheio.",
      "Até 16 inscritos: HP normal. De 17 a 32: +30%. 33 ou mais: +60%."
    ]
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
    title: "Seleção de personagem nova",
    items: [
      "Painel à direita com nome, nível, classe e mapa de cada personagem, que se ajusta a qualquer resolução.",
      "Só o personagem selecionado aparece em 3D, no centro. Clique duplo entra no jogo.",
      "Setas, roda do mouse e as teclas 1 a 0 escolhem o personagem."
    ]
  },
  {
    title: "Expansão de Personagens",
    items: [
      "Novo item \"Expansão de Personagens\": a conta passa de 5 para 10 personagens.",
      "Vale para a conta inteira. Se a conta já tem 10, o item não é gasto."
    ]
  },
  {
    title: "Pets",
    items: [
      "9 pets novos, com duração de 180 dias: Joaninha, Sapo Príncipe, Marmota, Espírito do Fogo, do Vento, da Terra e da Água, Cachorro-Quente e Robozinho.",
      "Truques, danças, comer e banho ficam só para os pets Ronya; nos outros pets essas opções ficam travadas.",
      "Em duelo o pet não dá status (acessórios, runa e vínculo), igual às zonas PvP.",
      "O bônus do pet só vale com o pet no mapa.",
      "Corrigido o corpo dos pets novos que sumia (ficava só a cabeça) e o preview do pet incompleto."
    ]
  },
  {
    title: "Novos itens",
    items: [
      "Conjunto Shogun (elmo, armadura, manoplas e botas) em 5 cores: Verde, Dourado, Vermelho, Azul e Preto.",
      "Efeitos de Arma 9 a 14, em dois estilos: Chama e Energia.",
      "17 montarias: Zephyr, Hooptie, Supernova, Gwishin, Knightbear, Phamster, Polaris, Snapjaw, Raven, Qirin, Crimson Wing, Tapete, 2 Pintinhos e 2 Coelhos.",
      "Ícones novos do set Power Suit e dos baús dos Objetivos (Bronze, Ouro e Platina)."
    ]
  },
  {
    title: "Conexão, estabilidade e FPS",
    items: [
      "Menos quedas: qualquer pacote recebido conta como sinal de vida, pacote inválido é ignorado em vez de derrubar e shout repetido não desconecta mais.",
      "Posição fora do lugar é corrigida em vez de desconectar o jogador.",
      "Troca de mapa mais estável.",
      "O jogo não fecha mais quando a placa de vídeo perde a tela (minimizar, trocar de janela, redimensionar).",
      "O reinício automático da tela por FPS baixo não age mais durante o teleporte nem fora do jogo.",
      "Login: conexões presas que nunca terminavam de entrar agora são limpas."
    ]
  },
  {
    title: "Gráficos no Alt+O → Vídeo",
    items: [
      "Novas opções (todas ficam salvas e podem ser ligadas e desligadas): Texturas nítidas (Desligado / 4x / 8x / 16x), VSync, Limite de FPS (Sem limite / 30 / 60 / 120 / 144), Sombras (Automático / Desligado / Baixa / Média / Alta), Brilho (glow), Neblina, Suavizar animações e Qualidade de textura.",
      "O Anti-Aliasing passou a funcionar (a caixa existia, mas não fazia nada).",
      "Qualidade de textura e Modo Vulkan valem ao reabrir o jogo; o resto vale na hora."
    ]
  },
  {
    title: "Efeitos de imagem (pós-processamento)",
    items: [
      "Bloom (Desligado / Fraco / Médio / Forte): espalha o brilho de armas, asas e skills, sem estourar céu, chão ou roupa clara.",
      "Cores (Original / Vivas / Intensas), Contraste (Original / Médio / Alto) e Nitidez (Desligado / Leve / Forte).",
      "FXAA: suaviza todas as bordas, inclusive cabelo, folhas e grades.",
      "Vinheta: escurece levemente os cantos da tela.",
      "A interface (janelas, chat, ícones) não é afetada. Tudo vem desligado; cada jogador escolhe."
    ]
  },
  {
    title: "Glow (brilho dos itens)",
    items: [
      "Brilho 30% mais suave em todos os itens.",
      "Nova opção \"Brilho não atravessa objetos\" (ligada): o brilho de asas e armas não aparece mais por cima de bancos, paredes e outros personagens.",
      "Corrigido o brilho que saía do lugar ou sumia conforme o ângulo da câmera (asas de dragão, anjo, fênix)."
    ]
  },
  {
    title: "Modo Vulkan (DXVK)",
    items: [
      "Opção no Alt+O → Vídeo que usa Vulkan no lugar do DirectX 9: pode dar mais FPS em muitas placas (principalmente AMD).",
      "Vale ao reabrir o jogo. Se a placa não suportar, o jogo desliga sozinho e pede para abrir de novo.",
      "Quem usa ReShade (outro d3d9.dll na pasta) não é afetado: o jogo não mexe nesse arquivo."
    ]
  },
  {
    title: "Janela e estabilidade",
    items: [
      "Alt+Enter: ao voltar para janela, o jogo não fica mais \"sempre no topo\" (Alt+Tab e outras janelas voltam a funcionar).",
      "A imagem não fica esticada depois de trocar resolução ou alternar janela/tela cheia.",
      "As bibliotecas necessárias (d3dx9_43, msvcp140, vcruntime140) vão junto com o jogo: fim do erro \"DLL não encontrada\"."
    ]
  },
  {
    title: "Correções",
    items: [
      "Consumíveis: ao usar um item, só ele fica escuro (antes escurecia o grupo todo, ex.: todos os scrolls por 3 segundos).",
      "O jogo não fecha mais quando uma skill de efeito contínuo (cura/regeneração) atinge outro jogador ou monstro.",
      "O jogo não fecha mais ao carregar certos mapas (iluminação dos objetos).",
      "Inventário embaralhando ao relogar ou teleportar (itens com prazo, Weapon Effect, personagens com [GM] no nome).",
      "Loja pessoal: o jogo fechava ao sair ou relogar com a loja montada.",
      "Loja pessoal: itens repetidos na aba Vendo (15/15/15) que não podiam ser comprados.",
      "Alt+O fechava o jogo em alguns PCs (lista de resoluções vazia).",
      "Game Arena: \"Esse IP já está cadastrado no evento\" sem estar inscrito, depois de uma Domination cancelada.",
      "Game Arena: se inscrever sem ter aberto a janela da Game Arena fechava o jogo.",
      "Ranking: o texto saía da caixa \"Seus dados\".",
      "Montarias invisíveis ou com o personagem em pé em cima delas.",
      "Textos com \"??\" no lugar de acentos (Redução da Esquiva e outros).",
      "Ícones errados no set Power Suit."
    ]
  }
];

// Validações: cada seção tem testes com passo a passo e resultado esperado.
window.VALIDATIONS = [
  {
    id: "seguranca", name: "Segurança (PIN da conta)", icon: "🔐",
    tests: [
      { id: "pin-sem-pin", title: "Aviso de conta sem PIN",
        steps: ["Entre no jogo com uma conta sem PIN."],
        expected: "Aparece \"Security PIN desabilitado!\" em vermelho no chat de cima (uma vez por login)." },
      { id: "pin-criar", title: "Criar o PIN",
        steps: ["Na seleção de servidor, clique em Segurança.", "Crie o PIN digitando uma confirmação diferente.", "Crie de novo com a confirmação certa.", "Clique em Fechar."],
        expected: "A janela abre sem os personagens atrás. A confirmação diferente é recusada. Depois aparece a lista com este PC liberado, e Fechar volta para a seleção de servidor." },
      { id: "pin-entrar", title: "Entrar no PC liberado",
        steps: ["Clique em Entrar no PC onde o PIN foi criado."],
        expected: "Entra normalmente, sem pedir PIN." },
      { id: "pin-negado", title: "Outro computador",
        steps: ["Em outro PC ou notebook (pode ser na mesma internet), entre com a mesma conta e clique em Entrar."],
        expected: "Aparece \"Acesso negado neste computador\" e volta para a seleção de servidor. O jogo não fecha ao clicar em OK." },
      { id: "pin-lista", title: "Lista de computadores",
        steps: ["No PC liberado, abra Segurança e digite o PIN."],
        expected: "O outro computador aparece como Negado, com o nome do PC e o IP." },
      { id: "pin-so-entrar", title: "Liberar só \"Entrar no jogo\"",
        steps: ["Libere só \"Entrar no jogo\" para o outro PC.", "Nele, tente trocar, abrir loja, usar o baú, dropar e pegar item, comprar e vender em NPC, usar o leilão e excluir personagem."],
        expected: "Ele entra no jogo, mas todas essas ações são recusadas com aviso no chat." },
      { id: "pin-mall-arena", title: "Item Mall e Game Arena",
        steps: ["No outro PC, com Item Mall e Game Arena bloqueados, tente abrir pelo Alt+E, pelo Alt+G e pelos ícones do menu.", "Libere só o Item Mall e teste de novo; depois só a Game Arena."],
        expected: "Bloqueado: a janela não abre e aparece aviso vermelho no chat. Liberado: abre, compra no Mall ou se inscreve na Arena normalmente." },
      { id: "pin-tudo", title: "Liberar tudo, bloquear tudo e remover",
        steps: ["Use Liberar tudo, Bloquear tudo e Remover em um computador.", "Depois de remover, tente entrar com ele."],
        expected: "As permissões mudam na hora. O computador removido volta para a lista como Negado ao tentar entrar." },
      { id: "pin-trocar", title: "Trocar o PIN",
        steps: ["Em Segurança, troque o PIN informando o atual errado e depois o certo."],
        expected: "Com o PIN atual errado é recusado; com o certo, o PIN novo passa a valer." },
      { id: "pin-errado", title: "PIN errado várias vezes",
        steps: ["Digite o PIN errado 5 vezes seguidas."],
        expected: "Trava por um tempo, mostrado na tela." },
      { id: "pin-esqueci", title: "Esqueci o PIN",
        steps: ["Clique em \"Esqueci o PIN\" e informe nome da mãe e e-mail errados.", "Depois informe os dados certos do cadastro e um PIN novo."],
        expected: "Com dados errados é recusado. Com os certos o PIN é trocado na hora e o PC onde foi feito fica liberado." }
    ]
  },
  {
    id: "arenanova", name: "Game Arena: convite, ranking e AFK", icon: "🏆",
    tests: [
      { id: "ga-convite", title: "Convite ao abrir as inscrições",
        steps: ["Espere um evento abrir as inscrições.", "Clique em Sim sem ter aberto a janela da Game Arena antes."],
        expected: "Aparece a caixa com o nome certo do evento, o chat confirma a inscrição, a janela mostra você inscrito e o jogo não fecha." },
      { id: "ga-convite-req", title: "Convite sem os requisitos",
        steps: ["Com um personagem sem os requisitos (nível ou pontos), clique em Sim."],
        expected: "Aparece \"Não foi possível se inscrever... Confira os requisitos\"." },
      { id: "ga-convite-off", title: "Desligar o convite",
        steps: ["Marque Alt+O → Comunidade → Convite do Game Arena.", "Espere a próxima abertura. Depois desmarque."],
        expected: "Marcado: a caixa não aparece (o aviso de sempre continua). Desmarcado: volta a aparecer." },
      { id: "ga-rank-pontos", title: "Pontos do ranking",
        steps: ["Jogue um evento PvP até o fim com 2 contas: uma jogando e outra parada sem atacar."],
        expected: "Quem jogou recebe \"+X pontos\" no chat, aparece no Ranking e ganha o ícone acima do nome. Quem ficou parado perde 15 pontos e fica sem o prêmio." },
      { id: "ga-rank-janela", title: "Janela do Ranking",
        steps: ["Abra Alt+G → Ranking.", "Troque de página e use o filtro por patente.", "Confira nos dois temas."],
        expected: "Seus dados ficam dentro da caixa, a sua linha aparece em verde e as páginas e o filtro funcionam." },
      { id: "ga-rank-altp", title: "Alt+P",
        steps: ["Abra Alt+P → Pontuação e Alt+P → Eventos."],
        expected: "Pontuação mostra a patente e os Pontos da Arena. Eventos mostra os 5 PvP, e Team Death Match e Domination contam vitória e derrota." },
      { id: "ga-afk", title: "Expulsão por AFK",
        steps: ["Num evento PvP, deixe uma conta parada na luta.", "Depois de expulsa, tente se inscrever de novo e abra o Ranking.", "Com a outra conta, mexa-se pelo menos a cada 2 minutos."],
        expected: "Aviso aos 2 min; aos 3 min vai para Junon com \"-15 pontos e 3h sem eventos PvP\". A inscrição é recusada com o tempo que falta e o Ranking mostra o impedimento. Quem se mexe não é expulso." },
      { id: "ga-dificuldade", title: "Dificuldade por inscritos",
        steps: ["Num Dragon Hunt, Crystal War ou Zant Invasion com mais de 16 inscritos, veja o HP dos monstros."],
        expected: "Os monstros têm mais HP (+30% de 17 a 32 inscritos, +60% com 33 ou mais), e a barra mostra o HP real." }
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
    id: "personagens", name: "Seleção e expansão de personagens", icon: "👥",
    tests: [
      { id: "sel-painel", title: "Nova seleção de personagem",
        steps: ["Abra a seleção em 800x600 e em Full HD, em janela e em tela cheia, nos dois temas.", "Selecione pela lista, pelas setas, pela roda do mouse e pelas teclas 1 a 5.", "Entre com clique duplo."],
        expected: "Nada sai da tela, só o selecionado aparece no centro e todas as formas de selecionar funcionam." },
      { id: "sel-criar-excluir", title: "Criar e excluir",
        steps: ["Crie e exclua um personagem."],
        expected: "A lista atualiza na hora." },
      { id: "exp-usar", title: "Usar a Expansão de Personagens",
        steps: ["Numa conta com 5/5, veja o aviso de limite no Criar.", "Use o item Expansão de Personagens e volte para a seleção."],
        expected: "Mostra \"Personagens (5/10)\" e dá para criar até 10." },
      { id: "exp-segundo", title: "Segundo item na mesma conta",
        steps: ["Use outra Expansão na mesma conta."],
        expected: "Aparece \"já tem o máximo de 10\" e o item continua no inventário." },
      { id: "exp-lista", title: "Lista com 6 a 10 personagens",
        steps: ["Com mais de 5 personagens, role a lista e use as teclas 6 a 9 e 0."],
        expected: "A lista rola e as teclas selecionam o personagem certo." }
    ]
  },
  {
    id: "pets", name: "Pets", icon: "🐾",
    tests: [
      { id: "pet-novos", title: "9 pets novos (180 dias)",
        steps: ["Equipe cada um dos 9 pets novos.", "Ande, pare e troque de mapa."],
        expected: "O pet aparece inteiro, segue você e não some ao trocar de mapa. O nome mostra (180d). Mande print de qualquer pet com partes faltando." },
      { id: "pet-ronya", title: "Truques só na Ronya",
        steps: ["Com um pet que não é Ronya, abra a janela do pet e fique parado um tempo.", "Repita com uma Ronya."],
        expected: "Nos outros pets, Truques e Danças ficam travados e o pet não faz animações estranhas. A Ronya continua com tudo." },
      { id: "pet-duelo", title: "Status do pet no duelo",
        steps: ["Veja seus status com o pet.", "Entre em duelo e veja de novo. Termine o duelo."],
        expected: "No duelo o bônus do pet some; no fim do duelo volta." },
      { id: "pet-fora", title: "Pet fora do mapa",
        steps: ["Equipe um pet sem nome (que não aparece) e veja os status."],
        expected: "Sem o pet no mapa, não há bônus do pet." },
      { id: "pet-corpo", title: "Corpo inteiro e preview",
        steps: ["Equipe o Espírito da Terra e outros pets novos.", "Abra o preview do pet."],
        expected: "O pet aparece inteiro (não só a cabeça) no mapa e no preview; roupa de pet continua funcionando." }
    ]
  },
  {
    id: "itensnovos", name: "Itens novos", icon: "🎁",
    tests: [
      { id: "item-shogun", title: "Conjunto Shogun",
        steps: ["Equipe as peças das 5 cores, nos dois sexos."],
        expected: "O visual aparece certo, com ícone e nome em português." },
      { id: "item-wfx914", title: "Efeitos de Arma 9 a 14",
        steps: ["Equipe os efeitos 9 a 14 nos estilos Chama e Energia."],
        expected: "Cada um aparece na arma com a cor certa; diga qual estilo ficou melhor." },
      { id: "item-montarias", title: "17 montarias novas",
        steps: ["Monte cada uma (Zephyr até os Coelhos), ande e pare, nos dois sexos."],
        expected: "A montaria aparece e o personagem fica sentado nela." },
      { id: "item-icones", title: "Ícones do Power Suit",
        steps: ["Pegue uma peça de cada parte do Power Suit."],
        expected: "Cada peça mostra o ícone certo no inventário." }
    ]
  },
  {
    id: "conexao", name: "Conexão e estabilidade", icon: "📶",
    tests: [
      { id: "con-mapas", title: "Troca de mapa e teleporte",
        steps: ["Troque de mapa e teleporte várias vezes seguidas."],
        expected: "Ninguém cai e o jogo não trava." },
      { id: "con-shout", title: "Shout seguido",
        steps: ["Mande vários shouts seguidos."],
        expected: "Não desconecta." },
      { id: "con-grupos", title: "Lista de grupos",
        steps: ["Abra a lista de grupos e marque como privado."],
        expected: "A lista abre e ninguém é desconectado." },
      { id: "con-parado", title: "Sessão longa parada",
        steps: ["Deixe o personagem parado por 1 hora ou mais.", "Minimize e volte para o jogo algumas vezes."],
        expected: "Continua conectado e o jogo não fecha ao voltar." }
    ]
  },
  {
    id: "graficos", name: "Gráficos (Alt+O → Vídeo)", icon: "🖥️",
    tests: [
      { id: "gfx-rolagem", title: "Aba Vídeo completa",
        steps: ["Abra Alt+O → Vídeo e role até o fim.", "Abra cada lista (combo)."],
        expected: "Todas as opções aparecem com nome; nenhuma lista fica escondida atrás de outro controle; o aviso do rodapé aparece inteiro." },
      { id: "gfx-aniso", title: "Texturas nítidas",
        steps: ["Troque entre Desligado, 4x, 8x e 16x olhando o chão ao longe."],
        expected: "O chão e as paredes ao longe ficam mais nítidos conforme o nível, na hora." },
      { id: "gfx-aa", title: "Anti-Aliasing",
        steps: ["Ligue e desligue o Anti-Aliasing e confirme."],
        expected: "A tela pisca rapidamente e as bordas do personagem ficam suaves com ele ligado." },
      { id: "gfx-vsync", title: "VSync",
        steps: ["Ligue o VSync e gire a câmera rápido (Alt+F mostra o FPS)."],
        expected: "O FPS acompanha o monitor (ex.: 60) e a imagem não \"rasga\"." },
      { id: "gfx-fps", title: "Limite de FPS",
        steps: ["Escolha 30, depois 60, depois Sem limite (Alt+F)."],
        expected: "O FPS fica travado no valor escolhido; em Sem limite volta ao normal." },
      { id: "gfx-sombras", title: "Sombras",
        steps: ["Troque entre Desligado, Baixa, Média, Alta e Automático."],
        expected: "A sombra some ou muda de nitidez; Automático volta ao valor do Desempenho/Qualidade." },
      { id: "gfx-glow-neblina", title: "Brilho, Neblina e Suavizar animações",
        steps: ["Desligue e ligue cada um."],
        expected: "Brilho: some o glow dos itens. Neblina: o horizonte fica mais limpo. Animações: movimentos ficam picotados quando desligado." },
      { id: "gfx-textura", title: "Qualidade de textura",
        steps: ["Coloque em Baixa e reabra o jogo.", "Volte para Automático e reabra."],
        expected: "Em Baixa o mundo fica mais simples (a interface continua nítida); em Automático volta ao normal." },
      { id: "gfx-salvar", title: "Salvar e Restaurar",
        steps: ["Mude várias opções, confirme e relogue.", "Use o botão Restaurar."],
        expected: "Tudo fica salvo ao relogar; Restaurar não deixa a tela quebrada." }
    ]
  },
  {
    id: "posfx", name: "Efeitos de imagem", icon: "✨",
    tests: [
      { id: "pfx-bloom", title: "Bloom",
        steps: ["Perto de arma, asa ou skill com brilho, troque Bloom Fraco / Médio / Forte."],
        expected: "Só o brilho dos itens fica maior e mais espalhado; céu, chão e roupa clara não estouram; nada aparece deslocado." },
      { id: "pfx-cores", title: "Cores e Contraste",
        steps: ["Teste Vivas/Intensas e Médio/Alto."],
        expected: "As cores ficam mais vivas e a imagem menos \"lavada\"." },
      { id: "pfx-nitidez", title: "Nitidez",
        steps: ["Teste Leve e Forte."],
        expected: "A imagem fica mais definida, sem pontinhos ou chiado exagerado." },
      { id: "pfx-fxaa", title: "FXAA",
        steps: ["Ligue o FXAA e olhe cabelo, folhas e grades."],
        expected: "As bordas ficam suaves." },
      { id: "pfx-vinheta", title: "Vinheta",
        steps: ["Ligue a Vinheta."],
        expected: "Os cantos da tela escurecem levemente." },
      { id: "pfx-ui", title: "Interface intacta",
        steps: ["Com todos os efeitos ligados, abra inventário, mapa, chat e preview."],
        expected: "A interface não muda de cor nem fica borrada; o mundo aparece normal (sem ícones ou texturas soltas no lugar dele)." },
      { id: "pfx-reset", title: "Trocas com efeitos ligados",
        steps: ["Com os efeitos ligados, troque VSync, Sombras, Brilho e Anti-Aliasing, minimize e volte, e use Alt+Enter."],
        expected: "O jogo não fecha e a imagem continua certa depois de cada troca." },
      { id: "pfx-fps", title: "Desempenho",
        steps: ["Compare o FPS (Alt+F) com tudo desligado e com tudo ligado, numa cidade cheia."],
        expected: "Anote a diferença; o jogo continua jogável." }
    ]
  },
  {
    id: "glow", name: "Glow (brilho dos itens)", icon: "💫",
    tests: [
      { id: "glow-atravessa", title: "Não atravessa objetos",
        steps: ["Com asas ou arma com brilho, fique atrás de um banco, de um pilar e de outro personagem."],
        expected: "O que está na frente cobre o brilho; ele só aparece na parte visível do item." },
      { id: "glow-angulo", title: "Estável em qualquer ângulo",
        steps: ["Gire a câmera toda em volta do personagem (de frente, de lado e de costas), de perto e de longe."],
        expected: "O brilho fica colado no item, não pisca, não sai do lugar e não some." },
      { id: "glow-aa", title: "Com e sem Anti-Aliasing",
        steps: ["Repita o teste do banco com o Anti-Aliasing ligado e desligado."],
        expected: "O brilho continua sem atravessar nos dois casos." },
      { id: "glow-opcao", title: "Opção desligada",
        steps: ["Desmarque \"Brilho não atravessa objetos\"."],
        expected: "O brilho volta ao modo clássico (pode atravessar objetos, mas continua no lugar)." },
      { id: "glow-itens", title: "Outros itens com brilho",
        steps: ["Veja armas, roupas, montarias, pets e skills com brilho."],
        expected: "Nenhum perdeu o brilho nem ficou com brilho estranho." }
    ]
  },
  {
    id: "vulkan", name: "Modo Vulkan e DLLs", icon: "🧩",
    tests: [
      { id: "vk-ligar", title: "Ligar e desligar",
        steps: ["Marque \"Modo Vulkan (DXVK)\", confirme e reabra o jogo.", "Desmarque, confirme e reabra."],
        expected: "Aparece o aviso para reabrir; com Vulkan o FPS costuma subir; desligado volta ao normal." },
      { id: "vk-reshade", title: "ReShade preservado",
        steps: ["Em um PC com ReShade (d3d9.dll próprio), tente ligar e desligar o Modo Vulkan."],
        expected: "Aparece o aviso de que já existe outro d3d9.dll e o arquivo do ReShade não é alterado." },
      { id: "vk-placa", title: "Placa sem suporte",
        steps: ["Em um PC antigo/integrado, ligue o Modo Vulkan e reabra."],
        expected: "Se não funcionar, o jogo mostra que desligou o Vulkan e abre normal na próxima vez." },
      { id: "dll-falta", title: "Sem instalar dependências",
        steps: ["Em um PC que nunca rodou o instalador de dependências, abra o jogo atualizado."],
        expected: "O jogo abre sem erro de d3dx9_43.dll / MSVCP140.dll." }
    ]
  },
  {
    id: "janela", name: "Janela e tela", icon: "🪟",
    tests: [
      { id: "win-altenter", title: "Alt+Enter",
        steps: ["Aperte Alt+Enter duas vezes (janela → tela cheia → janela).", "Use Alt+Tab e clique em outra janela."],
        expected: "As outras janelas passam por cima do jogo normalmente." },
      { id: "win-proporcao", title: "Proporção da imagem",
        steps: ["Troque a resolução e alterne janela/tela cheia."],
        expected: "A imagem não fica esticada nem achatada." }
    ]
  },
  {
    id: "correcoes", name: "Correções de bugs", icon: "🛠️",
    tests: [
      { id: "fix-consumivel", title: "Escurecimento dos consumíveis",
        steps: ["Coloque na barra vários scrolls (teleporte, buff) e várias poções.", "Use um scroll e depois uma poção."],
        expected: "Só o item usado fica escuro. Tentar usar outro do mesmo grupo logo em seguida ainda mostra \"não pode usar duas vezes\"." },
      { id: "fix-skill-continua", title: "Skill de cura/regeneração em outros",
        steps: ["Em grupo, use skills de cura e regeneração nos colegas e em você.", "Fique perto de monstros que usam skills de efeito contínuo."],
        expected: "O jogo não fecha; o HP/MP sobe normalmente." },
      { id: "fix-mapas", title: "Andar e teleportar entre mapas",
        steps: ["Ande e teleporte por vários mapas (cidades, Luna, Eldeon, Oro, dungeons).", "Depois veja se apareceu o arquivo LightMapErro.txt na pasta do jogo."],
        expected: "O jogo não fecha. Se o LightMapErro.txt aparecer, mande para a equipe (ele mostra qual mapa tem a iluminação errada)." },
      { id: "fix-inventario", title: "Inventário no lugar",
        steps: ["Arrume o inventário (inclua item com prazo e Weapon Effect) e relogue.", "Teleporte 2 vezes, troque de personagem e volte.", "Repita com um personagem com [GM] no nome."],
        expected: "Os itens ficam onde você deixou." },
      { id: "fix-loja-sair", title: "Sair com a loja montada",
        steps: ["Monte a loja pessoal com 30 itens.", "Saia do jogo e relogue com a loja aberta."],
        expected: "O jogo não fecha." },
      { id: "fix-loja-repetidos", title: "Itens repetidos na loja",
        steps: ["Monte uma loja, feche e monte outra com menos itens.", "Tente colocar a mesma pilha do inventário duas vezes."],
        expected: "A aba Vendo mostra só os itens da loja atual, sem repetidos; a mesma pilha não entra duas vezes." },
      { id: "fix-alto", title: "Abrir o Alt+O",
        steps: ["Abra o Alt+O nas abas de vídeo, troque a resolução e a frequência e confirme."],
        expected: "O jogo não fecha e a resolução muda." },
      { id: "fix-ga-ip", title: "\"IP já cadastrado\" na Game Arena",
        steps: ["Inscreva uma conta na Domination e deixe ser cancelada por falta de inscritos.", "Inscreva a mesma conta em outro evento.", "Com 2 contas no mesmo PC, inscreva as duas num evento aberto."],
        expected: "A inscrição no outro evento é aceita. A segunda conta do mesmo PC continua recusada (1 por PC)." },
      { id: "fix-acentos", title: "Textos com \"??\"",
        steps: ["Pegue o status Redução da Esquiva e passe o mouse no ícone.", "Abra quests e converse com NPCs."],
        expected: "Os acentos aparecem normais, sem \"??\"." }
    ]
  }
];
