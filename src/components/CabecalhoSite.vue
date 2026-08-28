<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import MarcaKp from './MarcaKp.vue'
import BotaoWhatsapp from './BotaoWhatsapp.vue'
import { menu } from '@/data/conteudo'

const { mdAndDown } = useDisplay()
const gaveta = ref(false)
const fixo = ref(false)

function aoRolar() {
  fixo.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', aoRolar, { passive: true })
  aoRolar()
})

onUnmounted(() => window.removeEventListener('scroll', aoRolar))

function irPara(destino) {
  gaveta.value = false
  document.querySelector(destino)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <v-app-bar
    :elevation="0"
    height="72"
    class="topo"
    :class="{ 'topo--fixo': fixo }"
    color="transparent"
  >
    <v-container class="d-flex align-center justify-space-between py-0">
      <MarcaKp />

      <!-- desktop -->
      <nav v-if="!mdAndDown" class="d-flex align-center ga-7">
        <a
          v-for="item in menu"
          :key="item.destino"
          :href="item.destino"
          class="topo__link"
        >{{ item.texto }}</a>

        <BotaoWhatsapp
          etapa="navbar"
          texto="Solicitar orçamento"
          tamanho="sm"
        />
      </nav>

      <!-- mobile -->
      <v-app-bar-nav-icon
        v-else
        :aria-label="gaveta ? 'Fechar menu' : 'Abrir menu'"
        @click="gaveta = !gaveta"
      />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="gaveta"
    location="right"
    temporary
    width="280"
    class="gaveta"
  >
    <v-list class="pa-4">
      <v-list-item
        v-for="item in menu"
        :key="item.destino"
        :title="item.texto"
        class="gaveta__item"
        @click="irPara(item.destino)"
      />
    </v-list>

    <div class="pa-4">
      <BotaoWhatsapp
        etapa="navbar"
        texto="Solicitar orçamento"
        tamanho="lg"
        block
      />
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
.topo {
  border-bottom: 1px solid transparent;
  transition: background .35s var(--ease), border-color .35s var(--ease);
}

.topo--fixo {
  background: rgba(5, 7, 12, .72) !important;
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  border-bottom-color: var(--line);
}

.topo__link {
  font-size: .93rem;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  transition: color .25s var(--ease);
  white-space: nowrap;
}

.topo__link:hover { color: var(--txt); }

.gaveta { background: rgba(8, 13, 22, .97) !important; }

.gaveta__item {
  border-bottom: 1px solid rgba(255, 255, 255, .06);
  font-weight: 600;
}
</style>
