<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    var form = document.getElementById("my-form");
    form.addEventListener("submit", handleSubmit);
});

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: event.target.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            event.target.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

</script>

<template>
    <form id="my-form" action="https://formspree.io/f/mbjnnnkp" method="POST">
        <div class="content">
            <!-- Form Title -->
            <h2>Get In Touch</h2>
            <div class="subtitle">Feel free to reach out about anything and everything :)</div>
            <div class="wrap-details">
                <!-- First Name -->
                <input type="text" name="first-name" required placeholder="First Name" />
                <!-- Last Name -->
                <input type="text" name="last-name" required placeholder="Last Name" />
                <!-- Email -->
                <input type="email" name="email" required placeholder="Email" />
                <!-- Subject -->
                <input type="text" name="Subject" required placeholder="Subject" />
                <button id="submit-btn">submit</button>
                <button id="cancel-btn">cancel</button>
            </div>
            <!-- Message -->
            <textarea name="message" required placeholder="Type your message here..." />
            <p id="form-status"></p>
        </div>
    </form>
</template>

<style lang="scss" scoped>

#my-form {
    font-family: "Montserrat", sans-serif;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 10;
    width: 770px;
    min-height: 603px;
    height: auto;
    background-color: rgba(75, 83, 112, 0.5);
    box-shadow: 0 2px 4px 3px rgba(0, 0, 0, 0.5);
    border: solid 2px rgba(105, 116, 157, 0.5);
    -webkit-backdrop-filter: blur(120px);
    backdrop-filter: blur(120px);
    border-radius: 20px;
    display: flex;

    .content {
        margin: 0 70px;
        margin-top: 45px;
    }
    h2 {
        text-align: center;
    }
    .subtitle {
        margin-top: 10px;
        margin-bottom: 30px;
        font-size: 18px;
        color: #fff;
        text-align: center;
    }
    .wrap-details {
        display: flex;
        flex-direction: column;
        float: left;
    }
    input[type=text],
    input[type=email] {
        width: 260px;
    }
    input[type=text],
    input[type=email],
    textarea[name=message] {
        color: #fff;
        opacity: 0.6;
        background: none;
        outline: 0;
        border-width: 0 0 1px;
        border-color: rgb(255, 255, 255, 0.6);
        padding-bottom: 10px;
        font-size: 18px;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 30px;
        transition: border-color 0.3s ease;
    }
    textarea[name=message] {
        margin-left: 45px;
        width: auto;
        resize: none; /* Not sure whether I should leave it as this temporarily or permanently. It would be preferable to resize most likely. */
        height: 390px;
        border: 1px solid;
        border-color: rgb(255, 255, 255, 0.6);
        border-radius: 20px;
        padding: 25px 16px;
        float: right;
        transition: opacity 0.3s ease;
    }
    input:focus {
        opacity: 1;
        border-color: rgb(255, 255, 255);
    }
    input:not(:placeholder-shown) {
        opacity: 1;
    }
    textarea[name=message]:focus {
        opacity: 1;
        border-color: rgb(255, 255, 255);
    }
    textarea[name=message]:not(:placeholder-shown) {
        opacity: 1;
    }
    #submit-btn {
        margin-top: 5px;
    }
    #submit-btn, #cancel-btn {
        width: 262px;
        height: 56px;
        background-color: #fff;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        outline: none;
        border: none;
        border-radius: 20px;
        font-size: 18px;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-variant: small-caps;
    }
    #submit-btn:hover, #cancel-btn:hover {
        background-color: #909cff;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    #submit-btn:active, #cancel-btn:active {
        background-color: #5a67dd;
        color: #fff;
        cursor: pointer;
        transition: none;
        border: #3d458a 1px solid;
    }
    #cancel-btn {
        margin-top: 23px;
    }
    #form-status {
        position: absolute;
        bottom: 0;
    }
}

</style>