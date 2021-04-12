<template>
  <div>
    <p>List</p>
    <ol>
      <li v-for="(ele, id) in list" :key='ele'>
        {{ ele.text }} - {{ id }}
      </li>
      <li>
        <input v-model="newListItem" v-on:keyup.enter="addToList(newListItem)">
        <button v-on:click="addToList(newListItem)">Add</button>
      </li>
    </ol>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'List',
  data() {
    return {
      newListItem: '',
    };
  },
  computed: {
    list() {
      return store.state.li.list;
    },
  },
  methods: {
    addToList(newListItem) {
      const newelem = newListItem.trim();
      if (newelem !== '') {
        store.commit('li/addToList', newListItem);
        this.newListItem = '';
      }
    },
  },
});
</script>
