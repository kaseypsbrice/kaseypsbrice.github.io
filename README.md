# Portfolio Website Made with Vue.js
<div align="right">24 June 2024</div>

## Contents

- [Introduction](#introduction)
- [Design](#design)
- [Development](#development)
- [Future Improvements](#future-improvements)

<a id="introduction"></a>
## Introduction

In May of 2024, I set out to create my own portfolio website. The following recounts my approach to designing and implementing the site, along with mentioning what tools and resources I used.

<a id="design"></a>
## Design

To be honest, I originally had a **very different** design for the website, but it wasn't quite as professional as I wanted it to be so I ended up redesigning it.

In hopes of doing better the second time around, I watched a few videos about UI/UX design on YouTube to try and learn some of the basic principles of web design. 
I also searched for web design references on sites like [dribbble](https://dribbble.com/) and recreated a couple of them in [Figma](https://www.figma.com/).

Once I got a feel for what I wanted my website to look like, I finalised my design.

![Homepage Frame](https://github.com/kaseypsbrice/kaseypsbrice.github.io/assets/97709643/18c87d63-e9a1-445f-aa96-6d305e51cf0b)
![About Me Frame](https://github.com/kaseypsbrice/kaseypsbrice.github.io/assets/97709643/b073fe8f-5448-4a75-aa87-17c36e6bac9f)
![My Projects Frame](https://github.com/kaseypsbrice/kaseypsbrice.github.io/assets/97709643/db9e7054-ffe3-4681-8d56-c78e14f4542c)

Considering I have no professional experience in design work, I'm pretty happy with it.

### Youtube Videos

* [World's Shortest UI/UX Design Course](https://youtu.be/wIuVvCuiJhU?si=6n3PO68cTg725c7q)

### Design Inspiration

* [Awwwards](https://www.awwwards.com/)
* [Dribbble](https://dribbble.com/)
* [Land-book](https://land-book.com/)

<a id="development"></a>
## Development

Time to introduce one of my favourite tools: [Zeplin](https://zeplin.io/).

If you want to be provided with some of the CSS styling for your design at a glance, this is the perfect tool.<br>
In some ways, it's comparable to Figma's Dev Mode, although they do have their differences.

> Figma is a design tool, and Dev Mode is an interface within that design tool. It was made specifically to enhance the design tool so developers can view the technical specs of designs they need to build.
> <br><br>
> Zeplin, on the other hand, is a collaboration hub. Zeplin is purpose-built to support every team member and stakeholder involved in bringing a product design vision into a final product — which includes product owners, QA, marketing, legal, etc. You can view build-ready designs, grab technical specs, document design intent and behavior with structure and consistency across your team, manage tasks and approvals, and much more.
> <br><br>
> Read more here: [Zeplin vs. Figma Dev Mode: a point-by-point breakdown](https://blog.zeplin.io/zeplin-vs-dev-mode)

I used the Figma plugin for Zeplin to import my designs into the platform, that way I could clearly see
the measurements and styling of each element.

![ZeplinScreenshot](https://github.com/kaseypsbrice/kaseypsbrice.github.io/assets/97709643/147a4ff6-5e90-4834-9a18-052727684d38)

While I could've just used my Figma files as a reference, I personally like this approach more.

In terms of using Vue.js, I certainly learnt a lot from creating this website. I had never used a front-end framework prior to this project,
so it took me a while to become familiar with how things worked. Overall, I'd say I've become a fan of Vue.js. I wasn't sure about the efficiency 
of Single File Components at first, but it made it easier to organise my code and I enjoyed using scoped CSS styling. The v-bind directives and other
features also helped immensely.

### Youtube Videos

* [Vue 3 Crash Course | Project From Scratch](https://youtu.be/KTFH4P8unUQ?si=Z-RPVZob47xR16QX)

### Useful Articles

* [Animated Active Menu Highlights in VueJS](https://learnvue.co/articles/vue-animated-menu)
* [How to Deploy Your Vite/Vue 3 Application in GitHub Pages 2023](https://mkay11.medium.com/how-to-deploy-your-vite-vue-3-application-in-github-pages-2023-2b842f50576a)
* [A Guide to Vue $emit - How to Emit Custom Events in Vue](https://learnvue.co/articles/vue-emit-guide)
* [Formspree - Submit forms with JavaScript (AJAX)](https://help.formspree.io/hc/en-us/articles/360013470814-Submit-forms-with-JavaScript-AJAX)

<a id="future-improvements"></a>
## Future Improvements

Here's a list of fixes or improvements that I intend to make going forwards:

- [ ] Resizing of border/highlight surrounding navbar items needs to be consistent across different browsers. It currently appears different depending on whether it's a chromium based browser or mozilla.
- [ ] Remove repeating code for the blurred bubbles in the background and have it simply change it's styling or positioning depending on the page selected.
* Transitions:
  - [ ] When scrolling through project cards would be ideal. In case the user is unable to scroll, there should also be a button to click to go to the next card.
  - [ ] When the contact form appears.
  - [ ] Between pages.
- [ ] Possibly redesign the contact button, since I've had a hard time deciding what it should look like.
- [ ] Add link to blog.
- [ ] Change images for the project cards (two of the current images are from [Unsplash](https://unsplash.com/)).
- [ ] Fix the centring of the ContactForm content.
- [ ] Make the background resize better on larger screens.
