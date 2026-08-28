/**
 * Central de CTAs do WhatsApp.
 *
 * Cada etapa do funil tem uma mensagem pré-preenchida diferente.
 * Assim, quando a conversa chega, dá para saber de qual parte da
 * página o cliente veio — sem precisar de rastreador nenhum.
 *
 * Para trocar número ou textos, é só editar este arquivo.
 */

// DDI + DDD + número, apenas dígitos
export const NUMERO = '5517996539917'

export const MENSAGENS = {
  navbar:
    'Olá! Vim pelo seu site e gostaria de solicitar um orçamento.',
  hero:
    'Olá! Vi seu portfólio e gostaria de saber como funciona para criar um projeto para minha marca.',
  portfolio:
    'Olá! Vi seus projetos no portfólio e gostei bastante do trabalho. Gostaria de fazer um orçamento.',
  servicos:
    'Olá! Vi os serviços no seu site e gostaria de saber qual seria a melhor opção para o que preciso.',
  processo:
    'Olá! Entendi como funciona o seu processo e queria começar um projeto. Podemos conversar?',
  final:
    'Olá! Vi seu portfólio pelo site e gostaria de fazer um orçamento. Tenho uma ideia de projeto e queria saber como podemos desenvolver.',
  flutuante:
    'Olá! Vim pelo seu site e gostaria de falar sobre um projeto.',
  barraFixa:
    'Olá! Gostei do seu trabalho e gostaria de pedir um orçamento.',
  rodape:
    'Olá! Vim pelo rodapé do seu site e gostaria de conversar sobre um projeto.',
}

/**
 * Monta o link do WhatsApp para uma etapa do funil.
 * @param {keyof typeof MENSAGENS} etapa
 */
export function linkWhatsapp(etapa) {
  const texto = MENSAGENS[etapa] ?? MENSAGENS.navbar
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(texto)}`
}

export function useWhatsapp() {
  return { NUMERO, MENSAGENS, linkWhatsapp }
}
