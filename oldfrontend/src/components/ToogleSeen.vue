<template>
  <div class="toogleseen">
    <button v-on:click="reverseSeen">Toogle Seen</button>
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'ToogleSeen',
  computed: {
    seen() {
      return store.state.seen.seen;
    },
  },
  methods: {
    reverseSeen() {
      store.dispatch('seen/reverseSeen');
    },
  },
  mounted() {
    store.dispatch('seen/get_seen');
  },
});
</script>

<style scoped>
.toogleseen {
  color: green;
}
</style>
