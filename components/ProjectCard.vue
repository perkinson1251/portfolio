<script lang="ts" setup>
import type { IProject, ITech } from '~/types'

const props = defineProps<{
  project: IProject
  technologies: any
}>()

const { locale } = useI18n()
const translation = computed(() =>
  props.project.translations.find((t) => t.languages_key === locale.value)
)

const projectTechs = computed(
  () =>
    props.project.tech
      .map((tech) =>
        props.technologies.find((t: ITech) => t.id === tech.technologies_id)
      )
      .filter(Boolean) as ITech[]
)
</script>

<template>
  <Card class="group overflow-hidden transition hover:shadow-lg">
    <CardHeader class="space-y-4">
      <div class="space-y-2">
        <div
          class="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-2">
            <CardTitle>{{ translation?.name }}</CardTitle>
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

          <div class="flex items-center gap-2 self-center sm:self-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button
                    v-if="project.preview_url"
                    variant="ghost"
                    size="icon"
                    as="a"
                    :href="project.preview_url"
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
                    v-if="project.github_url"
                    variant="ghost"
                    size="icon"
                    as="a"
                    :href="project.github_url"
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

        <div class="flex items-center justify-between">
          <CardDescription class="text-xs">
            {{ $t('projects.created') }}
            {{ formatDate(project.started_at, locale) }}
          </CardDescription>
        </div>
      </div>
    </CardHeader>

    <CardContent>
      <TheText variant="clamp" :clamp-lines="3">
        {{ translation?.description }}
      </TheText>
    </CardContent>

    <CardFooter>
      <div class="flex flex-wrap gap-1.5">
        <TechBadge
          v-for="techItem in projectTechs"
          :key="techItem.id"
          :icon="techItem.icon"
          :name="techItem.name"
        />
      </div>
    </CardFooter>
  </Card>
</template>
