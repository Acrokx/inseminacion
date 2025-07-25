<template>
  <div class="flex h-screen bg-green-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-b from-green-700 to-green-800 text-white flex flex-col shadow-lg">
      <div class="p-6 text-2xl font-extrabold border-b border-green-600 text-center">
        AgroPanel
      </div>
      <nav class="flex-1 p-4 space-y-2">
        <router-link
          to="/dashboard"
          class="block p-3 rounded-lg transition-colors duration-200 hover:bg-green-600"
          :class="{ 'bg-green-600 shadow-md': $route.path === '/dashboard' }"
        >
          Inicio
        </router-link>
        <router-link
          to="/animales"
          class="block p-3 rounded-lg transition-colors duration-200 hover:bg-green-600"
          :class="{ 'bg-green-600 shadow-md': $route.path === '/animales' }"
        >
          Animales
        </router-link>
        <router-link
          to="/inseminaciones"
          class="block p-3 rounded-lg transition-colors duration-200 hover:bg-green-600"
          :class="{ 'bg-green-600 shadow-md': $route.path === '/inseminaciones' }"
        >
          Inseminaciones
        </router-link>
      </nav>
      <div class="p-4 border-t border-green-600">
        <router-link
          to="/login"
          class="block p-2 rounded bg-red-600 hover:bg-red-700 text-center transition-colors duration-200"
        >
          Cerrar Sesión
        </router-link>
      </div>
    </aside>

    <!-- Contenido principal -->
    <main class="flex-1 p-8">
      <div class="bg-white rounded-2xl shadow p-6">
        <h1 class="text-3xl font-bold text-green-700 mb-4">
          Bienvenido al Dashboard
        </h1>

        <!-- Imagen debajo del título -->
        <img
          src="/loguito.jpeg"
          alt="Dashboard imagen"
          class="w-full max-w-md mx-auto rounded-lg shadow-md mb-6"
        />

        <p class="text-gray-700 leading-relaxed text-center">
          Selecciona una opción en el menú para gestionar
          <span class="font-semibold">animales</span> o
          <span class="font-semibold">inseminaciones</span>.
        </p>
      </div>
    </main>
  </div>
</template>
