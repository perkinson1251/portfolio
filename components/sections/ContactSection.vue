<script lang="ts" setup>
const { getContacts } = useDirectusQueries()

const { data: contacts, status } = getContacts()
</script>

<template>
  <Card id="contacts" class="flex-auto">
    <CardHeader>
      <CardTitle>{{ $t('aboutMeSection.contactsSection.title') }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div
        v-if="status === 'success'"
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
                {{ contact.description }}
              </TheText>
            </div>
          </div>
          <Icon
            name="ph:arrow-up-right"
            class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </NuxtLink>
      </div>
      <FallbackCard description="general.somethingWrongShort" v-else />
    </CardContent>
  </Card>
</template>
