<template>
  <div class="markdown-body">
    <router-link to="/es" class="float-right p-5 white-link">Español</router-link>

    <router-link to="/login" class="float-right p-5 white-link">My Adventure</router-link>
    <h1 class="text-3xl pb-5 pt-5 ml-5 text-sans">{{ $page.frontmatter.title }}</h1>
    <div class="p-5 bg-white m-5 rounded">
      <Content />
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicLayout"
};
</script>

<style scoped>
.white-link {
  color: white;
}
</style>
