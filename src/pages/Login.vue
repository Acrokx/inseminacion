<template>
  <div class="flex h-screen items-center justify-center bg-green-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-80">
      <h1 class="text-2xl font-bold text-center mb-6 text-green-700">Login</h1>
      <form @submit.prevent="handleLogin" class="flex flex-col space-y-4">
        <input v-model="username" type="text" placeholder="Usuario"
          class="border border-gray-300 rounded p-2 focus:outline-green-500">
        <input v-model="password" type="password" placeholder="Contraseña"
          class="border border-gray-300 rounded p-2 focus:outline-green-500">
        <button type="submit"
          class="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded">
          Ingresar
        </button>
      </form>
      <p v-if="error" class="text-red-600 text-sm mt-2 text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const authStore = useAuthStore();

function handleLogin() {
  if (authStore.login(username.value, password.value)) {
    router.push('/dashboard');
  } else {
    error.value = 'Usuario o contraseña incorrectos';
  }
}
</script>
