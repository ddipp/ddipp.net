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
      return store.state.seen;
    },
  },
  methods: {
    reverseSeen() {
      store.dispatch('reverseSeen');
    },
  },
  mounted() {
    store.dispatch('get_seen');
  },
});
</script>

<style lang="scss" scoped>
.toogleseen {
  color: green;
}
</style>
