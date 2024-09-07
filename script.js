let level = 0;
let gameseq = [];
let userseq = [];
let levelp = document.getElementsByClassName("level")[0];
let btn = document.getElementsByClassName("btn");
let startbtn = document.getElementById("start");
let countp = document.querySelector(".count");
let countdown = 10;
let countinterval;

function compareArrays(arr1, arr2) {
  return (
    arr1.length == arr2.length &&
    arr1.every((value, index) => value == arr2[index])
  );
}

function levelupdate() {
  level++;
  userseq = [];
  levelp.innerHTML = `level ${level}`;
  resetCountdown();
}

function blur() {
  let random = Math.floor(Math.random() * 3);
  console.log(random);
  btn[random].style.backgroundColor = "white";
  let btncolor = btn[random].id;
  gameseq.push(btncolor);
  setTimeout(function () {
    btn[random].style.backgroundColor = btncolor;
  }, 1000);
}

function gameover() {
  levelp.innerHTML = `Wrong input you have lost the game press any key to continue <br> your score <strong>${level}</strong>`;
  userseq = [];
  gameseq = [];
  
  startbtn.style.display = "block";
  if (countdown==0) {
      levelp.innerHTML = `the time is up you have lost the game your score is ${level}`;
  }
  level = 0;
  countdown = 10;
  countp.style.display = "none";
  clearInterval(countinterval);
}

function resetCountdown() {
  clearInterval(countinterval);
  countdown = 10;
  countp.innerHTML = `the remaining time is ${countdown}`;
  countinterval = setInterval(() => {
    if (countdown == 0) {
      gameover();
    
    } else {
      countdown--;
      countp.innerHTML = `the remaining time is ${countdown}`;
    }
  }, 1000);
}

startbtn.addEventListener("click", function () {
  if (level == 0) {
    levelupdate();
    blur();
    startbtn.style.display = "none";
    countp.style.display = "block";
  }
});

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
        gameover();
      }
    }
  });
}