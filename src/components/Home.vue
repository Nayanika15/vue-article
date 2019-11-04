<template>
  <div>   
    <appSlider></appSlider>
    <!-- END section -->

    <section class="site-section py-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="mb-4">Latest Posts</h2>
          </div>
        </div>
        <div class="row blog-entries">
          <div class="col-md-12 col-lg-8 main-content">
            <div class="row">
              <div 
                class="col-md-6" 
                v-for="(article, index) in articles"
                :key= "index">
                <!-- <a href="#" class="blog-entry " data-animate-effect="fadeIn"> -->
                  <router-link 
                  :to="{name:'articleDetail', params:{ slug : article.slug } }"
                  class="blog-entry " 
                  data-animate-effect="fadeIn">
                  <img :src="article.image" alt="Image placeholder">
                  <div class="blog-content-body">
                    <div class="post-meta">
                      <span class="author mr-2"><img src="src/assets/images/person_1.jpg" :alt="article.created_by">{{ article.created_by }}</span>&bullet;
                      <span class="mr-2">{{ article.created_date }}</span> &bullet;
                      <span class="ml-2"><span class="fa fa-comments"></span> {{ article.comments_count}}</span>
                    </div>
                    <h2>{{ article.title }}</h2>
                  </div>
                  </router-link>
                <!-- </a> -->
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12 text-center">
                <nav aria-label="Page navigation" class="text-center">
                  <ul class="pagination">
                    <li class="page-item  active"><a class="page-link" href="#">&lt;</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">&gt;</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <appSideBar></appSideBar>
        <!-- END sidebar -->
        </div>
      </div>
    </section>      
  </div>
</template>
<script>
  import Slider from './common/Slider.vue';
  import SideBar from './common/SideBar';
  export default{
    data (){
      return {
        resource : {},
        articles :[]
        }
    },
    components:{
      appSlider : Slider,
      appSideBar : SideBar
    },
    created() {
        this.fetchArticles();
    },
    methods:{
      fetchArticles(){
        this.$http.get('article/latest')
	    		.then( response =>{
	    			return response.json();
	    			})
	    		.then(data => {
            if(data['result'].length)
	    			{
              const resArray = [];
              const dataResult = data['result'];
              for(let key in dataResult)
              {	
                resArray.push(dataResult[key]);
              }
              this.articles = resArray;
            }
            
	    		});
	    	}
      }
  }
</script>