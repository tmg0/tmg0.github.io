<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const props = defineProps<{
  value: Date
}>()

const formatted = useDateFormat(props.value, 'YYYY · MM')
</script>

<template>
  <span>{{ formatted }}</span>
</template>
