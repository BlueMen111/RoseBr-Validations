# RoseOnBr — Validação do Patch

Página estática (HTML, CSS e JS, sem build) com as notas do patch e o checklist de testes.

- `data.js`: **todo o conteúdo** (notas e testes). Para mudar textos, edite só ele.
  Cada teste tem um `id` único: é ele que guarda o progresso; não troque o `id` de um teste que já está no ar.
- `app.js`: lógica (status, anotações, filtros, relatório).
- `style.css`: visual.

O progresso fica salvo no navegador de cada pessoa (`localStorage`). Para receber o resultado, cada um clica em
**Copiar relatório** (ou baixa o `.txt`) e manda para a equipe; o relatório inclui as anotações de cada teste.

## Publicar no Vercel
1. Suba esta pasta para um repositório (GitHub) ou rode `vercel` dentro dela.
2. No Vercel: *Add New → Project*, escolha o repositório, framework **Other**, sem comando de build, diretório raiz `.`.
3. Deploy. Cada atualização em `data.js` publica sozinha a cada push.
