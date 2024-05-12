<!-- Contains elements that span across multiple pages such as a navbar or footer -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"
</script>

<template>
	<NavBar />
	<RouterView />
</template>

<style>
</style>