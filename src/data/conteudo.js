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
    arquivo: '01-burger-hoje-tem.jpg',
    cols: 6,
    rotulo: 'BURGER',
    categoria: 'Hamburgueria · Anúncio',
    titulo: 'Hoje tem burger da casa',
    alt: 'Anúncio de hambúrguer artesanal com o texto "Hoje tem burger da casa"',
  },
  {
    arquivo: '12-dia-dos-pais-memorias.jpg',
    cols: 6,
    rotulo: 'DIA DOS PAIS',
    categoria: 'Dia dos Pais · Campanha',
    titulo: 'Os melhores momentos viram memórias',
    alt: 'Peça de Dia dos Pais com pai e filho e fotos em molduras neon azuis',
  },
  // linha de 3
  {
    arquivo: '03-pet-faca-arte.jpg',
    cols: 4,
    rotulo: 'PET',
    categoria: 'Pet · Divulgação',
    titulo: 'Faça a arte do seu pet',
    alt: 'Divulgação de arte personalizada de pet com cachorro sorrindo no gramado',
  },
  {
    arquivo: '07-pizza-peca-ja.jpg',
    cols: 4,
    rotulo: 'PIZZARIA',
    categoria: 'Pizzaria · Anúncio',
    titulo: 'A melhor pizza da cidade? Peça já!',
    alt: 'Anúncio de pizzaria com entregador mascote segurando o celular',
  },
  {
    arquivo: '10-construcao-qualidade.jpg',
    cols: 4,
    rotulo: 'CONSTRUÇÃO',
    categoria: 'Materiais de construção · Anúncio',
    titulo: 'Construa com qualidade',
    alt: 'Anúncio de loja de materiais de construção com profissional de capacete',
  },
]

/** Projetos exibidos depois do CTA contextual do portfólio. */
export const projetosExtras = [
  // linha de 2
  {
    arquivo: '02-burger-melhor-regiao.jpg',
    cols: 6,
    rotulo: 'BURGER',
    categoria: 'Hamburgueria · Anúncio',
    titulo: 'O melhor hambúrguer da região',
    alt: 'Anúncio de hambúrguer artesanal em tom laranja com preço em destaque',
  },
  {
    arquivo: '13-dia-dos-pais-obrigado.jpg',
    cols: 6,
    rotulo: 'DIA DOS PAIS',
    categoria: 'Dia dos Pais · Campanha',
    titulo: 'Obrigado por sempre estar aqui',
    alt: 'Peça de Dia dos Pais com pai e filho se abraçando',
  },
  // linha de 3
  {
    arquivo: '04-burger-2-por-45.jpg',
    cols: 4,
    rotulo: 'BURGER',
    categoria: 'Hamburgueria · Promoção',
    titulo: '2 burgers por R$ 45',
    alt: 'Promoção de dois hambúrgueres por R$ 45 com selo de melhor oferta',
  },
  {
    arquivo: '06-pizza-fim-de-semana.jpg',
    cols: 4,
    rotulo: 'PIZZARIA',
    categoria: 'Pizzaria · Promoção',
    titulo: 'A melhor opção para o fim de semana',
    alt: 'Anúncio de pizzaria com preço promocional e pedido pelo WhatsApp',
  },
  {
    arquivo: '05-construcao-tijolo-bom.jpg',
    cols: 4,
    rotulo: 'CONSTRUÇÃO',
    categoria: 'Materiais de construção · Anúncio',
    titulo: 'Tijolo bom faz diferença',
    alt: 'Anúncio de materiais de construção com pedreiro sorrindo',
  },
  // linha de 3
  {
    arquivo: '08-pizza-delivery-vapor.jpg',
    cols: 4,
    rotulo: 'PIZZARIA',
    categoria: 'Pizzaria · Anúncio',
    titulo: 'Nosso delivery está a todo vapor!',
    alt: 'Anúncio de delivery de pizza com entregador mascote de moto',
  },
  {
    arquivo: '09-pizza-desconto.jpg',
    cols: 4,
    rotulo: 'PIZZARIA',
    categoria: 'Pizzaria · Promoção',
    titulo: 'Ganhe 5% de desconto',
    alt: 'Anúncio de desconto no pagamento com cartão em pizzaria',
  },
  {
    arquivo: '11-construcao-economia.jpg',
    cols: 4,
    rotulo: 'CONSTRUÇÃO',
    categoria: 'Materiais de construção · Anúncio',
    titulo: 'Economia de verdade',
    alt: 'Anúncio de materiais de construção com cimento, tijolos e tinta',
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
