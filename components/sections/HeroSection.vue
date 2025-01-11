<script lang="ts" setup>
import type { TStatus } from '~/types'

interface Props {
  status: TStatus
}

defineProps<Props>()

const scrollToContacts = () => {
  const contactsSection = document.getElementById('contacts')
  if (contactsSection) {
    contactsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<template>
  <section
    id="hero"
    class="flex flex-col items-center justify-center gap-4 py-28 text-center md:py-56"
  >
    <TheStatus :status="status" />
    <h3 class="text-3xl font-semibold">
      {{ $t('heroBlock.greeting') }}
      <div class="transform-origin-wave-origin inline-block animate-wave">
        👋
      </div>
    </h3>
    <h1 class="text-6xl font-bold">{{ $t('heroBlock.name') }}</h1>
    <h2 class="text-2xl">
      {{ $t('heroBlock.profession.prefix') }}
      <span class="font-semibold">{{ $t('heroBlock.profession.title') }}</span>
      {{ $t('heroBlock.profession.description') }}
    </h2>
    <div class="flex flex-col gap-4 pt-6 md:flex-row">
      <Button size="lg" @click="scrollToContacts">{{
        $t('heroBlock.buttons.contact')
      }}</Button>
      <Button class="group" size="lg" variant="outline">
        {{ $t('heroBlock.buttons.resume') }}
        <Icon
          name="ph:arrow-up-right"
          class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Button>
    </div>
  </section>
</template>
