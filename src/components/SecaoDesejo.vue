<script setup>
import { palavrasDesejo, ganhos } from '@/data/conteudo'
</script>

<template>
  <!-- ETAPA 3 — desejo: a transformação, não a técnica. -->
  <section id="desejo" class="sec sec--desejo">
    <v-container>
      <div class="desejo__intro">
        <h2 v-reveal class="display display--lg">Não é só uma arte bonita.</h2>
        <p v-reveal="0.08" class="title-anton desejo__sub">
          É a forma como sua marca é <span class="grad">percebida.</span>
        </p>
      </div>

      <div class="palavras" aria-hidden="true">
        <span
          v-for="(p, i) in palavrasDesejo"
          :key="p.texto"
          v-reveal="i * 0.06"
          class="palavra"
          :class="{ 'palavra--contorno': p.contorno }"
        >{{ p.texto }}</span>
      </div>

      <v-row dense>
        <v-col
          v-for="(g, i) in ganhos"
          :key="g.titulo"
          cols="12"
          sm="6"
          lg
        >
          <div v-reveal="i * 0.04" class="card-glass ganho">
            <strong>{{ g.titulo }}</strong>
            <span>{{ g.texto }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.sec--desejo { background: var(--bg-2); overflow: hidden; }

.desejo__intro { text-align: center; max-width: 760px; margin-inline: auto; }

.desejo__sub {
  margin-top: 18px;
  font-size: clamp(1.25rem, 3.4vw, 2.6rem);
  line-height: 1.18;
}

.palavras {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2px, .6vw, 8px);
  margin: clamp(48px, 7vw, 84px) 0;
}

.palavra {
  font-family: "Anton", sans-serif;
  font-size: clamp(2.1rem, 11vw, 8.5rem);
  line-height: 1;
  letter-spacing: -.02em;
  padding-block: .05em;
  color: transparent;
  background: linear-gradient(180deg, rgba(255, 255, 255, .92), rgba(255, 255, 255, .42));
  -webkit-background-clip: text;
  background-clip: text;
}

.palavra--contorno {
  background: none;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(120, 180, 255, .5);
}

.ganho {
  padding: 26px 22px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ganho strong { font-size: 1.02rem; font-weight: 700; color: var(--txt); }
.ganho span { font-size: .9rem; color: var(--muted); line-height: 1.55; }

@media (max-width: 760px) {
  .palavra--contorno { -webkit-text-stroke-width: 1px; }
}
</style>
