<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="background-blur"></div>
    <div class="bubble-container">
        <div class="ellipse-right bubble-right"></div>
        <div class="ellipse-left bubble-left"></div>
    </div>
    <main>
        <div class="title">
            Hi, I'm <span class="coloured-txt">Kasey Brice</span>.
            <div class="subtitle">
                Software developer and 42 Adelaide graduate.<br>
                Currently a cyber security cadet at Data Action.
            </div>
        </div>
        <div class="social-icons">
            <a href="https://github.com/kaseypsbrice" target="_blank">
                <Icon icon="jam:github" height="3em" />
            </a>
            <a href="https://www.linkedin.com/in/kaseybrice/" target="_blank">
                <Icon icon="pajamas:linkedin" height="3em" />
            </a>
            <a href="https://k-42.itch.io/" target="_blank">
                <Icon icon="cib:itch-io" height="3em" />
            </a>
        </div>
    </main>
</template>

<style lang="scss" scoped>

.bubble-left {
    bottom: -50%;
    left: -100%;
    width: 2605.4px;
    height: 911px;
    background-image: radial-gradient(circle at 91% 119%, #7f8ec5 9%, #030303 40%);
}

.bubble-right {
    width: 814px;
    height: 877.6px;
    top: -40%;
    right: 0;
    background-image: radial-gradient(circle at 82% 75%, #7f8ec5, #030303 70%);
}

main {
    margin-top: 13%;

    .subtitle {
        padding-top: 20px;
        font-weight: normal;
        font-size: 32px;
        letter-spacing: normal;
    }

    .social-icons {
        display: flex;
        align-items: center;
        padding-top: 20px;

        .iconify {
            margin-right: 10px;
            color: #fff;
            opacity: 0.39;
            transition: opacity 0.3s ease;

            &:hover {
                cursor: pointer;
                opacity: 1.0;
            }
        }
    }
}
</style>