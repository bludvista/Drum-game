
var carBa=document.getElementById("btnc")
carBa=addEventListener("keydown", function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch(key){
        case "a":
            var clap = new Audio("clap.wav");
            clap.play();
            break;
        case "s":
            var hihat = new Audio("hihat.wav");
            hihat.play();
            break;
        case "d":
            var kick = new Audio("kick.wav");
            kick.play();
            break;
        case "f":
            var openhat = new Audio("openhat.wav");
            openhat.play();
            break;
        case "g":
            var boom = new Audio("boom-bap-hip-hop-kick-a-key-601-rMa.wav");            
            boom.play();
            break;
        case "h":
            var ride = new Audio("ride.wav");
            ride.play();
            break;
        case "j":
            var snare = new Audio("snare.wav");
            snare.play();
            break;
        case "k":
            var tom = new Audio("tom.wav");
            tom.play();
            break;
        case "l":
            var tink = new Audio("tink.wav");
            tink.play();
            break;
        default:
            console.log(key);
    }
}


