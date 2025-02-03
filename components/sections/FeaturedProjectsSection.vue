<script lang="ts" setup>
import type { IProject, ITech } from '~/types'

const { locale } = useI18n()
const { getItems } = useDirectusItems()

const { data: technologies } = useAsyncData('tectnologies', async () => {
  return getItems<ITech>({
    collection: 'technologies',
  })
})

const {
  data: featuredProjects,
  refresh,
  status,
} = useAsyncData('projects', async () => {
  return getItems<IProject>({
    collection: 'projects',
    params: {
      filter: {
        featured: true,
      },
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
})

watch(locale, () => {
  refresh()
})
</script>

<template>
  <div
    class="grid grid-cols-1 gap-4 md:grid-cols-2"
    v-if="status === 'success'"
  >
    <ProjectCard
      v-for="project in featuredProjects"
      :key="project.id"
      :project="project"
      :technologies="technologies"
    />
  </div>
  <FallbackCard description="general.somethingWrongDescription" v-else />
  <div class="flex w-full items-center justify-center pt-4">
    <NuxtLink as-child to="/projects">
      <Button variant="secondary" class="group">
        {{ $t('projects.buttons.viewAll') }}
        <Icon
          name="ph:arrow-up-right"
          class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Button>
    </NuxtLink>
  </div>
</template>
