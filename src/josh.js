/**
 * Josh.js - A JavaScript library to animate content on page scroll.
 * Version: 1.0.0
 * Author: Al Mamun
 * License: MIT
 * Repo: https://github.com/mamunhpath/josh.js
 * Demo: https://mamunhpath.github.io/josh.js
 */
class Josh {
  constructor(options = {}) {
    // DOM Class for initialize Josh. Default class is josh-js
    this.initClass = options.initClass || "josh-js";
    // Selecting DOM element
    this.initDom = document.querySelectorAll("." + this.initClass);
    // Animation library class. Default class is 'animate__animated'
    this.animClass = options.animClass || "animate__animated";
    // Number 0 to 1, 0.2 means if the element come to 20% percent of view it will animate. Default value is 0.2
    this.offset = options.offset || 0.2;
    // Boolean value to animate in mobile or not. Default value is true
    this.animateInMobile =
      typeof options.animateInMobile === "undefined"
        ? true
        : options.animateInMobile;
    //To run on DOM change you need to pass the true value. Default value is false
    this.onDOMChange =
      typeof options.onDOMChange === "undefined" ? false : options.onDOMChange;
    //Call intersectOnScroll method on constructor run
    this.intersectOnScroll(this.initDom);
    //Call callOnDOMChange method on constructor run
    this.callOnDOMChange();
    //Adding css in constructor run
    this.addCss(this.initDom);
  }
  // Callback function for intersection observer
  intersectionObserverCallback(entries, observer) {
    const notMobile = !this.animateInMobile && this.isMobile();
    entries.forEach(entry => {
      //Selecting target element
      const targetElm = entry.target;
      //Taking data from data attribute
      const name = targetElm.dataset.joshAnimName, // Class name from animate.css
        iteration = targetElm.dataset.joshIteration, // Animation iteration count
        duration = targetElm.dataset.joshDuration, // Animation duration
        delay = targetElm.dataset.joshDelay; // Animation delay

      if (entry.isIntersecting) {
        let styles = `
          visibility: visible;
          animation-name: ${name};
          animation-duration: ${duration};
          animation-iteration-count: ${iteration};
          animation-delay: ${delay};
        `;
        if (!notMobile) {
          targetElm.style = targetElm.style.cssText + styles;
        }

        //Removing observer
        observer.unobserve(targetElm);
      }
    });
  }
  //Adding css to DOM
  addCss(targetElm) {
    if (targetElm.length > 0) {
      targetElm.forEach(elm => {
        this.cssUtil(elm);
      });
    } else {
      this.cssUtil(targetElm);
    }
  }
  //Css utility
  cssUtil(targetNode) {
    const notMobile = !this.animateInMobile && this.isMobile();
    targetNode.classList.add(this.animClass);
    if (!notMobile) {
      // Initial time content will not show if that content not in the view.
      targetNode.style = targetNode.style.cssText + "visibility: hidden";
    }
  }
  // intersectOnScroll function to run animation in consturctor call
  intersectOnScroll(domElement) {
    //Checking is IntersectionObserver supported by browser
    if ("IntersectionObserver" in window) {
      const intetsectObserver = new IntersectionObserver(
        this.intersectionObserverCallback.bind(this),
        {
          root: null,
          rootMargin: "0px",
          threshold: this.offset
        }
      );
      if (domElement.length > 0) {
        //Observing every element
        domElement.forEach(animItem => {
          intetsectObserver.observe(animItem);
        });
      } else {
        //Observing single element
        intetsectObserver.observe(domElement);
      }
    } else {
      //If IntersectionObserver not supported by browser thowing error
      throw new Error(
        "IntersectionObserver is not support by this browser. Try by adding pollyfil or use other library."
      );
    }
  }

  // checking the DOM change and re-run the IntersectionObserver
  callOnDOMChange() {
    window.addEventListener("DOMContentLoaded", () => {
      if (this.onDOMChange) {
        // Using MutationObserver to check DOM change
        const domChangeObserver = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            const newNodes = mutation.addedNodes; // DOM NodeList
            if (newNodes !== null) {
              newNodes.forEach(node => {
                //Calling IntersectionObserver again for DOM change
                this.addCss(node);
                this.intersectOnScroll(node);
              });
            }
          });
        });
        // Options for the observer (which mutations to observe)
        const config = {
          childList: true,
          subtree: true
        };

        // Start observing the target node for configured mutations
        domChangeObserver.observe(document.body, config);
      }
    });
  }
  //Check mobile device
  isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
}
