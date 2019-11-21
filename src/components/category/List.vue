<template>
<div>
    <section class="site-section">
    <div class="container">
        <div class="row mb-4">
            <div class="col-md-6">
                <h1 class="mb-4">Add Category
                  <small>
                      <router-link :to="{name:'add-category'}" 
                        :class="'btn btn-primary btn-xs rounded'">Add</router-link>
                  </small>
                </h1>
            </div>
        </div>
        <div class="row blog-entries">
          <div class="col-md-12 col-lg-12 main-content">
            <table v-if="categories.length" class="table">
              <thead>
                <td> ID </td>
                <td> Title </td>
                <td> Action </td>
              </thead>
              <tbody>
                <tr v-for="(category, id) in categories"
                :key="id">
                  <td> {{ category.id}} </td>
                  <td> {{ category.name}} </td>
                  <td> <router-link class="btn btn-primary" :to="{ name:'edit-category' , params:{ id: category.id }}"> <i class='fa fa-edit'></i> </router-link> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  data(){
    return {
      categories : []
  }
  },
  created(){
    this.$http.get('category/list')
    .then( response => {
      return response.json();
          })
    .then( data =>{
        this.categories = data['data'];
      });
  }
    
}
</script>