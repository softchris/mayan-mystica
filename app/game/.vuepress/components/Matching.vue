<template>
  <div>
    <div class="flex justify-center bg-gray-300 mt-5">
      <div class="flex justify-center">
        <img class="m-12 bg-white" src="/AzureMayaMystery/images/13.png" width="100" height="100" />
      </div>
      <div class="flex justify-center">
        <img class="m-12 bg-white" src="/AzureMayaMystery/images/7.png" width="100" height="100" />
      </div>
    </div>

    <div class="flex justify-center bg-gray-200">
      <div class="flex justify-center bg-gray-200 m-10">
        <draggable class="list-group" :list="list1" group="glyphs" @change="log">
          <div class="list-group-item" v-for="(element, index) in list1" :key="element">
            <img
              class="m-5 bg-white rounded-md shadow-md"
              :src="'/AzureMayaMystery/images/' + element + '.png'"
              width="100"
              height="100"
            />
          </div>
        </draggable>
      </div>
      <div class="flex justify-center bg-gray-200 m-10">
        <draggable class="list-group" :list="list2" group="glyphs" @change="log">
          <div class="list-group-item" v-for="(element, index) in list2" :key="element">
            <img
              class="m-5 bg-white rounded-md shadow-md"
              :src="'/AzureMayaMystery/images/' + element + '.png'"
              width="100"
              height="100"
            />
          </div>
        </draggable>
      </div>
    </div>
    <p>{{ message }}</p>
    <p v-if="showNext">
      <router-link to="654">{{ $t('continue') }}</router-link>
    </p>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import messages from "@theme/translations/matching.js";
import { getLocale } from "@theme/utils/helpers";
import { EventBus } from "@theme/utils/event-bus";

export default {
  components: {
    draggable,
  },
  i18n: {
    messages,
  },
  data() {
    return {
      list1: ["11", "4"],
      list2: ["12", "10"],
      showNext: false,
      message: "",
    };
  },
  methods: {
    log: function (evt) {
      if (
        this.list2.includes("11") &&
        this.list2.includes("10") &&
        this.list1.includes("12") &&
        this.list1.includes("4")
      ) {
        this.showNext = true;
        this.message = this.$t("message");
      } else {
        this.showNext = false;
        this.message = "";
      }
    },
  },
  created() {
    this.$i18n.locale = getLocale();
    EventBus.$on("lang_changed", (lang) => (this.$i18n.locale = lang));
  },
};
</script>
