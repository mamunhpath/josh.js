/**
 * Josh.js - A JavaScript library to animate content on page scroll.
 * Version: 1.0.0
 * Author: Al Mamun
 * License: MIT
 * Repo: https://github.com/mamunhpath/josh.js
 * Demo: https://mamunhpath.github.io/josh.js
 */

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Josh = function () {
  function Josh() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Josh);

    // DOM Class for initialize Josh. Default class is josh-js
    this.initClass = options.initClass || "josh-js";
    // Selecting DOM element
    this.initDom = document.querySelectorAll("." + this.initClass);
    // Animation library class. Default class is 'animate__animated'
    this.animClass = options.animClass || "animate__animated";
    // Number 0 to 1, 0.2 means if the element come to 20% percent of view it will animate. Default value is 0.2
    this.offset = options.offset || 0.2;
    // Boolean value to animate in mobile or not. Default value is true
    this.animateInMobile = typeof options.animateInMobile === "undefined" ? true : options.animateInMobile;
    //To run on DOM change you need to pass the true value. Default value is false
    this.onDOMChange = typeof options.onDOMChange === "undefined" ? false : options.onDOMChange;
    //Call intersectOnScroll method on constructor run
    this.intersectOnScroll(this.initDom);
    //Call callOnDOMChange method on constructor run
    this.callOnDOMChange();
    //Adding css in constructor run
    this.addCss(this.initDom);
  }
  // Callback function for intersection observer


  _createClass(Josh, [{
    key: "intersectionObserverCallback",
    value: function intersectionObserverCallback(entries, observer) {
      var notMobile = !this.animateInMobile && this.isMobile();
      entries.forEach(function (entry) {
        //Selecting target element
        var targetElm = entry.target;
        //Taking data from data attribute
        var name = targetElm.dataset.joshAnimName,
            // Class name from animate.css
        iteration = targetElm.dataset.joshIteration,
            // Animation iteration count
        duration = targetElm.dataset.joshDuration,
            // Animation duration
        delay = targetElm.dataset.joshDelay; // Animation delay

        if (entry.isIntersecting) {
          var styles = "visibility: visible;animation-name: " + name + ";animation-duration: " + duration + ";animation-iteration-count: " + iteration + ";animation-delay: " + delay + ";";
          if (!notMobile) {
            targetElm.style = targetElm.style.cssText + styles;
          }

          //Removing observer
          observer.unobserve(targetElm);
        }
      });
    }
    //Adding css to DOM

  }, {
    key: "addCss",
    value: function addCss(targetElm) {
      var _this = this;

      if (targetElm.length > 0) {
        targetElm.forEach(function (elm) {
          _this.cssUtil(elm);
        });
      } else {
        this.cssUtil(targetElm);
      }
    }
    //Css utility

  }, {
    key: "cssUtil",
    value: function cssUtil(targetNode) {
      var notMobile = !this.animateInMobile && this.isMobile();
      targetNode.classList.add(this.animClass);
      if (!notMobile) {
        // Initial time content will not show if that content not in the view.
        targetNode.style = targetNode.style.cssText + "visibility: hidden";
      }
    }
    // intersectOnScroll function to run animation in consturctor call

  }, {
    key: "intersectOnScroll",
    value: function intersectOnScroll(domElement) {
      var _this2 = this;

      //Checking is IntersectionObserver supported by browser
      if ("IntersectionObserver" in window) {
        (function () {
          var intetsectObserver = new IntersectionObserver(_this2.intersectionObserverCallback.bind(_this2), {
            root: null,
            rootMargin: "0px",
            threshold: _this2.offset
          });
          if (domElement.length > 0) {
            //Observing every element
            domElement.forEach(function (animItem) {
              intetsectObserver.observe(animItem);
            });
          } else {
            //Observing single element
            intetsectObserver.observe(domElement);
          }
        })();
      } else {
        //If IntersectionObserver not supported by browser thowing error
        throw new Error("IntersectionObserver is not support by this browser. Try by adding pollyfil or use other library.");
      }
    }

    // checking the DOM change and re-run the IntersectionObserver

  }, {
    key: "callOnDOMChange",
    value: function callOnDOMChange() {
      var _this3 = this;

      window.addEventListener("DOMContentLoaded", function () {
        if (_this3.onDOMChange) {
          // Using MutationObserver to check DOM change
          var domChangeObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              var newNodes = mutation.addedNodes; // DOM NodeList
              if (newNodes !== null) {
                newNodes.forEach(function (node) {
                  //Calling IntersectionObserver again for DOM change
                  _this3.addCss(node);
                  _this3.intersectOnScroll(node);
                });
              }
            });
          });
          // Options for the observer (which mutations to observe)
          var config = {
            childList: true,
            subtree: true
          };

          // Start observing the target node for configured mutations
          domChangeObserver.observe(document.body, config);
        }
      });
    }
    //Check mobile device

  }, {
    key: "isMobile",
    value: function isMobile() {
      return (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    }
  }]);

  return Josh;
}();