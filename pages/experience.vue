<script setup lang="ts">
definePageMeta({
  title: 'experience',
  description: 'experience',
})

const { getTechnologies, getExperience } = useDirectusQueries()

const { data: technologies } = getTechnologies()
const { data: experienceItems, status } = getExperience()
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <TheHeading size="title" tracking spacing class="text-center">
      {{ $t('experience.title') }}
    </TheHeading>

    <TheTimeline
      v-if="experienceItems && technologies"
      :items="experienceItems"
      :technologies="technologies"
    />

    <FallbackCard
      v-if="status === 'error'"
      title="general.somethingWrong"
      description="general.somethingWrongDescription"
      icon="ph:folder-notch-open"
      spacious
    />
  </main>
</template>
