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

## Usage

**First you need to go into "module_example" folder, then follow next steps. Also check app.js and script tag of index.html file for understanding how it works.**

**HTML**

```
<div class="josh-js" data-josh-anim-name="fadeInUp">A JavaScript library to animate content on page scroll.</div>

// You have to provide below data attribute with animation name from Animate.css library or your own library

data-josh-anim-name="fadeInUp"
```

**How to get animation name**

Go to [Animate.css](https://animate.style/) website. Copy the animation class name from right panel, you will get class name like "animate**backInDown" remove "animate**" you get animation name like "backInDown" add this to above data attribute.

**CSS**

Add this css file to your HTML file.

```
<link rel="stylesheet" href="css/animate.css" />
```

**Module Style**

```
npm install
```

If you write HTML, added CSS file and called JavaScript like above so that you are good to go!

**Run with Parcel**

I am using Parceljs as module bundler. Run the following command your dev server will run.

```
npx parcel index.html
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
