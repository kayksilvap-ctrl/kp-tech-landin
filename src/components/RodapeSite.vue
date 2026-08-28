<script setup>
import MarcaKp from './MarcaKp.vue'
import { linkWhatsapp } from '@/composables/useWhatsapp'

const ano = new Date().getFullYear()
</script>

<template>
  <footer class="rodape">
    <v-container>
      <div class="rodape__linha">
        <MarcaKp :tamanho="32" />

        <p class="rodape__texto">
          Design gráfico, criativos e identidade visual · Atendimento em todo o Brasil
        </p>

        <!-- redes só aqui no fim, para não competir com o CTA -->
        <div class="rodape__links">
          <a href="https://instagram.com/tecnology_kps" target="_blank" rel="noopener">Instagram</a>
          <a :href="linkWhatsapp('rodape')" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>

      <p class="rodape__copy">© {{ ano }} KP TECH. Todos os direitos reservados.</p>
    </v-container>
  </footer>
</template>

<style scoped>
.rodape {
  background: #04070d;
  border-top: 1px solid var(--line);
  padding: 52px 0 28px;
}

.rodape__linha {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  flex-wrap: wrap;
}

.rodape__texto {
  color: var(--muted-2);
  font-size: .9rem;
  flex: 1 1 280px;
  margin: 0;
}

.rodape__links { display: flex; gap: 22px; }

.rodape__links a {
  font-size: .92rem;
  font-weight: 600;
  color: var(--muted);
  text-decoration: none;
  transition: color .25s var(--ease);
}

.rodape__links a:hover { color: var(--blue-2); }

.rodape__copy {
  text-align: center;
  color: var(--muted-2);
  font-size: .8rem;
  margin: 38px 0 0;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, .05);
}

@media (max-width: 760px) {
  .rodape__linha { flex-direction: column; align-items: flex-start; gap: 18px; }
  /* espaço para a barra fixa não cobrir o rodapé */
  .rodape { padding-bottom: calc(96px + env(safe-area-inset-bottom)); }
}
</style>
