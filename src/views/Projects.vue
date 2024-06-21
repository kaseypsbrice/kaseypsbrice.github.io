<script setup>
import { Icon } from "@iconify/vue";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
    <div class="background-blur"></div>
    <div class="bubble-container">
        <div class="ellipse-right bubble-right"></div>
        <div class="ellipse-left bubble-left"></div>
    </div>
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
            <!-- Card 1 -->
            <ProjectCard
            title="00 Ft_Transcendence"
            subtitle="Full-stack single page application (SPA) designed to play Pong."
            description="This group project involved creating an SPA to participate in Pong tournaments. 
            Every user has their own personal profile where they can add friends, block users, and view their own stats.
            <br><br>
            Coded in Vanilla JavaScript, this application uses a hash-router to load content and is deployable using Docker."
            :tags="['HTML', 'CSS', 'JavaScript', 'SPA', 'Docker', 'Nginx', 'MariaDB']"
            cta="View this project on GitHub"
            ctaLink="https://github.com/kaseypsbrice/ft_transcendence"
            imgSrc="src/assets/media/altumcode-dMUt0X3f59Q-unsplash.jpg"
            />
            <!-- Card 2 -->
            <ProjectCard 
            title="01 Minishell"
            subtitle="A Linux program that mirrors the functionality of Bash."
            description="Essentially, this is our own custom bash.
            <br><br>
            It includes recreations of original built-in commands while also handling redirections, environment variables,
            and pipes. Signals are used to implement common keyboard shortcuts such as the ones responsible for displaying a new prompt or exiting the shell."
            :tags="['C Programming', '42 Adelaide Project', 'Bash', 'Shell']"
            cta="View this project on GitHub"
            ctaLink="https://github.com/kaseypsbrice/Minishell"
            imgSrc="src/assets/media/pexels-danbuilds-633409.jpg"
            />
            <!-- Card 3 -->
            <ProjectCard 
            title="02 Dimmer Demons"
            subtitle="A game made in Unity for the Adelaide Game Developers (AGD) SlamJam3."
            description="First-person horror game in which the player must navigate their home, where the lights are constantly dimming.
            Their only hope is to find a light switch. However the lights don't stay on for long...<br><br>And there's more than just darkness chasing them.
            <br><br>
            Dimmer Demons is available to download on <a href='https://terminalsniper5.itch.io/dimmer-demons' target='_blank' style='color: #a8b2ff;'>itch.io.</a>"
            :tags="['C#', 'Unity', 'Game Development', '3D']"
            cta="View this project on GitHub"
            ctaLink="https://github.com/kaseypsbrice/SlamJam2023"
            imgSrc="src/assets/media/DimmerDemonsLogo.png"
            />
        </div>
    </main>
</template>

<style lang="scss" scoped>

.bubble-container {
    height: 124%;
}
.background-blur {
    height: 124%;
}
.bubble-right {
    width: 787.3px;;
    height: 759.6px;;
    bottom: 0;
    right: 0;
    background-image: radial-gradient(circle at 122% 50%, #7f8ec5 25%, #030303 58%);
}
.bubble-left {
    width: 447px;
    height: 723px;
    left: 0;
    bottom: -28%;
    background-color: #7f8ec5;
    opacity: 0.9;
}

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
        height: 75vh;
        position: relative;
        z-index: 2;
        overflow-y: scroll;
        scrollbar-width: none;
        margin-bottom: 4%;
        padding-bottom: 80px;
    }
}

</style>