<template>
	<header>
		<nav>
			<div> <!-- Title of website -->
				<h1>KB</h1>
			</div>
			<ul class="routes"> <!-- Navigation links -->
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/projects">Projects</RouterLink>
				<RouterLink to="/resume">Resume</RouterLink>
				<RouterLink to="/contact">Contact</RouterLink>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>

</style>