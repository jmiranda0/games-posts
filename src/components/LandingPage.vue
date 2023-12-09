<template>
    <div class="landing-page">
      <div class="overlay"></div>
      <div class="content">
        <h1>Bienvenido a mi página de posts de videojuegos</h1>
        <p>Explora los últimos posts y descubre contenido interesante sobre tus videojuegos favoritos.</p>
        <v-btn color="primary" @click="scrollToPosts">Continuar</v-btn>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToPosts() {
        const postsElement = document.querySelector('.posts');
        if (postsElement) {
          postsElement.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .landing-page {
    height: 100vh;
    position: relative;
    background-image: url("../assets/img/home/slider2.jpg");
    background-size: cover;
    background-position: center;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  </style>