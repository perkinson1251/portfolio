<script lang="ts" setup>
import type { IContact } from '~/types'

const { locale } = useI18n()
const { getItems } = useDirectusItems()

const { data: contacts, refresh } = useAsyncData('contacts', async () => {
  return getItems<IContact>({
    collection: 'contacts',
    params: {
      deep: {
        translations: {
          _filter: {
            languages_key: locale.value,
          },
          limit: 1,
        },
      },
      fields: ['*', 'translations.*'],
    },
  })
})

watch(locale, () => {
  refresh()
})
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
        <NuxtLink
          v-for="contact in contacts"
          :key="contact.name"
          :to="contact.link"
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
              <TheText variant="small" as="span">
                {{ contact.translations[0].description }}
              </TheText>
            </div>
          </div>
          <Icon
            name="ph:arrow-up-right"
            class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </NuxtLink>
      </div>
    </CardContent>
  </Card>
</template>
