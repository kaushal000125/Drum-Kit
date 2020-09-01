alert("hello");
// document.querySelector("button").addEventListener("click", handleclick);
//fuction handleclick()
//{
//  alert("I got clicked!");
//}
var n = document.querySelectorAll(".drum").length;
//var m= Math.floor(Math.random()*4)+1;
              // for pressing button
for(var i=0;i<n;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function (){

//var buttonInnerHTML = this.innerHTML;
  addSound(this.innerHTML);
 buttonAnimation(this.innerHTML);

});
}
             // for pressing selected keys
document.addEventListener("keypress",function(event){
//  var key = event.press;
addSound(event.key);
 buttonAnimation(event.key);
});

function addSound(key){
  switch(key)
  {

    case "w":
    var ton1 = new Audio("crash.mp3");
    ton1.play();
    break;

    case "a":
    var ton2 = new Audio("kick-bass.mp3");
    ton2.play();
    break;

    case "s":
    var ton3 = new Audio("snare.mp3");
    ton3.play();
    break;

    case "d":
    var ton4 = new Audio("tom-1.mp3");
    ton4.play();
    break;

    case "j":
    var ton5 = new Audio("tom-2.mp3");
    ton5.play();
    break;
    case "k":
    var ton7 = new Audio("tom-3.mp3");
    ton7.play();
    break;
    case "l":
    var ton6 = new Audio("tom-4.mp3");
    ton6.play();
    break;
    default: console.log(key);

  }

}
function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+ currentKey);
  activeButtton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")},100);
}
