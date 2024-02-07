<script setup lang="ts">
const handleScrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <header class="window-width mx-auto flex items-center justify-between">
    <h3 class="flex items-center justify-center gap-2 py-5">
      <Icon name="carbon:3d-mpr-toggle" class="text-emerald-500" /> Wesley
      Araújo
    </h3>

    <nav class="hidden md:flex">
      <span
        class="cursor-pointer px-4 py-2 hover:underline"
        @click="handleScrollToId('about')"
      >
        Sobre
      </span>
      <span
        class="cursor-pointer px-4 py-2 hover:underline"
        @click="handleScrollToId('hard-skills')"
      >
        Habilidades
      </span>
      <span
        class="cursor-pointer px-4 py-2 hover:underline"
        @click="handleScrollToId('projects')"
      >
        Projetos
      </span>
      <span
        class="cursor-pointer px-4 py-2 hover:underline"
        @click="handleScrollToId('contact')"
      >
        Contato
      </span>
    </nav>
  </header>
</template>
