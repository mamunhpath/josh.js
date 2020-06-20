# Josh.js

## A JavaScript library to animate content on page scroll

- No jQuery Dependency
- Written on ES6(Compiled ES5 version available)
- Very much lightweight, Only 2KB &#x1F618;
- Animate using [Animate.css](https://github.com/daneden/animate.css) library
- You can use your own CSS animation library
- Work on newly created DOM

## [See it in action!](https://mamunhpath.github.io/josh.js/)

**&#x1F49D; Loved it, Press the Star Button &#x1F49D;**

## Installation

**Using NPM**

```
npm install joshjs
```

**Using HTML &#12296;script&#9002; tag**

```
<script src="js/josh.min.js">
  
// Or use ES5
<script src="js/josh.es5.min.js">
```
## CDN

**jsDelivr**

```
//ES6
https://cdn.jsdelivr.net/npm/joshjs@1.0.0/dist/josh.min.js

//ES5
https://cdn.jsdelivr.net/npm/joshjs@1.0.0/dist/josh.es5.min.js

```

**UNPKG**

```
//ES6
https://unpkg.com/joshjs@1.0.0/dist/josh.min.js

//ES5
https://unpkg.com/joshjs@1.0.0/dist/josh.es5.min.js
```

## Usage

**HTML**

```
<div class="josh-js" data-josh-anim-name="fadeInUp">A JavaScript library to animate content on page scroll.</div>
  
// You have to provide below data attribute with animation name from Animate.css library or your own library

data-josh-anim-name="fadeInUp"
```

**How to get animation name**

Go to [Animate.css](https://animate.style/) website. Copy the animation class name from right panel, you will get class name like "animate__backInDown" remove "animate__" you get animation name like "backInDown" add this to above data attribute.

**CSS**

Add this css file to your HTML file.

```
<link rel="stylesheet" href="css/animate.css" />
```

**JavaScript**

```
const josh = new Josh();
```

If you write HTML, added CSS file and called JavaScript like above so that you are good to go!

## Advanced usage

**HTML**

```
<div
    class="element josh-js"
    data-josh-anim-name="lightSpeedInRight"
    data-josh-duration="1500ms"
    data-josh-anim-delay="3.5s"
    data-josh-iteration="infinite"
>
    Written on ES6
</div>
```

**JavaScript**

```
const josh = new Josh({
    // DOM CSS class to Animate, default is "josh-js"
    initClass: "josh-js",

    // Animation CSS class from Animate.css library
    animClass: "animate__animated",

    // Element distance of viewport to triggering the animation. default is 0.2 means 20% of element view animation will trigger
    offset: 0.2,

    // Animation will trigger on Mobile or not. Default is true
    animateInMobile: true,

    // Animation will trigger on newly added element or not. Default is false
    onDOMChange: false,
  });
```

## Dependencies

- [animate.css](https://github.com/daneden/animate.css)

## Browser Support

All modern browsers are supported. Because of written in ES6 and modern web API Internet Explorer will not support.
Here you can check supported browser:

[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) Not supported by IE.

[MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) Supported by IE 11.

If you want to support Internet Explore so that you can use Polifill for IntersectionObserver.

[IntersectionObserver Polifill 1](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

[IntersectionObserver Polifill 2](https://www.npmjs.com/package/intersection-observer-polyfill)

## Developer

**Developed by Al Mamun**

- [Github Profile](//github.com/mamunhpath)
- [LinkedIn](https://www.linkedin.com/in/al-mamun-38874348/)
- [Facebook Profile](//facebook.com/mamunhpath)

## Want to contribute? Great!

Fork it, clone it to your PC, fix the issue, push to your repository, Make a pull request to this repository. You are done!

## License

MIT

**Free Software, Hell Yeah!**
