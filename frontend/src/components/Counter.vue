<template>
  <div class="counter">
   <p>Counter: {{ count }}</p>
    <button v-on:click="increment">
      Increment
    </button>
    <button v-on:click="increment10">
      Increment10
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'Counter',
  computed: {
    count() {
      return store.state.counter.count;
    },
  },
  methods: {
    increment() {
      store.dispatch('counter/Dincrement');
    },
    increment10() {
      store.dispatch('counter/Dincrement10');
    },
  },
  mounted() {
    store.dispatch('counter/get_counter');
  },
});
</script>

<style scoped>
.counter {
  color: blue;
}
</style>
