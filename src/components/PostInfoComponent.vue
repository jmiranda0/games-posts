<template>
    <v-container>
      <v-card>
        <v-row>
            <v-card-title class="ml-5 mt-5">{{ post.title }}</v-card-title>
        </v-row>
        <v-row>
          <v-img
            class="white--text align-end"
            :src="require(`../assets/img/posts/${post.image}`)"
          ></v-img>        
        </v-row>
        <v-row class="pb-0 ml-5 mt-4 mb-3">
            <v-card-text>{{ post.content }}</v-card-text>

        </v-row>  
        <hr>
        <v-row class="pb-0 ml-5 mt-2 mb-1">
            <v-p >Clasificacion: {{ classi.ESRB }}</v-p>
        </v-row>
          <v-card-actions class="mb-0 pb-0">
            <v-card-subtitle class="pb-0">Author:</v-card-subtitle>
            <v-btn color="orange" @click="redirectToAuthor(author.id)">
              {{author.name}}
            </v-btn>
          </v-card-actions>
        <v-card-actions>
          <v-btn color="primary" text to="/">Atrás</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

   

  </template>
  
  <script>
   export default {
  data() {
    return {
      post:[],
      author:[],
      classi:[]
    };
  },
  
  methods: {
    async fetchpost(postId) {
      try {
        const response = await this.$axios.get(`/posts/${postId}`);
        this.post = response.data;
        this.author = this.post.author;
        this.classi = this.post.classification;
      } catch (error) {
                 console.error('Error show post: ', error);
       }
    },
    redirectToAuthor(authorId) {
      // Redirigir al componente para mostrar el contenido del post específico
      this.$router.push({ name: 'author', query: { id: authorId } });
    },
    
  },
  mounted() {
    const postId = this.$route.query.id;
    this.fetchpost(postId);
  }
};
  </script>
  
  <style>
  .postImg {
    width: 100%;
    object-fit: cover;
  }
  </style>