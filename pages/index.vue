<script setup lang="ts">
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";

const target = ref(null);
const loading = ref(true);
const targetIsVisible = useElementVisibility(target);

watch(targetIsVisible, value => {
  if (value) {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <TheHeader ref="target" />
    <FramesHome />
    <FramesAbout />
    <FramesHardSkills />
    <FramesProjects />
    <FramesContact />

    <SideLink v-if="target !== null && !targetIsVisible && !loading" />
  </div>
</template>
