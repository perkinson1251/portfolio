<script setup lang="ts">
import { experienceItems } from '@/constants'
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <h1
      class="mb-6 scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      {{ $t('experience.title') }}
    </h1>

    <TheTimeline :items="experienceItems" />
  </main>
</template>
