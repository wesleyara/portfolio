<script setup lang="ts">
import { navLinks } from "~/utils/constants";

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <header class="top">
    <div class="wrap">
      <NuxtLink class="logo" :to="localePath('/')">~/<b>wesleyara</b></NuxtLink>
      <nav class="nav" :aria-label="t('nav.sections')">
        <a v-for="link of navLinks" :key="link.id" :href="`#${link.id}`">
          {{ t(link.key) }}
        </a>
      </nav>
      <div class="lang" role="group" :aria-label="t('nav.language')">
        <NuxtLink
          v-for="item of locales"
          :key="typeof item === 'string' ? item : item.code"
          :to="switchLocalePath(typeof item === 'string' ? item : item.code)"
          :class="{
            active: (typeof item === 'string' ? item : item.code) === locale,
          }"
          :aria-current="
            (typeof item === 'string' ? item : item.code) === locale
              ? 'true'
              : undefined
          "
        >
          {{ (typeof item === "string" ? item : item.code).toUpperCase() }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
