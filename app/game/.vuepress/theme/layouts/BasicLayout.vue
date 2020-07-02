<template>
  <div class="markdown-body">
    <select
      @change="goToLevel($event)"
      class="float-right block appearance-none border border-gray-200 mr-4 ml-4 mt-4 px-3 text-black rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    >
      <option value>{{ $t('level') }}</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <select
      @change="setLanguage($event)"
      class="float-right block appearance-none border border-gray-200 mt-4 px-3 text-black rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="pt">Português</option>
    </select>

    <span
      class="float-right p-5 text-white underline cursor-pointer"
      @click="goToLogin()"
    >{{ $t('myadventure') }}</span>
    <p class="text-3xl pb-5 pt-5 ml-5 text-sans">{{ $page.frontmatter.title }}</p>
    <div class="p-5 bg-white m-5 rounded">
      <Content />
    </div>
  </div>
</template>

<script>
import { getLocale, setLocale } from "@theme/utils/helpers";
import messages from "@theme/translations/misc.js";
import { EventBus } from "@theme/utils/event-bus";
import { i18n } from "@theme/utils/i18n";

export default {
  name: "BasicLayout",
  i18n: {
    messages
  },

  methods: {
    goToLevel(event) {
      if (event.target.value == "" || event.target.value == "1") {
        this.$router.push({ path: "/" });
      } else if (event.target.value == "2") {
        this.$router.push({ path: "/pyramid/" + getLocale() + "/2" });
      } else {
        this.$router.push({ path: "/pyramid/" + getLocale() + "/3" });
      }
    },
    setLanguage(event) {
      var lang = event.target.value;
      setLocale(lang);
      EventBus.$emit("lang_changed", lang);
      var currPath = this.$route.matched[0].path;
      var newPath = currPath.replace(/es|pt|en|fr/gi, lang);
      console.log(newPath, currPath);
      //check to make sure you're not already on this page
      if (newPath == "") {
        this.$router.push({ path: "/pyramid/" + getLocale() + "/1" });
      } else {
        if (currPath !== newPath) {
          this.$router.push({ path: newPath });
        }
      }
    },
    goToLogin() {
      var currPath = this.$route.matched[0].path;
      var newPath = "/pyramid/" + getLocale() + "/login";
      if (currPath !== newPath) {
        this.$router.replace({ path: newPath });
      }
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
