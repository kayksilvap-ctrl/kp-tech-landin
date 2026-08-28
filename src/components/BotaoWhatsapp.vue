<script setup>
import { computed } from 'vue'
import { linkWhatsapp } from '@/composables/useWhatsapp'
import { mdiWhatsapp } from '@/utils/icones'

const props = defineProps({
  /** etapa do funil — define a mensagem pré-preenchida */
  etapa: { type: String, required: true },
  /** texto do botão */
  texto: { type: String, required: true },
  /** 'sm' | 'lg' | 'xl' */
  tamanho: { type: String, default: 'lg' },
  /** anima com pulso (usar só no CTA final) */
  pulso: { type: Boolean, default: false },
  /** ocupa toda a largura disponível */
  block: { type: Boolean, default: false },
})

const href = computed(() => linkWhatsapp(props.etapa))
</script>

<template>
  <v-btn
    :href="href"
    target="_blank"
    rel="noopener"
    :block="block"
    class="btn-wa"
    :class="[`btn-wa--${tamanho}`, { 'btn-wa--pulse': pulso }]"
    elevation="0"
  >
    <v-icon :icon="mdiWhatsapp" class="me-2" />
    {{ texto }}
  </v-btn>
</template>
