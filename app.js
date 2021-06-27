const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const coloresus = ['yellow','greem'];

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
const modal = document.querySelector('one');
const modalBtn = document.querySelector('modal-btn');
console.log('this');
const color = ['green'];
const go = 'game of tag';
function multiplyNumber(num1, num2) {
  var answer = num1 * num 2;
  return "This is the answer " + answer;
}
