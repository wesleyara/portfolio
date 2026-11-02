<script setup lang="ts">
const { t } = useI18n();
const i18nHead = useLocaleHead({ addSeoAttributes: true });

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
  link: [...(i18nHead.value.link || [])],
  meta: [
    ...(i18nHead.value.meta || []),
    { name: "theme-color", content: "#0b0f0e" },
  ],
}));

useSeoMeta({
  title: () => t("meta.title"),
  description: () => t("meta.description"),
  ogTitle: () => t("meta.title"),
  ogDescription: () => t("meta.description"),
  ogImage: "https://wesleyaraujo.dev/favicon.png",
  twitterCard: "summary",
});
</script>

<template>
  <NuxtPage />
</template>
