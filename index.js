
var noofdrums = document.querySelectorAll(".drum").length;
for(var i=0; i< noofdrums; i++){
  document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}

function handleclick(){

  var buttonInnerHTML=this.innerHTML;
  makesound(buttonInnerHTML);
  makeanimation(buttonInnerHTML);
}

document.addEventListener("keydown", handletyped);

function handletyped(event){
  makesound(event.key);
  makeanimation(event.key);
}

function makesound(key){

  switch(key){
    case "d":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();

    case "f":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "g":
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "h":
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "k":
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "l":
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    default:
    console.log(buttonInnerHTML);
  }

}

function makeanimation(key){
  var clickedbutton =document.querySelector("."+key);

  clickedbutton.classList.add("pressed");
  setTimeout( function(){
    clickedbutton.classList.remove("pressed");
  }, 150);
}
