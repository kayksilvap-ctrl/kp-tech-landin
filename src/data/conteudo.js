/**
 * Todo o conteúdo editável da landing em um só lugar.
 * Mudou um texto, um projeto ou um serviço? É aqui.
 */

/* ---------- ETAPA 2 — problemas que o visitante reconhece ---------- */
export const problemas = [
  'Posts que passam despercebidos no feed',
  'Identidade visual inconsistente',
  'Artes genéricas, iguais às de todo mundo',
  'Comunicação sem personalidade',
  'Anúncios que não chamam atenção',
  'Perfil visualmente desorganizado',
]

/* ---------- ETAPA 3 — transformação desejada ---------- */
export const palavrasDesejo = [
  { texto: 'ATENÇÃO.', contorno: false },
  { texto: 'IDENTIDADE.', contorno: true },
  { texto: 'AUTORIDADE.', contorno: false },
  { texto: 'VALOR.', contorno: true },
]

export const ganhos = [
  {
    titulo: 'Mais profissionalismo',
    texto: 'Sua marca deixa de parecer amadora em 3 segundos de rolagem.',
  },
  {
    titulo: 'Mais autoridade',
    texto: 'Quem apresenta bem é levado mais a sério — antes mesmo de falar preço.',
  },
  {
    titulo: 'Mais atenção',
    texto: 'Uma peça bem construída segura o olho e interrompe o scroll.',
  },
  {
    titulo: 'Mais consistência',
    texto: 'Um feed que faz sentido junto, não peças soltas sem conexão.',
  },
  {
    titulo: 'Mais valor percebido',
    texto: 'O mesmo produto parece valer mais quando é apresentado melhor.',
  },
]

/* ---------- ETAPA 4 — portfólio ----------
 * `cols` controla o tamanho do card no desktop:
 *   6 → linha de 2 cards (destaque)
 *   4 → linha de 3 cards
 * Mantenha as linhas fechando 12 para o grid não abrir buracos.
 * As imagens ficam em public/assets/portfolio/ (veja o LEIA-ME de lá).
 */
export const projetos = [
  // linha de 2
  {
    arquivo: '01-ai-native.jpg',
    cols: 6,
    rotulo: 'AI-NATIVE',
    categoria: 'Tecnologia · Post',
    titulo: 'As plataformas AI-Native já estão aqui',
    alt: 'Post sobre plataformas AI-Native, com cidade futurista em azul neon',
  },
  {
    arquivo: '05-dia-dos-pais.jpg',
    cols: 6,
    rotulo: 'DIA DOS PAIS',
    categoria: 'Data comemorativa · Campanha',
    titulo: 'Feliz Dia dos Pais',
    alt: 'Peça de Dia dos Pais com pai e filho e elementos 3D azuis',
  },
  // linha de 3
  {
    arquivo: '03-burger-oferta.jpg',
    cols: 4,
    rotulo: 'BURGER',
    categoria: 'Food · Anúncio',
    titulo: 'Se bateu a fome, já sabe onde pedir',
    alt: 'Criativo de hambúrguer artesanal com oferta e chamada para WhatsApp',
  },
  {
    arquivo: '08-pizzaria.jpg',
    cols: 4,
    rotulo: 'PIZZARIA',
    categoria: 'Food · Promoção',
    titulo: 'A melhor opção para o fim de semana',
    alt: 'Anúncio de pizzaria com preço promocional e contato de WhatsApp',
  },
  {
    arquivo: '04-pet-arte.jpg',
    cols: 4,
    rotulo: 'PET',
    categoria: 'Serviço · Campanha',
    titulo: 'Agora é a vez do seu pet',
    alt: 'Peça de divulgação de arte personalizada de pet, com cão e gato',
  },
]

/** Projetos exibidos depois do CTA contextual do portfólio. */
export const projetosExtras = [
  // linha de 2
  {
    arquivo: '09-carrossel-sonic.jpg',
    cols: 6,
    rotulo: 'CARROSSEL',
    categoria: 'Conteúdo · Carrossel',
    titulo: '5 dicas de como prender a atenção do leitor',
    alt: 'Capa de carrossel sobre prender a atenção do leitor',
  },
  {
    arquivo: '06-construcao.jpg',
    cols: 6,
    rotulo: 'CONSTRUÇÃO',
    categoria: 'Varejo · Anúncio',
    titulo: 'Construa com qualidade',
    alt: 'Anúncio de loja de materiais de construção com profissional e produtos',
  },
  // linha de 3
  {
    arquivo: '07-carrossel-programacao.jpg',
    cols: 4,
    rotulo: 'CARROSSEL',
    categoria: 'Conteúdo · Carrossel',
    titulo: '5 curiosidades antes de começar na programação',
    alt: 'Capa de carrossel sobre curiosidades de programação com personagens 3D',
  },
  {
    arquivo: '11-carrossel-pacman.jpg',
    cols: 4,
    rotulo: 'CARROSSEL',
    categoria: 'Conteúdo · Carrossel',
    titulo: '5 hábitos que atrasam sua evolução',
    alt: 'Capa de carrossel sobre hábitos que atrasam a evolução na programação',
  },
  {
    arquivo: '12-entrega-rapida.jpg',
    cols: 4,
    rotulo: 'ENTREGA',
    categoria: 'Varejo · Anúncio',
    titulo: 'Entrega rápida é aqui',
    alt: 'Anúncio de entrega rápida de materiais de construção com caminhão',
  },
  // linha de 2
  {
    arquivo: '02-vibe-coding.jpg',
    cols: 6,
    rotulo: 'VIBE CODING',
    categoria: 'Tecnologia · Post',
    titulo: 'Isso é vibe coding',
    alt: 'Post sobre vibe coding com cenário em blocos e painéis holográficos',
  },
  {
    arquivo: '10-pet-estilos.jpg',
    cols: 6,
    rotulo: 'ESTILOS',
    categoria: 'Serviço · Campanha',
    titulo: 'Uma arte com a cara do seu pet',
    alt: 'Peça mostrando três estilos de arte de pet: clean, divertida e premium',
  },
]

/* ---------- ETAPA 5 — serviços (vendidos pelo resultado) ---------- */
export const servicos = [
  {
    numero: '01',
    titulo: 'Artes para redes sociais',
    texto:
      'Posts profissionais pensados para valorizar sua comunicação e chamar atenção no feed — em vez de passarem batido.',
  },
  {
    numero: '02',
    titulo: 'Criativos para anúncios',
    texto:
      'Peças feitas para campanhas e divulgação de produtos, serviços ou promoções, com a informação certa no lugar certo.',
  },
  {
    numero: '03',
    titulo: 'Identidade visual',
    texto:
      'Uma apresentação consistente para sua marca: cores, tipografia e estilo que fazem tudo parecer parte da mesma casa.',
  },
  {
    numero: '04',
    titulo: 'Edição de vídeos',
    texto:
      'Conteúdo dinâmico para redes sociais, com ritmo e acabamento que seguram a atenção até o final.',
  },
  {
    numero: '05',
    titulo: 'Materiais publicitários',
    texto:
      'Peças promocionais e comerciais para diferentes necessidades — do cardápio ao banner, do flyer ao encarte.',
  },
  {
    numero: '06',
    titulo: 'Carrosséis de conteúdo',
    texto:
      'Sequências que ensinam algo e mantêm a pessoa deslizando — ótimo para autoridade e alcance.',
  },
]

/* ---------- ETAPA 6 — processo ---------- */
export const passos = [
  {
    numero: 'Passo 01',
    titulo: 'Você me conta a ideia',
    texto:
      'Conversamos sobre seu negócio, seu objetivo e o que você precisa. Pode ser por áudio, texto ou print — como for mais fácil.',
  },
  {
    numero: 'Passo 02',
    titulo: 'Definimos a direção',
    texto:
      'Alinhamos estilo, formato e proposta visual antes de começar, para que o resultado não seja surpresa.',
  },
  {
    numero: 'Passo 03',
    titulo: 'Eu desenvolvo',
    texto:
      'Transformo as informações em uma peça visual profissional, pensada para o lugar onde ela vai ser publicada.',
  },
  {
    numero: 'Passo 04',
    titulo: 'Você recebe',
    texto: 'Material pronto, no formato certo, para usar e divulgar.',
  },
]

/* ---------- ETAPA 7 — objeções ----------
 * Nada de preço, prazo fechado ou política inventada:
 * as respostas dão segurança e levam a conversa para o WhatsApp.
 */
export const duvidas = [
  {
    pergunta: 'Como faço para pedir um orçamento?',
    resposta:
      'É só me chamar no WhatsApp e me contar o que você precisa. A partir daí eu entendo o projeto e te retorno com a melhor forma de fazer.',
  },
  {
    pergunta: 'Você atende qualquer tipo de negócio?',
    resposta:
      'Sim. Já criei peças para segmentos bem diferentes — food, varejo, serviços, conteúdo e tecnologia. O que muda é a linguagem visual, não o cuidado com o resultado. Me conte do seu negócio que eu te digo qual caminho faz mais sentido.',
  },
  {
    pergunta: 'Consigo pedir apenas uma arte?',
    resposta:
      'Consegue. Dá para começar com uma peça só, testar como funciona pra você e depois ampliar. Não precisa fechar nada grande de cara.',
  },
  {
    pergunta: 'Como envio as informações do projeto?',
    resposta:
      'Pelo próprio WhatsApp. Você me manda textos, fotos, logo, referências ou até um áudio explicando a ideia. Se faltar alguma coisa, eu te pergunto — você não precisa saber de tudo antes de falar comigo.',
  },
  {
    pergunta: 'Como funciona o prazo?',
    resposta:
      'Cada projeto tem necessidades diferentes, então o prazo depende do tipo e da quantidade de peças. Me envie sua ideia pelo WhatsApp que eu consigo entender melhor o que você precisa e te passar o combinado certinho.',
  },
]

/* ---------- navegação ---------- */
export const menu = [
  { texto: 'Trabalhos', destino: '#trabalhos' },
  { texto: 'Serviços', destino: '#servicos' },
  { texto: 'Processo', destino: '#processo' },
  { texto: 'Dúvidas', destino: '#faq' },
]

/* ---------- faixa do hero ---------- */
export const faixaHero = [
  'POSTS PARA REDES SOCIAIS',
  'CRIATIVOS PARA ANÚNCIOS',
  'IDENTIDADE VISUAL',
  'CARROSSÉIS',
  'EDIÇÃO DE VÍDEO',
  'MATERIAIS PUBLICITÁRIOS',
]
