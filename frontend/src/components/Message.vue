<template>
  <div class="message">
    <p>{{ message }}</p>
    <input v-model="message">
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'Message',
  computed: {
    message: {
      get() {
        return store.state.message.message;
      },
      set(value) {
        store.commit('message/updateMessage', value);
      },
    },
  },
  methods: {
    reverseMessage() {
      store.commit('message/reverseMessage');
    },
  },
});
</script>

<style scoped>
.message {
  color: red;
}
</style>
