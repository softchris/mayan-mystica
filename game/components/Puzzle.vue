<template>
  <div>
    <p>Match the glyph to the inscription</p>
    <div class="mt-4">
      <span>Cassie</span>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="jaguar1"
            v-model="radioButtonValue1"
          />
          <span class="ml-2">Jaguar</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="macaw1"
            v-model="radioButtonValue1"
          />
          <span class="ml-2">Macaw</span>
        </label>
      </div>
    </div>
    <div class="mt-4">
      <span>Bash</span>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="jaguar2"
            v-model="radioButtonValue2"
          />
          <span class="ml-2">Jaguar</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="macaw2"
            v-model="radioButtonValue2"
          />
          <span class="ml-2">Macaw</span>
        </label>
      </div>
    </div>
    <p
      v-if="show"
    >The stones click into place, and you hear a door creak open beyond the stairs leading down. Do you dare to continue downstairs? Come back next month to continue your Mayan Adventure!</p>
  </div>
</template>
<script>
export default {
  name: "Puzzle",
  data() {
    return {
      radioButtonValue1: "",
      radioButtonValue2: "",
      show: false
    };
  },
  methods: {
    pick() {
      if (
        this.radioButtonValue1 == "macaw1" &&
        this.radioButtonValue2 == "jaguar2"
      ) {
        this.show = true;
      }
    }
  }
};
</script>
<style scoped>
</style>
