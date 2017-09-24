<template>
    <ul>
      <li>
        <router-link tag="a" :to="{name:'init'}">demo0: init</router-link>
      </li>
      <li>
        <router-link tag="a" :to="{name:'demo1'}">demo1: geometries</router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
