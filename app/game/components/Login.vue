<template>
	<div class="w-full max-w-xs">
		<h1>Login</h1>
		<form class="bg-white px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
			<p class="text-red-500 text-xs italic">{{ message }}</p>

			<div class="mb-4">
				<p class="block text-gray-700 font-bold mb-2" for="email">Email</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="email"
					v-model="email"
					placeholder="Email"
				/>
			</div>
			<div class="mb-6">
				<p class="block text-gray-700 font-bold mb-2" for="password">Password</p>
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
				>
					Sign In
				</button>
			</div>
		</form>

		<router-link class="has-text-grey" to="/register"><p>Register</p></router-link>
	</div>
</template>
<script>
import axios from 'axios';
import { getUID, setUID, hasUID, setSessionTicket, getSessionTicket } from '../utils/helpers';
export default {
	data() {
		return {
			message: '',
			email: '',
			password: '',
		};
	},
	methods: {
		submit() {
			this.message = '';
			axios
				.post('/api/login', {
					email: this.email,
					password: this.password,
				})
				.then((response) => {
					console.log(response);
					if (response.data.errorMessage == null) {
						setSessionTicket(response.data.SessionTicket);
						this.linkCustomID();
					} else {
						this.message = response.data.errorMessage;
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		linkCustomID() {
			axios
				.post('/api/linkCustomId', {
					id: getUID(),
					session: getSessionTicket(),
				})
				.then((response) => {
					console.log(response);
					//todo, where should the user go at this point?
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
};
</script>
