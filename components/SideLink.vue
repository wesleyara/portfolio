<script setup lang="ts">
import { linkMap } from "~/utils/constants";

const handleScrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <div class="fixed left-4 top-20 hidden flex-col items-start gap-3 md:flex">
    <span
      v-for="item of linkMap"
      :key="item.label"
      class="flex cursor-pointer items-center justify-center gap-2"
      @click="handleScrollToId(item.href)"
    >
      <span
        class="flex items-center justify-center rounded-md border border-[#ebebeb] bg-[#ebebeb] bg-opacity-40 p-[2px]"
      >
        <Icon :name="item.icon" size="24" />
      </span>
      <span>{{ item.label }}</span>
    </span>
  </div>
</template>
