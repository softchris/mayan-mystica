<template>
  <div class="prompt">
    <span class="font-bold" v-if="show">{{ instructions }}</span>
    <div class="page-nav" v-if="show">
      <router-link :to="link || './'">{{ action }}</router-link>
    </div>
  </div>
</template>
<script>
import {
  hasItem,
  getUID,
  setUID,
  hasUID,
  setSessionTicket
} from "@theme/utils/helpers";
import axios from "axios";
export default {
  created() {
    this.getInventory();
    if (!hasUID()) {
      setUID();
    }
    axios
      .post("/api/loginAnon", {
        id: getUID(),
        createAccount: hasUID()
      })
      .then(response => {
        console.log(response);
        if (response.data.errorMessage == null) {
          setSessionTicket(response.data.SessionTicket);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    this.$root.$on("item_added", id => {
      this.getInventory(id);
    });

    this.$root.$on("showResult", id => {
      this.getInventory(id);
    });

    return {
      show: false,
      link: this.url,
      showNextPageLink: false
    };
  },
  methods: {
    getInventory(id) {
      if (this.condition == id || this.condition == "none") {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    goToRoom(url) {
      this.$router.replace({ path: url });
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
