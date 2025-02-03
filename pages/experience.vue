<script setup lang="ts">
import type { ITech, ITimelineItem } from '~/types'

definePageMeta({
  title: 'experience',
  description: 'experience',
})

const { locale } = useI18n()
const { getItems } = useDirectusItems()

const { data: technologies } = useAsyncData('technologies', () =>
  getItems<ITech>({
    collection: 'technologies',
  })
)

const {
  data: experienceItems,
  refresh,
  status,
} = useAsyncData('experienceItems', () =>
  getItems<ITimelineItem>({
    collection: 'experiences',
    params: {
      deep: {
        translations: {
          _filter: {
            languages_key: locale.value,
          },
          limit: 1,
        },
        tech: {
          limit: -1,
        },
      },
      fields: ['*', 'translations.*', 'tech.*'],
    },
  })
)

watch(locale, () => {
  refresh()
})
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <TheHeading size="title" tracking spacing class="text-center">
      {{ $t('experience.title') }}
    </TheHeading>

    <client-only>
      <TheTimeline
        v-if="experienceItems && technologies"
        :items="experienceItems"
        :technologies="technologies"
      />
    </client-only>

    <FallbackCard
      v-if="status === 'error'"
      title="general.somethingWrong"
      description="general.somethingWrongDescription"
      icon="ph:folder-notch-open"
      spacious
    />
  </main>
</template>
