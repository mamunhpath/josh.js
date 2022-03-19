// Importing animate.css
import "animate.css";

// Importing joshjs
import Josh from "joshjs";

document.addEventListener("DOMContentLoaded", () => {
  const josh = new Josh({
    initClass: "josh-js",
    animateInMobile: true,
    offset: 0.3,
    onDOMChange: true,
  });
  document.getElementById("load-more").addEventListener("click", function () {
    var div = document.createElement("div");
    div.className = "element josh-js";
    div.textContent = "I am newly created DOM!";
    div.style =
      "background: #ffe9c5; color: #000; border-bottom: 3px solid #fff;";
    div.setAttribute("data-josh-anim-name", "fadeInDown");
    this.insertAdjacentElement("beforebegin", div);
  });
});
