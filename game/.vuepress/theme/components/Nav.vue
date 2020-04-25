<template>
  <nav
    class="nav rounded-t flex items-center justify-between flex-wrap text-right pr-0 lg:pr-5 md:pr-3 sm:pr-0 border-b"
  >
    <img src="/images/logo.png" alt="Microsoft logo" />

    <router-link class="cursor-pointer block m-1 lg:m-4 md:m-2 sm:m-1" :to="$withBase('/')">
      <h1 class="text-white">Azure Maya Mystery</h1>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      hidden: "lg:inline-block md:hidden sm:hidden hidden"
    };
  },
  methods: {}
};
</script>

<style scoped>
.markdown-body a {
  text-decoration: none;
}
</style>
