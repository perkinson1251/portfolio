<script lang="ts" setup>
import type { TStatus } from '~/types'

const status = ref<TStatus>('searching')

definePageMeta({
  layout: 'main',
})
</script>

<template>
  <main class="flex flex-col">
    <HeroSection :status="status" />

    <section id="about-me">
      <TheHeading size="section" :level="2" tracking spacing>{{
        $t('aboutMeSection.title')
      }}</TheHeading>
      <div class="flex flex-col gap-2">
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
          <TechStackSection />
          <ContactSection />
        </div>
        <BioSection />
      </div>
    </section>

    <section id="featured-projects" class="mt-10">
      <TheHeading size="section" :level="2" tracking spacing>{{
        $t('featuredProjectsSection.title')
      }}</TheHeading>
      <FeaturedProjectsSection />
    </section>
  </main>
</template>
