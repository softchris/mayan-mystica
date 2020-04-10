<template>
  <div @click="pickUp(item)">
    <p v-if="show">
      {{item.instructions}}
      <span class="item">{{ item.name }}</span>
    </p>
  </div>
</template>
<script>
const items = require("../utils/items.json");
import { addItem, hasItem, getUID, getSessionTicket } from "../utils/helpers";

export default {
  computed: {
    item() {
      let item = items.find(row => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    },
    getItem() {}
  },
  data() {
    const item = items.find(row => row.id == this.id);
    return {
      show: !item || !hasItem(item.id)
    };
    return {
      show: false
    };
  },
  methods: {
    pickUp(item) {
      //playfab
      var data = {
        Data: { item: item.name }
      };
      //PlayFabClientSDK.UpdateUserData(data, this.callback);
      let addOk = confirm("Take a picture?");
      if (addOk) {
        addItem(item.id);
        this.$root.$emit("item_added", item.id);
        this.show = false;
      }
    },
    callback(e) {
      console.log(e);
    }
  },
  props: ["id"]
};
</script>
<style scoped>
.item {
  color: blue;
  font-weight: bold;
}
</style>
