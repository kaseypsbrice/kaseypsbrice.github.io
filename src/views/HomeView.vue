<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <main>
    <div class="intro">
        Hi, I'm <span class="coloured-txt">Kasey Brice</span>.
        <div class="subtitle">
            Software developer and 42 Adelaide graduate.<br>
            Currently a cyber security cadet at Data Action.
        </div>
    </div>
    <div class="social-icons">
        <a href="https://github.com/kaseypsbrice" target="_blank"><Icon icon="jam:github" height="3em" /></a>
        <a href="https://www.linkedin.com/in/kaseybrice/" target="_blank"><Icon icon="pajamas:linkedin" height="3em" /></a>
        <!-- <Icon icon="icomoon-free:instagram" height="2.6em" /> -->
        <a href="https://k-42.itch.io/" target="_blank"><Icon icon="cib:itch-io" height="3em" /></a>
    </div>
  </main>
</template>

<style lang="scss" scoped>

main {
    margin-top: 13%;

    .intro {
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 64px;
        letter-spacing: -0.5px;
        color: #fff;

        .coloured-txt {
            color: #909cff;
        }
        .subtitle {
            padding-top: 20px;
            font-weight: normal;
            font-size: 32px;
            letter-spacing: normal;
        }
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