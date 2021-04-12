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
      return store.state.count; // state.count;
    },
  },
  methods: {
    increment() {
      store.dispatch('Dincrement');
    },
    increment10() {
      store.dispatch('Dincrement10');
    },
  },
  mounted() {
    store.dispatch('get_counter');
  },
});
</script>

<style lang="scss" scoped>
.counter {
  color: blue;
}
</style>
