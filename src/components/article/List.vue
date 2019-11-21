<template>
<div>
    <section class="site-section">
    <div class="container">
        <div class="row mb-4">
            <div class="col-md-6">
                <h1 class="mb-4">Add Article
                  <small>
                      <router-link :to="{name:'add-article'}" 
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
                url="http://article.com/api/article/list">
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
                  label: 'Id',
                  name: 'id',
                  filterable: true,
              },
              {
                  label: 'Title',
                  name: 'title',
                  filterable: true,
              },
              {
                  label: 'Paid Status',
                  name: 'paid_status',
                  filterable: true,
              
              },
              {
                  label: 'Status',
                  name: 'approve_status',
                  filterable: true,
              },
              {
                  label: 'Created At',
                  name: 'date',
                  filterable: true
              },
              {
                  label:'',
                  name: 'Edit',
                  event: "click",
                  handler: this.editArticle,
                  component: 
                  {
                      template : `<router-link :to = \"{ name:'edit-article', params:{ id: data.id }}\" class='btn btn-primary'><i class='fa fa-edit'></i></router-link>`
                  }
                  

              }
            ]
    }
  },
  methods: {
        editArticle(data) {
            alert(`You clicked row ${data.id}`);
        }
  }
    
}
</script>