<script setup>
import { duvidas } from '@/data/conteudo'
import { mdiPlus, mdiMinus } from '@/utils/icones'
</script>

<template>
  <!-- ETAPA 7 — redução de objeções.
       Nenhuma resposta inventa preço, prazo fechado ou política. -->
  <section id="faq" class="sec sec--duvidas">
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <div class="duvidas__cabecalho">
            <h2 v-reveal class="display display--md">
              Ainda com <span class="grad">alguma dúvida?</span>
            </h2>
            <p v-reveal="0.08" class="sec-sub">
              As perguntas que mais aparecem antes de começarmos.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <v-expansion-panels
            variant="accordion"
            class="duvidas__lista"
            elevation="0"
          >
            <v-expansion-panel
              v-for="(d, i) in duvidas"
              :key="d.pergunta"
              v-reveal="i * 0.04"
              class="qa"
              :title="d.pergunta"
              :text="d.resposta"
              :expand-icon="mdiPlus"
              :collapse-icon="mdiMinus"
            />
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.sec--duvidas { background: var(--bg-2); }

.duvidas__cabecalho { position: sticky; top: calc(var(--nav-h) + 30px); }

.duvidas__lista { background: transparent; }

.qa {
  border: 1px solid var(--line);
  border-radius: var(--r) !important;
  margin-bottom: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, .035), rgba(255, 255, 255, .008)) !important;
  overflow: hidden;
  transition: border-color .3s var(--ease);
}

.qa:deep(.v-expansion-panel-title) {
  font-weight: 600;
  font-size: 1.02rem;
  padding: 22px 24px;
  min-height: unset;
  color: var(--txt);
}

.qa:deep(.v-expansion-panel-title__icon) { color: var(--blue-2); }

.qa:deep(.v-expansion-panel-text__wrapper) {
  padding: 0 24px 24px;
  color: var(--muted);
  font-size: .99rem;
  line-height: 1.68;
}

/* o Vuetify arredonda só o primeiro/último item de um accordion;
   aqui cada pergunta é um cartão separado */
.qa:deep(.v-expansion-panel__shadow) { display: none; }
.qa::after { display: none !important; }

@media (max-width: 959px) {
  .duvidas__cabecalho { position: static; margin-bottom: 32px; }
}
</style>
