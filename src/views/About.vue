<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <main>
        <div class="title">
            About <span class="coloured-txt">Me</span>.
        </div>
        <div class="box">
            <div class="social-icons">
                <a href="https://github.com/kaseypsbrice" target="_blank"><Icon icon="jam:github" height="3em" /></a>
                <a href="https://www.linkedin.com/in/kaseybrice/" target="_blank"><Icon icon="pajamas:linkedin" height="3em" /></a>
                <a href="https://k-42.itch.io/" target="_blank"><Icon icon="cib:itch-io" height="3em" /></a>
            </div>
            <section class="my-story">
                <h2>
                    My Story.
                </h2>
                <p style="color: #fff; padding-top: 25px; font-size: 18px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mauris nisi nunc, tempus ac ex vitae, sagittis pharetra ex. Mauris facilisis ut risus 
                    sollicitudin hendrerit. Integer iaculis urna nunc, quis placerat velit luctus quis. 
                    <br><br>
                    Donec rhoncus luctus orci quis placerat. Morbi elementum tellus et sem tempus accumsan. 
                    In ornare vitae enim in interdum. Nam sagittis massa et lacinia ultrices. 
                    Nulla nisl enim, ultricies eget pretium vitae, feugiat a elit.
                </p>
            </section>
            <section class="highlights">
                <h2>
                    Highlights.
                </h2>
                <div style="color: #fff; padding-top: 20px; font-size: 18px;">
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Mauris nisi nunc, tempus ac ex vitae iaculis urna.</li>
                    </ul>
                    <br>
                    <ul>
                        <li>Hobbies</li>
                        <li>Web development</li>
                        <li>Cyber security</li>
                        <li>3D modelling</li>
                        <li>Learning (human) languages</li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>

main {
    margin-top: 6.3%;

    .box {
        font-family: "Montserrat", sans-serif;
        z-index: 1;
        margin-top: 68.5px;
        width: 100%;
        height: 466px;
        border: solid 1px #535353;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.7);
        position: relative;
        margin-bottom: 6.3%;

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
            width: 32%;
        }
        .highlights {
            position: relative;
            top: 0;
            float: right;
            margin-top: 3.2%;
            margin-right: 13%;
            width: 32%;
        }
    }
}

</style>