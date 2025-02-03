<script lang="ts" setup>
interface Props {
  title?: string
  description?: string
  icon?: string
  spacious?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed"
    :class="props.spacious ? 'p-12' : 'p-4'"
  >
    <Icon
      v-if="props.icon"
      :name="props.icon"
      class="size-12 text-muted-foreground"
    />
    <TheHeading v-if="props.title" variant="small">
      {{ $t(props.title) }}
    </TheHeading>
    <TheText v-if="props.description" variant="small">
      {{ $t(props.description) }}
    </TheText>
  </div>
</template>
