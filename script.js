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



window.addEventListener('resize', ()=> {
  const image1 = document.getElementById('frame439');
  const image2 = document.getElementById('frame-440');
  if (window.matchMedia("(max-width: 768px)").matches) {
    image1.src = "./img/Group.svg";
    image2.src = "./img/Group (1).svg";
  } else {
    image1.src = "./img/Frame 439.svg";
    image2.src = "./img/Frame 440.svg"
  }
});

function rightClick() {
  btn.style.left = 'calc(132px - 2%)';
  toggle2.style.color = '#fff';
  setTimeout(toggle1.style.color = 'var(--para-color)', 500)
}

function leftClick() {
  btn.style.left = '2%';
  toggle1.style.color = '#fff';
  setTimeout(toggle2.style.color = 'var(--para-color)', 500)
}

let activeIndex = 0;

function toggleTestimony(index) {
  activeIndex = index;
}

const radioButtons = document.querySelectorAll('input[name="testimony-toggle"]');

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener('change', () => {
    if (radioButton.checked) {
      toggleTestimony(index);
    }
  });
});





// scroller anim

let scrollDirection;
 

function addRevealEffect(elements) {
  const observer = new IntersectionObserver(
    (entries) => {
      let revealClass;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealClass = scrollDirection === 'up' ? 'reveal-up' : 'reveal-down';

          entry.target.classList.add(revealClass);
        } else {
          entry.target.className = 'subject';
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

const elementsToReveal = document.querySelectorAll('.subject');
addRevealEffect(elementsToReveal);
 


 // JavaScript to handle scrolling
 const intro1 = document.getElementById('intro-1');
 const intro2 = document.getElementById('intro-2');
 const otherSection = document.getElementById('other-section');

 intro1.addEventListener('click', () => {
   intro2.scrollIntoView({ behavior: 'smooth' });
 });

 intro2.addEventListener('click', () => {
   otherSection.scrollIntoView({ behavior: 'smooth' });
 });
// JavaScript code
// document.addEventListener('DOMContentLoaded', function() {
//   var sections = document.querySelectorAll('.section');
//   var body = document.body;
//   var currentSectionIndex = 0;
//   var ticking = false;
  
//   function scrollToNextSection() {
//     body.classList.add('scroll-disabled');
//     if (currentSectionIndex < sections.length - 1) {
//       currentSectionIndex++;
//       window.scrollTo({
//         top: sections[currentSectionIndex].offsetTop,
//         behavior: 'smooth'
//       });
//     }
//     setTimeout(function() {
//       body.classList.remove('scroll-disabled');
//     }, 1000); // Adjust the delay as needed to match the scroll duration
//   }
  
//   document.addEventListener('click', function() {
//     scrollToNextSection();
//   });
// });