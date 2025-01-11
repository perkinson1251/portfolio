<script lang="ts" setup>
import BioSection from '~/components/sections/BioSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import FeaturedProjectsSection from '~/components/sections/FeaturedProjectsSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import TechStackSection from '~/components/sections/TechStackSection.vue'

import type { TStatus } from '~/types'

const status = ref<TStatus>('searching')
</script>

<template>
  <main class="flex flex-col">
    <HeroSection :status />

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
