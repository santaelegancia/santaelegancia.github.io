/* =====================================================================
   CONTEÚDO DO SITE
   ---------------------------------------------------------------------
   Para trocar qualquer texto, link, serviço, depoimento ou foto,
   edite SOMENTE este bloco. O layout se ajusta sozinho.

   Regras rápidas:
   - Texto entre aspas simples: 'assim'. Se o texto tiver apóstrofo,
     use aspas duplas: "assim d'água".
   - _Itálico_: coloque o trecho entre sublinhados, como no WhatsApp.
     Nos títulos, o trecho em itálico ganha a cor de destaque.
   - Quebra de linha dentro de um texto: \n
   - Campo vazio ('') ou lista vazia ([]) some da página.
   - Fotos: substitua o arquivo em assets/img/ mantendo o mesmo nome,
     ou aponte para outro arquivo em "src". Sempre descreva a foto
     em "alt" (é o que leitores de tela leem).
   - Título, descrição e imagem de compartilhamento ficam no
     index.html, dentro do <head>.
   ===================================================================== */
const CONTENT = {
  whatsapp: {
    numero: '5592981133954', // DDI + DDD + número, só dígitos
    mensagem: 'Olá desejo me tornar uma elegante! ', // mensagem padrão ao abrir a conversa
  },

  links: {
    ebook: 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-moda-descomplicada-c9bgu/A81343772K',
    instagram: 'https://instagram.com/vanessaeestilo',
  },

  topo: {
    botao: 'Conversar no WhatsApp',
    botaoCurto: 'WhatsApp', // versão do botão em telas pequenas
  },

  hero: {
    kicker: 'Consultoria de imagem e estilo',
    titulo: 'Seja a mulher que reflete _elegância, segurança e autenticidade_',
    complemento: '— todos os dias.',
    subtitulo: 'Online e sob medida, para você se vestir com verdade, leveza e propósito.',
    botao: 'Seja Elegante',
    linkWhatsapp: 'ou fale direto com a Vanessa',
    foto: {
      src: 'assets/img/hero.jpg',
      alt: 'Vanessa, de boina clara e blusa listrada, em um restaurante ao ar livre',
    },
    legenda: {
      nome: 'Vanessa',
      texto: 'Manaus, AM — atendimento online',
    },
  },

  // Palavras da faixa que passa logo abaixo do topo
  faixa: ['Elegância', 'Identidade', 'Autoestima', 'Fé', 'Essência', 'Feminilidade', 'Propósito'],

  identificacao: {
    perguntas: 'Você já sentiu que seu guarda-roupa não te representa mais? Que compra roupas e ainda assim tem a sensação de “não ter o que vestir”?',
    resposta: 'Você merece mais do que isso: _você merece se enxergar com amor, estilo e propósito._',
  },

  sobre: {
    titulo: 'Vanessa vai te guiar _nessa transformação._',
    texto: 'Consultora de imagem e estilo com uma abordagem humana, prática e católica. Seu objetivo é mostrar que elegância não depende de status, mas de identidade.',
    pilares: ['Humana', 'Prática', 'Católica'],
    assinatura: 'Vanessa',
    selo: {
      numero: '100',
      texto: 'mulheres com estilos transformados', // escrito em volta do selo que gira
    },
    botao: 'Conversar com a Vanessa',
    foto: {
      src: 'assets/img/sobre.jpg',
      alt: 'Vanessa sorrindo em um jardim arborizado, de casaco xadrez azul e calça preta',
    },
  },

  servicos: {
    titulo: 'Serviços para _transformar seu estilo pessoal_',
    intro: 'Presencial ou online, cada encontro é feito para você sair com clareza, confiança e um olhar novo sobre si mesma.',
    // Cada serviço vira um card, na ordem desta lista.
    // destaque: true  -> card terracota em largura total (use em um só).
    // icone: 'manequim' | 'cabide' | 'sacola' | 'cartela'
    // preco / precoNota: deixe vazio ('') para não mostrar.
    // aviso: recado em destaque no card (ex.: desconto). Vazio não aparece.
    // mensagemWhatsapp: texto que já chega escrito na conversa com a Vanessa.
    lista: [
      {
        destaque: true,
        icone: 'cabide',
        selo: 'O mais completo',
        nome: 'Guarda-Roupa Organizado + Compras Personalizadas',
        descricao: 'Um encontro sem pressa para transformar o armário lotado em um guarda-roupa que funciona de verdade, e para você comprar só o que faz sentido.',
        itens: [
          'Avaliação peça por peça: o que fica e o que sai',
          'Cuidado com as peças de apego afetivo',
          'Orientação sobre o que vender ou doar',
          'Sapatos e acessórios incluídos',
          'Compras personalizadas, sem desperdício',
        ],
        extras: ['Presencial ou virtual', 'Encontro estendido, no tempo que o seu armário pede'],
        aviso: '',
        preco: 'R$ 250',
        precoNota: 'encontro completo',
        botao: 'Quero transformar meu armário',
        mensagemWhatsapp: 'Olá! Desejo me tornar uma elegante. Tenho interesse na organização do guarda-roupa com compras personalizadas.',
      },
      {
        icone: 'manequim',
        nome: 'Teste de Estilo',
        descricao: 'Descubra o estilo que conversa com quem você é e pare de se vestir no piloto automático.',
        itens: [
          'Identificação do seu estilo predominante',
          'Leitura emocional e comportamental: por que você se veste como se veste',
          'Clareza para escolher roupas que contam a sua história',
        ],
        extras: ['Presencial ou virtual'],
        aviso: '',
        preco: 'R$ 150',
        precoNota: 'sessão explicativa de 1h',
        botao: 'Quero descobrir meu estilo',
        mensagemWhatsapp: 'Olá! Desejo me tornar uma elegante. Quero fazer o Teste de Estilo.',
      },
      {
        icone: 'cartela',
        nome: 'Teste de Cores',
        descricao: 'Descubra as cores que iluminam o seu rosto e nunca mais erre na escolha de uma peça, de um batom ou de um acessório.',
        itens: [
          'Análise das cores que valorizam sua pele, seus olhos e seu cabelo',
          'Presencial, com dossiê completo para você guardar',
          'Virtual, com sessão explicativa ao vivo',
        ],
        extras: [],
        aviso: 'Venha com as amigas: em grupo de 5 pessoas no teste presencial, cada uma ganha R$ 50 de desconto.',
        preco: 'R$ 200',
        precoNota: 'sessão de 1h',
        botao: 'Quero descobrir minhas cores',
        mensagemWhatsapp: 'Olá! Desejo me tornar uma elegante. Quero fazer o Teste de Cores.',
      },
    ],
  },

  ebook: {
    selo: 'Oferta exclusiva',
    titulo: 'Moda _Descomplicada_',
    frase: '“Não é sobre tendências, é sobre se conhecer.”',
    intro: 'O e-book que te ensina a se vestir com intenção, para a mulher que deseja:',
    beneficios: [
      'Aprender a montar looks com praticidade',
      'Dominar o círculo cromático e as combinações de cores',
      'Conhecer os estilos universais e identificar o seu',
      'Entender que a verdadeira elegância nasce da feminilidade',
    ],
    bonus: {
      titulo: '6 módulos com aulas e conteúdos bônus',
      texto: 'Além do e-book, você recebe 6 módulos com aulas e conteúdos bônus para ver tudo na prática e aprender ainda mais, no seu ritmo.',
    },
    oferta: {
      rotulo: 'E-book + 6 módulos com aulas e bônus, tudo por somente',
      nota: 'pagamento único',
    },
    preco: 'R$ 47',
    fechamento: 'Menos do que uma peça que você usaria uma vez, e um conhecimento que vai com você em cada escolha.',
    botao: 'Quero o e-book + 6 módulos',
    nota: 'Compra segura pela Hotmart',
    medalha: { numero: 'R$ 47', texto: 'tudo incluso' },
    capa: {
      src: 'assets/img/ebook.png',
      alt: 'Moda Descomplicada, e-book e curso em vídeo da Santa Elegância, exibido em um tablet',
    },
  },

  depoimentos: {
    titulo: 'O que dizem _alunas e clientes_',
    lista: [
      {
        texto: 'Achei o e-book maravilhoso e as vídeo-aulas bem esclarecedoras. Aprendi a combinar as cores na composição dos meus looks e, principalmente, que não preciso de roupas caras para ser elegante.',
        nome: 'Elaine Cipriano',
      },
      {
        texto: 'A coloração me ajudou a ser mais confiante e assertiva. Eliminei a dúvida constante de “será que isso vai ficar bom?”',
        nome: 'Rejane Grana',
      },
      {
        texto: 'Ter esse conhecimento mudou minha autoestima. Me sinto mais segura para escolher peças que me valorizam.',
        nome: 'Fernanda Amorin',
      },
      {
        texto: 'Hoje entendo porque certos looks não funcionavam pra mim. Foi um grande passo para o meu autoconhecimento.',
        nome: 'Nattacha Carvalho',
      },
    ],
  },

  final: {
    titulo: 'Transformar seu estilo é _se reencontrar._',
    texto: 'E você não está sozinha nessa jornada. Comece hoje com quem entende de moda, fé e essência.',
    botaoWhatsapp: 'Chamar a Vanessa no WhatsApp',
    botaoEbook: 'Quero o e-book por R$ 47',
  },

  rodape: {
    descricao: 'Consultoria de imagem e estilo com Vanessa.\nAtendimento online, de Manaus para todo o Brasil.',
    instagram: '@vanessaeestilo',
    whatsapp: 'WhatsApp',
  },
};
/* ===================== FIM DO CONTEÚDO EDITÁVEL ===================== */


(function () {
  'use strict';

  const raiz = document.documentElement;
  const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
  const MARCA = 'Santa Elegância';

  const ler = (caminho) => caminho.split('.').reduce((o, k) => (o == null ? o : o[k]), CONTENT);
  const vazio = (v) => v == null || v === '' || (Array.isArray(v) && v.length === 0);
  // Espaço inseparável antes do travessão, para "— todos os dias" nunca abrir uma linha sozinho
  const tipografar = (texto) => String(texto).replace(/ —/g, ' —');

  // Converte _trecho_ em <em> e \n em <br>, sem usar innerHTML
  function formatar(el, texto) {
    el.replaceChildren();
    tipografar(texto).split('\n').forEach((linha, i) => {
      if (i) el.appendChild(document.createElement('br'));
      linha.split(/_(.+?)_/g).forEach((parte, j) => {
        if (!parte) return;
        if (j % 2) {
          const em = document.createElement('em');
          em.textContent = parte;
          el.appendChild(em);
        } else {
          el.appendChild(document.createTextNode(parte));
        }
      });
    });
  }

  function linkWhatsApp(mensagem) {
    const texto = mensagem || CONTENT.whatsapp.mensagem;
    const base = 'https://wa.me/' + CONTENT.whatsapp.numero;
    return texto ? base + '?text=' + encodeURIComponent(texto) : base;
  }

  function resolverLink(chave) {
    return chave === 'whatsapp' ? linkWhatsApp() : CONTENT.links[chave];
  }

  function preencher(el, valor) {
    if (vazio(valor)) {
      el.hidden = true;
      return;
    }
    if (Array.isArray(valor)) {
      el.replaceChildren(...valor.map((texto) => {
        const li = document.createElement('li');
        formatar(li, texto);
        return li;
      }));
    } else {
      formatar(el, valor);
    }
  }

  function preencherImagem(img, foto) {
    if (!foto) return;
    if (foto.src && img.getAttribute('src') !== foto.src) img.src = foto.src;
    img.alt = foto.alt || '';
  }

  const iniciais = (nome) => {
    const partes = nome.trim().split(/\s+/);
    return (partes[0][0] + (partes.length > 1 ? partes[partes.length - 1][0] : '')).toUpperCase();
  };

  /* ---------- Conteúdo simples ---------- */
  document.querySelectorAll('[data-c]').forEach((el) => preencher(el, ler(el.dataset.c)));
  document.querySelectorAll('[data-img]').forEach((img) => preencherImagem(img, ler(img.dataset.img)));
  document.querySelectorAll('[data-link]').forEach((a) => {
    const url = resolverLink(a.dataset.link);
    if (url) a.href = url;
  });
  document.querySelectorAll('[data-ano]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Faixa de valores (duas cópias para o loop contínuo) ---------- */
  const faixa = document.querySelector('[data-faixa]');
  if (faixa && !vazio(CONTENT.faixa)) {
    const grupo = document.createElement('div');
    grupo.className = 'faixa__grupo';
    CONTENT.faixa.forEach((palavra) => {
      const item = document.createElement('span');
      item.className = 'faixa__item';
      item.textContent = palavra;
      grupo.appendChild(item);
      grupo.insertAdjacentHTML('beforeend', '<svg class="faixa__estrela"><use href="#i-estrela"/></svg>');
    });
    faixa.append(grupo, grupo.cloneNode(true));
  } else if (faixa) {
    faixa.parentElement.hidden = true;
  }

  /* ---------- Selo giratório ---------- */
  const seloTexto = document.querySelector('[data-selo-texto]');
  if (seloTexto) {
    seloTexto.textContent = (CONTENT.sobre.selo.texto + '  ✦  ' + MARCA + '  ✦  ').toUpperCase();
  }

  /* ---------- Serviços ---------- */
  const gradeServicos = document.querySelector('[data-servicos]');
  const tplServico = document.getElementById('tpl-servico');
  CONTENT.servicos.lista.forEach((servico) => {
    const card = tplServico.content.firstElementChild.cloneNode(true);
    if (servico.destaque) card.classList.add('servico--destaque');
    const icone = card.querySelector('[data-campo-icone]');
    if (servico.icone) icone.setAttribute('href', '#i-' + servico.icone);
    else icone.closest('.servico__icone').hidden = true;
    card.querySelectorAll('[data-campo]').forEach((el) => {
      const campo = el.dataset.campo;
      if (campo === 'botao') {
        el.textContent = servico.botao;
        el.href = linkWhatsApp(servico.mensagemWhatsapp);
        el.classList.add(servico.destaque ? 'botao--claro' : 'botao--primario');
      } else {
        preencher(el, servico[campo]);
      }
    });
    gradeServicos.appendChild(card);
  });

  /* ---------- Depoimentos ---------- */
  const listaDepoimentos = document.querySelector('[data-depoimentos]');
  const tplDepoimento = document.getElementById('tpl-depoimento');
  CONTENT.depoimentos.lista.forEach((dep) => {
    const item = tplDepoimento.content.firstElementChild.cloneNode(true);
    item.querySelectorAll('[data-campo]').forEach((el) => preencher(el, dep[el.dataset.campo]));
    item.querySelector('[data-monograma]').textContent = iniciais(dep.nome);
    listaDepoimentos.appendChild(item);
  });

  raiz.classList.add('pronta');

  /* ---------- Marca gigante do rodapé: ocupa exatamente a largura ---------- */
  const marcaGrande = document.querySelector('[data-marca-grande]');
  function ajustarMarca() {
    if (!marcaGrande) return;
    const caixa = marcaGrande.parentElement;
    marcaGrande.style.fontSize = '100px';
    const proporcao = caixa.clientWidth / marcaGrande.getBoundingClientRect().width;
    marcaGrande.style.fontSize = Math.floor(100 * proporcao * 0.995) + 'px';
  }
  ajustarMarca();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajustarMarca);
  if ('ResizeObserver' in window && marcaGrande) {
    let larguraAnterior = 0;
    new ResizeObserver((entradas) => {
      const largura = entradas[0].contentRect.width;
      if (Math.abs(largura - larguraAnterior) < 1) return;
      larguraAnterior = largura;
      ajustarMarca();
    }).observe(marcaGrande.parentElement);
  }

  /* ---------- Topo: fundo ao rolar ---------- */
  const topo = document.querySelector('[data-topo]');
  const marcarTopo = () => topo.classList.toggle('is-rolado', window.scrollY > 8);
  marcarTopo();
  window.addEventListener('scroll', marcarTopo, { passive: true });

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.revelar').forEach((el) => el.classList.add('is-visivel'));
    return;
  }

  /* ---------- Revelar ao rolar ---------- */
  const observadorRevelar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('is-visivel');
      observadorRevelar.unobserve(entrada.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });

  document.querySelectorAll('.revelar').forEach((el) => {
    if (semMovimento.matches) el.classList.add('is-visivel');
    else observadorRevelar.observe(el);
  });

  /* ---------- Botão flutuante de WhatsApp (celular) ---------- */
  const flutuante = document.querySelector('[data-flutuante]');
  const visiveis = new Set();
  const observadorFlutuante = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => (e.isIntersecting ? visiveis.add(e.target) : visiveis.delete(e.target)));
    flutuante.classList.toggle('is-visivel', visiveis.size === 0);
  });
  ['.hero', '[data-final]', '[data-rodape]'].forEach((sel) => {
    const alvo = document.querySelector(sel);
    if (alvo) observadorFlutuante.observe(alvo);
  });
})();
