<script lang="ts" setup>
import type { ITech } from '~/types'

const props = defineProps<ITech>()
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Badge
          class="px-2 py-1 transition-colors hover:shadow-lg"
          variant="secondary"
        >
          <Icon :name="props.icon" class="size-3.5" />
          <span class="hidden sm:inline">{{ props.name }}</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>{{ props.name }}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
