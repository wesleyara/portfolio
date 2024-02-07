<script setup lang="ts">
import { handleNavigate } from "~/utils/";

const handleScrollToForm = () => {
  const form = document.getElementById("about");

  if (form) {
    form.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<template>
  <section
    class="home-content window-width mx-auto flex flex-col items-center justify-center gap-10 text-center"
  >
    <h1>
      Bem-vindo ao meu <span class="text-5xl text-emerald-500">portfólio!</span>
    </h1>

    <span class="flex flex-col items-center gap-4">
      <span class="font-DMSans w-3/4">
        Desbravando o mundo é que podemos encontrar as melhores soluções.
      </span>

      <span class="flex gap-3 text-emerald-500">
        <Icon
          name="mdi:github"
          size="24"
          class="cursor-pointer"
          @click="handleNavigate('https://github.com/wesleyara')"
        />
        <Icon
          name="mdi:linkedin"
          size="24"
          class="cursor-pointer"
          @click="handleNavigate('https://www.linkedin.com/in/wesley-ara/')"
        />
        <Icon
          name="mdi:gmail"
          size="24"
          class="cursor-pointer"
          @click="handleNavigate('mailto:wesleyara.contato@gmail.com')"
        />
      </span>

      <span class="flex gap-5">
        <button class="btn" @click="handleScrollToForm">
          <Icon name="ph:rocket-launch-bold" size="20" /> Vamos começar!
        </button>
      </span></span
    >
  </section>
</template>
