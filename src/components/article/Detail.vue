<template>
  <div>
    <section class="site-section py-lg">
      <div class="container">        
        <div class="row blog-entries ">
          <div class="col-md-12 col-lg-8 main-content">
              <div class="post-meta">
                <span class="author mr-2"><img src="/src/assets/images/person_1.jpg" :alt="article.added_by" class="mr-2"> {{ article.added_by }}</span>&bullet;
                <span class="mr-2"> {{ article.date }} </span> &bullet;
                <span class="ml-2"><span class="fa fa-comments"></span> {{ comments_count }} </span>
              </div>
            <h1 class="mb-4"> {{ article.title }}</h1>
            <div class="post-content-body"> <span v-html="article.details"></span></div>

            
            <div class="pt-5">
              <p>Categories:  
                <router-link 
                v-for="(category, id) in article.categories" 
                :key="id"
                :to="{name:'categoryDetail', params:{ slug : category.slug  } }"> {{ category.name }} </router-link> </p>
            </div>


            <div class="pt-5" v-if="comments_count">
              <h3 class="mb-5"> {{ comments_count }} Comments</h3>
              <ul class="comment-list">
                <li class="comment" v-for="(comment, index) in active_comments" :key="index">
                  <div class="vcard">
                    <img :src = "'/src/assets/images/person_1.jpg'" alt="Image placeholder">
                  </div>
                  <div class="comment-body">
                    <h3>{{ comment.name }}</h3>
                    <div class="meta">{{ comment.created_date }}</div>
                    <p v-html="comment.comment"></p>
                    <p><a href="#" class="reply rounded">Reply</a></p>
                  </div>
                </li>
              </ul>
              <!-- END comment-list -->
              
              <div class="comment-form-wrap pt-5">
                <h3 class="mb-5">Leave a comment</h3>
                <form action="#" class="p-5 bg-light">
                  <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" class="form-control" id="name">
                  </div>
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email">
                  </div>
                  <div class="form-group">
                    <label for="website">Website</label>
                    <input type="url" class="form-control" id="website">
                  </div>

                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Post Comment" class="btn btn-primary">
                  </div>

                </form>
              </div>
            </div>
        </div>
        <appSideBar></appSideBar>
          <!-- END main-content -->

        </div>
      </div>
    </section>
    <div class="py-5" v-if="realted_articles_count">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="mb-3 ">Related Post</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4" v-for="(related, index) in related_articles" :key="index">
            <router-link 
              class="a-block sm d-flex align-items-center height-md" 
              :style="{ 'background-image' : 'url(' + related.image + ')'} "
              v-bind:to="{name:'articleDetail', params:{ slug : related.slug  } }"
              @click="getArticle">
              <div class="text">
                <div class="post-meta">
                  <span class="category">Lifestyle</span>
                  <span class="mr-2">{{ related.created_date }}</span> &bullet;
                  <span class="ml-2"><span class="fa fa-comments"></span>{{ related.comments_count }}</span>
                </div>
                <h3>{{ related.title }}</h3>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import SideBar from '../common/SideBar';
  export default {
    data (){
      return {
        resource : {},
        article : [],
        comments : [],
        comments_count : 0,
        related_articles :[],
        realted_articles_count : 0
        }
    },
    components:{
      appSideBar : SideBar
    },
    created() {
        this.fetchArticleDetail(this.$route.params.slug);
    },
    beforeRouteUpdate (to, from, next) {
      this.fetchArticleDetail(to.params.slug);
      next();
    },
    methods:{
      fetchArticleDetail(path){
        this.$http.get('article/'+path)
        .then( response =>{
          return response.json();
          })
        .then(data => {
            const result = data['result'];
            this.article = result['article'];
            this.active_comments = result['active_comments'];
            this.comments_count = result['active_comments'].length;
            this.related_articles = result['related_articles'];
            this.realted_articles_count = result['related_articles'].length;          
        });
	    }
    }
  }
</script>