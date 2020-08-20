<template>
  <div>
    <Header />
    <div class="post-header">
      <p class="post-header__text container--sm">Blog</p>
    </div>
    <LoadingSpinner v-if="loading" />
    <div class="post__body container--sm" v-if="!loading" data-aos="fade">
      <h1 class="post__title">
        {{ post.title.rendered }}
      </h1>
      <span>{{ getPostDate(post.date) }}</span>
      <img
        class="post__featured-image"
        :src="getFeaturedImage(post)"
        :alt="post.title.rendered"
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
      title: "",
      description: "",
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
        this.title = this.post.title.rendered;
        this.description = this.removeTags(this.post.excerpt.rendered);
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
    },
    removeTags(string) {
      if (string != undefined)
        return string.replace(/(<([^>]+)>)/gi, "").replace("Saiba mais", "");
    }
  },
  mounted() {
    this.getPost();
  },
  metaInfo() {
    return {
      title: `${this.title}`,
      meta: [
        {
          name: "description",
          content: `${this.description}`
        }
      ]
    };
  }
};
</script>

<style>
.post-header {
  background-color: var(--box-light-color);
  position: relative;
  z-index: -1;
  padding: 0.1em 0;
}

.post-header__text {
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 0.2em;
  padding: 0.8em 0;
  margin: auto;
}

.post__body {
  margin: 4em auto 3em;
}

.post__body span {
  text-transform: uppercase;
  font-size: 0.9em;
}

.post__title {
  font-size: 1.7em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.3em;
}

.post__body img {
  max-width: 100%;
  margin: 2em 0;
}

.post__featured-image {
  display: block;
  margin: auto;
}

.post__body p {
  text-align: justify;
}

.back-blog-post-list {
  margin: 3em 0 5em;
}

.back-blog-post-list i {
  padding-left: 0;
}
</style>
