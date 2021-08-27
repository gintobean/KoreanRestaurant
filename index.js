gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from(".title-description", {
  y:-50,
  duration: 1,
  opacity: 0
})
.from(".cta", {
  opacity: 0,
  duration: 1
},"-=0.5");

var animation = gsap.to(".activated", {
  ease: "power1.out",
  x: -100,
  duration: 1,
  paused: true
});

$(".row").hover(function() {
  console.log("in");
  gsap.set(this, {className: "row activated"});
  animation.play();
}, function() {
  animation.reverse();
  gsap.set(this, {className: "row"});
});

var position = 10000;
var navHeight = -1 * parseInt($(".navbar").css("height")) - 20;

// $(window).on("scroll", function() {
//   var curPosition = $(window).scrollTop();
//   // if (curPosition >  parseInt($(window).height())) {
//     if (position < curPosition && curPosition > 0) {
//       gsap.to(".navbar", {
//         y: navHeight,
//         duration: 1.3
//       });
//     } else {
//       gsap.to(".navbar", {
//         y: 0,
//         duration: 1
//       });
//     }
//     position = curPosition;
//   //}
// });
