<template>
  <div>
    <Header isLogoWhite isTransparent />
    <div class="page-header blog-header">
      <h1 class="container-sm page-header__title">Blog</h1>
    </div>
    <div v-if="loading">
      <LoadingSpinner />
    </div>
    <transition-group name="fade-blog">
      <div
        class="blog-item container-sm"
        v-for="(post, index) in posts"
        :key="index"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          class="blog-item__image-container"
          v-if="post['_embedded']['wp:featuredmedia'] != undefined"
        >
          <router-link :to="'/blog/' + post.id">
            <img :src="getFeaturedImage(post)" alt="" />
          </router-link>
        </div>
        <div>
          <router-link :to="'/blog/' + post.id">
            <h2 v-html="post.title.rendered"></h2>
          </router-link>
          <div class="blog-item__date">
            {{ getPostDate(post.date) }}
          </div>
          <div class="blog-item__text">
            {{ removeTags(post.excerpt.rendered) }}(...)
          </div>
          <router-link class="text-link" :to="'/blog/' + post.id">
            LEIA MAIS <i class="fas fa-long-arrow-alt-right"></i>
          </router-link>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";
import LoadingSpinner from "@/components/TheLoadingSpinner.vue";
import moment from "moment";
moment.locale("pt-br");

export default {
  name: "TheBlog",
  data() {
    return {
      uri: "https://gonzagasampaio.com.br/wp-json/wp/v2/posts?_embed",
      posts: [],
      loading: true
    };
  },
  components: {
    Header,
    LoadingSpinner
  },
  mounted() {
    this.getPosts();
    this.removeTags();
  },
  methods: {
    getPosts() {
      this.$http
        .get(this.uri)
        .then(response => {
          this.posts = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getPostDate(date) {
      return moment(date).format("LLL");
    },
    removeTags(string) {
      if (string != undefined)
        return string.replace(/(<([^>]+)>)/gi, "").replace("Saiba mais", "");
    },
    getFeaturedImage(post) {
      if (post["_embedded"]["wp:featuredmedia"] != undefined) {
        return post["_embedded"]["wp:featuredmedia"][0]["media_details"][
          "sizes"
        ]["full"]["source_url"];
      }
    }
  }
};
</script>

<style>
.blog-header {
  background-image: url("~@/assets/images/blog-header.jpg");
}

.blog-item {
  display: flex;
  border-bottom: 1px solid var(--box-medium-color);
  padding: 3em 0 2em;
}

.blog-item:last-child {
  border: none;
  margin-bottom: 3em;
}

.blog-item__image-container {
  min-width: 200px;
  max-width: 200px;
  height: 200px;
  margin-right: 2em;
}

.blog-item__image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-item__date {
  display: block;
  font-size: 0.8em;
  margin: 0.5em 0 2em;
  text-transform: uppercase;
}

.blog-item__text {
  font-size: 0.95em;
  line-height: 1.5em;
  margin: 0;
}

.fade-blog-enter-active {
  transition: opacity 0.5s ease;
}

.fade-blog-enter {
  opacity: 0;
}

@media only screen and (max-width: 512px) {
  .blog-item {
    flex-wrap: wrap;
  }
  .blog-item__image-container {
    width: 100%;
    max-width: 100%;
    height: 200px;
    margin: 0 0 2em;
  }
}
</style>
