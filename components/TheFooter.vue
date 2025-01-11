<script lang="ts" setup>
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="border-t bg-background">
    <div class="container mx-auto">
      <div
        class="flex flex-col items-center justify-between gap-2 py-4 text-center md:flex-row"
      >
        <p class="text-sm text-muted-foreground">
          &copy; {{ year }} Roman Trashutin.
        </p>

        <p class="text-sm text-muted-foreground">
          Made with love.
          <NuxtLink
            href="https://github.com/perkinson1251/portfolio"
            target="_blank"
            class="underline-offset-4 transition hover:underline"
          >
            See the recent update on GitHub</NuxtLink
          >
        </p>
      </div>
    </div>
  </footer>
</template>
