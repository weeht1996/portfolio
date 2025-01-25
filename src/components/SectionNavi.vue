<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigationStore';
import { onMounted, onUnmounted, ref } from 'vue';

const navigationStore = useNavigationStore();
const sections = ['Main', 'Projects', 'AboutMe'];
const sectionRefs = ref<HTMLElement[]>([]);

function scrollToSection(sectionIdx: number) {
  navigationStore.setSelectedIndex(sectionIdx);
  const target = document.getElementById(`${sections[sectionIdx]}-section`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Section with ID "${sections[sectionIdx]}" not found.`);
  }
}

onMounted(() => {

  sectionRefs.value = sections.map(
    (section) => document.getElementById(`${section}-section`) as HTMLElement
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.value.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            navigationStore.setSelectedIndex(index);
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sectionRefs.value.forEach((section) => {
    if (section) observer.observe(section);
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});

</script>

<template>
  <div class="section-navi-container absolute bottom-[2vh] sm:bottom-[4vh] left-[2%]">
    <div class="flex gap-2">
      <div v-for="(section, idx) in sections" :key="idx" class="section-marker hover:cursor-pointer">
        <a href="#" class="p-0" @click.prevent="scrollToSection(idx)">
          <svg
            class="relative overflow-hidden z-[1]"
            :id="section"
            height="20px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :style="{ color: navigationStore.selectedIndex === idx ? '#2563EB' : '#52525b' }"
            >
            <path d="M1 8L7 0H9L15 8L9 16H7L1 8Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.section-marker::after {
  position: absolute;
  content: "";
  right: 5%;
  top: 47%;
  width: 90%;
  height: 3px;
  background: #52525b;
}
</style>
