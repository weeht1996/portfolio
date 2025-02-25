<script setup lang="ts">
import ImageView from './ImageView.vue';
import SectionNavi from './SectionNavi.vue';
import { ref } from 'vue';
import ProjectView from './ProjectView.vue';
import { type Project } from '@/types/Project';

const projects: Project[] = [
  {
    title: 'CountryGuessr',
    imgs: ['country_guessr_misc0.png', 'country_guessr_misc1.png', 'country_guessr_misc2.png', 'country_guessr_misc3.png'],
    languages: [
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'ReactJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'GithubActions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
    ],
    desc: 'CountryGuessr is an interactive web-based game that challenges players to identify countries based on various clues or images, providing an education and entertaining way to test and improve geographical knowledge. Built on ViteJs and goes through CI/CD using Github Actions',
    repoName: 'CountryGuessr',
    githubLink: 'https://github.com/weeht1996/CountryGuessr',
    hostedLink: 'https://weeht1996.github.io/CountryGuessr',
  },
  {
    title: 'StatusTrackr',
    imgs: ['status_trackr_misc0.png', 'status_trackr_misc1.png', 'status_trackr_misc2.png', 'status_trackr_misc3.png'],
    languages: [
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'VueJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    ],
    desc: 'StatusTrackr simple database/worksheet interface that runs on laravel and mySql with the ability to import/export files to excel. Frontend and backend are containerized and communicate through nginx',
    repoName: 'StatusTrackr',
    githubLink: 'https://github.com/weeht1996/StatusTrackr',
    hostedLink: null,
  },
];
const showImgOverlay = ref(false);

function openImgOverlay() {
  showImgOverlay.value = true;
};
function closeImgOverlay() {
  showImgOverlay.value = false;
};

</script>

<template>
  <div id="Projects-section" class="bg-zinc-950 w-full text-zinc-300 px-6 sm:px-[2vw] py-12 flex flex-col border-b border-slate-300 relative">
    <div class="section-header">Projects</div>
    <div class="projects-container flex flex-wrap justify-center items-center gap-10">
      <div v-for="project in projects" :key="project.title">
        <ProjectView :projectCard="project" @openOverlay="openImgOverlay"/>
      </div>
    </div>
    <SectionNavi/>
  </div>
  <ImageView :images="projects.flatMap(project => project.imgs)" :showOverlay="showImgOverlay" :closeOverlay="closeImgOverlay"/>
</template>
