<template>
  <div id="app">
     <div class="wrap">
      <appHeader></appHeader>
      <router-view></router-view>
      <appFooter></appFooter>
    </div>
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
export default {
  components:{
      appHeader: Header,
      appFooter: Footer
    }
}
</script>