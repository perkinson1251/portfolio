<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const route = useRoute()
const routes = [
  { path: '/projects', key: 'navbar.projects' },
  { path: '/experience', key: 'navbar.experience' },
  { path: '/articles', key: 'navbar.articles' },
]
</script>

<template>
  <div
    class="container mx-auto flex items-center justify-between rounded-full bg-white bg-opacity-20 px-8 py-4 shadow-lg backdrop-blur-sm backdrop-filter dark:bg-black dark:bg-opacity-30"
  >
    <div class="flex items-center gap-4">
      <NuxtLink to="/" class="user-select-none text-xl font-bold">RT</NuxtLink>
      <NavigationMenu class="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem v-for="item in routes" :key="item.key">
            <NavigationMenuLink asChild>
              <NuxtLink
                :to="item.path"
                :class="[
                  navigationMenuTriggerStyle(),
                  route.path === item.path ? 'bg-accent' : '',
                ]"
              >
                {{ $t(item.key) }}
              </NuxtLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    <div class="flex items-center gap-2">
      <client-only>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </client-only>

      <DropdownMenu>
        <DropdownMenuTrigger class="block md:hidden" as-child>
          <Button variant="outline" size="icon">
            <Icon name="ph:list" class="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="flex flex-col items-stretch">
          <DropdownMenuItem
            v-for="item in routes"
            :key="item.key"
            class="w-full p-0"
            :class="route.path === item.path ? 'bg-accent' : ''"
          >
            <NuxtLink :to="item.path" class="flex w-full px-2 py-1.5">
              {{ $t(item.key) }}
            </NuxtLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>
