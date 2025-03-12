# Portfolio Website Made with Vue.js
<div align="right">24 June 2024</div>

## Contents

- [Design](#design)
- [Development](#development)
- [To-Do: Fixes & Improvements](#to-do)

<a id="design"></a>
## Design

Taking inspo from sites such as [dribbble](https://dribbble.com/), I chalked up the following design in [Figma](https://www.figma.com/).

![Homepage Frame](https://github.com/kaseypsbrice/kaseypsbrice.github.io/assets/97709643/18c87d63-e9a1-445f-aa96-6d305e51cf0b)
![About Me Frame](https://github.com/kaseypsbrice/kaseypsbrice.github.io/assets/97709643/b073fe8f-5448-4a75-aa87-17c36e6bac9f)
![My Projects Frame](https://github.com/kaseypsbrice/kaseypsbrice.github.io/assets/97709643/db9e7054-ffe3-4681-8d56-c78e14f4542c)

### Useful Resources

#### Videos

* [World's Shortest UI/UX Design Course](https://youtu.be/wIuVvCuiJhU?si=6n3PO68cTg725c7q)

#### Design Inspo

* [Awwwards](https://www.awwwards.com/)
* [Dribbble](https://dribbble.com/)
* [Land-book](https://land-book.com/)

<a id="development"></a>
## Development

To help with drafting the website, I used [Zeplin](https://zeplin.io/) to view the CSS styling of Figma components.

Zeplin is a service that provides some similar functionalities to Figma's Dev Mode, although they're inherently different.

> Figma is a design tool, and Dev Mode is an interface within that design tool. It was made specifically to enhance the design tool so developers can view the technical specs of designs they need to build.
> <br><br>
> Zeplin, on the other hand, is a collaboration hub. Zeplin is purpose-built to support every team member and stakeholder involved in bringing a product design vision into a final product — which includes product owners, QA, marketing, legal, etc. You can view build-ready designs, grab technical specs, document design intent and behavior with structure and consistency across your team, manage tasks and approvals, and much more.
> <br><br>
> Continue reading here: [Zeplin vs. Figma Dev Mode: a point-by-point breakdown](https://blog.zeplin.io/zeplin-vs-dev-mode)


Using the Figma plugin for Zeplin, I imported my designs to view the styling of each element.

![ZeplinScreenshot](https://github.com/kaseypsbrice/kaseypsbrice.github.io/assets/97709643/147a4ff6-5e90-4834-9a18-052727684d38)

### Resources

#### Videos

* [Vue 3 Crash Course | Project From Scratch](https://youtu.be/KTFH4P8unUQ?si=Z-RPVZob47xR16QX)

#### Articles

* [Animated Active Menu Highlights in VueJS](https://learnvue.co/articles/vue-animated-menu)
* [How to Deploy Your Vite/Vue 3 Application in GitHub Pages 2023](https://mkay11.medium.com/how-to-deploy-your-vite-vue-3-application-in-github-pages-2023-2b842f50576a)
* [A Guide to Vue $emit - How to Emit Custom Events in Vue](https://learnvue.co/articles/vue-emit-guide)
* [Formspree - Submit forms with JavaScript (AJAX)](https://help.formspree.io/hc/en-us/articles/360013470814-Submit-forms-with-JavaScript-AJAX)

<a id="to-do"></a>
## To-Do: Fixes & Improvements

- [ ] Resizing of border/highlight surrounding navbar items needs to be consistent across different browsers. It currently appears different depending on whether it's a chromium based browser or mozilla.
- [ ] Remove repeating code for the blurred bubbles in the background and have it simply change it's styling or positioning depending on the page selected.
* Transitions:
  - [ ] When scrolling through project cards. In case the user is unable to scroll, there should also be a button to click to go to the next card.
  - [ ] When the contact form appears.
  - [ ] Between pages.
- [ ] Redesign the contact button.
- [ ] Add link to blog.
- [ ] Change images for the project cards (two of the current images are from [Unsplash](https://unsplash.com/)).
- [ ] Improve resizing of content on different screen sizes.
