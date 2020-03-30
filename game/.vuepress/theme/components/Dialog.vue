<template>
  <div class="dialog-content">
    <div>{{msg}}</div>
    <button @click="click">Ok</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'dialog'
    }
  },
  methods: {
    click() {
      this.$root.$emit('dialog_close')
    }
  }
}
</script>
<style lang="css">
  .dialog-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
  }

  .dialog-content button {
    border: solid 1px;
    padding: 5px 20px;
  }
</style>