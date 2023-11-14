<template>
  <article>
    <ContentDoc v-slot="{ doc: news }">
      <h1>{{news.title}}</h1>
      <dl>
        <dt>date</dt>
        <dd>{{news.date}}</dd>
      </dl>
      <div><img :src="news.image" /></div>
      <div v-for="tag in news.tags" :key="tag">{{tag}}</div>
      <ContentRenderer :value="news" />
    </ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute()
const news = await queryContent(route.path).findOne()
const meta = {
  title: news.title,
}
useHead(meta)
</script>
