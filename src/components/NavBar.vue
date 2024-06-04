<template>
	<header>
		<nav class="top-nav">
			<div class="title"> <!-- Title of website -->
				Kasey Brice
			</div>
			<ul class="routes"> <!-- Navigation links -->
				<li><RouterLink to="/">home</RouterLink></li>
                <li><RouterLink to="/about">about</RouterLink></li>
                <li><RouterLink to="/projects">projects</RouterLink></li>
                <li><RouterLink to="/blog">blog</RouterLink></li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
</script>

<style lang="scss" scoped>

.top-nav {
    margin-top: 1%;
    display: flex;
    align-items: center;
    vertical-align: middle;
    font-size: 18px;

    .title {
        position: absolute;
        left: 115px;
        color: #fff;
        font-family: "Montserrat Subrayada", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    .routes {
        width: 100%;
        height: 100%;
        list-style-type: none;
        display: flex;
        justify-content: center;

        a {
            font-family: "Montserrat", sans-serif;
            text-align: center;
            text-decoration: none;
            font-variant: small-caps;
            color: #fff;
            padding: 0px 36px;
        }
    }
}

</style>