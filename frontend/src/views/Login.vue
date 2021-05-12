<template>
 <div>
   <form @submit.prevent="login(username, password)">
     <h1>Sign in</h1>
     <label>Username</label>
     <input required v-model="username" type="text" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <button type="submit">Login</button>
   </form>
   <p>Token: {{ token }}</p>
   <p>Username: {{ usernamest }}</p>
   <p>Status: {{ status }}</p>
 </div>
</template>

<script>
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      password: '',
      username: '',
    };
  },
  computed: {
    token() {
      return store.state.auth.token;
    },
    usernamest() {
      return store.state.auth.username;
    },
    status() {
      return store.state.auth.status;
    },
  },
  methods: {
    login(username, password) {
      store.dispatch('auth/login', { username, password });
    },
  },
});
</script>

<style scoped>
</style>
