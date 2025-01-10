<script setup lang="ts">
import { cn } from '../lib/utils'

interface Props {
  pauseOnHover?: boolean
  reverse?: boolean
  fade?: boolean
  innerClassName?: string
  numberOfCopies?: number
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'left',
  pauseOnHover: false,
  reverse: false,
  fade: false,
  numberOfCopies: 2,
})

const attrs = useAttrs()
</script>

<template>
  <div
    :class="
      cn(
        'marquee-flex-row group flex gap-[1rem] overflow-hidden',
        attrs && (attrs.class as string)
      )
    "
    :style="{
      maskImage: props.fade
        ? `linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
        : '',
      WebkitMaskImage: props.fade
        ? `linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
        : '',
    }"
  >
    <div v-for="(_, i) in Array(props.numberOfCopies).fill(0)" :key="i">
      <div
        :class="
          cn(
            'animate-marquee-left marquee-flex-row flex shrink-0 justify-around gap-[1rem] [--gap:1rem]',
            props.pauseOnHover && 'group-hover:[animation-play-state:paused]',
            props.reverse && 'direction-reverse',
            props.innerClassName
          )
        "
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-flex-row {
  display: flex;
  flex-direction: row;
}

.marquee-flex-column {
  display: flex;
  flex-direction: column;
}
</style>
