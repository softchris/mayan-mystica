<template>
  <div class="wrapper">
    <div class="markdown-body font-serif bg-white m-2 sm:m-3 md:m-6 lg:m-12 text-lg rounded-lg">
      <Nav />
      <div
        role="banner"
        v-if="hasBackdrop"
        :style="{ backgroundImage: 'url(/AzureMayaMystery/' + hasBackdrop + ')' }"
        class="w-full image backdrop"
      >&nbsp;</div>
      <div class="flex mb-4">
        <div v-if="!fullScreenLayout" role="complementary" :class="hidden">
          <component :is="camera"></component>
        </div>
        <div role="main" class="w-full">
          <component :is="layout"></component>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>
<script>
import Nav from "@theme/components/Nav.vue";
import Footer from "@theme/components/Footer.vue";
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import Camera from "@theme/components/Camera.vue";
import { getLocale, setLocale } from "@theme/utils/helpers";
import { EventBus } from "@theme/utils/event-bus";
import { i18n } from "@theme/utils/i18n";

export default {
  components: {
    Nav,
    Footer,
    BasicLayout,
    Camera
  },
  i18n: {},
  data() {
    return {
      hidden: "lg:inline-block md:hidden sm:hidden hidden w-1/2"
    };
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "BasicLayout";
    },
    camera() {
      return this.$page.frontmatter.camera || "Camera";
    },
    hasBackdrop() {
      return this.$page.frontmatter.backdrop || false;
    },
    fullScreenLayout() {
      return this.$page.frontmatter.fullScreenLayout || false;
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

<style scoped>
.backdrop {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
</style>

