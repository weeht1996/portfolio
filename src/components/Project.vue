<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios';
import { type Project } from '@/types/Project';
import { type CommitPayload } from '@/types/CommitPayload';

const props = defineProps({
  projectCard: {
    type: Object as () => Project,
    required: true,
  },
});

const latestCommit = ref<CommitPayload | null>(null);
const hovered = ref(false);
const BASE_URL = import.meta.env.BASE_URL;

const fetchLatestCommit = async () => {
  try {
    const owner = 'weeht1996';
    const response = await axios.get<CommitPayload[]>(
      `https://api.github.com/repos/${owner}/${props.projectCard.repoName}/commits`
    );
    latestCommit.value = response.data[0];
  } catch (error) {
    console.error('Error fetching latest commit:', error);
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

const timeSince = (dateString: string) => {
  const now = new Date();
  const givenDate = new Date(dateString);

  const differenceInDays = Math.floor((now.getTime() - givenDate.getTime()) / (1000 * 60 * 60 * 24));

  if (differenceInDays < 7) {
    return `${differenceInDays} day${differenceInDays !== 1 ? 's' : ''} ago`;
  }

  const differenceInWeeks = Math.floor(differenceInDays / 7);
  if (differenceInWeeks < 4) {
    return `${differenceInWeeks} week${differenceInWeeks !== 1 ? 's' : ''} ago`;
  }

  const differenceInMonths = Math.floor(differenceInDays / 30);
  if (differenceInMonths < 12) {
    return `${differenceInMonths} month${differenceInMonths !== 1 ? 's' : ''} ago`;
  }

  const differenceInYears = Math.floor(differenceInDays / 365);
  return `${differenceInYears} year${differenceInYears !== 1 ? 's' : ''} ago`;
};

onMounted(() => {
  fetchLatestCommit();
});
</script>

<template>
  <div class="project-container flex flex-col items-start max-w-[400px] mt-2">
    <div class="images-container relative h-[300px] w-full">
      <button
        class="img-hover-container"
        @click="$emit('openOverlay')"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <div
          v-for="(img, idx) in projectCard.imgs"
          :key="idx"
          class="absolute w-full"
          :style="{
            zIndex: (projectCard.imgs.length - idx),
            left: `${idx * 4}px`,
            top: `${idx * 4}px`,
          }"
        >
          <img
            class="w-full h-[240px] border border-zinc-600 rounded transition-transform duration-300"
            :src="`${BASE_URL}images/${img}`"
            :alt="`Image for ${projectCard.title} ${idx + 1}`"
            :style="{
              transform: hovered ? `rotateY(-15deg)` : 'rotateY(0deg)'
            }"
          />
        </div>
      </button>
    </div>
    <div class="info-container w-full flex flex-col">
      <div class="info-top-bar flex justify-between items-center relative mb-2">
        <div class="project-title text-2xl w-full text-left" :href="latestCommit?.url">{{ projectCard.title }}</div>
        <div class="library-container flex justify-end gap-2 mb-2">
          <div v-for="lib in projectCard.languages" :key="lib.name">
            <img :src="lib.icon" :alt="`${lib.name} icon`" :title="lib.name" width="30px" height="30px" class="hover:shadow-lg hover:shadow-blue-500/50">
          </div>
        </div>
      </div>
      <div class="info-bot-bar relative flex flex-col my-2">
        <span>{{ projectCard.desc }}</span>
        <div class="links-bar flex gap-4 text-blue-600">
          <a class="rounded-sm" :href="projectCard.githubLink" target="_blank" rel="noopener noreferrer">Github Link</a>
          <a v-if="projectCard.hostedLink" class="rounded-sm" :href="projectCard.hostedLink" target="_blank" rel="noopener noreferrer">Host Link</a>
          <span v-else>Not hosted</span>
        </div>
        <div v-if="latestCommit" class="git-commit-container mt-2">
          <div class="git-commit-bar flex flex-1 ml-4 relative p-1 pt-0">
            <div class="box relative z-[1]">
              <div class="box-small mr-2 -ml-[15px] w-6 h-6 flex justify-center items-center border rounded-full bg-zinc-950 border-zinc-950">
                <svg class="inline-block align-text-bottom" width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" fill="#656d76"/>
                </svg>
              </div>
            </div>
            <div class="commit-info flex flex-col flex-1 basis-auto">
              <div class="text-sm text-slate-400">
                Last commit on {{ formatDate(latestCommit.commit.author.date) }}</div>
              <div class="mt-2 flex flex-col border rounded-sm border-zinc-600 p-2 pt-0">
                <a class="font-bold text-lg" :href="latestCommit.url" target="_blank" rel="noopener noreferrer">{{ latestCommit.commit.message }}</a>
                <div class="flex text-xs text-slate-400">
                  {{ latestCommit.commit.author.name }} commited {{ timeSince(latestCommit.commit.author.date) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .info-top-bar::after, .info-bot-bar::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #a1a1aa;
  }

  .git-commit-bar::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    display: block;
    width: 2px;
    background-color: #656d76;
  }
</style>
