<script setup>
import { problemas } from '@/data/conteudo'
</script>

<template>
  <!-- ETAPA 2 — identificação: o visitante reconhece o problema.
       Sem CTA grande aqui de propósito: o objetivo é consciência. -->
  <section id="identificacao" class="sec sec--problema">
    <v-container>
      <v-row align="end" class="mb-8">
        <v-col cols="12" md="7">
          <h2 v-reveal class="display display--lg">
            <span class="linha">Sua marca pode ser boa. </span>
            <span class="linha">Mas ela também precisa <span class="grad">parecer boa.</span></span>
          </h2>
        </v-col>

        <v-col cols="12" md="5">
          <div v-reveal="0.1" class="problema__copy">
            <p>No digital, a primeira impressão acontece antes da primeira conversa.</p>
            <p>
              E muitas vezes o cliente decide em segundos se continua olhando
              ou simplesmente passa para o próximo conteúdo.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col
          v-for="(item, i) in problemas"
          :key="item"
          cols="12"
          sm="6"
          lg="4"
        >
          <div v-reveal="i * 0.04" class="card-glass problema__item">
            <span class="problema__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ item }}</span>
          </div>
        </v-col>
      </v-row>

      <p v-reveal class="title-anton problema__fecho">
        É exatamente aí que entra um <span class="grad">design bem feito.</span>
      </p>
    </v-container>
  </section>
</template>

<style scoped>
.sec--problema {
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
}

.problema__copy p {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.65;
  margin: 0;
}

.problema__copy p + p { margin-top: 16px; }

.problema__item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 24px 26px;
  height: 100%;
  color: var(--muted);
  font-size: .99rem;
  line-height: 1.5;
}

.problema__n {
  font-family: "Anton", sans-serif;
  font-size: .88rem;
  letter-spacing: .05em;
  color: rgba(120, 180, 255, .55);
  flex: none;
  padding-top: 2px;
}

.problema__fecho {
  margin-top: clamp(40px, 6vw, 70px);
  font-size: clamp(1.35rem, 3.4vw, 2.6rem);
  line-height: 1.18;
  text-align: center;
}
</style>
