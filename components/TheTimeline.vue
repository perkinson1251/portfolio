<script setup lang="ts">
import type { ITech, ITimelineItem } from '~/types'

const props = defineProps<{
  items: ITimelineItem[]
  technologies: ITech[]
}>()

const { locale } = useI18n()

const getTypeIcon = (type: 'work' | 'education') =>
  type === 'work' ? 'ph:briefcase' : 'ph:graduation-cap'

const getItemTechs = (item: ITimelineItem) =>
  item.tech
    .map((t) =>
      props.technologies.find((tech) => tech.id === t.technologies_id)
    )
    .filter(Boolean) as ITech[]
</script>

<template>
  <ol class="relative border-s border-border">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="mb-12 ms-6 last:mb-0"
    >
      <div
        :class="[
          'absolute -start-3 mt-1.5 size-5 rounded-full border-2 border-background ring-8 ring-background',
          item.type === 'work' ? 'bg-primary' : 'bg-secondary',
        ]"
      />

      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <TheText variant="small" class="flex items-center gap-2">
            <time>
              {{ formatTimelinePeriod(item.start_date, item.end_date, locale) }}
            </time>
            <Badge
              :variant="item.type === 'work' ? 'default' : 'secondary'"
              class="flex items-center gap-1"
            >
              <Icon :name="getTypeIcon(item.type)" class="size-3.5" />
              {{ $t(`experience.type.${item.type}`) }}
            </Badge>
          </TheText>

          <div class="flex flex-wrap items-center gap-2">
            <h3 class="text-lg font-semibold">
              {{ item.translations[0]?.title }}
            </h3>
            <Badge v-if="item.translations[0]?.company" variant="outline">
              {{ item.translations[0]?.company }}
            </Badge>
          </div>

          <TheText
            v-if="item.translations[0]?.location"
            variant="small"
            class="flex items-center gap-1"
          >
            <Icon name="ph:map-pin" class="size-4" />
            {{ item.translations[0]?.location }}
          </TheText>
        </div>

        <TheText variant="muted">{{
          item.translations[0]?.description
        }}</TheText>

        <div v-if="item.tech?.length" class="flex flex-wrap gap-1.5">
          <TechBadge
            v-for="tech in getItemTechs(item)"
            :key="tech.name"
            :name="tech.name"
            :icon="tech.icon"
          />
        </div>

        <div v-if="item.link" class="mt-2">
          <Button
            variant="outline"
            size="sm"
            as="a"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group gap-2"
          >
            {{ item.translations[0]?.link_name }}
            <Icon
              name="ph:arrow-up-right"
              class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Button>
        </div>
      </div>
    </li>
  </ol>
</template>
