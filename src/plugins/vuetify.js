import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// iconset SVG: entram no bundle só os ícones realmente usados.
// A fonte completa do MDI pesa ~3,6 MB — inviável numa landing
// que precisa abrir rápido no celular.
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Tema único (escuro). A landing não tem alternância de tema —
// a identidade da KP TECH é escura com azul.
const kpDark = {
  dark: true,
  colors: {
    background: '#05070c',
    surface: '#0d1420',
    primary: '#2f8bff',
    secondary: '#5cc2ff',
    // verde do WhatsApp: usado em todos os CTAs principais
    whatsapp: '#25d366',
    error: '#ff5252',
    info: '#5cc2ff',
    success: '#25d366',
    warning: '#ffb020',
    'on-background': '#eef3fa',
    'on-surface': '#eef3fa',
    'on-whatsapp': '#03210f',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'kpDark',
    themes: { kpDark },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  defaults: {
    VBtn: {
      // sem UPPERCASE automático do Vuetify: o texto dos CTAs
      // é controlado por CSS em cada botão
      style: 'text-transform:none;letter-spacing:.01em;',
    },
  },
})
