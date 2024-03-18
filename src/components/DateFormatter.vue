<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const props = defineProps<{
  value: Date
  class?: string
}>()

const formatted = useDateFormat(props.value, 'YYYY · MM')
</script>

<template>
  <span :class="class">{{ formatted }}</span>
</template>
