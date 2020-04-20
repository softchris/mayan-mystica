<template>
  <div class="w-full max-w-xs">
    <h1>Login</h1>
    <form class="bg-white px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">Username</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          v-model="email"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="flex justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Sign In</button>
      </div>
    </form>

    <router-link class="has-text-grey" to="/register">Register</router-link>
  </div>
</template>
<script>
import axios from "axios";
import {
  getUID,
  setUID,
  hasUID,
  setSessionTicket,
  getSessionTicket
} from "../utils/helpers";
export default {
  data() {
    return {
      message: "",
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      axios
        .post(`https://8EA26.playfabapi.com/Client/LoginWithEmailAddress`, {
          TitleId: "8EA26",
          Email: this.email,
          Password: this.password,
          RequireBothUsernameAndEmail: false
        })
        .then(response => {
          setSessionTicket(response.data.data.SessionTicket);
          console.log(response);
          this.linkCustomID(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    linkCustomID(response) {
      axios
        .post(
          `https://8EA26.playfabapi.com/Client/LinkCustomID`,
          {
            TitleId: "8EA26",
            CustomId: getUID(),
            ForceLink: true
          },
          {
            headers: {
              "X-authentication": getSessionTicket()
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
