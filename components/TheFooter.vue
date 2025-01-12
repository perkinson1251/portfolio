<script lang="ts" setup>
const year = computed(() => useState('year', () => new Date().getFullYear()))
</script>

<template>
  <footer class="border-t bg-background">
    <div class="container mx-auto">
      <div
        class="flex flex-col items-center justify-between gap-2 py-4 text-center md:flex-row"
      >
        <TheText variant="small" as="span">
          &copy; {{ year }} {{ $t('footer.nameSurname') }}.
        </TheText>

        <TheText variant="small" as="span">
          {{ $t('footer.madeWith') }}
          <NuxtLink
            href="https://github.com/perkinson1251/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            class="underline-offset-4 transition hover:underline"
          >
            {{ $t('footer.check') }}</NuxtLink
          >
        </TheText>
      </div>
    </div>
  </footer>
</template>
