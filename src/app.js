import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import theDogImg from "./images/the dog.png";
import grannyImg from "./images/granny.png";
import mailmanImg from "./images/Mailman.png";
import piolinImg from "./images/piolin.png";

const whoImages = {
  "The dog": theDogImg,
  "My grandma": grannyImg,
  "The mailman": mailmanImg,
  "My bird": piolinImg
};

window.onload = function() {
  function randomexcuse() {
    const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    const action = ['ate', 'peed', 'crushed', 'broke'];
    const what = ['my homework', 'my phone', 'the car'];
    const when = [
      'before the class',
      'when I was sleeping',
      'while I was exercising',
      'during my lunch',
      'while I was praying'
    ];

    const whorandom = who[Math.floor(Math.random() * who.length)];
    const actionrandom = action[Math.floor(Math.random() * action.length)];
    const whatrandom = what[Math.floor(Math.random() * what.length)];
    const whenrandom = when[Math.floor(Math.random() * when.length)];

    document.getElementById("excuse-img").src = whoImages[whorandom];

    return `${whorandom} ${actionrandom} ${whatrandom} ${whenrandom}`;
  }

  document.getElementById("excuse").innerText = randomexcuse();

  const btn = document.getElementById("new-excuse-btn");
  if (btn) {
    btn.onclick = function() {
      document.getElementById("excuse").innerText = randomexcuse();
    };
  }
};
