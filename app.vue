<script setup lang="ts">
useSeoMeta({
  title: "Portfólio - Wesley Araújo",
  description: "Portfólio do Desenvolvedor Wesley Araújo",
  ogTitle: "Portfólio - Wesley Araújo",
  ogDescription: "Portfólio do Desenvolvedor Wesley Araújo",
  ogImage: "https://portfolio-vue-psi-nine.vercel.app/favicon.svg",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/svg",
      href: "/favicon.svg",
    },
  ],
});
</script>

<template>
  <NuxtPage />
</template>

<style lang="scss">
@use "~/assets/css/typography.scss";
@use "~/assets/css/globals.scss";
</style>
