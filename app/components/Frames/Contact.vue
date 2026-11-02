<script setup lang="ts">
import { EMAIL, socialLinks } from "~/utils/constants";

const { t } = useI18n();

const emailEl = ref<HTMLElement | null>(null);
const copyState = ref("");

const selectEmail = () => {
  if (!emailEl.value) return;
  const range = document.createRange();
  range.selectNodeContents(emailEl.value);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
  copyState.value = t("contact.selected");
};

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyState.value = t("contact.copied");
  } catch {
    selectEmail();
  }
};
</script>

<template>
  <section id="contato" class="contact">
    <div class="sec-path">{{ t("contact.path") }}</div>
    <h2>{{ t("contact.title") }}</h2>
    <div class="mail">
      <code ref="emailEl">{{ EMAIL }}</code>
      <button class="btn" type="button" @click="copyEmail">
        {{ t("contact.copy") }}
      </button>
      <span class="copy-state" aria-live="polite">{{ copyState }}</span>
    </div>
    <div class="socials">
      <a class="btn" :href="`mailto:${EMAIL}`">Email ↗</a>
      <a class="btn" :href="socialLinks.github" target="_blank" rel="noopener"
        >GitHub ↗</a
      >
      <a class="btn" :href="socialLinks.linkedin" target="_blank" rel="noopener"
        >LinkedIn ↗</a
      >
    </div>
  </section>
</template>
