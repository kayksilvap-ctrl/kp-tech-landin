<script setup>
import { ref, computed } from 'vue'
import { urlPublica } from '@/utils/assets'
import { mdiArrowRight } from '@/utils/icones'

const props = defineProps({
  projeto: { type: Object, required: true },
})

// Enquanto a arte não estiver em public/assets/portfolio/,
// o card mostra um bloco decorativo com o rótulo do projeto.
const falhou = ref(false)
const src = computed(() => urlPublica(`assets/portfolio/${props.projeto.arquivo}`))
</script>

<template>
  <article class="projeto">
    <component
      :is="falhou ? 'div' : 'a'"
      v-bind="falhou ? {} : { href: src, target: '_blank', rel: 'noopener' }"
      class="projeto__link"
    >
      <div class="projeto__media">
        <img
          v-show="!falhou"
          :src="src"
          :alt="projeto.alt"
          loading="lazy"
          decoding="async"
          class="projeto__img"
          @error="falhou = true"
        >

        <span v-if="falhou" class="projeto__placeholder" aria-hidden="true">
          {{ projeto.rotulo }}
        </span>
      </div>

      <div class="projeto__meta">
        <span class="projeto__cat">{{ projeto.categoria }}</span>
        <div class="projeto__linha">
          <h3 class="projeto__titulo">{{ projeto.titulo }}</h3>
          <span class="projeto__seta" aria-hidden="true">
            <v-icon :icon="mdiArrowRight" size="18" />
          </span>
        </div>
      </div>
    </component>
  </article>
</template>

<style scoped>
.projeto__link { display: block; text-decoration: none; color: inherit; }

.projeto__media {
  position: relative;
  overflow: hidden;
  border-radius: var(--r);
  border: 1px solid var(--line);
  background: linear-gradient(150deg, #101a2b, #070c14);
  /* as artes são 4:5 — todos os cards da mesma linha ficam
     com a mesma altura, sem buraco no grid */
  aspect-ratio: 4 / 5;
}

.projeto__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* corta a partir do topo: o título da arte sempre aparece */
  object-position: top center;
  display: block;
  transition: transform .8s var(--ease), filter .5s var(--ease);
}

.projeto__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 7, 13, 0) 42%, rgba(4, 7, 13, .82) 100%);
  opacity: 0;
  transition: opacity .45s var(--ease);
  pointer-events: none;
}

.projeto__placeholder {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-family: "Anton", sans-serif;
  font-size: 1rem;
  letter-spacing: .22em;
  color: rgba(140, 180, 235, .4);
  background:
    radial-gradient(120% 80% at 50% 0%, rgba(47, 139, 255, .18), transparent 60%),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, .028) 0 12px, transparent 12px 24px);
}

.projeto:hover .projeto__img { transform: scale(1.06); filter: brightness(.72); }
.projeto:hover .projeto__media::after { opacity: 1; }

.projeto__meta { padding: 18px 4px 0; }

.projeto__cat {
  display: block;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--blue-2);
  opacity: .85;
}

.projeto__linha {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 7px;
}

.projeto__titulo {
  font-size: 1.02rem;
  font-weight: 600;
  line-height: 1.35;
  color: var(--txt);
  margin: 0;
  transition: color .3s var(--ease);
}

.projeto__seta {
  width: 34px;
  height: 34px;
  flex: none;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--line-2);
  color: var(--muted);
  transition:
    transform .35s var(--ease),
    background .35s var(--ease),
    color .35s var(--ease),
    border-color .35s var(--ease);
}

.projeto:hover .projeto__titulo { color: #fff; }

.projeto:hover .projeto__seta {
  transform: translateX(4px);
  background: var(--blue);
  border-color: var(--blue);
  color: #fff;
}
</style>
