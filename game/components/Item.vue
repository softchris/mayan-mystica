<template>
  <div @click="pickUp(item.id)">
    <span v-if="show">
      You see a
      <span class="item">{{ item.name }}</span>
    </span>
  </div>
</template>
<script>
const items = require("../utils/items.json");
import { addItem, hasItem } from "../utils/helpers";

export default {
  computed: {
    item() {
      let item = items.find(row => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    }
  },
  data() {
    const item = items.find(row => row.id == this.id);

    return {
      show: !item || !hasItem(item.id)
    };
  },
  methods: {
    pickUp(id) {
      let addOk = confirm("Take a picture?");
      if (addOk) {
        addItem(id);
        this.$root.$emit("item_added", id);
        this.show = false;
      }
    }
  },
  props: ["id"]
};
</script>
<style scoped>
.item {
  color: orange;
  font-weight: bold;
}
</style
>>
