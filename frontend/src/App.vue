<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/he">Hello World</router-link>
  </div>
    <router-view></router-view>
</template>

<script>
</script>

<style>
#nav {
  padding: 5px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
