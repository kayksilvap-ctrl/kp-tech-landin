<script setup>
import { ref } from 'vue'
import { urlPublica } from '@/utils/assets'

defineProps({
  tamanho: { type: Number, default: 36 },
})

// Se existir public/assets/logo.png, ele aparece.
// Se não, fica o selo "KP" — nada de ícone quebrado.
const temLogo = ref(true)
const logo = urlPublica('assets/logo.png')
</script>

<template>
  <a href="#inicio" class="marca" aria-label="KP TECH — início">
    <img
      v-if="temLogo"
      :src="logo"
      alt=""
      class="marca__img"
      :style="{ width: tamanho + 'px', height: tamanho + 'px' }"
      @error="temLogo = false"
    >
    <span
      v-else
      class="marca__selo"
      :style="{ width: tamanho + 'px', height: tamanho + 'px' }"
      aria-hidden="true"
    >KP</span>

    <span class="marca__txt">KP<em>TECH</em></span>
  </a>
</template>

<style scoped>
.marca {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  text-decoration: none;
  color: inherit;
}

.marca__img {
  border-radius: 10px;
  object-fit: cover;
  display: block;
}

.marca__selo {
  flex: none;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(150deg, #1b3050, #0a1524);
  border: 1px solid rgba(120, 180, 255, .28);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .09);
  font-family: "Anton", sans-serif;
  font-size: .95rem;
  letter-spacing: .02em;
  color: #dbe7f8;
}

.marca__txt {
  font-family: "Anton", sans-serif;
  font-size: 1.05rem;
  letter-spacing: .04em;
  white-space: nowrap;
}

.marca__txt em {
  font-style: normal;
  color: var(--blue-2);
}
</style>
