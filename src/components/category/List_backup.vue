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
            <data-table
                :per-page="perPage"
                :classes="classes"
                :columns="columns"
                url="http://article.com/api/category/list">
            </data-table>
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
    perPage:['5', '10'],
    classes: {
      "table": {
        "table": true,
        "table-striped": true,
        "table-dark": false
    },
    'table-container': {
                    'justify-center': true,
                    'w-full': true,
                    'flex': true,
                    'rounded': true,
                    'mb-6': true,
                    'shadow-md': true,
                    'width': 100
                },
    },
    columns: [
              {
                  label: 'ID',
                  name: 'id',
                  filterable: true,
              },
              {
                  label: 'Name',
                  name: 'name',
                  filterable: true,
              },
              {
                  label: 'Created At',
                  name: 'date',
                  filterable: true
              }
            ]
    }
  }
    
}
</script>