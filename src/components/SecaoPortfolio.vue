<script setup>
import CardProjeto from './CardProjeto.vue'
import BotaoWhatsapp from './BotaoWhatsapp.vue'
import { projetos, projetosExtras } from '@/data/conteudo'
</script>

<template>
  <!-- ETAPA 4 — prova visual. Seção mais forte da página. -->
  <section id="trabalhos" class="sec sec--portfolio">
    <v-container>
      <header class="sec-head">
        <h2 v-reveal class="display display--lg">
          Veja o que eu <span class="grad">posso criar.</span>
        </h2>
        <p v-reveal="0.08" class="sec-sub">
          Alguns projetos que transformaram ideias em comunicação visual.
        </p>
      </header>

      <!-- primeiros 5 projetos -->
      <v-row>
        <v-col
          v-for="(p, i) in projetos"
          :key="p.arquivo"
          cols="12"
          sm="6"
          :md="p.cols"
        >
          <div v-reveal="(i % 3) * 0.06">
            <CardProjeto :projeto="p" />
          </div>
        </v-col>
      </v-row>

      <!-- CTA contextual: chega depois da prova, antes de cansar -->
      <div v-reveal class="cta-portfolio">
        <div class="cta-portfolio__brilho" aria-hidden="true" />
        <h3 class="title-anton cta-portfolio__titulo">
          Imaginou sua marca com esse nível de apresentação?
        </h3>
        <BotaoWhatsapp etapa="portfolio" texto="Quero algo assim" />
        <p class="micro">Me mande sua ideia e conversamos sobre o projeto.</p>
      </div>

      <!-- restante dos projetos -->
      <v-row>
        <v-col
          v-for="(p, i) in projetosExtras"
          :key="p.arquivo"
          cols="12"
          sm="6"
          :md="p.cols"
        >
          <div v-reveal="(i % 3) * 0.06">
            <CardProjeto :projeto="p" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.sec--portfolio {
  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 40%);
}

.cta-portfolio {
  position: relative;
  overflow: hidden;
  margin: clamp(28px, 4vw, 48px) 0;
  padding: clamp(36px, 5vw, 58px) 28px;
  text-align: center;
  border-radius: var(--r-lg);
  border: 1px solid rgba(120, 180, 255, .2);
  background: linear-gradient(180deg, rgba(47, 139, 255, .1), rgba(8, 13, 22, .6));
}

.cta-portfolio__brilho {
  position: absolute;
  left: 50%;
  top: -60%;
  translate: -50% 0;
  width: min(90%, 760px);
  aspect-ratio: 2 / 1;
  background: radial-gradient(ellipse at center, rgba(47, 139, 255, .4), transparent 65%);
  filter: blur(50px);
  pointer-events: none;
}

.cta-portfolio__titulo {
  position: relative;
  font-size: clamp(1.2rem, 3vw, 2.3rem);
  margin-bottom: 28px;
  text-wrap: balance;
}

.cta-portfolio :deep(.btn-wa),
.cta-portfolio .micro {
  position: relative;
}

@media (max-width: 760px) {
  .cta-portfolio :deep(.btn-wa) { width: 100%; }
}
</style>
