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
      <div class="space-y-2">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
          <CardTitle>{{ $t(project.name) }}</CardTitle>
          <div class="flex items-center gap-2">
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
          </div>
        </div>

        <div class="flex items-center justify-between">
          <CardDescription class="text-xs">
            {{ $t('projects.created') }}
            {{ formatDate(project.createdAt, locale) }}
          </CardDescription>

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
      </div>
    </CardHeader>

    <CardContent>
      <TheText variant="clamp" :clamp-lines="3">
        {{ $t(project.description) }}
      </TheText>
    </CardContent>

    <CardFooter>
      <div class="flex flex-wrap gap-1.5">
        <TechBadge
          v-for="tech in project.technologies"
          :key="tech.name"
          :name="tech.name"
          :icon="tech.icon"
        />
        <TooltipProvider v-for="tech in project.technologies" :key="tech.name">
          <Tooltip>
            <TooltipTrigger>
              <Badge
                class="px-2 py-1 transition-colors hover:shadow-lg"
                variant="secondary"
              >
                <Icon :name="tech.icon" class="size-3.5" />
                <span class="hidden sm:inline">{{ tech.name }}</span>
              </Badge>
            </TooltipTrigger>
            <TooltipContent>{{ tech.name }}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </CardFooter>
  </Card>
</template>
