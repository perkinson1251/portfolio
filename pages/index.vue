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
      <h1
        class="scroll-m-20 pb-8 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        {{ $t('aboutMeSection.title') }}
      </h1>
      <div class="flex flex-col gap-2">
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
          <TechStackSection />
          <ContactSection />
        </div>
        <BioSection />
      </div>
    </section>

    <section id="featured-projects" class="mt-10">
      <h1
        class="scroll-m-20 pb-8 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        {{ $t('featuredProjectsSection.title') }}
      </h1>
      <FeaturedProjectsSection />
    </section>
  </main>
</template>
