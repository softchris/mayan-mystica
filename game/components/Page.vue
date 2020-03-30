<template>
  <span class="page-nav" @click="gotoRoom">{{ name }}</span>
</template>
<script>
import { hasItem } from "../utils/helpers";

export default {
  created: function() {
    // when loaded
  },
  data() {
    var vm = this;
    this.$root.$on("item_added", id => {
      if (vm.condition == id) {
        vm.name = hasItem(vm.condition) ? vm.title : "";
      }
    });

    return {
      name: hasItem(this.condition) ? this.title : ""
    };
  },
  methods: {
    gotoRoom: function() {
      console.log(`Navigating to  ${this.url}`);
      this.$router.push(`/rooms/${this.url}.html`);
    }
  },
  props: ["url", "title", "condition"]
};
</script>
<style lang="stylus">
.page-nav {
  padding-top: 10px;
  font-size: 28px;
  font-weight: bold;
  color: red;
  font-decoration: underline;
  display: block;
  cursor: pointer;
}
</style>
