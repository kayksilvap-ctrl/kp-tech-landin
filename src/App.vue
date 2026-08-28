<script setup>
import CabecalhoSite from './components/CabecalhoSite.vue'
import SecaoHero from './components/SecaoHero.vue'
import SecaoProblema from './components/SecaoProblema.vue'
import SecaoDesejo from './components/SecaoDesejo.vue'
import SecaoPortfolio from './components/SecaoPortfolio.vue'
import SecaoServicos from './components/SecaoServicos.vue'
import SecaoProcesso from './components/SecaoProcesso.vue'
import SecaoDuvidas from './components/SecaoDuvidas.vue'
import CtaFinal from './components/CtaFinal.vue'
import RodapeSite from './components/RodapeSite.vue'
import AtalhosContato from './components/AtalhosContato.vue'
</script>

<template>
  <v-app>
    <CabecalhoSite />

    <v-main>
      <!-- A ordem é o funil. Cada seção prepara a próxima:
           1 atenção · 2 identificação · 3 desejo · 4 prova
           5 solução · 6 segurança · 7 objeções · 8 ação -->
      <SecaoHero />
      <SecaoProblema />
      <SecaoDesejo />
      <SecaoPortfolio />
      <SecaoServicos />
      <SecaoProcesso />
      <SecaoDuvidas />
      <CtaFinal />
    </v-main>

    <RodapeSite />
    <AtalhosContato />
  </v-app>
</template>

<style>
/* o v-main reserva espaço para a app-bar; o hero já cuida do
   próprio respiro, então zeramos aqui */
.v-main { padding-top: 0 !important; }
</style>
