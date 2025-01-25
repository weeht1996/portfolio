<script setup lang="ts">
import SectionNavi from './SectionNavi.vue';
import main_background from './assets/main_background.jpg'
</script>

<template>
  <div id="Main-section" class="main-wrapper h-4/5 relative">
    <div class="body-container h-full w-full text-zinc-300">
      <div class="absolute right-0 -top-18 w-full h-full border-b border-zinc-300">
          <img
            :src="main_background"
            alt="hero image gradient"
            class="absolute inset-0 w-full h-full object-cover border-none outline-none block m-0 p-0"
          />
          <div class="absolute inset-0 bg-gradient-to-bl from-transparent via-black/100 to-black"></div>
        </div>
      <div class="hero-container w-full h-full bg-black flex flex-col justify-start items-start p-4 sm:justify-center sm:p-scale">
        <div class="text-aligner-container z-[1]">
          <div class="title-container flex flex-col gap-3">
            <div class="text-5xl sm:text-7xl">
              Web Developer
            </div>
            <div class="text-left sm:text-right">
              Clean, Clear, and Concise
            </div>
          </div>
        </div>
        <div class="promo-card absolute right-[2vw] sm:bottom-[4vh] responsive-bottom bg-zinc-700 rounded-lg sm:max-w-[42%] max-w-lg ml-1 p-4 z-[1] opacity-80">
          <span>
            Hey, my name's Ian, I am passionate about full-stack development. I've worked on academic and personal projects, focusing on creating simple, clean, and minimalistic digital experiences. I'm eager to learn new technologies, tackle real-world challenges, and grow as a developer. Let's connect and build something amazing!
          </span>
        </div>
      </div>
    </div>
    <SectionNavi/>
  </div>
</template>
