<script setup lang="ts">
import { formatDate } from "~/utils";

const date = new Date("2022-04-21");
const dateFormated = formatDate(date);
</script>

<template>
  <div class="window-width mx-auto my-10 flex flex-col gap-5">
    <h2 id="about" class="text-emerald-500">Sobre</h2>

    <div class="flex flex-col gap-5 lg:flex-row">
      <article
        style="flex: 1"
        class="flex h-[336px] flex-col gap-3 overflow-auto text-justify"
      >
        <span>
          Me chamo Wesley Gomes de Araújo, sou graduado em Licenciatura em
          Matemática pela Universidade de Pernambuco. Iniciei meus estudos na
          área de programação em 2021 e atuo no mercado de desenvolvimento a
          mais de {{ dateFormated }}.
        </span>
        <span>
          Atualmente estudo e trabalho com Desenvolvimento Web, utilizando
          stacks como Node, React, Vue, Typescript e Go. Sempre me dedico em
          diversos projetos pessoais os quais compartilho em meu repositório no
          GitHub.
        </span>
        <span>
          Procuro contribuir o máximo para o crescimento e melhora da equipe e
          empresa que faço/farei parte, estou sempre disposto a aprender e me
          adaptar as diversas situações e desafios propostos, buscando evoluir
          como pessoa e profissional.
        </span>
      </article>

      <span style="flex: 1">
        <NuxtImg src="/about-image.jpg" alt="Wesley Araújo" />
      </span>
    </div>
  </div>
</template>
