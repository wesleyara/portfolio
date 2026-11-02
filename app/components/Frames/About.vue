<script setup lang="ts">
import { experience } from "~/utils/constants";
import { pick } from "~/utils";

const { t, locale } = useI18n();
</script>

<template>
  <section id="sobre">
    <div class="sec-head">
      <div>
        <div class="sec-path">{{ t("about.path") }}</div>
        <h2>{{ t("about.title") }}</h2>
      </div>
    </div>
    <div class="about">
      <div>
        <p>{{ t("about.p1") }}</p>
        <p>{{ t("about.p2") }}</p>
        <p>{{ t("about.p3") }}</p>
      </div>
      <div class="xp">
        <h3 class="xp-h">{{ t("about.experience") }}</h3>
        <ol class="timeline">
          <li
            v-for="item of experience"
            :key="item.when.en"
            :class="{ now: item.current }"
          >
            <span class="when">{{ pick(item.when, locale) }}</span>
            <span class="what">
              {{ pick(item.role, locale) }}
              <span class="org">· {{ pick(item.org, locale) }}</span>
            </span>
            <span class="where">{{ pick(item.summary, locale) }}</span>
          </li>
        </ol>
        <p class="edu">{{ t("about.education") }}</p>
      </div>
    </div>
  </section>
</template>
