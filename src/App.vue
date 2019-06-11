<template>
  <div id="app">
    <b-navbar variant="faded" type="light">
      <b-img src="https://avatars0.githubusercontent.com/u/14095475?s=460&v=4" height='50' class="d-inline-block align-top" rounded="circle" alt="My beautiful face">
      </b-img>
      <b-navbar-brand class='me'>
        Katie Bottenhorn
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <a href="https://github.com/62442katieb/bloom">bloom</a>
      </b-navbar-nav>
    </b-navbar>
    <BloomVis msg="Katie Bottenhorn"/>
  </div>
</template>

<script>
import BloomVis from './components/BloomVis.vue'
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

export default {
  name: 'app',
  components: {
    BloomVis
  },
  data() {
    return {
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.me {
  padding: 10px;
}

</style>
