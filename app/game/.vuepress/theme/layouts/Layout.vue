<template>
  <div class="wrapper">
    <div class="markdown-body font-serif bg-white m-2 sm:m-3 md:m-6 lg:m-12 text-lg rounded-lg">
      <Nav />
      <div role="banner">
        <img src="~@assets/images/bg1.png" />
      </div>
      <div class="flex mb-4">
        <div role="complementary" class="w-1/2">
          <component :is="camera"></component>
        </div>
        <div role="main" class="w-3/4">
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

export default {
  components: {
    Nav,
    Footer,
    BasicLayout,
    Camera
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "BasicLayout";
    },
    camera() {
      return this.$page.frontmatter.camera || "Camera";
    }
    /*hasBackdrop() {
      return this.$page.frontmatter.backdrop || false;
    },
    backdrop() {
      return {
        //"background-image": `url(${this.$page.frontmatter.backdrop})`,
        "background-repeat": "no-repeat",
        "background-size": "cover"
      };
    }*/
  }
};
</script>

