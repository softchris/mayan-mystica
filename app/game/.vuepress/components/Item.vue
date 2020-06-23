<template>
  <div v-if="item.filename != ''" @click="takePic(item)">
    <p v-if="showInstructions">
      {{ getLocalizedInstructions }}
      <button
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        aria-expanded="false"
        onclick="return false"
        href
      >{{ getLocalizedName }}</button>
    </p>
  </div>
  <div v-else>
    <p @click="emitResult(item)">
      {{ getLocalizedInstructions }}
      <button
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        aria-expanded="false"
        onclick="return false"
        @click="showResult = !showResult"
      >{{ getLocalizedName }}</button>
    </p>
    <p v-if="showResult">{{ getLocalizedResult }}</p>
  </div>
</template>
<script>
const items = require("@theme/utils/items.json");
import {
  addItem,
  hasItem,
  getUID,
  getSessionTicket,
  getLocale
} from "@theme/utils/helpers";
import axios from "axios";
import messages from "@theme/translations/misc.js";
import { EventBus } from "@theme/utils/event-bus";
import { i18n } from "@theme/utils/i18n";

export default {
  props: ["id"],

  i18n: {
    messages
  },
  computed: {
    item() {
      let item = items.find(row => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    },
    getLocalizedInstructions() {
      let currItem = items.find(row => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.instructions.es.instruction;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.instructions.pt.instruction;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.instructions.fr.instruction;
      } else {
        currItem = currItem.instructions.en.instruction;
      }
      return currItem;
    },
    getLocalizedResult() {
      let currItem = items.find(row => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.result.es.result;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.result.pt.result;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.result.fr.result;
      } else {
        currItem = currItem.result.en.result;
      }
      return currItem;
    },
    getLocalizedName() {
      let currItem = items.find(row => row.id == this.id);
      if (this.$i18n.locale == "es") {
        currItem = currItem.name.es.name;
      } else if (this.$i18n.locale == "pt") {
        currItem = currItem.name.pt.name;
      } else if (this.$i18n.locale == "fr") {
        currItem = currItem.name.fr.name;
      } else {
        currItem = currItem.name.en.name;
      }
      return currItem;
    }
  },
  data() {
    const item = items.find(row => row.id == this.id);

    return {
      showInstructions: !item || item.initialHide,
      showResult: false
    };
  },
  methods: {
    takePic(item) {
      //generate a json object to send to playfab
      var jsonData = {};
      var columnName = item.id;
      jsonData[columnName] = item.gameItem;
      axios
        .post("https://maya-mystery-api.azurewebsites.net/api/updateData", {
          Data: jsonData
        })
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });

      let addOk = confirm(this.$t("takepic"));
      if (addOk) {
        addItem(item.id);
        EventBus.$emit("item_added", item.id);
        //you got the picture, so hide the prompt
        this.showInstructions = false;
      }
    },
    emitResult(item) {
      EventBus.$emit("showResult", item.id);
    },
    callback(e) {
      console.log(e);
    }
  },
  created() {
    this.$i18n.locale = getLocale();
    EventBus.$on("lang_changed", lang => (this.$i18n.locale = lang));
  },
  beforeDestroy() {
    //EventBus.$off("lang_changed");
  }
};
</script>
