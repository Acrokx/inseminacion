<template>
  <div class="h-screen bg-green-50 p-6">
    <!-- Botón para regresar -->
    <div class="mb-4">
      <router-link
        to="/dashboard"
        class="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
      >
        ← Regresar
      </router-link>
    </div>

    <h1 class="text-3xl font-bold text-green-700 mb-6">Gestión de Animales</h1>

    <!-- Formulario para agregar animales -->
    <form
      @submit.prevent="agregarAnimal"
      class="bg-white p-4 rounded shadow-md mb-6 flex flex-wrap gap-4"
    >
      <input
        v-model="nuevo.nombre"
        type="text"
        placeholder="Nombre"
        class="border p-2 rounded w-full sm:w-1/3 focus:outline-green-500"
        required
      />
      <input
        v-model="nuevo.raza"
        type="text"
        placeholder="Raza"
        class="border p-2 rounded w-full sm:w-1/3 focus:outline-green-500"
        required
      />
      <input
        v-model="nuevo.edad"
        type="number"
        placeholder="Edad (meses)"
        class="border p-2 rounded w-full sm:w-1/3 focus:outline-green-500"
        required
      />
      <button
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Agregar
      </button>
    </form>

    <!-- Tabla de animales -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border rounded shadow-md">
        <thead>
          <tr class="bg-green-200 text-left">
            <th class="p-2 border">ID</th>
            <th class="p-2 border">Nombre</th>
            <th class="p-2 border">Raza</th>
            <th class="p-2 border">Edad (meses)</th>
            <th class="p-2 border text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="animal in animales"
            :key="animal.id"
            class="hover:bg-green-50 transition"
          >
            <td class="p-2 border">{{ animal.id }}</td>
            <td class="p-2 border">{{ animal.nombre }}</td>
            <td class="p-2 border">{{ animal.raza }}</td>
            <td class="p-2 border">{{ animal.edad }}</td>
            <td class="p-2 border text-center">
              <button
                @click="eliminarAnimal(animal.id)"
                class="text-red-600 hover:underline"
              >
                Eliminar
              </button>
            </td>
          </tr>
          <tr v-if="animales.length === 0">
            <td colspan="5" class="p-4 text-center text-gray-500">
              No hay animales registrados.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Animal {
  id: number
  nombre: string
  raza: string
  edad: number
}

const animales = ref<Animal[]>([])
const nuevo = ref<Partial<Animal>>({
  nombre: '',
  raza: '',
  edad: 0
})
let contadorId = 1

function agregarAnimal() {
  // Validación básica
  if (!nuevo.value.nombre || !nuevo.value.raza || !nuevo.value.edad) return

  animales.value.push({
    id: contadorId++,
    nombre: nuevo.value.nombre!,
    raza: nuevo.value.raza!,
    edad: Number(nuevo.value.edad)
  })

  nuevo.value = { nombre: '', raza: '', edad: 0 }
}

function eliminarAnimal(id: number) {
  animales.value = animales.value.filter(a => a.id !== id)
}
</script>
