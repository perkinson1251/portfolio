<script setup lang="ts">
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingSize = 'hero' | 'section' | 'subsection' | 'title'

interface Props {
  level?: HeadingLevel
  size?: HeadingSize
  spacing?: boolean
  tracking?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  level: 1,
  size: 'section',
  spacing: false,
  tracking: false,
})

const getVariantClasses = computed(() => {
  const variants = {
    hero: 'text-6xl font-bold',
    section: 'text-3xl font-semibold',
    subsection: 'text-2xl',
    title: 'text-3xl font-semibold tracking-tight',
    small: 'text-xl font-semibold',
  }

  return variants[props.size]
})

const classes = computed(() => {
  return cn(
    'transition-colors',
    getVariantClasses.value,
    props.spacing && 'pb-8',
    props.tracking && 'tracking-tight',
    props.size === 'section' && 'scroll-m-20 first:mt-0',
    props.class
  )
})
</script>

<template>
  <component :is="`h${level}`" :class="classes">
    <slot />
  </component>
</template>
