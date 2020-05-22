<template>
  <div>
    <div class="m-10 text-center">
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(1)"
      >🌎</button>
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(2)"
      >🌳</button>
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(3)"
      >🐍</button>
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(4)"
      >💨</button>
    </div>
    <div class="text-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="test()"
      >Try the door</button>
    </div>
    <p>{{message}}</p>
    <p v-if="showNext">
      <router-link to="7">Go inside</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "Buttons",
  data() {
    return {
      numbersArray: [],
      message: "",
      showNext: false
    };
  },
  methods: {
    count(item) {
      //earth,wind,tree,snake
      this.numbersArray.push(item);
      console.log(this.numbersArray);
    },
    test() {
      if (JSON.stringify([1, 4, 2, 3]) === JSON.stringify(this.numbersArray)) {
        this.message = "The door opens with a creak";
        this.showNext = true;
      } else {
        this.message = "The door remains locked tight";
      }
      this.numbersArray = [];
    }
  }
};
</script>
<style scoped>
</style>
