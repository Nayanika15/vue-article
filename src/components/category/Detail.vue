<template>
    <section class="site-section pt-5">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-6">
            <h2 class="mb-4">Category: {{ $route.params.slug}}</h2>
          </div>
        </div>
        <div class="row blog-entries">
          <div class="col-md-12 col-lg-8 main-content">
            <div class="row mb-5 mt-5">

              <div class="col-md-12">

                <div class="post-entry-horzontal">
                  <a href="blog-single.html">
                    <div class="image element-animate" data-animate-effect="fadeIn" style="background-image: url(images/img_10.jpg);"></div>
                    <span class="text">
                      <div class="post-meta">
                        <span class="author mr-2"><img src="images/person_1.jpg" alt="Colorlib"> Colorlib</span>&bullet;
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="mr-2">Food</span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </span>
                  </a>
                </div>
                <!-- END post -->

              </div>
            </div>
            <v-paginator :options="options" :resource_url="resourse_url" @update="fetchCategoryDetail"></v-paginator>
            
          </div>
          <!-- END main-content -->
        </div>
      </div>
    </section>
</template>
<script>
import VuePaginator from 'vuejs-paginator';
export default {
    data (){
      return {
        resource : {},
        articles : {},
        resourse_url : 'category/'+this.$route.params.slug,
         options: {
            remote_data: '',
            remote_current_page: '',
            remote_last_page: '',
            remote_next_page_url: '',
            remote_prev_page_url: ''
          }
        }
    },
    created() {
        this.fetchCategoryDetail();
    },
    methods:{
      fetchCategoryDetail(data){
        console.log(data);
      //  this.$http.get('category/'+this.$route.params.slug)
      //   .then( response =>{
      //     return response.json();
      //     })
      //   .then(data => {
      //       const result = data['result'];
      //       this.articles = result['articles'];
      //       this.remote_data= this.articles.data,
      //       this.remote_current_page= this.articles.current_page,
      //       this.remote_last_page= this.articles.last_page,
      //       this.remote_next_page_url= this.articles.next_page_url,
      //       this.remote_prev_page_url= this.articles.prev_page_url
      //   });
	    }
    },
    components:{
      VPaginator: VuePaginator
    }
  }
</script>