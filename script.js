// const counters = document.querySelectorAll('.counter');
// const container = document.querySelector('.feature-box__icon');
// const speed = 200;

// function isAnyPartOfElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   const windowHeight =
//     window.innerHeight || document.documentElement.clientHeight;
//   const windowWidth = window.innerWidth || document.documentElement.clientWidth;
//   const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
//   const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

//   return vertInView && horInView;
// }

// counters.forEach((counter) => {
//   counter.innerText = '0';
//   let lastKnownScrollPosition = 0;
//   let ticking = false;

//   const updateCount = () => {
//     const target = +counter.getAttribute('data-target');
//     const count = +counter.innerText;

//     const inc = target / speed;

//     if (count < target) {
//       counter.innerText = (count + inc).toFixed(1);
//       setTimeout(updateCount, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   if (isAnyPartOfElementInViewport(container)) {
//     updateCount();
//   }
// });

// window.onscroll = () => {
//   isAnyPartOfElementInViewport(container);
// };
