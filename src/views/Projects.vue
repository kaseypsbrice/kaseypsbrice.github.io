<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <main>
        <div class="title">
            <span class="coloured-txt">My</span> Projects.
        </div>
        <div class="main-cta">
            View all my coding projects on my 
            <a href="https://github.com/kaseypsbrice" target="_blank" class="opacity">
                <span class="coloured-txt">&nbsp;GitHub</span>
                <Icon icon="akar-icons:link-out" width="1em" height="1em"  style="color: white" />
            </a>
        </div>
        <div class="gradient-line">
            <div class="line-top"></div>
            <div class="line-bottom"></div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

main {
    margin-top: 6.3%;
    font-family: "Montserrat", sans-serif;

    .title {
        max-width: fit-content;
        margin-inline: auto;
    }
    .main-cta {
        min-width: 596px;
        width: 36%;
        height: 2.85em;
        margin-top: 22px;
        border-radius: 20px;
        border: solid 1px #535353;
        margin-inline: auto;
        line-height: 2.85em;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: opacity 0.3s ease;
        }
        .opacity:hover {
            opacity: 0.6;
        }
        .coloured-txt {
            font-weight: bold;
        }
        .iconify {
            margin-left: 7px;
        }
    }
    .gradient-line {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        position: relative;
        margin-inline: auto;

        .line-top, .line-bottom {
            position: absolute;
            width: 1px;
            height: 530px;
        }
        .line-top {
            z-index: 0;
            background-image: linear-gradient(to top, #7f89e0 95%, #000 101%);
        }
        .line-bottom {
            margin-top: 7%;
            z-index: 1;
            background-image: linear-gradient(to bottom, #7f89e0 94%, #000 100%);
        }
    }
}

</style>