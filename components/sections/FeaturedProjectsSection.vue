<script lang="ts" setup>
const { getFeaturedProjects } = useProjects()
const featuredProjects = getFeaturedProjects()
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <ProjectCard
      v-for="project in featuredProjects"
      :key="project.name"
      :project
    />
  </div>
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
