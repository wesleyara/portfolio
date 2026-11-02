<script setup lang="ts">
const { t } = useI18n();
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="wrap">
      <span>© {{ year }} Wesley Gomes de Araújo</span>
      <span>Nuxt · Tailwind · {{ t("footer.made") }}</span>
    </div>
  </footer>
</template>
