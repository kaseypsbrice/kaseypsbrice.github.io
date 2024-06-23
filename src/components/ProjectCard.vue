<template>
    <div class="card">
        <div class="content">
            <h2>{{ title }}</h2>
            <p style="margin-top: 10px; opacity: 0.6;">{{ subtitle }}</p>
            <hr style="color: #535353; margin-top: 20px;">
            <div class="project-details">
                <div class="img-placeholder"><img :src="imgSrc" alt="Project Image"></div>
                <div class="wrap">
                    <div v-html="description" class="description"></div>
                    <div class="tags">
                        <div v-for="tag in tags" :key="tag" class="tag">{{ tag }}</div>
                    </div>
                </div>
            </div>
            <div class="card-cta">
                <a :href="ctaLink" target="_blank">
                    {{ cta }}
                    <Icon icon="clarity:arrow-line" width="1.2em" height="1.2em" style="color: white" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>

import { Icon } from "@iconify/vue";

defineProps({
    title: String,
    subtitle: String,
    description: String,
    tags: Array,
    cta: String,
    ctaLink: String,
    imgSrc: String
})

</script>

<style lang="scss" scoped>

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 8;
    border-radius: 10px;
}

.card {
    position: relative;
    z-index: 3;
    width: 100%;
    height: auto;
    border: solid 1px #535353;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: blur(120px);
    backdrop-filter: blur(120px);
    margin-bottom: 10px;

    .content {
        margin: 3.3% 4%;
        font-size: 18px;
        color: #fff;

        .project-details {
            display: flex;
            margin-top: 3%;

            .img-placeholder {
                flex-grow: 0;
                flex-shrink: 0;
                min-width: 450px;
                width: 38.8%;
                height: 280px;
                background-color: rgba(217, 217, 217, 0.1);
                border-radius: 10px;
            }

            .wrap {
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

            :hover {
                transition: text-shadow 0.2s ease;
                text-shadow: rgba(240,214,255,0.9) 0px 0px 9px;
            }
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

</style>