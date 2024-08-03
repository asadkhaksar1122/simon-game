let level = 0;
let gameseq = [];
let userseq = [];
let levelp = document.getElementsByClassName("level")[0];
let btn = document.getElementsByClassName("btn");
function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((value, index) => value == arr2[index]);    
}
function levelupdate() {
  level++;
  userseq = [];
  levelp.innerHTML = `level ${level}`
}
function blur() {
  let random = Math.floor(Math.random() * 3);
  console.log(random)
  btn[random].style.backgroundColor = "white";
  let btncolor = btn[random].id;
  gameseq.push(btncolor);
  setTimeout(function() {
    btn[random].style.backgroundColor = btncolor;
  }, 1000)

}
document.addEventListener("keypress", function() {

  if (level == 0) {
    levelupdate()
    blur();

  }
})
for (const button of btn) {
  button.addEventListener("click", () => {
    userseq.push(button.id);
    console.log(userseq);
    console.log(gameseq);
   
    if (userseq.length == gameseq.length) {
      
      if (compareArrays(gameseq, userseq)) {
         blur();
        levelupdate();
      } else {
         levelp.innerHTML = `Wrong input you have lost the game press any key to continue <br> your score <strong>${level}</strong>`;
        userseq = [];
        gameseq = [];
        level = 0;
       ;
      }
    }
  });
}
