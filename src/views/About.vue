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
            About <span class="coloured-txt">Me</span>.
        </div>
        <div class="box">
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
            <section class="my-story">
                <h2>
                    My Story.
                </h2>
                <!-- I wrote this up quickly, will probably change later. -->
                <p style="color: #fff; padding-top: 25px; font-size: 18px;">
                    Roughly 2 years ago, I joined 42 Adelaide <code>&#8212;</code> a tuition free coding school that had only
                    just opened up in Australia at the time.
                    It was certainly a leap of faith on my part. Through it however, I was able to explore new opportunities
                    within the tech industry. From code-a-thons to CTF competitions, to even being able to mentor those at 42 Adelaide,
                    I've taken every opportunity to develop my skills further.
                    <br><br>
                    Recently, I've been working as a cyber security cadet at Data Action where it's been my role to identify and
                    respond to security risks. 
                    <br><br>
                    In my own time, I've been working on improving my skills in web development and trying to learn more about
                    UI/UX design.
                </p>
            </section>
            <section class="highlights">
                <h2>
                    Highlights.
                </h2>
                <div style="color: #fff; padding-top: 20px; font-size: 18px;">
                    <ul>
                        <li>Cyber Battle Australia finalist.</li>
                        <li>1 of the first 10 people to complete the 42 curriculum in Australia.</li>
                        <li>
                            For an overview of how I went about designing this website, I have a README.md
                            available on <a href='https://github.com/kaseypsbrice/kaseypsbrice.github.io' target='_blank' style='color: #a8b2ff;'>GitHub.</a>
                        </li>
                    </ul>
                    <br>
                    <p style="font-weight: 600;">Hobbies</p>
                    <ul style="padding-top: 1em;">
                        <li>Web development</li>
                        <li>Drawing</li>
                        <li>3D modelling</li>
                        <li>Learning (human) languages</li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>

.bubble-right {
    width: 787.3px;;
    height: 759.6px;;
    bottom: 0;
    right: 0;
    background-image: radial-gradient(circle at 77% 76%, #7f8ec5 17%, #030303 41%);
}
.bubble-left {
    width: 447px;
    height: 723px;
    left: -5%;
    bottom: 0;
    background-image: radial-gradient(circle at 83% 50%, #7f8ec5 12%, #030303 70%);
}

main {
    margin-top: 6.3%;

    .box {
        font-family: "Montserrat", sans-serif;
        z-index: 1;
        margin-top: 68.5px;
        width: 100%;
        min-height: 466px;
        height: auto;
        border: solid 1px #535353;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.7);
        position: relative;
        margin-bottom: 6.3%;
        display: flex;

        .social-icons {
            position: absolute;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 3%;
            margin-top: 3.2%;

            .iconify {
                margin-bottom: 20%;
                color: #fff;
                opacity: 0.39;
                transition: opacity 0.3s ease;
                background-color: transparent;

                &:hover {
                    cursor: pointer;
                    opacity: 1.0;
                }
            }
        }

        .my-story {
            position: relative;
            float: left;
            margin-left: 10%;
            margin-top: 3.2%;
            width: 38%;
        }

        .highlights {
            position: relative;
            top: 0;
            margin-left: 10%;
            float: right;
            margin-top: 3.2%;
            width: 32%;
        }
    }
}
</style>