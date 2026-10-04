# Santa Elegância — Landing Page da Vanessa Estilo

Landing page de uma página só para Vanessa, consultora de imagem e estilo (público feminino, abordagem humana, prática e católica, atendimento majoritariamente online, Manaus/AM). Vai substituir o link da bio do Instagram [@vanessaeestilo](https://instagram.com/vanessaeestilo) (~2.2k seguidores, "100 mulheres com estilos transformados"). Tráfego principalmente de celular.

Brief completo e original: [docs/brief.md](docs/brief.md). Em caso de dúvida, ele é a fonte de verdade.
Itens que dependem da cliente: [docs/pendencias-conteudo.md](docs/pendencias-conteudo.md).
Site atual (só referência de conteúdo, nunca hotlink de imagens): https://santaelegancia.framer.website/

## Objetivo de conversão

1. **Principal:** conversa no WhatsApp.
2. **Secundário:** compra do e-book "Moda Descomplicada" na Hotmart.

Links (ficam só no objeto de conteúdo, nunca espalhados pelo HTML):

- WhatsApp: `https://wa.me/5592981133954?text=Ol%C3%A1%20desejo%20me%20tornar%20uma%20elegante!%20`
- E-book: `https://hotmart.com/pt-br/marketplace/produtos/hagsxd-moda-descomplicada-c9bgu/A81343772K`
- Instagram: `https://instagram.com/vanessaeestilo`

## Estado atual

**Aprovado e publicado em 2026-10-04.** Site no ar em https://santaelegancia.github.io/ (GitHub Pages, repositório https://github.com/santaelegancia/santaelegancia.github.io, branch `main`, raiz). Fotos reais, 3 serviços com preços e oferta do e-book já estão no site. Pendências restantes de conteúdo em [docs/pendencias-conteudo.md](docs/pendencias-conteudo.md).

Para atualizar o site: editar, conferir localmente, commitar e dar push na `main`. O GitHub Pages republica sozinho em cerca de 1 minuto.

## Stack e restrições

- Site estático: `index.html` + `style.css` + `script.js`. **Sem build, sem frameworks, sem libs pesadas.** Pronto para GitHub Pages.
- Mobile-first, responsivo de 360px a desktop.
- `lang="pt-BR"`. Todo texto do site em português do Brasil.
- Fontes via Google Fonts com `display=swap`.

## Arquitetura de conteúdo

Todo o conteúdo editável (textos, links, serviços, depoimentos, caminhos de imagem) vive em **um único objeto `CONTENT` no topo de `script.js`**, em bloco claramente comentado. O HTML é só estrutura e o JS renderiza a partir do objeto. Regras:

- Trocar texto ou foto nunca exige mexer em layout.
- Serviço tem campo opcional `preco`; se vazio, não renderiza nada.
- Depoimentos são uma lista de 4 itens (Elaine Cipriano, Rejane Grana, Fernanda Amorin, Nattacha Carvalho), textos curtos copiados do site atual.
- O HTML não repete textos: elementos vazios com `data-c="caminho.no.content"` são preenchidos pelo JS. Links usam `data-link="whatsapp|ebook|instagram"`, imagens `data-img`. Serviços e depoimentos saem dos `<template>` no fim do `index.html`.
- Os `href` e `src` estáticos no HTML existem só como fallback sem JS. A fonte de verdade é o `CONTENT`.
- Cada serviço tem `mensagemWhatsapp`, então a conversa já chega dizendo qual serviço interessou.
- O `<head>` (title, description, Open Graph) fica fixo no HTML, porque WhatsApp e Instagram não executam JS.
- Sem flash de conteúdo vazio: o hero começa invisível (`html.js:not(.pronta)`) e entra com uma animação única quando o JS termina. Há uma trava de segurança de 2,5 s no `<head>`.
- Um espaço inseparável é inserido automaticamente antes de todo travessão (`tipografar` no script).
- Marcação leve nos textos: `_trecho_` vira itálico (como no WhatsApp) e `
` vira quebra de linha (`formatar` no script, sem innerHTML). Nos títulos, o itálico ganha a cor `--acento` da seção.
- Campos decorativos também ficam no `CONTENT`: `hero.kicker`, `hero.complemento`, `hero.legenda`, `faixa` (palavras da faixa que desliza), `sobre.pilares`, `sobre.assinatura`, `sobre.selo` (texto do selo giratório), `servicos.lista[].icone` (`manequim | cabide | sacola | cartela`), `ebook.medalha`, `ebook.nota`.

## Estrutura de pastas

```
.
├── index.html
├── style.css
├── script.js              # Objeto CONTENT no topo
├── assets/img/            # hero.jpg, sobre.jpg, ebook.png, logo.svg, og.jpg,
│                          # favicon.svg, favicon-32.png, apple-touch-icon.png
├── docs/
│   ├── brief.md           # Brief original completo
│   └── pendencias-conteudo.md
└── .claude/               # settings.json e skills do projeto
```

## Ordem das seções

1. Header fixo minimalista (marca "SANTA ELEGÂNCIA" + botão WhatsApp)
2. Hero (headline, subtítulo, CTA "Seja Elegante" que rola até Serviços, foto)
3. Identificação/dor
4. Sobre a Vanessa (foto + "100 mulheres com estilos transformados")
5. Serviços, 4 cards: Organização de Guarda-Roupa · Teste de Estilo + Personal Shopping · **Consultoria Completa (destaque)** · Estilo + Cores + Medidas
6. Oferta exclusiva: "Moda Descomplicada", e-book + 6 módulos com aulas e conteúdos bônus por R$ 47
7. Depoimentos (4), carrossel simples ou grid
8. CTA final (botões WhatsApp e e-book)
9. Rodapé (marca, Instagram, WhatsApp, © ano)
10. Botão flutuante de WhatsApp no mobile

Textos exatos de cada seção estão em [docs/brief.md](docs/brief.md). Usar literalmente.

## Direção visual

Elegante, feminino, acolhedor, premium. Muito respiro, fotos grandes, bordas sutis, cantos levemente arredondados.

**Proibido:** visual genérico de template, gradiente roxo, emoji na interface. Ícones só SVG sutis, ou nenhum.

**Paleta** (variáveis CSS em `:root`, fáceis de trocar):

| Variável | Hex | Papel |
| --- | --- | --- |
| `--creme` | `#FAF6F0` | Fundo base |
| `--nude` | `#EBD5BE` | Superfícies, seções alternadas |
| `--caramelo` | `#C49A74` | Apoio |
| `--terracota` | `#7A4636` | Títulos, botões, ênfase |
| `--grafite` | `#1A1613` | Texto |
| `--dourado` | `#B8892B` | Destaque pontual |

**Tipografia adotada:** **Noto Serif Display** (300 e 300 itálico) nos títulos, uma Didone fina de revista de moda, com itálico legível no celular. **Jost** no corpo e na interface. **Mrs Saint Delafield** só na assinatura "Vanessa". A marca fica em caixa alta com letter-spacing largo (logo.svg vetorizado em Noto Serif Display). **Regra de uso:** serifa só em títulos (h1, h2, h3), frases de destaque (resposta do santinho, frase do e-book, citação de destaque dos depoimentos), números (preços, selo, medalha), a faixa e a marca. Textos de leitura, listas, legendas, pilares, depoimentos comuns e monogramas usam Jost. Motivo: serifa fina em texto corrido prejudica a leitura no celular (pedido da cliente). Testadas e descartadas: Cormorant Garamond (leve demais em tamanho grande), Bodoni Moda (traços finos quebram na tela), Playfair e DM Serif Display (comuns/pesadas).

**Movimento:** fade/slide ao rolar via `IntersectionObserver`, hover suave nos botões. Sempre respeitar `prefers-reduced-motion`.

## Imagens

Em `assets/img/`, com nomes fixos: `hero.jpg`, `sobre.jpg`, `ebook.png`, `logo.svg`. Enquanto não houver fotos reais, usar placeholders elegantes (nos tons da paleta) com o mesmo nome de arquivo, para a troca ser só substituir o arquivo.

Todas com `loading="lazy"` (exceto o hero), `alt` descritivo, `width` e `height` definidos. Nunca fazer hotlink de imagens do Framer.

## SEO e compartilhamento

`title`, meta description, Open Graph, Twitter card, favicon. Imagem OG 1200x630.

## Acessibilidade e performance

- Contraste AA (atenção a texto dourado/caramelo sobre creme/nude: validar antes de usar para texto).
- Foco visível em tudo que é interativo. HTML semântico.
- Alvos de toque de no mínimo 44px.
- Sem libs pesadas, imagens comprimidas (JPG até ~200 KB por foto).

## Convenções

- Commits em português, imperativo e curtos.
- Nada de comentários óbvios no código. Comentar só o que não é evidente, e o bloco `CONTENT` com instruções de edição para quem não é dev.
- Antes de inventar texto de marketing, usar o do brief. Se faltar, deixar placeholder visível e registrar em [docs/pendencias-conteudo.md](docs/pendencias-conteudo.md).

## Skills úteis neste projeto

| Quando | Skill |
| --- | --- |
| Construir a LP com identidade visual forte | `/frontend-design:frontend-design` |
| Placeholders visuais e arte (OG image, capa do e-book) | `/anthropic-skills:canvas-design` |
| Revisar a LP pronta | `/design:design-critique` |
| Auditar acessibilidade (WCAG AA) | `/design:accessibility-review` |
| Revisar copy e CTAs | `/design:ux-copy` |
| Revisar código antes de commitar | `/code-review` |
| Verificar segurança antes de publicar | `/security-review` |

## Publicação

- GitHub CLI instalado (`C:/Program Files/GitHub CLI/gh.exe`), logado numa conta admin da organização `santaelegancia`.
- Remote `origin` = https://github.com/santaelegancia/santaelegancia.github.io.git. Pages servindo a `main` na raiz.
- O `<head>` usa a URL absoluta do site em `og:url`, `og:image`, `twitter:image` e `canonical`. Se o endereço mudar (domínio próprio, por exemplo), atualizar os quatro.
- As fotos originais enviadas (`assets/img/Vanessa foto*.jpg`, `Moda descomplicada.png`) ficam fora do git, via `.gitignore`.

## Linguagem visual adotada

Conceito: **revista de moda com alma de capela**. A riqueza vem de poucos motivos repetidos com consistência, nunca de enfeites novos a cada seção.

- **Motivos:** o arco (nicho de santo), a estrela de quatro pontas (`#i-estrela`, também usada como marcador de lista via máscara CSS), a moldura dupla (filete externo + filete interno), o selo circular e a assinatura manuscrita.
- **Hero:** foto em arco com contorno dourado e painel nude deslocado (`.nicho::after`). Um **leque de cores** (cartela de coloração pessoal nos 6 tons da marca) se abre ao carregar, e há uma legenda editorial embaixo. O título tem duas vozes: romano + trecho em itálico terracota em bloco próprio, mais o complemento menor.
- **Faixa** terracota deslizando com valores da marca, logo abaixo do hero.
- **Identificação** como um "santinho": cartão creme com moldura dupla, estrelas nos cantos e medalhão de aspas.
- **Sobre:** foto com passe-partout nude, moldura dourada deslocada, estrelas nos cantos, **selo giratório** com "100 mulheres…", capitular (`initial-letter: 3`), pilares "Humana ✦ Prática ✦ Católica" e assinatura.
- **Serviços:** cards com moldura interna (cartão impresso) e ícone de linha num arco. Consultoria Completa em terracota de largura total, com selo em forma de etiqueta de roupa.
- **E-book:** livro inclinado sobre arco terracota, medalha dourada "R$ 47 tudo incluso" com costura e brilhos.
- **Depoimentos:** aspas gigantes ao fundo, o primeiro como citação de destaque (desktop) e monogramas com iniciais.
- **CTA final** em terracota, com arco e estrela no ápice. **Rodapé** com a marca gigante ajustada à largura por JS.
- **Grão de papel** sutil em `body::after` (fixo). Nas capturas de página inteira ele aparece só na primeira tela, o que é um artefato da captura e não um bug.
- **Ritmo de fundos:** hero creme → faixa terracota → identificação nude → sobre creme → serviços nude → e-book grafite → depoimentos creme → CTA final terracota → rodapé grafite.
- **Evitar:** rótulos em caixa alta acima de títulos (exceções: marca, medalha e selo), setas em botões, animação por card, novos tons fora das variáveis, novos motivos decorativos.
- **Movimento:** entrada orquestrada do hero (texto + leque), faixa e selo em rotação lenta, e fade/slide discreto (`.revelar`) por bloco. Tudo desligado em `prefers-reduced-motion`.

## Ferramentas locais (fora do repositório)

Python e `gh` não estão instalados. O Node 24 está disponível. Os placeholders e o logo foram gerados com `@napi-rs/canvas` + `opentype.js`, e as capturas de revisão com `puppeteer-core` usando o Edge instalado. Esses scripts ficaram na pasta temporária da sessão, não no projeto.

## Decisões

- 2026-10-02: base criada com HTML/CSS/JS puro, conteúdo centralizado em `CONTENT` no `script.js`.
- 2026-10-02: tipografia padrão Cormorant Garamond + Jost.
- 2026-10-02: Consultoria Completa movida para o primeiro lugar da lista de serviços, por ser o card de destaque em largura total. Para voltar à ordem do brief, basta reordenar `CONTENT.servicos.lista`.
- 2026-10-02: `logo.svg` provisório é a marca "SANTA ELEGÂNCIA" em Cormorant convertida em vetor. O rodapé usa a marca em texto, porque fica sobre fundo escuro.
- 2026-10-02: subtítulo do hero escrito por nós (não existe no site antigo). Precisa de aprovação.
- 2026-10-03: redesenho visual a pedido ("simples demais"), com base em referências editoriais (Kinfolk, sites de stylists, templates Showit) e teste comparativo de fontes. Tipografia trocada para Noto Serif Display + Jost + Mrs Saint Delafield. Logo, favicon, capa provisória e og.jpg regenerados.
- 2026-10-04: serviços trocados pelos 3 reais com preços (Guarda-Roupa Organizado + Compras Personalizadas R$ 250 em destaque, Teste de Estilo R$ 150, Teste de Cores R$ 200 com aviso de desconto para grupo). Cards têm `preco`, `precoNota` e `aviso`. Grid: destaque em largura total e dois cards embaixo.
- 2026-10-04: e-book reposicionado como "e-book + videoaulas bônus por R$ 47" na Hotmart, com blocos de bônus e oferta e medalha "R$ 47 tudo incluso". As fotos reais entraram (hero, sobre e mockup do e-book).
- 2026-10-03: textos novos escritos por nós e pendentes de aprovação: kicker do hero, subtítulo, link "ou fale direto com a Vanessa", legenda do hero, palavras da faixa, pilares, intro de serviços e nota "Compra segura pela Hotmart".
