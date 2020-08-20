<template>
  <div>
    <Header />
    <div class="blog-post-header">
      <p class="container-sm">Blog</p>
    </div>
    <div v-if="loading">
      <LoadingSpinner />
    </div>
    <div class="blog-post-body container-sm" v-if="!loading" data-aos="fade">
      <h1 class="blog-post-headline">
        {{ post.title.rendered }}
      </h1>
      <span>{{ getPostDate(post.date) }}</span>
      <img
        class="blog-post-featured-image"
        :src="getFeaturedImage(post)"
        alt=""
      />
      <div v-html="post.content.rendered"></div>
      <div class="back-blog-post-list">
        <router-link :to="{ name: 'Blog' }" class="text-link"
          ><i class="fas fa-long-arrow-alt-left"></i> Voltar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";
import LoadingSpinner from "@/components/TheLoadingSpinner.vue";
import moment from "moment";
moment.locale("pt-br");

export default {
  name: "TheBlogPost",
  data() {
    return {
      uri: "https://gonzagasampaio.com.br/wp-json/wp/v2/posts/",
      id: this.$route.params.id,
      post: {},
      loading: true
    };
  },
  components: {
    Header,
    LoadingSpinner
  },
  methods: {
    getPost() {
      this.$http.get(this.uri + this.id + "?_embed").then(response => {
        this.post = response.data;
        this.loading = false;
      });
    },
    getPostDate(date) {
      return moment(date).format("LLL");
    },
    getFeaturedImage(post) {
      if (post["_embedded"]["wp:featuredmedia"] != undefined) {
        return post["_embedded"]["wp:featuredmedia"][0]["media_details"][
          "sizes"
        ]["full"]["source_url"];
      }
    }
  },
  mounted() {
    this.getPost();
  }
};
</script>

<style>
.blog-post-header {
  background-color: var(--box-light-color);
  position: relative;
  z-index: -1;
  padding: 0.1em 0;
}

.blog-post-header p {
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 0.2em;
  padding: 0.8em 0;
  margin: auto;
}

.blog-post-body {
  margin: 4em auto 3em;
}

.blog-post-body span {
  text-transform: uppercase;
  font-size: 0.9em;
}

.blog-post-headline {
  font-size: 1.7em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.3em;
}

.blog-post-body img {
  max-width: 100%;
  margin: 2em 0;
}

.blog-post-featured-image {
  display: block;
  margin: auto;
}

.blog-post-body p {
  text-align: justify;
}

.back-blog-post-list {
  margin: 3em 0 5em;
}

.back-blog-post-list i {
  padding-left: 0;
}
</style>
