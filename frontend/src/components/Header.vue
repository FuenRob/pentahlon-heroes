<template>
    <header class="bg-gray-800">
        <nav class="container mx-auto px-4 py-2">
            <ul class="flex justify-center space-x-4">
                <li><a href="/" class="text-white hover:text-gray-300">Pentathlon</a></li>
                <li><a href="/list" class="text-white hover:text-gray-300">Listado de heroes</a></li>
                <li><a href="/create" class="text-white hover:text-gray-300">Crea un heroe</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    // Aquí puedes agregar cualquier lógica adicional para el componente
}
</script>