<script setup lang="ts">
const handleScrollToForm = () => {
  const form = document.getElementById("about");

  if (form) {
    form.scrollIntoView({
      behavior: "smooth",
      block: "center",
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

    <span class="font-DMSans w-3/4">
      Me chamo Wesley Araújo, sou Desenvolvedor e estou sempre em busca do
      próximo desafio.
    </span>

    <span class="flex gap-5">
      <button class="btn" @click="handleScrollToForm">
        <Icon name="ph:rocket-launch-bold" size="20" /> Vamos começar!
      </button>
    </span>
  </section>
</template>
