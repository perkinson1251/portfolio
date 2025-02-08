<script lang="ts" setup>
import type { ITech } from '~/types'

const props = defineProps<ITech>()
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Badge
          class="inline-flex items-center gap-1 px-2 py-1 transition-colors hover:shadow-lg"
          variant="secondary"
        >
          <Icon :name="props.icon" class="size-3.5" />
        </Badge>
      </TooltipTrigger>
      <TooltipContent>{{ props.name }}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
