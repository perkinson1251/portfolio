<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="flex flex-col items-center justify-center gap-4 py-48 text-center"
    >
      <h3 class="text-3xl font-semibold">
        {{ $t('heroBlock.greeting') }}
        <div class="transform-origin-wave-origin animate-wave inline-block">
          👋
        </div>
      </h3>
      <h1 class="text-6xl font-bold">{{ $t('heroBlock.name') }}</h1>
      <h2 class="text-2xl">
        {{ $t('heroBlock.profession.prefix') }}
        <span class="font-semibold">{{
          $t('heroBlock.profession.title')
        }}</span>
        {{ $t('heroBlock.profession.description') }}
      </h2>
      <div class="flex flex-col gap-4 pt-10 md:flex-row">
        <Button size="lg">{{ $t('heroBlock.buttons.contact') }}</Button>
        <Button size="lg" variant="outline">
          {{ $t('heroBlock.buttons.resume') }}
          <Icon name="ph:arrow-up-right" class="size-[1rem]" />
        </Button>
      </div>
    </div>
  </div>
</template>
