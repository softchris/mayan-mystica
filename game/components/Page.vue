<template>
  <div class="prompt">
    {{instructions}}
    <router-link class="page-nav" :to="this.url">{{ name }}</router-link>
  </div>
</template>
<script>
import {
  hasItem,
  getUID,
  setUID,
  hasUID,
  setSessionTicket
} from "../utils/helpers";
export default {
  created: function() {
    var hasID = hasUID();
    if (!hasID) {
      setUID();
      var loginRequest = {
        TitleId: "8EA26",
        CustomId: getUID(),
        CreateAccount: true
      };
      //PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
    }
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
    LoginCallback(e) {
      //setSessionTicket(e.data.SessionTicket)
    },
    gotoRoom: function() {
      console.log(`Navigating to  ${this.url}`);
      this.$router.push(`/rooms/${this.url}.html`);
    }
  },
  props: ["url", "title", "condition", "instructions"]
};
</script>
<style lang="stylus">
.prompt {
  padding-top: 10px;
  font-size: 28px;
}

.page-nav {
  font-weight: bold;
  padding-top: 10px;
  color: green;
  text-decoration: underline;
  display: block;
  cursor: pointer;
}
</style>
