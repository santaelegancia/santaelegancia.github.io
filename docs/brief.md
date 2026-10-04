# Brief — Landing Page Santa Elegância (Vanessa Estilo)

Brief original, preservado na íntegra. Fonte de verdade para conteúdo e requisitos.

## Contexto
Landing page de uma página só para a Vanessa, consultora de imagem e estilo focada no público feminino, com abordagem humana, prática e católica. Atendimento majoritariamente online (Manaus/AM). O site atual dela está em https://santaelegancia.framer.website/ — usar como base de conteúdo, mas o novo visual deve ser bem mais refinado e premium. Esta LP vai substituir o link da bio do Instagram (@vanessaeestilo, ~2.2k seguidores, "100 mulheres com estilos transformados"). O tráfego vem principalmente do celular.

## Objetivo
Converter visitante em conversa no WhatsApp (CTA principal) e, secundariamente, em compra do e-book na Hotmart.
- WhatsApp: https://wa.me/5592981133954?text=Ol%C3%A1%20desejo%20me%20tornar%20uma%20elegante!%20
- E-book: https://hotmart.com/pt-br/marketplace/produtos/hagsxd-moda-descomplicada-c9bgu/A81343772K
- Instagram: https://instagram.com/vanessaeestilo

## Direção visual
- Elegante, feminino, acolhedor. Nada genérico de template, nada de gradiente roxo, nada de emoji na interface (ícones SVG sutis ou nenhum).
- Paleta (variáveis CSS fáceis de trocar): creme/off-white #FAF6F0, nude #EBD5BE, caramelo #C49A74, terracota/marrom #7A4636, grafite quase preto #1A1613, dourado queimado de destaque #B8892B.
- Tipografia: serifa display itálica e elegante nos títulos (ex.: Cormorant Garamond ou Playfair Display via Google Fonts), sans limpa no corpo (ex.: Jost ou DM Sans). Logo/marca em caixa alta com letter-spacing largo.
- Muito respiro, fotos grandes, bordas sutis, cantos levemente arredondados.
- Animações discretas: fade/slide ao rolar (IntersectionObserver), hover suave nos botões. Respeitar prefers-reduced-motion.

## Estrutura (ordem das seções)
1. Header fixo e minimalista: marca "SANTA ELEGÂNCIA" + botão WhatsApp.
2. Hero: headline "Seja a mulher que reflete elegância, segurança e autenticidade — todos os dias." + subtítulo curto + CTA "Seja Elegante" (rola até Serviços) + foto da Vanessa.
3. Identificação/dor: "Você já sentiu que seu guarda-roupa não te representa mais? Que compra roupas e ainda assim tem a sensação de 'não ter o que vestir'? Você merece mais do que isso: você merece se enxergar com amor, estilo e propósito."
4. Sobre a Vanessa: "Vanessa vai te guiar nessa transformação. Consultora de imagem e estilo com uma abordagem humana, prática e católica. Seu objetivo é mostrar que elegância não depende de status, mas de identidade." + foto + número "100 mulheres com estilos transformados".
5. Serviços (cards):
   - Organização de Guarda-Roupa: fim dos apegos desnecessários; avaliação do que fica e do que sai; organização estratégica por categorias e cores; looks com o que você já tem. CTA "Quero organizar meu armário".
   - Teste de Estilo + Personal Shopping: identificação do estilo e medidas; lista de peças que te valorizam; treinamento para montar seu lookbook; estratégias para compor visuais. CTA WhatsApp.
   - Consultoria Completa (destaque visual): teste de estilo, coloração pessoal, análise corporal, organização do guarda-roupa, personal shopping, lookbook exclusivo; 100% online com acompanhamento completo. CTA WhatsApp.
   - Estilo + Cores + Medidas: questionário personalizado; dossiê com cores, cabelo, maquiagem e estampas; análise corporal e sugestões de peças; encontro online de 2h. CTA "Agendar agora mesmo".
   (Sem preços por enquanto. Campo opcional "preço" no objeto de conteúdo, oculto se vazio.)
6. Oferta exclusiva, e-book "Moda Descomplicada" (20 aulas): frase "Não é sobre tendências, é sobre se conhecer."; para quem quer montar looks com praticidade, dominar o círculo cromático, conhecer os estilos universais e entender que a elegância nasce da feminilidade. CTA para a Hotmart.
7. Depoimentos (4): Elaine Cipriano, Rejane Grana, Fernanda Amorin, Nattacha Carvalho. Textos curtos, copiar do site atual. Carrossel simples ou grid.
8. CTA final: "Transformar seu estilo é se reencontrar. E você não está sozinha nessa jornada. Comece hoje com quem entende de moda, fé e essência." + botões WhatsApp e e-book.
9. Rodapé: marca, Instagram, WhatsApp, © ano.
10. Botão flutuante de WhatsApp no mobile.

## Requisitos técnicos
- Site estático simples: index.html + style.css + script.js (sem build, sem frameworks), pronto para GitHub Pages.
- Mobile-first, responsivo de 360px a desktop.
- Todo o conteúdo (textos, links, depoimentos, serviços) centralizado em um único objeto no topo do script.js ou em um bloco claramente comentado, para trocar textos e fotos sem mexer no layout.
- Imagens em /assets/img/ com estes nomes (placeholders elegantes enquanto não houver fotos reais): hero.jpg, sobre.jpg, ebook.png, logo.svg. Lazy-loading, atributos alt, width/height definidos. Não fazer hotlink de imagens do Framer.
- SEO e compartilhamento: title, meta description, Open Graph e Twitter card, favicon, lang="pt-BR".
- Acessibilidade: contraste AA, foco visível, HTML semântico, alvos de toque de pelo menos 44px.
- Performance: sem libs pesadas, fontes com display=swap.

## Entrega
1. Gerar o site completo e abrir para conferência.
2. Após aprovação: criar repositório no GitHub, commit, push e ativar GitHub Pages. Informar a URL final.
3. Trabalhar em passos curtos, prazo de 1 dia.
