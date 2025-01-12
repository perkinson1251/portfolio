<script setup lang="ts">
import type { TimelineItem, TimelineItemType } from '~/types'

defineProps<{
  items: TimelineItem[]
}>()

const { locale } = useI18n()

const getTypeIcon = (type: TimelineItemType) => {
  return type === 'work' ? 'ph:briefcase' : 'ph:graduation-cap'
}
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
              {{ formatTimelinePeriod(item.startDate, item.endDate, locale) }}
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
              {{ $t(item.title) }}
            </h3>
            <Badge v-if="item.company" variant="outline">
              {{ $t(item.company) }}
            </Badge>
          </div>

          <TheText
            v-if="item.location"
            variant="small"
            class="flex items-center gap-1"
          >
            <Icon name="ph:map-pin" class="size-4" />
            {{ $t(item.location) }}
          </TheText>
        </div>

        <TheText variant="muted">{{ $t(item.description) }}</TheText>

        <div v-if="item.technologies?.length" class="flex flex-wrap gap-1.5">
          <TechBadge
            v-for="tech in item.technologies"
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
            :href="item.link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group gap-2"
          >
            {{ $t(item.link.label) }}
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
