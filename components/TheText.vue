<script setup lang="ts">
type TextVariant = 'default' | 'small' | 'clamp' | 'muted'
type TextTag = 'p' | 'span' | 'div'

interface Props {
  variant?: TextVariant
  as?: TextTag
  class?: string
  clampLines?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  as: 'p',
  clampLines: 3,
})

const classes = computed(() => {
  const variants = {
    default: 'leading-7 [&:not(:first-child)]:mt-6',
    small: 'text-sm text-muted-foreground',
    clamp: `line-clamp-${props.clampLines} text-sm leading-relaxed text-muted-foreground`,
    muted: 'text-muted-foreground',
  }

  return cn(variants[props.variant], props.class)
})
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
