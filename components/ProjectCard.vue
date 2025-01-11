<script lang="ts" setup>
import type { IProject } from '~/types'

const { locale } = useI18n()

interface Props {
  project: IProject
}

defineProps<Props>()
</script>
<template>
  <Card class="group overflow-hidden transition hover:shadow-lg">
    <CardHeader class="space-y-4">
      <div class="flex items-start justify-between">
        <div class="space-y-1">
          <CardTitle class="inline-flex items-center gap-2">
            {{ $t(project.name) }}
            <Badge
              v-if="project.status === 'active'"
              variant="secondary"
              class="text-xs"
            >
              {{ $t('projects.status.active') }}
            </Badge>
            <Badge
              v-if="project.status === 'archived'"
              variant="destructive"
              class="text-xs"
            >
              {{ $t('projects.status.archived') }}
            </Badge>
          </CardTitle>
          <CardDescription class="text-xs">
            {{ $t('projects.created') }}
            {{ formatDate(project.createdAt, locale) }}
          </CardDescription>
        </div>
        <div class="flex gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button
                  v-if="project.previewUrl"
                  variant="ghost"
                  size="icon"
                  as="a"
                  :href="project.previewUrl"
                  target="_blank"
                  class="size-8"
                >
                  <Icon name="ph:eye" class="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{{
                $t('projects.buttons.preview')
              }}</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button
                  v-if="project.githubUrl"
                  variant="ghost"
                  size="icon"
                  as="a"
                  :href="project.githubUrl"
                  target="_blank"
                  class="size-8"
                >
                  <Icon name="ph:github-logo" class="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{{
                $t('projects.buttons.source')
              }}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </CardHeader>

    <CardContent>
      <p class="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {{ $t(project.description) }}
      </p>
    </CardContent>

    <CardFooter>
      <div class="flex flex-wrap gap-1.5">
        <TooltipProvider v-for="tech in project.technologies" :key="tech.name">
          <Tooltip>
            <TooltipTrigger>
              <div
                class="inline-flex items-center gap-1.5 rounded-md bg-secondary/50 px-2 py-1 text-xs transition-colors hover:bg-secondary"
              >
                <Icon :name="tech.icon" class="size-3.5" />
                <span class="hidden sm:inline">{{ tech.name }}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>{{ tech.name }}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </CardFooter>
  </Card>
</template>

<script lang="ts" setup></script>

<style></style>
