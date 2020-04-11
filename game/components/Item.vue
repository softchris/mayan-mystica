<template>
  <div v-if="item.filename != ''" @click="takePic(item)">
    <p v-if="show">
      {{item.instructions}}
      <span class="item">{{ item.name }}</span>
    </p>
  </div>
  <div v-else>
    <p @click="emitResult(item)">
      {{item.instructions}}
      <span class="item" @click="showResult = !showResult">{{ item.name }}</span>
    </p>
    <p v-show="showResult">{{item.result}}</p>
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
    }
  },
  data() {
    const item = items.find(row => row.id == this.id);
    return {
      show: !item || !hasItem(item.id),
      showResult: false
    };
  },
  methods: {
    takePic(item) {
      //playfab
      var data = {
        Data: { item: item.name }
      };
      //PlayFabClientSDK.UpdateUserData(data, this.callback);
      let addOk = confirm("Take a picture?");
      if (addOk) {
        addItem(item.id);
        this.$root.$emit("item_added", item.id);
        //you got the picture, so hide the prompt
        this.show = false;
      }
    },
    emitResult(item) {
      this.$root.$emit("showResult", item.id);
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
  text-decoration: underline;
}
</style>
