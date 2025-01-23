<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  images: string[];
  showOverlay: boolean;
  closeOverlay: () => void;
};

const props = defineProps<Props>();
const currentIndex = ref(0);

const currentImage = computed(() => `images/${props.images[currentIndex.value]}`);

const setCurrentImage = (index: number) => {
  currentIndex.value = index;
};

function changeIndex(shiftUp: boolean) {
  if (shiftUp) {
    if (currentIndex.value < props.images.length - 1) {
      currentIndex.value++;
    }
  } else {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  }
}

</script>

<template>
  <div v-if="showOverlay" class="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
    <div class="flex-grow flex items-center justify-center w-full relative">
      <img
        :src="currentImage"
        alt="Full-size view"
        class="max-h-[80vh] max-w-[80%] object-contain"
      />
      <button @click="changeIndex(false)">
        <svg class="rotate-90 absolute top-1/2 left-[1%]" width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#d4d4d8"/>
        </svg>
      </button>
      <button @click="changeIndex(true)">
        <svg class="-rotate-90 absolute top-1/2 right-[1%]" width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#d4d4d8"/>
        </svg>
      </button>
    </div>
    <div class="w-full flex overflow-x-auto py-4 bg-zinc-800">
      <div
        v-for="(img, index) in images"
        :key="index"
        @click="setCurrentImage(index)"
        class="cursor-pointer mx-2"
      >
        <img
          :src="`images/${img}`"
          :alt="`Thumbnail ${index + 1}`"
          :class=" { 'border-2 border-white': index === currentIndex }"
          class="h-24 w-auto object-cover rounded"
        />
      </div>
    </div>
    <button
      @click="closeOverlay"
      class="absolute top-4 right-4 text-white text-2xl p-2 bg-zinc-800 rounded-full hover:bg-zinc-700"
    >
      &times;
    </button>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style>
