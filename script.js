const animationContainer = document.getElementById('my-animation-container');
const btn = document.getElementById('btn');
const toggle1 = document.getElementById('toggle-btn1');
const toggle2 = document.getElementById('toggle-btn2');

const animation = lottie.loadAnimation({
  container: animationContainer,
  // path to your Lottie animation JSON file
  path: 'https://lottie.host/bf54d3ad-da5f-4a6c-81bc-b8af9844f2df/W9vV2azxIu.json',
  loop: true, // set to false to play only once
  autoplay: true, // set to false to disable autoplay
});



function rightClick() {
  btn.style.left = 'calc(132px - 2%)';
  toggle2.style.color = '#fff';
  toggle1.style.color = 'var(--para-color)';
}

function leftClick() {
  btn.style.left = '2%';
  toggle1.style.color = '#fff';
  toggle2.style.color = 'var(--para-color)';
}