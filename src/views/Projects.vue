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
        <div class="container">
            <div class="card"> <!-- Card 1 -->
                <div class="content">
                    <h2>00 Libft</h2>
                    <p style="margin-top: 10px; opacity: 0.6;">
                        Common functions from the Libc library recoded and compiled using a Makefile.
                    </p>
                    <hr style="color: #535353; margin-top: 20px;">
                    <div class="project-details">
                        <div class="img-placeholder"></div>
                        <div class="wrap">
                            <div class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi nunc, tempus ac ex vitae, sagittis pharetra ex. 
                                Mauris facilisis ut risus sollicitudin hendrerit. 
                                <br><br>
                                Integer iaculis urna nunc, quis placerat velit luctus quis. Donec rhoncus luctus orci quis placerat. 
                                Morbi elementum tellus et sem tempus accumsan. 
                            </div>
                            <div class="tags">
                                <div class="tag">C Programming</div>
                                <div class="tag">Libc</div>
                                <div class="tag">42 Adelaide Project</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="" target="_blank">
                            View this project on GitHub
                            <Icon icon="clarity:arrow-line" width="1.2em" height="1.2em"  style="color: white" />
                        </a>
                    </div>
                </div>
            </div>
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
    .container {
        margin-top: 2.1%;
        width: 100%;
        height: auto;
        background-color: #2a3c63;
        position: relative;
        z-index: 2;
        overflow-y: scroll;
        scrollbar-width: none;

        .card { /* Need to turn this into a component */
            position: relative;
            z-index: 3;
            width: 100%;
            height: auto;
            border: solid 1px #535353;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.8);
            -webkit-backdrop-filter: blur(120px);
            backdrop-filter: blur(120px);
            margin-bottom: 50px;

            .content {
                margin: 3.3% 4%;
                font-size: 18px;
                color: #fff;

                .project-details {
                    display: flex;
                    margin-top: 3%;

                    .img-placeholder {
                        min-width: 450px;
                        width: 60%;
                        height: 280px;
                        background-color: rgba(217, 217, 217, 0.7);
                    }
                    .wrap { /* Maybe I should've used grids */
                        display: flex;
                        flex-direction: column;
                        position: relative;

                        .description {
                            width: 90%;
                            height: auto;
                            margin-left: 40px;
                            margin-bottom: 30px;
                        }
                        .tags {
                            margin-left: 40px;
                            display: flex;
                            flex-wrap: wrap;

                            .tag {
                                min-width: fit-content;
                                max-width: fit-content;
                                padding: 0 15px;
                                margin-right: 10px;
                                height: 40px;
                                line-height: 40px;
                                text-align: center;
                                opacity: 0.4;
                                border-radius: 20px;
                                margin-bottom: 10px;
                                border: solid 1px #fff;
                            }
                        }
                    }
                }
                .card-cta {
                    display: flex;
                    justify-content: center;
                    position: relative;
                    margin-inline: auto;
                    margin-top: 45px;

                    a {
                        text-decoration: none;
                        color: #fff;
                        display: flex;
                        align-items: center;
                    }
                    &::after {
                        content: "";
                        position: absolute;
                        margin-inline: auto;
                        width: 330px;
                        bottom: -10px;
                        border-bottom: 1px solid #535353;
                    }
                    .iconify {
                        margin-left: 5px;
                        rotate: 45deg;
                    }
                }
            }
        }
    }
}

</style>