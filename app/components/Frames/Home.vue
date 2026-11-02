<script setup lang="ts">
import { socialLinks } from "~/utils/constants";

const { t } = useI18n();
</script>

<template>
  <div class="hero">
    <div>
      <div class="eyebrow">
        <span class="dot" aria-hidden="true"></span>
        <span>{{ t("hero.eyebrow") }}</span>
      </div>
      <h1>
        <span class="name">Wesley Araújo</span>
        {{ t("hero.title") }} <em>{{ t("hero.titleAccent") }}</em
        >.
      </h1>
      <p class="lede">
        {{ t("hero.ledeBefore") }} <strong>{{ t("hero.ledeStrong") }}</strong
        >{{ t("hero.ledeAfter") }}
      </p>
      <div class="ctas">
        <a class="btn primary" href="#projetos">{{ t("hero.cta") }}</a>
        <a
          class="btn"
          :href="socialLinks.github"
          target="_blank"
          rel="noopener"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"
            />
          </svg>
          github.com/wesleyara
        </a>
      </div>
    </div>
    <div class="term" :aria-label="t('hero.terminalLabel')">
      <div class="term-bar">
        <i></i><i></i><i></i><span>wesley@dev: ~</span>
      </div>
      <!-- prettier-ignore -->
      <pre><span class="p">$</span> <span class="c">ss -tln | grep LISTEN</span>
  <span class="k">:5100</span>   dockerlocal  api
  <span class="k">:5551</span>   dockerlocal  web
  <span class="k">:8880</span>   clicklocal
<span class="p">$</span> <span class="c">wttp run ./collections --reporter junit</span>
  <span class="k">✓</span> 12 requests · 0 failed
<span class="p">$</span> <span class="c">echo $CLOUD_ACCOUNT</span>
  {{ t("hero.terminalEmpty") }}</pre>
    </div>
  </div>
</template>
