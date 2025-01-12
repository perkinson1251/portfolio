<script lang="ts" setup>
import { techStack } from '@/constants'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('aboutMeSection.stackSection.title') }}</CardTitle>
    </CardHeader>
    <CardContent>
      <TheMarquee class="py-4 md:py-14" :fade="true" :pause-on-hover="true">
        <div class="flex items-center gap-4">
          <TooltipProvider v-for="item in techStack" :key="item.name">
            <Tooltip>
              <TooltipTrigger>
                <Icon
                  :name="item.icon"
                  class="size-12 transition hover:drop-shadow-lg"
                />
              </TooltipTrigger>
              <TooltipContent>{{ item.name }}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </TheMarquee>
    </CardContent>
  </Card>
</template>
