<script setup lang="ts">
import Project from './Project.vue';
import ImageView from './ImageView.vue';
import SectionNavi from './SectionNavi.vue';
import { ref } from 'vue';

const project = {
  title: 'CountryGuessr',
  imgs: ['country_guessr_misc0.png', 'country_guessr_misc1.png', 'country_guessr_misc2.png', 'country_guessr_misc3.png'],
  languages: [
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'ReactJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'GithubActions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' }
  ],
  desc: 'CountryGuessr is an interactive web-based game that challenges players to identify countries based on various clues or images, providing an education and entertaining way to test and improve geographical knowledge.',
  repoName: 'CountryGuessr',
  githubLink: 'https://github.com/weeht1996/CountryGuessr',
  hostedLink: 'https://weeht1996.github.io/CountryGuessr',
};
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
    <div class="projects-container flex justify-center items-center">
      <Project :projectCard="project" @openOverlay="openImgOverlay"/>
    </div>
    <SectionNavi/>
  </div>
  <ImageView :images="project.imgs" :showOverlay="showImgOverlay" :closeOverlay="closeImgOverlay"/>
</template>
