<script setup>
import BotaoWhatsapp from './BotaoWhatsapp.vue'
import { servicos } from '@/data/conteudo'
</script>

<template>
  <!-- ETAPA 5 — solução. Já viu a qualidade; agora sabe o que contratar. -->
  <section id="servicos" class="sec sec--servicos">
    <v-container>
      <header class="sec-head">
        <h2 v-reveal class="display display--lg">
          Como posso ajudar <span class="grad">sua marca?</span>
        </h2>
        <p v-reveal="0.08" class="sec-sub">
          Cada serviço existe por um motivo: fazer sua comunicação trabalhar a seu favor.
        </p>
      </header>

      <v-row dense>
        <v-col
          v-for="(s, i) in servicos"
          :key="s.numero"
          cols="12"
          sm="6"
          lg="4"
        >
          <div v-reveal="(i % 3) * 0.06" class="servico">
            <span class="servico__n">{{ s.numero }}</span>
            <h3 class="servico__titulo">{{ s.titulo }}</h3>
            <p>{{ s.texto }}</p>
          </div>
        </v-col>
      </v-row>

      <!-- tira a objeção de quem não sabe o nome do que precisa -->
      <div v-reveal class="cta-meio">
        <p class="title-anton cta-meio__pergunta">
          Não sabe exatamente qual serviço precisa?
        </p>
        <BotaoWhatsapp etapa="servicos" texto="Me conte sua ideia" />
        <p class="micro">Eu te ajudo a encontrar a melhor solução.</p>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.sec--servicos { background: var(--bg); }

.servico {
  position: relative;
  overflow: hidden;
  height: 100%;
  padding: 34px 30px 38px;
  border-radius: var(--r-lg);
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(255, 255, 255, .04), rgba(255, 255, 255, .008));
  transition: border-color .35s var(--ease), transform .35s var(--ease);
}

.servico::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(120, 180, 255, .6), transparent);
  opacity: 0;
  transition: opacity .35s var(--ease);
}

.servico:hover { transform: translateY(-6px); border-color: rgba(120, 180, 255, .3); }
.servico:hover::before { opacity: 1; }

.servico__n {
  display: block;
  font-family: "Anton", sans-serif;
  font-size: 2.4rem;
  line-height: 1;
  color: transparent;
  background: var(--grad);
  -webkit-background-clip: text;
  background-clip: text;
  opacity: .55;
  margin-bottom: 18px;
}

.servico__titulo {
  font-size: 1.22rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--txt);
}

.servico p {
  color: var(--muted);
  font-size: .97rem;
  line-height: 1.62;
  margin: 0;
}

.cta-meio {
  margin-top: clamp(44px, 6vw, 76px);
  text-align: center;
}

.cta-meio__pergunta {
  font-size: clamp(1.15rem, 2.6vw, 1.9rem);
  line-height: 1.22;
  margin-bottom: 24px;
}

@media (max-width: 760px) {
  .cta-meio :deep(.btn-wa) { width: 100%; }
}
</style>
