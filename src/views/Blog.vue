<template>
  <div>
    <Header isLogoWhite isTransparent />
    <div class="page-header blog-header">
      <h1 class="container-sm page-header__title">Blog</h1>
    </div>
    <div class="blog-post-item" v-for="(post, index) in posts" :key="index">
      <h2 v-html="post.title.rendered"></h2>
      <div class="blog-post-item__date" v-html="post.date"></div>
      <div class="blog-post-item__text" v-html="post.content.rendered"></div>
      <a :href="post.slug" class="text-link"
        >LEIA MAIS <i class="fas fa-long-arrow-alt-right"></i
      ></a>
    </div>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";

export default {
  name: "TheBlog",
  data() {
    return {
      posts: []
    };
  },
  components: {
    Header
  },
  mounted() {
    this.$http
      .get("https://gonzagasampaio.com.br/wp-json/wp/v2/posts")
      .then(response => {
        this.posts = response.data;
        console.log(this.posts);
      });
  }
};
</script>

<style>
.blog-header {
  background-image: url("~@/assets/images/blog-header.jpg");
}

.blog-post-item {
  border-bottom: 1px solid var(--box-medium-color);
  padding: 3em 0 2em;
  margin: auto;
  width: 85%;
  max-width: 850px;
}

.blog-post-item__date {
  display: block;
  font-size: 0.85em;
  margin: 1em 0 2em;
}

.blog-post-item__text {
  font-size: 0.95em;
  line-height: 1.5em;
  margin: 0;
}
</style>
