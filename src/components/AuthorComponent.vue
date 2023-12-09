<template>
    
        <div class="author-main-container">
                <v-row class="auth-cont pa-6 mt-1"
                align="end"
                >
                    <v-avatar size="150" class="avatar-container">
                        <v-img
                        :src="require('../assets/img/avatar-3.png')"
                        alt="Author's Profile Image"
                        contain
                        ></v-img>
                        
                    </v-avatar>
                    
                    <v-card-title class="author-name">Pepe</v-card-title>
                </v-row>
            
        </div>
        <v-container>
        <v-col 
        >
          <p>Descripción del autor: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non accusantium explicabo nulla beatae nostrum voluptatibus sit facere dolor mollitia, harum reprehenderit dolorum corporis ut quisquam. Fuga quam doloremque ipsa.</p>
          <!-- Otros datos del autor -->
        </v-col>
    </v-container>
        
      
    
  </template>
  
  <style>
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 110em;
    height: 110em;
    opacity: 0.6;
  }
  
  .avatar-container {
    border: 2px solid white;
    box-shadow: 0 2px 4px #00000033;
  }
  .author-name{
    position: relative;
    color: #fff;
    z-index: 1;
  }
  .author-main-container{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    background-image: url('../assets/img/auth-dark.png');
  }
  .auth-cont {
    
    width: 100%;
    padding-top: 2em; 
    padding-bottom: 0; 
    margin-right: auto;
    margin-left: auto;
}
  @media (min-width: 960px){
    .auth-cont{
    max-width: 900px;
    }
  }


  @media (max-width: 600px) {
  .author-main-container {
    flex-direction: column;
    align-items: center;
  }
  
  .avatar-container {
    margin-bottom: 20px;
  }
}
  </style>