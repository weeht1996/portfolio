<script lang="ts">
import type { Skills } from '@/types/Skills';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'SkillTable',
  props: {
    Skills : {
      type: Object as PropType<Skills>,
      required: true,
    }
  },
});
</script>

<template>
  <div class="skill-table-container w-full px-4 py-2">
    <div v-for="(value, key) in Skills" :key="key" class="flex gap-4 mb-2 items-center">
      <span class="font-semibold">{{ key }}:</span>
      <div v-for="skillValue in value" :key="skillValue" class="ml-2">{{ skillValue }}</div>
    </div>
  </div>
</template>
