var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function(event) {
    console.log(event);
    var buttonInnerHTML = event.target.innerHTML;
    makeSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
    // this.innerHTML = keyPressed. Remember (yahan pe this variable has the value of html element whose been clicked)
    // so.. var buttonInnerHTML = this.innerHTML; will also work. Event use krne ki zaroorat nahi hai
      setTimeout(function(){event.target.classList.remove("pressed");},100); // time out of 1 mili-second
  });

}

document.addEventListener("keydown", function(event){  //document me kahi b key daba do
  makeSound(event.key);
  animateButton(event.key);
});


document.addEventListener("keyup", function(event){  //document me kahi b key daba do
  document.querySelector("." + event.key).classList.remove("pressed");
});


function makeSound(key) {
  switch (key) {
    case "w":
      var myAudio = new Audio("sounds/tom-1.mp3");
      myAudio.play();
      break;
    case "a":
      var myAudio = new Audio("sounds/tom-2.mp3");
      myAudio.play();
      break;
    case "s":
      var myAudio = new Audio("sounds/tom-3.mp3");
      myAudio.play();
      break;
    case "d":
      var myAudio = new Audio("sounds/tom-4.mp3");
      myAudio.play();
      break;
    case "j":
      var myAudio = new Audio("sounds/snare.mp3");
      myAudio.play();
      break;
    case "k":
      var myAudio = new Audio("sounds/crash.mp3");
      myAudio.play();
      break;
    case "l":
      var myAudio = new Audio("sounds/kick-bass.mp3");
      myAudio.play();
      break;

    default:
      console.log("Kuch to gadbad hai daya....");

  }
}

function animateButton(currentKey)
{
    var myButton = document.querySelector("." + currentKey);
    myButton.classList.add("pressed");
}
