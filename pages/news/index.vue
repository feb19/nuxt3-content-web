<template>
  <div>
    <div v-for="n in news" :key="n._path">
      <nuxt-link :to="n._path">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { data: news } = await useAsyncData("news", () =>
  queryContent("news").limit(15).find()
)
useHead({
  title: "News",
})
</script>
