<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SkillTable from './SkillTable.vue';
import SectionNavi from './SectionNavi.vue';
import type { Skills } from '@/types/Skills';

import seal_with_rat_in_hat_ai_clean from './assets/seal_with_rat_in_hat_ai_clean.png';

const clipBtn = ref<HTMLElement | null>(null);
const emailBtn = ref<HTMLElement | null>(null);
const clipTooltip = ref(false);
const aboutInfoText = `I'm someone with an appreciation for design—whether it's the sleek functionality of a website or the harmonious balance of interior spaces. I enjoy exploring ideas that transcend disciplines, looking for inspiration that connects aesthetics and purpose. Beyond work, I keep myself active through running and swimming, finding that physical routines help me stay energized and focused.

I value routines and self-discipline, which keep me grounded and help me navigate busy days with clarity. That said, I'm always open to new challenges because I believe that stepping outside of comfort zones is key to growth. Learning new things and gaining experience drives me forward, and I approach those opportunities with curiosity and determination.

Lately, I've been working on improving my communication skills, as I recognize that the ability to clearly articulate ideas is essential to building meaningful connections and achieving success—both personally and professionally.. `;
const Skills = {
  'Languages': ['HTML/CSS', 'Python', 'JavaScript', 'TypeScript', 'Java', 'PHP'],
  'Databases': ['MySQL', 'NoSql'],
  'Frameworks/Libraries': ['ReactJs', 'NextJs', 'VueJs', 'Vite', 'Bootstrap', 'Spring Boot', 'SaSS', 'Tailwind', 'Laravel'],
  'Misc': ['Git', 'AWS', 'WordPress (minimal)', 'Docker (Containerization)'],
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
  <div id="AboutMe-section" class="about-container min-h-screen w-full bg-black text-zinc-300 relative">
    <div class="main px-6 sm:px-[2vw] py-14 flex flex-col">
      <div class="section-header">About me</div>
      <div class="flex flex-col w-full h-3/4 bg-zinc-900 rounded-lg p-6 justify-center relative overflow-hidden">
        <div class="section about-info relative">
          <div class="mb-4 whitespace-pre-wrap">{{ aboutInfoText }}</div>
        </div>
        <div class="section skills relative">
          <div class="text-base font-semibold block my-2">Experience / skills</div>
          <SkillTable :Skills="Skills" />
        </div>
        <div class="contact flex items-center mt-2 gap-3 flex-shrink-1">
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
            <span class="text-lg font-semibold hidden xs:block">My  Résumé:</span>
            <a title="Download resume" href="https://drive.google.com/uc?export=download&id=1BtEFLTafhZgg6lETnaf2keMU4ozPRCX1" download target="_blank" rel="noopener noreferrer">
              <svg height="30px" width="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512" xml:space="preserve">
                <g>
                  <path fill="currentColor" d="M347.746,346.204c-8.398-0.505-28.589,0.691-48.81,4.533c-11.697-11.839-21.826-26.753-29.34-39.053
                    c24.078-69.232,8.829-88.91-11.697-88.91c-16.119,0-24.167,17.011-22.376,35.805c0.906,9.461,8.918,29.34,18.78,48.223
                    c-6.05,15.912-16.847,42.806-27.564,62.269c-12.545,3.812-23.305,8.048-31.027,11.622c-38.465,17.888-41.556,41.773-33.552,51.894
                    c15.197,19.226,47.576,2.638,80.066-55.468c22.243-6.325,51.508-14.752,54.146-14.752c0.304,0,0.721,0.097,1.204,0.253
                    c16.215,14.298,35.366,30.67,51.128,32.825c22.808,3.136,35.791-13.406,34.891-23.692
                    C382.703,361.461,376.691,347.942,347.746,346.204z M203.761,408.88c-9.401,11.178-24.606,21.9-29.972,18.334
                    c-5.373-3.574-6.265-13.86,5.819-25.497c12.076-11.623,32.29-17.657,35.329-18.787c3.59-1.337,4.482,0,4.482,1.791
                    C219.419,386.512,213.154,397.689,203.761,408.88z M244.923,258.571c-0.899-11.192,1.33-21.922,10.731-23.26
                    c9.386-1.352,13.868,9.386,10.292,26.828c-3.582,17.464-5.38,29.08-7.164,30.44c-1.79,1.338-3.567-3.144-3.567-3.144
                    C251.627,282.27,245.815,269.748,244.923,258.571z M248.505,363.697c4.912-8.064,17.442-40.702,17.442-40.702
                    c2.683,4.926,23.699,29.956,23.699,29.956S257.438,360.123,248.505,363.697z M345.999,377.995
                    c-13.414-1.768-36.221-17.895-36.221-17.895c-3.128-1.337,24.992-5.157,35.79-4.466c13.875,0.9,18.794,6.718,18.794,12.53
                    C364.362,373.982,359.443,379.787,345.999,377.995z"/>
                  <path fill="currentColor" d="M461.336,107.66l-98.34-98.348L353.683,0H340.5H139.946C92.593,0,54.069,38.532,54.069,85.901v6.57H41.353
                    v102.733h12.716v230.904c0,47.361,38.525,85.893,85.878,85.893h244.808c47.368,0,85.893-38.532,85.893-85.893V130.155v-13.176
                    L461.336,107.66z M384.754,480.193H139.946c-29.875,0-54.086-24.212-54.086-54.086V195.203h157.31V92.47H85.86v-6.57
                    c0-29.882,24.211-54.102,54.086-54.102H332.89v60.894c0,24.888,20.191,45.065,45.079,45.065h60.886v288.349
                    C438.855,455.982,414.636,480.193,384.754,480.193z M88.09,166.086v-47.554c0-0.839,0.683-1.524,1.524-1.524h15.108
                    c2.49,0,4.786,0.409,6.837,1.212c2.029,0.795,3.812,1.91,5.299,3.322c1.501,1.419,2.653,3.144,3.433,5.121
                    c0.78,1.939,1.182,4.058,1.182,6.294c0,2.282-0.402,4.414-1.19,6.332c-0.78,1.918-1.932,3.619-3.418,5.054
                    c-1.479,1.427-3.27,2.549-5.321,3.329c-2.036,0.78-4.332,1.174-6.822,1.174h-6.376v17.241c0,0.84-0.683,1.523-1.523,1.523h-7.208
                    C88.773,167.61,88.09,166.926,88.09,166.086z M134.685,166.086v-47.554c0-0.839,0.684-1.524,1.524-1.524h16.698
                    c3.173,0,5.968,0.528,8.324,1.568c2.386,1.062,4.518,2.75,6.347,5.009c0.944,1.189,1.694,2.504,2.236,3.916
                    c0.528,1.375,0.929,2.862,1.189,4.407c0.253,1.531,0.401,3.181,0.453,4.957c0.045,1.694,0.067,3.515,0.067,5.447
                    c0,1.924-0.022,3.746-0.067,5.44c-0.052,1.769-0.2,3.426-0.453,4.964c-0.26,1.546-0.661,3.025-1.189,4.399
                    c-0.55,1.427-1.3,2.743-2.23,3.909c-1.842,2.282-3.976,3.969-6.354,5.016c-2.334,1.04-5.135,1.568-8.324,1.568h-16.698
                    C135.368,167.61,134.685,166.926,134.685,166.086z M214.269,137.981c0.84,0,1.523,0.684,1.523,1.524v6.48
                    c0,0.84-0.683,1.524-1.523,1.524h-18.244v18.579c0,0.84-0.684,1.523-1.524,1.523h-7.209c-0.84,0-1.523-0.683-1.523-1.523v-47.554
                    c0-0.839,0.683-1.524,1.523-1.524h27.653c0.839,0,1.524,0.684,1.524,1.524v6.48c0,0.84-0.684,1.524-1.524,1.524h-18.92v11.444
                    H214.269z"/>
                  <path fill="currentColor" d="M109.418,137.706c1.212-1.092,1.798-2.645,1.798-4.749c0-2.096-0.587-3.649-1.798-4.741
                    c-1.263-1.13-2.928-1.68-5.098-1.68h-5.975v12.848h5.975C106.489,139.385,108.155,138.836,109.418,137.706z"/>
                  <path fill="currentColor" d="M156.139,157.481c1.13-0.424,2.103-1.107,2.973-2.088c0.944-1.055,1.538-2.571,1.769-4.511
                    c0.26-2.208,0.386-5.091,0.386-8.569c0-3.485-0.126-6.369-0.386-8.569c-0.231-1.946-0.825-3.462-1.762-4.51
                    c-0.869-0.982-1.873-1.679-2.972-2.089c-1.182-0.453-2.534-0.676-4.042-0.676h-7.164v31.68h7.164
                    C153.605,158.15,154.965,157.927,156.139,157.481z"/>
                </g>
              </svg>
            </a>
        </div>
        <img
          class="seal-image h-4/5 w-auto absolute -bottom-2/3 right-0 opacity-15 rounded-md hover:-bottom-1/3 hover:opacity-75 transition-all duration-500 "
          :src="seal_with_rat_in_hat_ai_clean"
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
  color: inherit;
  text-decoration: none;
  outline: none;
}


@media (max-width: 768px) {
  .section::after {
    width: 100%;
  }
  .seal-image {
    display: none;
  }
}

::-webkit-scrollbar {
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background: #a1a1aa;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #71717a;
}

::-webkit-scrollbar-track {
  background: #e4e4e7;
  border-radius: 10px;
}

</style>
