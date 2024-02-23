<script setup lang="ts">
const date = new Date().getFullYear();
</script>

<template>
  <footer
    class="mb-10 mt-24 flex flex-col items-center justify-center gap-2 text-center"
  >
    <p>© Wesley Araújo {{ date }} - Todos direitos reservados</p>

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
  </footer>
</template>
