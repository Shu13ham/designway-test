document.addEventListener("DOMContentLoaded", function () {
  createFloatingObjects();
  handleFadeOutAnimation();
  addClassToInvestmentPlans();
});

function createFloatingObjects() {
  const numberOfSets = 5;
  const container = document.querySelector(".floating-objects");
  const imageUrls = {
    "lg-hexagon": "./_assets/images/lg-hexagon.png",
    "lg-ball": "./_assets/images/lg-metal-ball.png",
    "sm-hexagon": "./_assets/images/sm-hexagon.png",
    "sm-ball": "./_assets/images/sm-metal-ball.png",
  };

  for (let i = 0; i < numberOfSets; i++) {
    Object.keys(imageUrls).forEach((className) => {
      const imgElement = document.createElement("img");
      imgElement.classList.add(className);
      imgElement.src = imageUrls[className];
      imgElement.alt = "";

      imgElement.style.bottom = `${Math.random() * window.innerHeight}px`;
      imgElement.style.left = `${Math.random() * 75}%`;
      imgElement.style.width = `${Math.random() * 50 + 30}px`;

      const animationDuration = Math.random() * 10 + 4;
      const animationDelay = Math.random() * 5;

      imgElement.style.animation = `floating ${animationDuration}s linear ${animationDelay}s infinite`;

      container.appendChild(imgElement);
    });
  }
}
function handleFadeOutAnimation() {
  const fadeOutElement = document.querySelector(".fade-out");
  const halfViewportHeight = window.innerHeight / 2;
  window.addEventListener(
    "scroll",
    function () {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      console.log(currentScroll, halfViewportHeight, window.innerHeight);
      if (currentScroll > halfViewportHeight) {
        fadeOutElement.classList.add("fade-up-animation");
      } else if (currentScroll > window.innerHeight) {
        fadeOutElement.classList.remove("fade-up-animation");
      } else {
        fadeOutElement.classList.remove("fade-up-animation");
      }
    },
    false
  );
}
function isTablet() {
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints;
  const isTabletSize = window.matchMedia(
    "(min-width: 768px) and (orientation: landscape)"
  ).matches;
  const isHighPixelRatio = window.devicePixelRatio > 1.5;

  return isTouch && (isTabletSize || isHighPixelRatio);
}
function addClassToInvestmentPlans() {
  const investmentPlans = document.querySelectorAll(".investment-plans");

  if (isTablet()) {
    investmentPlans.forEach((plan) => {
      plan.classList.add("is-tab");
    });
  }
}
