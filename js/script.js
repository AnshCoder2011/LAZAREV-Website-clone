// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true,
// });

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelector(".row").addEventListener("mousemove", function (e) {
  const circle = document.querySelector(".circle");
  const container = document.querySelector(".row");
  const containerRect = container.getBoundingClientRect();

  const mouseX = e.clientX - containerRect.left;
  const mouseY = e.clientY - containerRect.top;

  circle.style.left = mouseX + "px";
  circle.style.top = mouseY + "px";
});

