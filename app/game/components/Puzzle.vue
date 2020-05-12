<template>
  <div>
    <p>Match the glyph to the inscription</p>
    <div class="mt-4">
      <p>Endangered</p>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="jaguar1"
            v-model="radioButtonValue1"
          />
          <span class="text-xl ml-2">Jaguar</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="macaw1"
            v-model="radioButtonValue1"
          />
          <span class="text-xl ml-2">Macaw</span>
        </label>
      </div>
    </div>
    <div class="mt-4">
      <p>Bash</p>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="jaguar2"
            v-model="radioButtonValue2"
          />
          <span class="text-xl ml-2">Jaguar</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="macaw2"
            v-model="radioButtonValue2"
          />
          <span class="text-xl ml-2">Macaw</span>
        </label>
      </div>
    </div>
    <div v-if="show">
      <p
        class="font-bold"
      >The stones click into place, and you hear a door creak open beyond the stairs leading down. Suddenly, the floor tilts under you and you start to slide towards the staircase! What will happen? Come back next month to continue the Azure Maya Mystery!</p>
      <p>Congratulations on completing the first of three parts of the Azure Maya Mystery!</p>
      <img src="/assets/images/badge1.png" alt="badge" />

      <a
        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flively-sea-026c3791e.azurestaticapps.net%2F&text=I%20just%20entered%20the%20Azure%20Maya%20Mystery%20pyramid.%20Look%20forward%20to%20next%20month%20when%20I%20will%20get%20to%20explore%20more.&hashtags=AzureMayaMystery"
        class="twitter-hashtag-button"
        data-show-count="false"
      >Tell the world!</a>

      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
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
