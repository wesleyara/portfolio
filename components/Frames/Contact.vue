<script setup lang="ts">
import { handleNavigate } from "~/utils/";
</script>

<template>
  <section class="window-width mx-auto my-10 flex flex-col gap-5">
    <h2 id="contact" class="text-emerald-500">Contato</h2>

    <span
      class="flex flex-col flex-wrap gap-8 md:flex-row md:justify-between md:gap-0"
    >
      <span class="flex w-[235px] flex-col gap-1">
        <Icon
          name="mdi:gmail"
          size="50"
          class="cursor-pointer text-emerald-500"
          @click="handleNavigate('mailto:wesleyara.contato@gmail.com')"
        />
        <span
          class="underline"
          @click="handleNavigate('mailto:wesleyara.contato@gmail.com')"
        >
          wesleyara.contato@gmail.com
        </span>

        <span>Me envie um email!</span>
      </span>

      <span class="flex w-[235px] flex-col gap-1">
        <Icon
          name="mdi:linkedin"
          size="50"
          class="cursor-pointer text-emerald-500"
          @click="handleNavigate('https://www.linkedin.com/in/wesley-ara/')"
        />
        <span
          class="underline"
          @click="handleNavigate('https://www.linkedin.com/in/wesley-ara/')"
        >
          Wesley Araújo
        </span>

        <span>Vamos nos conectar!</span>
      </span>

      <span class="flex w-[235px] flex-col gap-1">
        <Icon
          name="mdi:github"
          size="50"
          class="cursor-pointer text-emerald-500"
          @click="handleNavigate('https://github.com/wesleyara')"
        />
        <span
          class="underline"
          @click="handleNavigate('https://github.com/wesleyara')"
        >
          wesleyara
        </span>

        <span>Veja alguns dos meus projetos!</span>
      </span>
    </span>
  </section>
</template>
