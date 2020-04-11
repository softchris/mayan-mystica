<template>
  <div class="prompt" v-if="show">
    {{instructions}}
    <router-link class="page-nav" :to="this.url">{{ action }}</router-link>
  </div>
</template>
<script>
const items = require("../utils/items.json");

import {
  hasItem,
  getUID,
  setUID,
  hasUID,
  setSessionTicket
} from "../utils/helpers";
export default {
  created: function() {
    this.getInventory();
    var hasID = hasUID();
    //if there's no id in local storage
    if (!hasID) {
      setUID();
      var loginRequest = {
        TitleId: "8EA26",
        CustomId: getUID(),
        CreateAccount: true
      };
      PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
    }
    //otherwise log back in to refresh the session ticket
    else {
      var loginRequest = {
        TitleId: "8EA26",
        CustomId: getUID(),
        CreateAccount: false
      };
      PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
    }
  },
  data() {
    this.$root.$on("item_added", id => {
      if (this.condition == id) {
        this.show = true;
      }
    });

    this.$root.$on("showResult", id => {
      if (this.condition == id) {
        this.show = true;
      }
    });

    return {
      show: false
    };
  },
  methods: {
    getInventory() {
      if (
        this.condition == hasItem(this.condition) ||
        this.condition == "none"
      ) {
        this.show = true;
      }
    },
    LoginCallback(e) {
      console.log(e);
    },
    gotoRoom: function() {
      console.log(`Navigating to  ${this.url}`);
      this.$router.push(`/rooms/${this.url}`);
    }
  },
  props: ["url", "action", "condition", "instructions"]
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
