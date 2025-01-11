<script setup lang="ts">
import { Input } from '@/components/ui/input'
import type { SortDirection, SortOption, SortType, SortValue } from '~/types'
const { searchQuery, sortBy, sortDirection, sortedProjects } = useProjects()
const { t } = useI18n()

const sortOptions: SortOption[] = [
  { value: 'date-desc', label: t('projects.sort.newest') },
  { value: 'date-asc', label: t('projects.sort.oldest') },
  { value: 'name-asc', label: t('projects.sort.nameAZ') },
  { value: 'name-desc', label: t('projects.sort.nameZA') },
]

const selectedSort = ref<SortValue>(sortOptions[0].value)

watch(selectedSort, (newValue: SortValue) => {
  const [type, direction] = newValue.split('-') as [SortType, SortDirection]
  sortBy.value = type
  sortDirection.value = direction
})
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <h1
      class="mb-6 scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      {{ $t('projects.title') }}
    </h1>
    <div
      class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div class="relative w-full">
        <Icon
          name="ph:magnifying-glass"
          class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          v-model="searchQuery"
          :placeholder="$t('projects.search.placeholder')"
          class="pl-10"
        />
      </div>

      <Select v-model="selectedSort">
        <SelectTrigger class="w-full md:w-[200px]">
          <SelectValue :placeholder="$t('projects.sort.placeholder')" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{{ $t('projects.sort.label') }}</SelectLabel>
            <SelectItem
              v-for="option in sortOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div
      v-if="sortedProjects.length"
      class="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      <ProjectCard
        v-for="project in sortedProjects"
        :key="project.name"
        :project
      />
    </div>

    <div
      v-else
      class="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-dashed"
    >
      <Icon name="ph:folder-notch-open" class="size-12 text-muted-foreground" />
      <p class="mt-4 text-sm text-muted-foreground">
        {{ $t('projects.noResults') }}
      </p>
    </div>
  </main>
</template>
