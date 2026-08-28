<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import BotaoWhatsapp from './BotaoWhatsapp.vue'
import { linkWhatsapp } from '@/composables/useWhatsapp'
import { mdiWhatsapp } from '@/utils/icones'

const { smAndDown } = useDisplay()

// Aparecem depois do hero e somem no CTA final —
// lá o botão grande já está na tela, não precisa de atalho.
const visivel = ref(false)
let travado = false

function aoRolar() {
  if (travado) return
  travado = true

  requestAnimationFrame(() => {
    const y = window.scrollY
    const hero = document.getElementById('inicio')
    const contato = document.getElementById('contato')

    const passouHero = y > (hero ? hero.offsetHeight * 0.75 : 500)
    const noFinal = contato
      ? contato.getBoundingClientRect().top < window.innerHeight * 0.65
      : false

    visivel.value = passouHero && !noFinal
    travado = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', aoRolar, { passive: true })
  aoRolar()
})

onUnmounted(() => window.removeEventListener('scroll', aoRolar))
</script>

<template>
  <!-- desktop: botão flutuante que expande no hover -->
  <a
    v-if="!smAndDown"
    :href="linkWhatsapp('flutuante')"
    target="_blank"
    rel="noopener"
    class="flutuante"
    :class="{ 'flutuante--on': visivel }"
    aria-label="Falar no WhatsApp"
  >
    <v-icon :icon="mdiWhatsapp" size="26" />
    <span class="flutuante__txt">Falar no WhatsApp</span>
  </a>

  <!-- mobile: barra fixa discreta, com blur e safe area -->
  <div
    v-else
    class="barra"
    :class="{ 'barra--on': visivel }"
    role="region"
    aria-label="Pedir orçamento"
  >
    <p class="barra__txt">Gostou do meu trabalho?</p>
    <BotaoWhatsapp etapa="barraFixa" texto="Pedir orçamento" tamanho="sm" />
  </div>
</template>

<style scoped>
.flutuante {
  position: fixed;
  right: 26px;
  bottom: 26px;
  z-index: 1010;
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 16px;
  border-radius: 999px;
  text-decoration: none;
  background: linear-gradient(180deg, #2ee06f, #17ad4f);
  color: #03210f;
  box-shadow: 0 14px 34px -10px rgba(37, 211, 102, .6);
  opacity: 0;
  visibility: hidden;
  transform: translateY(14px) scale(.96);
  transition:
    opacity .4s var(--ease),
    transform .4s var(--ease),
    visibility .4s,
    gap .3s var(--ease),
    padding .3s var(--ease);
}

.flutuante--on { opacity: 1; visibility: visible; transform: none; }

.flutuante__txt {
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 700;
  font-size: .95rem;
  transition: max-width .35s var(--ease);
}

.flutuante:hover { gap: 10px; padding-right: 24px; }
.flutuante:hover .flutuante__txt { max-width: 180px; }

.barra {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1010;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  background: rgba(8, 13, 22, .78);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border-top: 1px solid var(--line);
  transform: translateY(110%);
  transition: transform .45s var(--ease);
}

.barra--on { transform: none; }

.barra__txt {
  font-size: .9rem;
  font-weight: 600;
  color: var(--silver);
  line-height: 1.25;
  margin: 0;
}

@media (max-width: 420px) {
  .barra__txt { font-size: .82rem; }
}
</style>
