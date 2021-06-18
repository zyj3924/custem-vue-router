<template>
  <div id="app">
    <router-view/>
    <div class="links-wrap">
      <router-link to="BeautyLovely">/BeautyLovely</router-link>
      <router-link to="BeautySexy">/BeautySexy</router-link>
      <router-link to="BeautyPure">/BeautyPure</router-link>
    </div>
  </div>
</template>

<script>
import {RouterView, RouterLink} from './custem-router'

export default {
  name: 'App',
  components: {
    'router-link': RouterLink,
    'router-view': RouterView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.beauty-wrap img{
  width:300px;
}
.beauty-wrap h2{
  letter-spacing: 4px;
  color:#ffffff;
}
body, html{
  height: 100%;
  background: linear-gradient(to bottom right,#024,#402);
}
.links-wrap{
  width:400px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.links-wrap a{
  cursor: pointer;
  display:inline-block;
  padding: 0 20px;
  color:#ffffff;
  text-decoration:underline;
}
</style>
