<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from "@iconify/vue";
</script>

<template>
	<header>
		<nav class="top-nav">
			<RouterLink to="/" class="site-title"> <!-- Title of website -->
				Kasey Brice
            </RouterLink>
			<ul class="routes small-caps"> <!-- Navigation links -->
				<li><RouterLink to="/">home</RouterLink></li>
                <li><RouterLink to="/about">about</RouterLink></li>
                <li><RouterLink to="/projects">projects</RouterLink></li>
                <li class="blog-btn"><a href="" target="_blank">blog
                    <Icon icon="icomoon-free:new-tab" width=".8em" height=".8em"  style="color: white" />
                    </a>
                </li>
			</ul>
            <div class="contact-btn small-caps"> <!-- Pop-up or page? -->
                contact
            </div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>

.top-nav {
    margin-top: 2%;
    display: flex;
    align-items: center;
    vertical-align: middle;
    font-size: 18px;

    .small-caps {
        color: #fff;
        text-align: center;
        text-decoration: none;
        font-variant: small-caps;
        font-family: "Montserrat", sans-serif;
    }
    .site-title {
        position: absolute;
        left: 115px;
        color: #fff;
        font-family: "Montserrat Subrayada", sans-serif;
        font-weight: 400;
        font-style: normal;
        text-decoration: none;

        &:hover {
            cursor: pointer;
        }
    }
    .contact-btn {
        position: absolute;
        right: 115px;
        background-color: #1b1e28;
        width: 194px;
        height: 46px;
        line-height: 46px;
        border-radius: 20px;
        border: solid 1px #000;
        box-shadow: inset 0 4px 4px 5px rgba(0, 0, 0, 0.5);
        
        &:hover {
            cursor: pointer;
        }
    }
    .routes {
        width: 100%;
        height: 100%;
        list-style-type: none;
        display: flex;
        justify-content: center;

        a {
            text-decoration: none;
            color: #fff;
            padding: 0px 36px;
        }
    }
    .blog-btn {
        a {
            display: flex;
            align-items: center;
        }
        .iconify {
            margin-left: 10px;
        }
    }
}

</style>