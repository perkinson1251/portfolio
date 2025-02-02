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

const { data: experienceItems, refresh } = useAsyncData('experienceItems', () =>
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

    <div
      v-if="!experienceItems || !technologies"
      class="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-dashed"
    >
      <Icon name="ph:folder-notch-open" class="size-12 text-muted-foreground" />
      <p class="mt-4 text-sm text-muted-foreground">
        {{ $t('experience.notFound') }}
      </p>
    </div>
  </main>
</template>
