/* ============= TYPEWRITER EFFECT ============= */
/* Typewriter effect for homepage that types out
 * different titles.
 */

var typewriter = new Typed('#typewriter', {
    strings: ['Software Engineer.', '42 Adelaide Graduate.', 'Aspiring Web Developer.'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2500,
    startDelay: 0,
    loop: true
});

/* ============= SOCIALS ============= */
/* Changes icon + text colour when hovering over 
 * social media icons located in the footer. 
 */

function linkedinHover(isHovering) {
    var text = document.getElementById("linkedin");
    var icon = document.querySelector('.ant-design--linkedin-outlined');

    if (isHovering) {
        text.style.color = "#4e8eca";
        text.style.cursor = "pointer";
        icon.classList.add('hovered');
        icon.style.cursor = "pointer";
    }
    else {
        text.style.color = "#181818";
        icon.classList.remove('hovered');
    }
}

function instagramHover(isHovering) {
    var text = document.getElementById("instagram");
    var icon = document.querySelector('.streamline--instagram');

    if (isHovering) {
        text.style.color = "#ca4ea9";
        text.style.cursor = "pointer";
        icon.classList.add('hovered');
        icon.style.cursor = "pointer";
    }
    else {
        text.style.color = "#181818";
        icon.classList.remove('hovered');
    }
}

function githubHover(isHovering) {
    var text = document.getElementById("github");
    var icon = document.querySelector('.mdi--github');

    if (isHovering) {
        text.style.color = "#924eca";
        text.style.cursor = "pointer";
        icon.classList.add('hovered');
        icon.style.cursor = "pointer";
    }
    else {
        text.style.color = "#181818";
        icon.classList.remove('hovered');
    }
}