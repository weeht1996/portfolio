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
  <ul class="skill-table-container w-full pl-4 py-2 space-y-1 overflow-x-auto">
    <li v-for="(value, key) in Skills" :key="key" class="flex items-center whitespace-nowrap">
      <span class="font-semibold mr-2">- {{ key }}:</span>
      <div v-for="skillValue in value" :key="skillValue" class="ml-2">{{ skillValue }}</div>
    </li>
  </ul>
</template>
