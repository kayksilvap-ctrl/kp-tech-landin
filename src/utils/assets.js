/**
 * Monta a URL de um arquivo da pasta public/.
 *
 * Passa por aqui em vez de escrever "/assets/..." direto no template
 * por dois motivos:
 *  1. o Vite não tenta resolver o arquivo em tempo de build — as artes
 *     podem ainda não ter sido colocadas na pasta;
 *  2. respeita o `base` do vite.config.js, então a página funciona
 *     na raiz do domínio, em subpasta ou aberta como arquivo local.
 *
 * @param {string} caminho ex.: 'assets/portfolio/01-ai-native.jpg'
 */
export function urlPublica(caminho) {
  const base = import.meta.env.BASE_URL || '/'
  const limpo = String(caminho).replace(/^\/+/, '')
  return base.endsWith('/') ? base + limpo : `${base}/${limpo}`
}
