<script setup lang="ts">
const { setLocale, locales, locale } = useI18n()

type LocaleCode = keyof typeof flagIcons

const flagIcons = {
  en: 'flag:gb-4x3',
  ua: 'flag:ua-4x3',
} as const
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <Icon
          :name="flagIcons[locale as LocaleCode]"
          class="h-[1.2rem] w-[1.2rem] transition-all"
        />
        <span class="sr-only">Change laungage</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        v-for="item in locales"
        :key="item.code"
        class="flex items-center gap-2"
        @click="setLocale(item.code)"
      >
        <Icon :name="flagIcons[item.code as LocaleCode]" class="h-4 w-4" />
        {{ item.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
