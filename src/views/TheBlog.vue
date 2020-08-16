<template>
  <div>
    <Header />
    <div class="blog-header">
      <h1 class="container-sm">Blog</h1>
    </div>
    <BlogPostItem />
    <BlogPostItem />
    <BlogPostItem />
  </div>
</template>

<script>
import Header from "@/components/HeaderWhite.vue";
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
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url("~@/assets/images/blog-header.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}
.blog-header h1 {
  color: #fff;
  z-index: 2;
}
</style>
