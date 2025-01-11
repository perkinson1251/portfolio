<template>
  <main class="flex min-h-screen flex-col">
    <div class="container mx-auto mt-4 flex-1">
      <TheNavbar />
      <slot />
    </div>
    <TheFooter class="mt-4" />
  </main>
</template>
