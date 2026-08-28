<script setup>
import BotaoWhatsapp from './BotaoWhatsapp.vue'
</script>

<template>
  <!-- ETAPA 8 — fechamento. As linhas do fundo convergem para o botão. -->
  <section id="contato" class="final">
    <div class="final__fundo" aria-hidden="true">
      <span class="final__brilho" />
      <svg class="final__raios" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMax slice">
        <g stroke="url(#raio)" fill="none" stroke-width="1">
          <path d="M-100 0 L600 640" />
          <path d="M180 0 L600 640" />
          <path d="M420 0 L600 640" />
          <path d="M1300 0 L600 640" />
          <path d="M1020 0 L600 640" />
          <path d="M780 0 L600 640" />
        </g>
        <defs>
          <linearGradient id="raio" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2f8bff" stop-opacity="0" />
            <stop offset="100%" stop-color="#5cc2ff" stop-opacity=".55" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <v-container class="final__conteudo">
      <h2 v-reveal class="display display--xl">
        <span class="linha">Vamos fazer sua marca </span>
        <span class="linha"><span class="grad">chamar atenção</span> de verdade?</span>
      </h2>

      <p v-reveal="0.08" class="final__copy">
        Me conte o que você precisa e vamos transformar sua ideia
        em um projeto visual profissional.
      </p>

      <div v-reveal="0.14" class="final__botao">
        <BotaoWhatsapp
          etapa="final"
          texto="Quero fazer meu orçamento"
          tamanho="xl"
          pulso
        />
      </div>

      <p v-reveal="0.18" class="micro">Conversa rápida e sem compromisso.</p>
      <p v-reveal="0.22" class="final__nota">
        Você explica a ideia. Eu te ajudo com o próximo passo.
      </p>
    </v-container>
  </section>
</template>

<style scoped>
.final {
  position: relative;
  padding: clamp(100px, 14vw, 190px) 0 clamp(84px, 11vw, 150px);
  text-align: center;
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(180deg, var(--bg-2) 0%, #060a12 60%, #04070d 100%);
}

.final__fundo { position: absolute; inset: 0; z-index: -1; }

.final__brilho {
  position: absolute;
  left: 50%;
  bottom: -30%;
  translate: -50% 0;
  width: min(120vw, 1100px);
  aspect-ratio: 1.6 / 1;
  background: radial-gradient(ellipse at center, rgba(47, 139, 255, .42), transparent 62%);
  filter: blur(70px);
}

.final__raios {
  position: absolute;
  inset: auto 0 0 0;
  width: 100%;
  height: 70%;
  opacity: .55;
}

.final__conteudo { display: flex; flex-direction: column; align-items: center; }

.final__copy {
  margin: 26px 0 0;
  color: var(--muted);
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  max-width: 52ch;
  line-height: 1.65;
}

.final__botao { margin-top: 44px; }

.final__nota {
  margin: 22px 0 0;
  font-size: .95rem;
  color: var(--silver);
  opacity: .75;
}

@media (max-width: 760px) {
  .final__botao { width: 100%; }
  .final__botao :deep(.btn-wa) { width: 100%; }
}
</style>
