<script setup lang="ts">
import { stackGroups } from "~/utils/constants";

const { t } = useI18n();
</script>

<template>
  <section id="stack">
    <div class="sec-head">
      <div>
        <div class="sec-path">{{ t("stack.path") }}</div>
        <h2>{{ t("stack.title") }}</h2>
      </div>
    </div>
    <div class="stack">
      <div v-for="group of stackGroups" :key="group.key">
        <h3>{{ t(group.key) }}</h3>
        <ul>
          <li v-for="item of group.items" :key="item.name">
            {{ item.name }}<small v-if="item.extra">{{ item.extra }}</small>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
