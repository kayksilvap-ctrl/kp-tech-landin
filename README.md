# KP TECH — Landing page de conversão

Vue 3 + Vuetify 3 + Vite.

Não é um portfólio: é uma **página de vendas** que usa o portfólio como
prova. Tudo conduz para uma conversa no WhatsApp.

---

## Rodar

```bash
npm install     # só na primeira vez
npm run dev     # abre em http://localhost:5173
```

## Publicar

```bash
npm run build   # gera a pasta dist/
npm run preview # confere o resultado do build antes de subir
```

Suba o conteúdo de `dist/` para a hospedagem (Vercel, Netlify, Hostinger,
GitHub Pages...). O `base: './'` do `vite.config.js` faz a página funcionar
tanto na raiz do domínio quanto em subpasta.

---

## O que mexer no dia a dia

| Quero mudar… | Arquivo |
| --- | --- |
| Número do WhatsApp e mensagens dos botões | `src/composables/useWhatsapp.js` |
| Projetos do portfólio, serviços, passos, dúvidas, menu | `src/data/conteudo.js` |
| Artes do portfólio (imagens) | `public/assets/portfolio/` — veja o `LEIA-ME.txt` de lá |
| Logo da marca | `public/assets/logo.png` |
| Cores e tipografia | `src/styles/main.css` (tokens no `:root`) e `src/plugins/vuetify.js` |

---

## A estrutura é o funil

A ordem das seções em `App.vue` **é** a estratégia. Cada uma prepara a
próxima — reordenar quebra a lógica:

| # | Etapa | Componente | Papel |
| --- | --- | --- | --- |
| 1 | Atenção | `SecaoHero` | Vende o resultado, não a profissão. CTA principal já na primeira dobra. |
| 2 | Identificação | `SecaoProblema` | O visitante reconhece o problema. Sem CTA grande de propósito. |
| 3 | Desejo | `SecaoDesejo` | A transformação: atenção, identidade, autoridade, valor. |
| 4 | Prova | `SecaoPortfolio` | O trabalho falando por si. CTA contextual depois de 5 projetos. |
| 5 | Solução | `SecaoServicos` | O que dá para contratar, descrito pelo resultado que entrega. |
| 6 | Segurança | `SecaoProcesso` | Como funciona do início ao fim. Tira o medo de contratar online. |
| 7 | Objeções | `SecaoDuvidas` | As 5 perguntas que travam a decisão. |
| 8 | Ação | `CtaFinal` | Fechamento. As linhas do fundo convergem para o botão. |

## Os CTAs

Existem só **duas** ações na página, e essa hierarquia é proposital:

- **Primária:** ir para o WhatsApp (sempre verde, sempre em destaque).
- **Secundária:** continuar explorando o portfólio (link discreto, nunca botão verde).

Nada mais compete com elas — por isso as redes sociais só aparecem no rodapé.

Cada botão manda uma **mensagem pré-preenchida diferente** (`data` em
`useWhatsapp.js`). Quando a conversa chega, dá para saber de qual parte
da página o cliente veio, sem precisar de rastreador nenhum:

| Onde | Etapa | Botão |
| --- | --- | --- |
| Navbar | `navbar` | Solicitar orçamento |
| Hero | `hero` | Quero valorizar minha marca |
| Depois dos projetos | `portfolio` | Quero algo assim |
| Serviços | `servicos` | Me conte sua ideia |
| Processo | `processo` | Vamos começar |
| CTA final | `final` | Quero fazer meu orçamento |
| Botão flutuante (desktop) | `flutuante` | Falar no WhatsApp |
| Barra fixa (celular) | `barraFixa` | Pedir orçamento |
| Rodapé | `rodape` | WhatsApp |

Os atalhos persistentes (`AtalhosContato.vue`) aparecem depois do hero e
**somem ao chegar no CTA final** — ali o botão grande já está na tela.

---

## Decisões que parecem detalhe mas não são

- **Entrelinha dos títulos em 1.04, nunca menos.** A Anton cola o acento na
  altura de caixa alta; abaixo disso o til de "TÃO" encosta na linha de cima
  e o cedilha de "FAÇA" some.
- **`.grad` tem `padding-block`.** O gradiente é recortado no texto e só
  pinta dentro da caixa do elemento — sem o padding, acentos e cedilhas
  ficariam invisíveis.
- **Os títulos usam `<span class="linha">` com espaço no fim do texto**, não
  `<br>`. O Vue remove nós de texto em branco entre elementos; no celular,
  onde as linhas viram `inline`, sem esse espaço as palavras colariam
  ("parecerTÃO").
- **`cols: 6` ou `4` nos projetos, fechando 12 por linha.** Todos os cards
  da mesma linha têm a mesma largura e proporção 4:5, então a mesma altura —
  é o que evita buraco no grid.
- **Ícones via `@mdi/js`, não `@mdi/font`.** A fonte completa do MDI são
  ~3,6 MB para usar 5 ícones; em SVG cada um é uma string de path.
- **Sem prova social inventada.** Nenhum número, depoimento, contador de
  vagas ou desconto fictício. A confiança vem do trabalho e do processo
  explicado — e as respostas sobre prazo levam a conversa para o WhatsApp
  em vez de cravar um prazo que não existe.

---

## Acessibilidade e performance

- `prefers-reduced-motion` desliga as animações de entrada.
- Imagens do portfólio com `loading="lazy"` e fallback quando o arquivo
  ainda não existe.
- Bundle: ~44 KB de CSS + ~90 KB de JS (gzip).
