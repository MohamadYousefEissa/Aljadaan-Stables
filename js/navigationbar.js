const desktopNav = document.querySelector("nav");
const mobileNavCont = document.querySelector(".mobile-nav-cont");
const title = document.querySelector("title2").innerText;
desktopNav.innerHTML = `
<div class="container nav-back">
        <div class="nav-cont-left">
          <div class="nav-div">
            <span class="nav-span"><a href="./index.html">Home</a></span>
          </div>
          <div class="nav-div">
            <span class="nav-span"><a href="./syria.html">Syria</a></span>
          </div>
          <div class="nav-div">
            <span class="nav-span"
              ><a href="./contactus.html">Contact us</a></span
            >
          </div>
          <div class="nav-div">
            <span class="nav-span"
              ><a href="./aboutus.html" class="anchor gold"
                >About us</a
              ></span
            >
          </div>
        </div>
        <a href="./index.html">
        <div class="nav-img">
          <img src="./images/nav logo.svg" alt="aljadaan logo"/>
        </div>
        </a>
        <div class="nav-cont-right">
          <div class="nav-div">
            <span class="nav-span"
              ><a href="./stallions.html">Stallions</a></span
            >
          </div>
          <div class="nav-div">
            <span class="nav-span"><a href="./mares.html">Mares</a></span>
          </div>
          <div class="nav-div">
            <span class="nav-span"
              ><a href="./offsprings.html">Offsprings</a></span
            >
          </div>
          <div class="nav-div">
            <span class="nav-span"
              ><a href="./partnership.html">Partnership</a></span
            >
          </div>
        </div>
      </div>
`;
mobileNavCont.innerHTML = `
<div class="mobile-nav">
  <a href="./index.html"><img class="mobile-nav-logo" src="./images/nav logo.svg" alt="logo" /></a>
  <label class="burger" for="burger">
    <input type="checkbox" id="burger" class="hide" />
    <span></span>
    <span></span>
    <span></span>
  </label>
  <div class="nav-link-mobile-div">
    <div>
      <a href="./index.html" class="nav-link-mobile">Home</a>
    </div>
    <div>
      <a href="./syria.html" class="nav-link-mobile">Syria</a>
    </div>
    <div>
      <a href="./contactus.html" class="nav-link-mobile">Contact us</a>
    </div>
    <div>
      <a href="./aboutus.html" class="nav-link-mobile">About us</a>
    </div>
    <div>
      <a href="./stallions.html" class="nav-link-mobile">Stallions</a>
    </div>
    <div>
      <a href="./mares.html" class="nav-link-mobile">Mares</a>
    </div>
    <div>
      <a href="./offsprings.html" class="nav-link-mobile">Offsprings</a>
    </div>
    <div>
      <a href="./partnership.html" class="nav-link-mobile">Partnership</a>
    </div>
  </div>
</div>

`;

const container = document.querySelector(".container");

if (title === "home") {
  container.classList.remove("nav-back");
} else if (title === "contactus") {
  container.classList.remove("nav-back");
  container.classList.add("nav-back-contacts");
}
const ncl = document.querySelector(".nav-cont-left").childElementCount;
const ncr = document.querySelector(".nav-cont-right").childElementCount;
const navLinkNum = ncl + ncr;
for (let x = 0; x < navLinkNum; x++) {
  const navLink = document.querySelectorAll(".nav-span a")[x];
  if (title === navLink.innerText.replace(" ", "").toLowerCase()) {
    navLink.style.color = "#bb8b5e";
    navLink.style.fontWeight = "600";
  }
}

//for mobile
const mobileNav = document.querySelector(".mobile-nav");
const navCont = document.querySelector(".nav-link-mobile-div");
const slideBtn = document.querySelector("#burger");
slideBtn.addEventListener("click", () => {
  navCont.classList.toggle("show");
  document.body.classList.toggle("dark-after");
});
document.body.addEventListener("click", (event) => {
  if (slideBtn.checked) {
    if (!mobileNav.contains(event.target)) {
      hideNav();
    }
  }
});

//swipe
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
document.body.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
});
document.body.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;
  touchEndY = event.changedTouches[0].screenY;
  if (window.innerWidth > 480) {
    if (touchEndX < touchStartX) hideNav();
  }
  if (touchEndY > touchStartY) hideNav();
});
function hideNav() {
  navCont.classList.remove("show");
  document.body.classList.remove("dark-after");
  slideBtn.checked = false;
}
