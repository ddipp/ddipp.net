<template>
  <div>
    <List />
    <Counter />
    <Message />
    <ToogleSeen />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import List from '@/components/List.vue';
import Counter from '@/components/Counter.vue';
import Message from '@/components/Message.vue';
import ToogleSeen from '@/components/ToogleSeen.vue';

export default defineComponent({
  components: {
    List,
    Counter,
    Message,
    ToogleSeen,
  },
});
</script>
