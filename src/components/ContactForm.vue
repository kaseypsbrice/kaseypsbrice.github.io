<script setup>
    /* Add code for submitting contact form */
</script>

<template>
    <form action="https://formspree.io/f/mbjnnnkp" method="POST">
        <label>
            Your email:
            <input type="email" name="email">
        </label>
        <label>
            Your message:
            <textarea name="message"></textarea>
        </label>
        <!-- your other form fields go here -->
         <button type="submit">Send</button>
    </form>
</template>

<style lang="scss" scoped>

</style>