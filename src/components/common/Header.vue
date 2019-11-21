<template>	
  <div role="banner">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-9 social">
            <router-link to="login" v-if="!isAuthenticated">Login</router-link>
            <router-link to="register">Register</router-link>
            <a @click="loggout" v-if="isAuthenticated"> loggout</a>
          </div>
          <div class="col-3 search-top">
            <!-- <a href="#"><span class="fa fa-search"></span></a> -->
            <form action="#" class="search-top-form">
              <span class="icon fa fa-search"></span>
              <input type="text" id="s" placeholder="Type keyword to search...">
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container logo-wrap">
      <div class="row pt-5">
        <div class="col-12 text-center">
          <a class="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span class="burger-lines"></span></a>
          <h1 class="site-logo"><router-link to="/">Wordify</router-link></h1>
        </div>
      </div>
    </div>
    
    <nav class="navbar navbar-expand-md  navbar-light bg-light">
      <div class="container">
        
       
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link active" to="/">Home</a>
            </li>
            <li class="nav-item dropdown" v-if="categories_count">
              <a class="nav-link dropdown-toggle" href="category.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
              <div class="dropdown-menu" aria-labelledby="dropdown05">
                <router-link 
                  class="dropdown-item"
                  v-for="(category, id) in active_categories" 
                  :key="id" 
                  :to="{name:'categoryDetail', params:{ slug : category.slug  } }"> 
                    {{ category.name}} 
                  </router-link>
                </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact Us</router-link>
            </li>
             <li class="nav-item dropdown" v-if="isAuthenticated">
            <a class="nav-link dropdown-toggle" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Admin </a>
            <div class="dropdown-menu" aria-labelledby="dropdown05">
              <router-link 
                  class="dropdown-item" 
                  :to="{name:'view-category' }"> Category
              </router-link>
              <router-link 
                  class="dropdown-item" 
                  :to="{name:'view-articles' }"> Articles
              </router-link>         
            </div>
          </li>
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    data (){
      return {
        resource : {},
        active_categories : [],
        categories_count : 0,
        isAuthenticated : localStorage.getItem('token'),
        isAdmin : localStorage.getItem('isAdmin')
        }
    },
    created() {
        this.fetchActiveCategories();
    },
    methods:{
      fetchActiveCategories(){
        this.$http.get('category/active')
        .then( response =>{
          return response.json();
          })
        .then(data => {
            this.active_categories = data;
            this.categories_count = data.length;         
        });
      },
      loggout(){
        delete localStorage.token;
        //this.$router.redirect({ name: "Home"});
        this.$router.replace({ name:'home' });
        location.reload();
    }
    }
  }
</script>