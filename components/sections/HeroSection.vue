<script lang="ts" setup>
import type { DirectusFile } from 'nuxt-directus'
import type { TStatus } from '~/types'

interface Props {
  status: TStatus
}

defineProps<Props>()

const { getFiles } = useDirectusFiles()
const { locale } = useI18n()
const config = useRuntimeConfig()

const scrollToContacts = () => {
  const contactsSection = document.getElementById('contacts')
  if (contactsSection) {
    contactsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const { data: cv, refresh } = useAsyncData(
  'files',
  async () => {
    return getFiles<DirectusFile>({
      params: {
        filter: {
          title: `cv_${locale.value}`,
        },
      },
    })
  },
  {
    immediate: true,
  }
)

const fileUrl = computed(() => {
  if (cv.value) {
    return `${config.public.directus.url}/assets/${cv.value[0]!.id}`
  }
  return undefined
})

watch(locale, () => {
  refresh()
})
</script>

<template>
  <section
    id="hero"
    class="flex flex-col items-center justify-center gap-4 py-28 text-center md:py-56"
  >
    <TheStatus :status="status" />
    <TheHeading size="section" :level="2">
      {{ $t('heroBlock.greeting') }}
      <div class="transform-origin-wave-origin inline-block animate-wave">
        👋
      </div>
    </TheHeading>
    <TheHeading size="hero">{{ $t('heroBlock.name') }}</TheHeading>
    <TheHeading size="subsection" class="text-muted-foreground">
      {{ $t('heroBlock.profession.prefix') }}
      <span class="font-semibold">{{ $t('heroBlock.profession.title') }}</span>
      {{ $t('heroBlock.profession.description') }}
    </TheHeading>
    <div class="flex flex-col gap-4 pt-6 md:flex-row">
      <Button size="lg" @click="scrollToContacts">{{
        $t('heroBlock.buttons.contact')
      }}</Button>
      <Button
        class="group"
        size="lg"
        variant="outline"
        as="a"
        :href="fileUrl"
        target="_blank"
        :disabled="!fileUrl"
        :class="{ 'cursor-not-allowed': !fileUrl }"
      >
        {{ $t('heroBlock.buttons.resume') }}
        <Icon
          name="ph:arrow-up-right"
          class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Button>
    </div>
  </section>
</template>
