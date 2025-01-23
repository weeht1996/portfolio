<script setup lang="ts">
import AboutMe from './components/AboutMe.vue';
import MainIntro from './components/MainIntro.vue';
import Projects from './components/Projects.vue';

</script>

<template>
  <header>
  </header>
  <main class="h-screen w-screen overflow-x-hidden">
    <MainIntro/>
    <Projects/>
    <AboutMe/>
  </main>
</template>
