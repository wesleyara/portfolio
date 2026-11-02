<script setup lang="ts">
import {
  GITHUB_USER,
  githubFallback,
  type RepoSummary,
} from "~/utils/constants";

const { t } = useI18n();

const year = ref(githubFallback.commitsYear);
const commits = ref(githubFallback.commits);
const publicRepos = ref(githubFallback.publicRepos);
const repos = ref<RepoSummary[]>(githubFallback.repos);
const usingFallback = ref(false);

interface GithubRepo {
  name: string;
  html_url: string;
  language: string | null;
  pushed_at: string;
  fork: boolean;
}

const api = "https://api.github.com";

onMounted(async () => {
  const currentYear = new Date().getFullYear();
  try {
    const [user, list] = await Promise.all([
      $fetch<{ public_repos: number }>(`${api}/users/${GITHUB_USER}`),
      $fetch<GithubRepo[]>(
        `${api}/users/${GITHUB_USER}/repos?sort=pushed&per_page=20&type=owner`,
      ),
    ]);
    publicRepos.value = user.public_repos;
    repos.value = list
      .filter(repo => !repo.fork && repo.name !== GITHUB_USER)
      .slice(0, 6)
      .map(repo => ({
        name: repo.name,
        url: repo.html_url,
        language: repo.language,
        pushedAt: repo.pushed_at.slice(0, 10),
      }));
  } catch {
    usingFallback.value = true;
  }

  try {
    const search = await $fetch<{ total_count: number }>(
      `${api}/search/commits`,
      {
        query: {
          q: `author:${GITHUB_USER} committer-date:>=${currentYear}-01-01`,
          per_page: 1,
        },
      },
    );
    commits.value = search.total_count;
    year.value = currentYear;
  } catch {
    // Search API is rate limited; keep the saved number.
  }
});
</script>

<template>
  <section id="open-source">
    <div class="sec-head">
      <div>
        <div class="sec-path">{{ t("openSource.path") }}</div>
        <h2>{{ t("openSource.title") }}</h2>
      </div>
      <p class="sec-note">{{ t("openSource.note") }}</p>
    </div>
    <div class="os">
      <div class="stats">
        <div class="stat">
          <b>{{ publicRepos }}</b
          ><span>{{ t("openSource.repos") }}</span>
        </div>
        <div class="stat">
          <b>{{ commits }}</b
          ><span>{{ t("openSource.commits", { year }) }}</span>
        </div>
        <div class="stat">
          <b>5</b><span>{{ t("openSource.localFirst") }}</span>
        </div>
        <div class="stat">
          <b>8+</b><span>{{ t("openSource.libs") }}</span>
        </div>
      </div>
      <div>
        <ul class="feed">
          <li v-for="repo of repos" :key="repo.name">
            <time :datetime="repo.pushedAt">{{ repo.pushedAt }}</time>
            <a :href="repo.url" target="_blank" rel="noopener">{{
              repo.name
            }}</a>
            <span class="lg">{{ repo.language ?? "—" }}</span>
          </li>
        </ul>
        <div class="feed-foot">
          {{
            usingFallback ? t("openSource.fallback") : t("openSource.feedFoot")
          }}
        </div>
      </div>
    </div>
  </section>
</template>
