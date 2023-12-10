<template>
    <section>
        <div class="circle"></div>
        <v-container>
          <v-row class="fill-height">
            <v-col
              cols="12"
              md="4"
              sm="4"
              v-for="(post) in posts"
              :key="post.id"
            >
              <v-card
                outlined 
                tile 
                class="posts mb-4" 
                min-height="300px"
                
                @mouseleave="handleMouseLeave"
                
                :class="{ 'post-hovered': postHovered === post.id }"
              >
                <div
                @mouseover="handleMouseOver(post.id)"
                @click="redirectToPost(post.id)"
                >
                <v-card-title>{{ post.title }}</v-card-title>
                
                <v-img
                  class="white--text align-end"
                  :src="require(`../assets/img/posts/${post.image}`)"
                ></v-img>
                <v-card-text class="text--primary">
                  
                  <div>{{ truncateContent(post.content) }}</div>
                </v-card-text>
                </div>
                <hr>
                <v-card-actions>
                  <v-card-subtitle class="pb-0">Author:</v-card-subtitle>
                  <v-btn color="orange" @click="redirectToAuthor(post.author.id)">
                    {{ post.author.name }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <div class="-circle"></div>
    </section>
</template>



<script>
export default {
  data() {
    return {
      posts: [],
      maxContentLength: 50, // Ajusta la longitud máxima del contenido que deseas mostrar
      postHovered: null,
    };
  },
  methods: {
    truncateContent(content) {
      if (content.length > this.maxContentLength) {
        return content.substring(0, this.maxContentLength) + '...';
      }
      return content;
    },
    async loadPosts() {
      try {
        const response = await this.$axios.get('/posts');
        this.posts = response.data;
      } catch (error) {
        console.error('Error al obtener posts:', error);
      }
    },
    handleMouseOver(postId) {
      this.postHovered = postId;
    },
    handleMouseLeave() {
      this.postHovered = null;
    },
    redirectToPost(postId) {
      // Redirigir al componente para mostrar el contenido del post específico
      this.$router.push({ name: 'post', query: { id: postId } });
    },
    redirectToAuthor(authorid) {
      // Redirigir al componente para mostrar el contenido del autor específico
       this.$router.push({ name: 'author', query: { id: authorid } });
    
    },
    
   
  },
  mounted() {
    this.loadPosts();
  },
};
</script>

<style>
.post-hovered {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #161616;
}

section .circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #63010e;
  clip-path: circle(70% at right -20%);
}

</style>