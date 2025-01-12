<script setup lang="ts">
import { experienceItems } from '@/constants'
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <TheHeading size="title" tracking spacing class="text-center">
      {{ $t('experience.title') }}
    </TheHeading>

    <client-only>
      <TheTimeline :items="experienceItems" />
    </client-only>
  </main>
</template>
