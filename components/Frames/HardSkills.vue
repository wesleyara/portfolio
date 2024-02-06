<script setup lang="ts">
import { hardSkills } from "~/utils/constants";
</script>

<template>
  <section class="window-width mx-auto my-10 flex flex-col gap-5">
    <h2 id="hard-skills" class="text-emerald-500">Habilidades Técnicas</h2>

    <div class="flex w-full flex-wrap justify-center gap-10">
      <span
        v-for="item of hardSkills"
        :key="item.name"
        class="flex h-[250px] w-full flex-col gap-5 rounded-lg bg-[#172435] p-5 text-white md:w-[300px]"
      >
        <Icon :name="item.icon" size="40" class="text-emerald-500" />

        <span class="flex flex-col gap-1">
          <b class="text-xl">{{ item.name }}</b>

          <span>{{ item.description }}</span>
        </span>
      </span>
    </div>
  </section>
</template>
