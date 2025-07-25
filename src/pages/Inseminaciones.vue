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

    <h1 class="text-3xl font-bold text-green-700 mb-6">Registro de Inseminaciones</h1>

    <!-- Formulario para agregar inseminación -->
    <form
      @submit.prevent="agregarInseminacion"
      class="bg-white p-4 rounded shadow-md mb-6 flex flex-wrap gap-4"
    >
      <input
        v-model="nueva.animal"
        type="text"
        placeholder="Nombre Animal"
        class="border p-2 rounded w-full sm:w-1/3 focus:outline-green-500"
        required
      />
      <input
        v-model="nueva.fecha"
        type="date"
        class="border p-2 rounded w-full sm:w-1/3 focus:outline-green-500"
        required
      />
      <input
        v-model="nueva.tecnico"
        type="text"
        placeholder="Técnico Responsable"
        class="border p-2 rounded w-full sm:w-1/3 focus:outline-green-500"
        required
      />
      <button
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Registrar
      </button>
    </form>

    <!-- Tabla de inseminaciones -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border rounded shadow-md">
        <thead>
          <tr class="bg-green-200 text-left">
            <th class="p-2 border">ID</th>
            <th class="p-2 border">Animal</th>
            <th class="p-2 border">Fecha</th>
            <th class="p-2 border">Técnico</th>
            <th class="p-2 border text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="inseminacion in inseminaciones"
            :key="inseminacion.id"
            class="hover:bg-green-50 transition"
          >
            <td class="p-2 border">{{ inseminacion.id }}</td>
            <td class="p-2 border">{{ inseminacion.animal }}</td>
            <td class="p-2 border">{{ inseminacion.fecha }}</td>
            <td class="p-2 border">{{ inseminacion.tecnico }}</td>
            <td class="p-2 border text-center">
              <button
                @click="eliminarInseminacion(inseminacion.id)"
                class="text-red-600 hover:underline"
              >
                Eliminar
              </button>
            </td>
          </tr>
          <tr v-if="inseminaciones.length === 0">
            <td colspan="5" class="p-4 text-center text-gray-500">
              No hay inseminaciones registradas.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Inseminacion {
  id: number
  animal: string
  fecha: string
  tecnico: string
}

const inseminaciones = ref<Inseminacion[]>([])
const nueva = ref<Partial<Inseminacion>>({
  animal: '',
  fecha: '',
  tecnico: ''
})
let contadorId = 1

function agregarInseminacion() {
  // Validación básica
  if (!nueva.value.animal || !nueva.value.fecha || !nueva.value.tecnico) return

  inseminaciones.value.push({
    id: contadorId++,
    animal: nueva.value.animal!,
    fecha: nueva.value.fecha!,
    tecnico: nueva.value.tecnico!
  })

  nueva.value = { animal: '', fecha: '', tecnico: '' }
}

function eliminarInseminacion(id: number) {
  inseminaciones.value = inseminaciones.value.filter(i => i.id !== id)
}
</script>
