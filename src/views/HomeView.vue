<template>

  <LandingPage id="posts"/>
  <PostsComponent />
  <FooterComponent/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
//import HelloWorld from '../components/HelloWorld.vue';
import PostsComponent from '../components/PostsComponent.vue';
import LandingPage from '@/components/LandingPage.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    //HelloWorld,
    LandingPage,
    PostsComponent,
    FooterComponent
},
});
</script>
