<script lang="ts" setup>
import { contacts } from '@/constants'
</script>

<template>
  <Card id="contacts" class="flex-auto">
    <CardHeader>
      <CardTitle>{{ $t('aboutMeSection.contactsSection.title') }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div
        class="grid grid-cols-1 gap-2 md:grid-cols-2 [&>*:last-child:nth-child(odd)]:md:col-span-2"
      >
        <a
          v-for="contact in contacts"
          :key="contact.name"
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between rounded-lg border p-3 transition-all hover:bg-accent"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-lg border transition-colors"
            >
              <Icon
                :name="contact.icon"
                class="size-5 transition-transform group-hover:scale-110"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-medium">{{ contact.name }}</span>
              <span class="text-sm text-muted-foreground">
                {{ $t(`${contact.description}`) }}
              </span>
            </div>
          </div>
          <Icon
            name="ph:arrow-up-right"
            class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </CardContent>
  </Card>
</template>
