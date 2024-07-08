const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let number = 0;
decreaseBtn.onclick = function(){
  number--;
  countLabel.textContent = number;
}
resetBtn.onclick = function(){
  number = 0;
  countLabel.textContent = number;
}
increaseBtn.onclick = function(){
  number++;
  countLabel.textContent = number;
}
