var numberOfDrumButtons = document.querySelectorAll(".drum").length; // number of buttons in the document.querySelectorAll(".drum")

// ? Detecting Random Beat Button Press //

document.querySelector(".random-beat").addEventListener("click", function () {
    this.classList.add("pressed-beat-generator");
    let numberOfRandomBeat = 30;
    let randomPlayer = setInterval(() => {
      const randomNoteArrayIndex = Math.floor(
        Math.random() * (numberOfDrumButtons + 1)
      );
      const selectedNote = document.querySelectorAll("button")[
        randomNoteArrayIndex
      ];
  
      makeSound(selectedNote.innerHTML);
      buttonAnimation(selectedNote.innerHTML);
  
      numberOfRandomBeat--;
      
      if (numberOfRandomBeat === 0) {
        clearInterval(randomPlayer);
        this.classList.remove("pressed-beat-generator");
      }
    }, 120);
  });

// Detecting Button Press

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonsInnerHTML = this.innerHTML;

        makeSound(buttonsInnerHTML);
        
        buttonAnimation(buttonsInnerHTML);
    });
};

// Detecting Keyboard Press
document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
        break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
        break;
        case "l":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;

        default: console.log(buttonsInnerHTML);

       }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}