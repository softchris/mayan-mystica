<template>
  <div>
    <h1>
    {{title}}
    </h1>
    <div v-if="items.length == 0">
      Empty inventory
    </div>
    <div v-else>
      <div v-for="item in items">
        {{item}}
      </div>
    </div>
  </div>
</template>
<script>

import { getItems } from './helpers';
const items = require('./items.json');

export default {
  created() {
    
  },
  data() {
    var me = this;
    this.$root.$on('item_added', (id) => {
      console.log('item added, lets add to inv');
      
      var ids = getItems();
      me.items = ids.map(id => items.find(item => item.id == id).name)
      
    });


    var ids = getItems();

    return {
      title: 'Inventory',
      items: ids.map(id => items.find(item => item.id == id).name)
    };
  }
}
</script>