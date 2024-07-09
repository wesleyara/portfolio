<script setup lang="ts">
import { trackEvent } from "~/utils";
import { mapProjects } from "~/utils/constants";

const handleOpenLink = (repository: string, title: string) => {
  const details = title.toLowerCase().replace(/\s/g, "-");

  trackEvent({
    element: `projects:${details}`,
    schema: "projects",
  });
  open(repository);
};
</script>

<template>
  <section class="window-width mx-auto my-10 flex flex-col gap-5">
    <h2 id="projects" class="text-emerald-500">Projetos</h2>

    <div class="flex w-full flex-wrap justify-center gap-10">
      <span
        v-for="item of mapProjects"
        :key="item.id"
        class="relative flex w-full flex-col gap-5 rounded-lg bg-[#172435] px-5 pb-12 pt-5 text-white md:w-[300px]"
      >
        <NuxtImg
          :src="item.image"
          :alt="item.title"
          class="w-full rounded-lg"
          @click="
            handleOpenLink(
              item.preview.length > 0 ? item.preview : item.repository,
              item.title,
            )
          "
        />
        <h3>{{ item.title }}</h3>

        <span>{{ item.description }}</span>

        <Icon
          name="mdi:github"
          class="absolute bottom-2 left-4 cursor-pointer text-emerald-500"
          size="26"
          @click="handleOpenLink(item.repository, item.title)"
        />

        <Icon
          v-if="item.preview.length > 0"
          name="icon-park-outline:preview-open"
          class="absolute bottom-2 left-12 cursor-pointer text-emerald-500"
          size="26"
          @click="handleOpenLink(item.preview, item.title)"
        />
      </span>
    </div>
  </section>
</template>
