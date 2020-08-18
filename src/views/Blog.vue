<template>
  <div>
    <Header isLogoWhite isTransparent />
    <div class="page-header blog-header">
      <h1 class="container-sm page-header__title">Blog</h1>
    </div>
    <BlogPostItem />
    <BlogPostItem />
    <BlogPostItem />
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";
import BlogPostItem from "@/components/BlogPostItem.vue";

export default {
  name: "TheBlog",
  components: {
    Header,
    BlogPostItem
  }
};
</script>

<style>
.blog-header {
  background-image: url("~@/assets/images/blog-header.jpg");
}
</style>
