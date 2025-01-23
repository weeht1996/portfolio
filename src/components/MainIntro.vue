<script setup lang="ts">
import SectionNavi from './SectionNavi.vue';
</script>

<template>
  <div id="Main-section" class="main-wrapper h-2/3 relative">
    <div class="body-container h-full w-full border-b border-zinc-300">
      <div class="hero-container w-full h-full bg-black flex items-center relative text-zinc-300 overflow-hidden p-12">
        <div class="flex flex-col gap-3 z-20">
          <div class="text-7xl">
            Web Developer
          </div>
          <div class="text-right">
            Clean, Clear and Concise
          </div>
        </div>
        <div class="promo-card absolute right-4 bottom-8 bg-zinc-700 rounded-lg min-w-96 max-w-[40%] min-h-40 p-4 z-10 opacity-80">
          <div>
            Hey, my name's Ian, I am passionate about full-stack development. I've worked on academic and personal projects, focusing on creating simple, clean, and minimalistic digital experiences. I'm eager to learn new technologies, tackle real-world challenges, and grow as a developer. Let's connect and build something amazing!
          </div>
        </div>
        <div class="absolute right-0 -top-18 overflow-hidden border-none outline-none p-0 m-0 w-full h-full">
          <img
            src="/images/pexels-njeromin-12686992.jpg"
            alt="hero image gradient"
            class="absolute inset-0 w-full h-full object-cover border-none outline-none block m-0 p-0"
          />
          <div class="absolute inset-0 bg-gradient-to-bl from-transparent via-black/100 to-black"></div>
        </div>
      </div>
    </div>
    <SectionNavi/>
  </div>
</template>
