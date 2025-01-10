<script lang="ts" setup>
interface Props {
  status: 'searching' | 'hired'
}

const color = computed(() => {
  return props.status === 'searching' ? 'bg-green-500' : 'bg-yellow-500'
})

const props = defineProps<Props>()
</script>

<template>
  <button
    class="relative flex w-auto cursor-default items-center rounded-xl bg-background px-4 py-2 text-sm font-light uppercase shadow-inner shadow-accent transition hover:-translate-y-1 dark:text-white"
  >
    <div class="relative mr-2 flex h-4 w-4 items-center justify-center">
      <span
        class="absolute left-1/2 top-1/2 inline-block h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full"
        :class="color"
      ></span
      ><span
        class="absolute inline-block h-4 w-4 animate-ping rounded-full"
        :class="color"
      ></span>
    </div>
    {{ $t('statusBlock.status') }}: {{ $t(`statusBlock.${props.status}`) }}
  </button>
</template>
