var audio;

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var button = this.innerHTML;
        sound(button);
        keyAnimation(button);

    });
}

document.addEventListener("keypress", function(event) {

    sound(event.key);
    keyAnimation(event.key);

});

function sound(key) {
    // body...
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(button);
    }
 }

 function keyAnimation(currentKey) {
 	// body...
 	var activeKey = document.querySelector("."+currentKey);
 	activeKey.classList.add("pressed");

 	setTimeout(function() {
 		activeKey.classList.remove("pressed");
 	}, 100)
 }