<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from "@iconify/vue";
import ContactForm from './ContactForm.vue';
import { ref } from 'vue';

/* Toggles the ContactForm. */

const showContactForm = ref(false);

const toggleContactForm = () => {
    showContactForm.value = !showContactForm.value;
};

const closeContactForm = () => {
    console.log('ContactForm close event triggered!');
    showContactForm.value = false;
};

/* Effect for the Navbar. */
/* Depending on what page is selected, the select-highlight div will move to the
 * navbar item that is associated with the current page. */

const selected = ref(0);
const changeSelected = (i) => {
    selected.value = i;
    const highlight = document.getElementsByClassName('select-highlight')[0];
    highlight.style.left = i * 125 + 'px';

    if (selected.value === 1) {
        highlight.style.width = '110px';
    }
    else if (selected.value === 2) {
        highlight.style.width = '132px';
    } else {
        highlight.style.width = '';
    }
};

</script>

<template>
	<header>
		<nav class="top-nav">
			<RouterLink to="/" class="site-title"> <!-- Title of website -->
				Kasey Brice
            </RouterLink>
			<ul class="routes small-caps"> <!-- Navigation links -->
				<li :class=' {"selected": selected === 0 } ' @click='changeSelected(0)'> <!---->
                    <RouterLink to="/">home</RouterLink>
                </li>
                <li :class=' {"selected": selected === 1 } ' @click='changeSelected(1)'> <!---->
                    <RouterLink to="/about">about</RouterLink>
                </li>
                <li :class=' {"selected": selected === 2 } ' @click='changeSelected(2)'> <!---->
                    <RouterLink to="/projects">projects</RouterLink>
                </li>
                <li class="blog-btn">
                    <a href="" target="_blank">
                        blog
                        <Icon icon="icomoon-free:new-tab" width=".8em" height=".8em"  style="color: white" />
                    </a>
                </li>
                <div class="select-highlight"></div>
			</ul>
            <div class="contact-btn small-caps" @click="toggleContactForm">
                contact
            </div>
		</nav>
	</header>
    <ContactForm v-if="showContactForm" @close="closeContactForm" />
</template>

<style lang="scss" scoped>

.select-highlight {
    left: 0;
    position: absolute;
    width: 116px;
    height: 44px;
    border-radius: 20px;
    border: 3px solid transparent; /* Transparent border to maintain size */
    background: conic-gradient(from 0.51turn, #909cff, #2f44ff 0.53turn, #909cff) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    mask-composite: exclude;
    pointer-events: none;
    transition: left 0.3s ease, width 0.3s ease;
}

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

    /* I truly just cannot decide what this contact button should look like */
    .contact-btn {
        position: absolute;
        right: 115px;
        background-color: #727ac2;
        color: white;
        font-weight: 600;
        letter-spacing: 1px;
        width: 194px;
        height: 46px;
        line-height: 46px;
        border-radius: 20px;
        box-shadow: inset 0 0px 2px 4px rgba(21, 29, 102, 0.5);
        
        &:hover {
            cursor: pointer;
            transition: background-color 0.3s ease;
            transition: box-shadow 0.3s ease;
            color: #000;
            background-color: white;
            box-shadow: inset 0 0px 2px 4px rgba(151, 151, 151, 0.5);
        }
    }
    .routes {
        width: fit-content;
        height: 100%;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-inline: auto;
        position: relative;

        a {
            text-decoration: none;
            color: #fff;
            padding: 0px 36px;

            &:hover {
                /* Honestly, I just threw this in. */
                transition: text-shadow 0.3s ease;
                text-shadow: rgba(240,214,255,0.9) 0px 0px 9px;
            }
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