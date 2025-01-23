<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SkillTable from './SkillTable.vue';
import SectionNavi from './SectionNavi.vue';
import type { Skills } from '@/types/Skills';

const clipBtn = ref<HTMLElement | null>(null);
const emailBtn = ref<HTMLElement | null>(null);
const clipTooltip = ref(false);
const aboutInfoText = `I'm someone with an appreciation for design—whether it's the sleek functionality of a website or the harmonious balance of interior spaces. I enjoy exploring ideas that transcend disciplines, looking for inspiration that connects aesthetics and purpose. Beyond work, I keep myself active through running and swimming, finding that physical routines help me stay energized and focused.

I value routines and self-discipline, which keep me grounded and help me navigate busy days with clarity. That said, I'm always open to new challenges because I believe that stepping outside of comfort zones is key to growth. Learning new things and gaining experience drives me forward, and I approach those opportunities with curiosity and determination.

Lately, I've been working on improving my communication skills, as I recognize that the ability to clearly articulate ideas is essential to building meaningful connections and achieving success—both personally and professionally.. `;
const Skills = {
  Languages: ['HTML/CSS', 'Python', 'JavaScript', 'TypeScript', 'Java', 'PHP'],
  Databases: ['MySQL', 'NoSql experience'],
  Frameworks: ['ReactJs', 'VueJs', 'Bootstrap', 'Spring', 'SaSS'],
  Misc: ['Git', 'AWS', 'WordPress (minimal)'],
} as Skills;

onMounted(() => {
  if (clipBtn.value) {
    clipBtn.value.addEventListener('click', () => {
      const textToCopy = "This is the text to copy!";
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          clipTooltip.value = true;
          setTimeout(() => {
            clipTooltip.value = false;
        }, 2000);
        })
        .catch(err => {
          console.error("Failed to copy text: ", err);
        });
    });
  }
  if (emailBtn.value) {
    emailBtn.value.addEventListener('click', () => {
    const recipientEmail = "weeht1996@gmail.com";
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
    });
  }
});


</script>

<template>
  <div id="AboutMe-section" class="about-container h-screen w-full bg-black text-zinc-300 relative">
    <div class="main p-12 flex flex-col">
      <div class="text-4xl mb-10">About me</div>
      <div class="flex flex-col w-full h-3/4 bg-zinc-900 rounded-lg p-8 justify-center relative overflow-hidden">
        <div class="section about-info relative">
          <div class="mb-4 whitespace-pre-wrap">{{ aboutInfoText }}</div>
        </div>
        <div class="section skills relative">
          <div class="text-base font-semibold block my-2">Experience / skills</div>
          <SkillTable :Skills="Skills" />
        </div>
        <div class="contact flex items-center my-2 gap-3 flex-shrink-1">
          <span class="text-lg font-semibold">Contact me: </span>
          <button title="Open email" id="emailButton">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.47,10.71a2,2,0,0,0-2,2v22.61a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"
                fill="currentColor"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button ref="clipBtn" class="relative" title="copy email to clipboard">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z" fill="currentColor"/>
            <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" fill="currentColor"/>
            </svg>
            <div v-if="clipTooltip" class="absolute -top-6 -left-1 bg-white rounded text-xs text-zinc-900 p-1">Copied!</div>
          </button>

            <span class="text-lg font-semibold">My  Résumé:</span>
            <a title="Download resume" href="https://drive.google.com/uc?export=download&id=1ehd-5m17Ty783iILDfkveyiHEE5zFaCm" download target="_blank" rel="noopener noreferrer">
              <svg height="30px" width="30px" version="1.1" id="_x32_" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"  xml:space="preserve">
              <g>
                <path class="st0" d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
                c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"/>
                <path class="st0" d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
                c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"/>
                <path class="st0" d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
                h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
                c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
                c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"/>
              </g>
            </svg>
          </a>
        </div>
        <img
          class="h-full w-auto absolute -bottom-2/3 right-0 opacity-15 rounded-md hover:-bottom-1/3 hover:opacity-75 transition-all duration-500"
          src="/images/seal_with_rat_in_hat_ai_clean.png"
          alt="user icon"
        >
      </div>
    </div>
    <SectionNavi/>
  </div>
</template>

<style>
  .section::after
   {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 1px;
    width: 40%;
    background-color: #a1a1aa;
  }

  a:hover{
    background: none;
  }
</style>
