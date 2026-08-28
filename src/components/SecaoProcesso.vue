<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BotaoWhatsapp from './BotaoWhatsapp.vue'
import { passos } from '@/data/conteudo'

// A trilha vai preenchendo conforme os passos aparecem —
// reforça a ideia de "processo simples, do início ao fim".
const ativos = ref(0)
const refsPassos = ref([])
let observer = null

onMounted(() => {
  const semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (semAnimacao || !('IntersectionObserver' in window)) {
    ativos.value = passos.length
    return
  }

  observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return
        const i = Number(entrada.target.dataset.indice)
        // só avança: não regride quando o usuário rola para cima
        ativos.value = Math.max(ativos.value, i + 1)
        observer.unobserve(entrada.target)
      })
    },
    { threshold: 0.45 },
  )

  refsPassos.value.forEach((el) => el && observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <!-- ETAPA 6 — processo: elimina o medo de contratar pela internet. -->
  <section id="processo" class="sec sec--processo">
    <v-container>
      <header class="sec-head">
        <h2 v-reveal class="display display--lg">
          Simples do <span class="grad">início ao fim.</span>
        </h2>
        <p v-reveal="0.08" class="sec-sub">
          Sem burocracia, sem formulário gigante. Você fala comigo e a gente resolve.
        </p>
      </header>

      <div class="trilha">
        <span class="trilha__base" aria-hidden="true">
          <i
            class="trilha__preenche"
            :style="{ width: (ativos / passos.length) * 100 + '%' }"
          />
        </span>

        <v-row>
          <v-col
            v-for="(p, i) in passos"
            :key="p.numero"
            cols="12"
            sm="6"
            md="3"
          >
            <div
              :ref="el => refsPassos[i] = el"
              :data-indice="i"
              v-reveal="i * 0.06"
              class="passo"
              :class="{ 'passo--ativo': i < ativos }"
            >
              <span class="passo__ponto" aria-hidden="true" />
              <span class="passo__n">{{ p.numero }}</span>
              <h3 class="title-anton passo__titulo">{{ p.titulo }}</h3>
              <p>{{ p.texto }}</p>
            </div>
          </v-col>
        </v-row>
      </div>

      <div v-reveal class="cta-meio">
        <BotaoWhatsapp etapa="processo" texto="Vamos começar" />
        <p class="micro">O primeiro passo é só me mandar uma mensagem.</p>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.sec--processo {
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
}

.trilha { position: relative; }

.trilha__base {
  position: absolute;
  left: 12px;
  right: 12px;
  top: 19px;
  height: 2px;
  background: var(--line);
  border-radius: 2px;
  overflow: hidden;
}

.trilha__preenche {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--blue), var(--blue-2));
  transition: width .9s var(--ease);
}

.passo { position: relative; padding-top: 56px; }

.passo__ponto {
  position: absolute;
  top: 11px;
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bg-2);
  border: 2px solid var(--line-2);
  transition: border-color .4s var(--ease), background .4s var(--ease), box-shadow .4s var(--ease);
}

.passo--ativo .passo__ponto {
  border-color: var(--blue-2);
  background: var(--blue);
  box-shadow: 0 0 0 6px rgba(47, 139, 255, .16);
}

.passo__n {
  display: block;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--blue-2);
  opacity: .8;
  margin-bottom: 10px;
}

.passo__titulo {
  font-size: clamp(1.02rem, 1.7vw, 1.4rem);
  line-height: 1.25;
  margin-bottom: 12px;
}

.passo p {
  color: var(--muted);
  font-size: .95rem;
  line-height: 1.6;
  margin: 0;
}

.cta-meio { margin-top: clamp(40px, 5vw, 60px); text-align: center; }

/* abaixo de md a linha horizontal não faz sentido */
@media (max-width: 959px) {
  .trilha__base { display: none; }
  .passo { padding-top: 0; padding-left: 34px; }
  .passo__ponto { top: 4px; }
}

@media (max-width: 760px) {
  .cta-meio :deep(.btn-wa) { width: 100%; }
}
</style>
