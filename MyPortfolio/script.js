const words = ["Web Developer", "UI/UX Designer","Game Developer"];
let i = 0; // word index
let j = 0; // letter index
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];
  
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("introtext").innerText = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000); // wait before deleting
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

