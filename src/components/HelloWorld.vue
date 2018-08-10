<template>
  <div class="hello">
    <vue-svg-circle></vue-svg-circle>
  </div>
</template>

<script>
import VueSvgCircle from './VueSvgCircle.vue'
export default {
  name: 'HelloWorld',
  components:{
    VueSvgCircle
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  .svg-circle-wrap{
    margin: 0 auto;
  }
}
</style>
