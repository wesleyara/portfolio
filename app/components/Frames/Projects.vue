<script setup lang="ts">
import { featuredProjects, moreProjects } from "~/utils/constants";
import { pick } from "~/utils";

const { t, locale } = useI18n();
</script>

<template>
  <section id="projetos">
    <div class="sec-head">
      <div>
        <div class="sec-path">{{ t("projects.path") }}</div>
        <h2>{{ t("projects.title") }}</h2>
      </div>
      <p class="sec-note">{{ t("projects.note") }}</p>
    </div>

    <div class="grid">
      <article
        v-for="project of featuredProjects"
        :key="project.name"
        class="card"
      >
        <div class="media">
          <img
            v-if="project.image"
            :src="project.image.src"
            :alt="pick(project.image.alt, locale)"
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
          />
          <template v-else-if="project.snippet">
            <span class="file">{{ project.snippet.file }}</span>
            <!-- eslint-disable-next-line vue/no-v-html -- static, trusted snippet from constants -->
            <pre v-html="project.snippet.html"></pre>
          </template>
        </div>
        <div class="body">
          <div class="card-head">
            <h3>{{ project.name }}</h3>
            <span class="kind">{{ pick(project.kind, locale) }}</span>
          </div>
          <p>{{ pick(project.description, locale) }}</p>
          <div class="chips">
            <span v-for="tech of project.stack" :key="tech" class="chip">{{
              tech
            }}</span>
          </div>
          <div class="links">
            <a :href="project.repository" target="_blank" rel="noopener"
              >repo ↗</a
            >
            <a
              v-if="project.link"
              :href="project.link.href"
              target="_blank"
              rel="noopener"
            >
              {{ project.link.label }} ↗
            </a>
          </div>
        </div>
      </article>
    </div>

    <div class="index">
      <h3>{{ t("projects.more") }}</h3>
      <div class="rows">
        <a
          v-for="project of moreProjects"
          :key="project.name"
          class="row"
          :href="project.href"
          target="_blank"
          rel="noopener"
        >
          <span class="n">{{ project.name }}</span>
          <span class="d">{{ pick(project.description, locale) }}</span>
          <span class="l">{{ project.tag }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
