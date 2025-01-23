<script setup lang="ts">
const route = useRoute()

const isMainPage = computed(() => route.path === '/')

const { t } = useI18n()
const head = useLocaleHead()
const title = computed(() => t(`nuxtSiteConfig.titles.${route.meta.title}`))
const description = computed(() =>
  t(`nuxtSiteConfig.descriptions.${route.meta.description}`)
)
</script>

<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.hid">
        <Link
          :id="link.hid"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.hid">
        <Meta
          :id="meta.hid"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
      <Meta name="description" :content="description" />
    </Head>
    <Body>
      <main class="flex min-h-screen flex-col">
        <div class="container mx-auto mt-4 flex-1">
          <TheNavbar />
          <slot />
        </div>

        <Transition
          enter-active-class="transition-opacity duration-500"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-500"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isMainPage"
            class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10 overflow-hidden"
          >
            <div class="background"></div>
          </div>
        </Transition>
        <TheFooter class="mt-4" />
      </main>
    </Body>
  </Html>
</template>

<style scoped>
.background::after,
.background::before {
  @apply transition-all duration-500;
}

.background::after {
  background-image: radial-gradient(
      at 40% 40%,
      rgb(203, 116, 243) 0px,
      transparent 50%
    ),
    radial-gradient(at 90% 10%, rgb(188, 105, 255) 0px, transparent 50%),
    radial-gradient(at 50% 95%, rgb(255, 0, 242) 0px, transparent 50%),
    radial-gradient(at 20% 30%, rgb(97, 16, 151) 0px, transparent 50%),
    radial-gradient(at 90% 90%, rgb(134, 41, 130) 0px, transparent 50%),
    radial-gradient(at 33% 50%, rgb(119, 0, 255) 0px, transparent 50%),
    radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);
  @apply absolute top-0 -z-[1] h-full w-full opacity-10 blur-md saturate-100 content-[''] mask-fade;
}

.background::before {
  @apply absolute -z-[1] h-full w-full bg-transparent bg-[length:90px_95px] bg-scroll bg-clip-border bg-left-top bg-repeat bg-origin-padding content-[''] mask-fade;
  background-image: linear-gradient(
    to right,
    currentcolor 1px,
    transparent 1px
  );
  color: rgba(113, 113, 113, 0.07);
}
</style>
