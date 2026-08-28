<script setup>
import BotaoWhatsapp from './BotaoWhatsapp.vue'
import { faixaHero } from '@/data/conteudo'
import { mdiArrowDown } from '@/utils/icones'

// a faixa precisa do conteúdo duplicado para o loop não dar salto
const faixa = [...faixaHero, ...faixaHero]
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero__fundo" aria-hidden="true">
      <span class="orbe orbe--a" />
      <span class="orbe orbe--b" />
      <span class="malha" />
    </div>

    <v-container class="hero__conteudo">
      <p v-reveal class="eyebrow">Design gráfico · Social media · Criativos</p>

      <!-- cada linha é um span com espaço final dentro do texto:
           no desktop viram blocos, no celular fluem sem colar palavras -->
      <h1 v-reveal="0.06" class="display display--xl">
        <span class="linha">Faça sua marca parecer </span>
        <span class="linha grad">tão profissional </span>
        <span class="linha">quanto ela merece.</span>
      </h1>

      <p v-reveal="0.12" class="lead">
        Crio conteúdos visuais profissionais para transformar ideias, negócios e marcas
        em algo que as pessoas realmente param para olhar.
      </p>

      <div v-reveal="0.18" class="hero__cta">
        <BotaoWhatsapp
          etapa="hero"
          texto="Quero valorizar minha marca"
          tamanho="xl"
        />
        <p class="micro">Me conte sua ideia pelo WhatsApp. Sem compromisso.</p>

        <a href="#trabalhos" class="link-ghost">
          Ver meus trabalhos
          <v-icon :icon="mdiArrowDown" size="18" />
        </a>
      </div>
    </v-container>

    <div class="faixa" aria-hidden="true">
      <div class="faixa__linha">
        <template v-for="(item, i) in faixa" :key="i">
          <span>{{ item }}</span>
          <i />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: calc(var(--nav-h) + 48px);
  overflow: hidden;
  isolation: isolate;
}

.hero__fundo { position: absolute; inset: 0; z-index: -1; overflow: hidden; }

.orbe {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: .5;
}

.orbe--a {
  width: min(70vw, 760px);
  aspect-ratio: 1;
  top: -24%;
  right: -14%;
  background: radial-gradient(circle at 40% 40%, rgba(47, 139, 255, .6), rgba(47, 139, 255, 0) 65%);
  animation: flutuar 16s ease-in-out infinite;
}

.orbe--b {
  width: min(58vw, 600px);
  aspect-ratio: 1;
  bottom: -28%;
  left: -16%;
  background: radial-gradient(circle at 60% 40%, rgba(92, 194, 255, .34), rgba(92, 194, 255, 0) 68%);
  animation: flutuar 22s ease-in-out infinite reverse;
}

@keyframes flutuar {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50%      { transform: translate3d(-4%, 5%, 0); }
}

.malha {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, .035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, .035) 1px, transparent 1px);
  background-size: 74px 74px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 20%, transparent 78%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 20%, transparent 78%);
}

.hero__conteudo { flex: 1; display: flex; flex-direction: column; justify-content: center; padding-bottom: 56px; }
.hero__cta { margin-top: 40px; }
.hero__cta .link-ghost { display: flex; width: fit-content; }

/* faixa rolante */
.faixa {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, .02);
  padding: 14px 0;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.faixa__linha {
  display: flex;
  align-items: center;
  gap: 28px;
  width: max-content;
  white-space: nowrap;
  animation: correr 38s linear infinite;
}

.faixa__linha span {
  font-size: .76rem;
  font-weight: 700;
  letter-spacing: .2em;
  color: var(--muted-2);
}

.faixa__linha i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--blue);
  opacity: .7;
  flex: none;
}

@keyframes correr {
  to { transform: translateX(-50%); }
}

@media (max-width: 760px) {
  .hero { min-height: auto; padding-top: calc(var(--nav-h) + 40px); }
  .hero__conteudo { padding-bottom: 48px; }
  .hero__cta :deep(.btn-wa) { width: 100%; }
}
</style>
