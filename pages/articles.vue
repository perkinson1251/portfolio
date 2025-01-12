<script setup lang="ts">
import type { Article } from '~/types'

const articles: Article[] = []
const { locale } = useI18n()

const { getPageTitle, getPageDescription } = usePageMeta()

useHead({
  title: getPageTitle('articles'),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: getPageDescription('articles'),
    },
  ],
})
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <TheHeading size="title" tracking spacing class="text-center">
      {{ $t('articles.title') }}
    </TheHeading>

    <div v-if="articles.length > 0" class="grid gap-6 md:grid-cols-2">
      <Card
        v-for="article in articles"
        :key="article.id"
        class="group transition hover:shadow-lg"
      >
        <CardHeader>
          <CardTitle>{{ article.title }}</CardTitle>
          <CardDescription class="flex items-center gap-2">
            <time class="text-sm text-muted-foreground">
              {{ formatDate(article.date, locale) }}
            </time>
            <span class="text-sm text-muted-foreground">
              · {{ article.readTime }} {{ $t('articles.minutesToRead') }}
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p class="line-clamp-2 text-muted-foreground">
            {{ article.description }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <Badge
              v-for="tag in article.tags"
              :key="tag"
              variant="secondary"
              class="text-xs"
            >
              {{ tag }}
            </Badge>
          </div>
        </CardContent>

        <CardFooter>
          <NuxtLink
            :to="article.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {{ $t('articles.readMore') }}
            <Icon
              name="ph:arrow-up-right"
              class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>

    <div
      v-else
      class="flex flex-col items-center justify-center rounded-lg border border-dashed p-12"
    >
      <Icon name="ph:article" class="size-12 text-muted-foreground" />
      <h2 class="mt-4 text-xl font-semibold">
        {{ $t('articles.empty.title') }}
      </h2>
      <p class="mt-2 text-center text-sm text-muted-foreground">
        {{ $t('articles.empty.description') }}
      </p>
    </div>
  </main>
</template>
