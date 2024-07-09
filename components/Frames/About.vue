<script setup lang="ts">
import { trackEvent } from "~/utils";
import { learnMoreMap } from "~/utils/constants";
</script>

<template>
  <section class="window-width mx-auto my-10 flex flex-col gap-5">
    <h2 id="about" class="text-emerald-500">Sobre</h2>
    <UAccordion :items="learnMoreMap" @click="trackEvent('about')">
      <template #formation>
        <ul>
          <li>
            - Graduado em Licenciatura em Matemática pela Universidade de
            Pernambuco (2017-2021).
          </li>
          <li>
            - Graduando em Análise e Desenvolvimento de Sistemas pela Estácio
            (2024).
          </li>
        </ul>
      </template>
    </UAccordion>
  </section>
</template>
