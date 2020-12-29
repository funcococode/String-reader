const msgBox = document.querySelector('#msg');
const msg = "The quick brown fox jumps over the lazy dog! Funny huh.";
const speed = 90
let index = 0;

let readString = function(){
    msgBox.append(msg[index]);
    index++;

    if(index > msg.length){
        msgBox.innerHTML = ""
        index = 0;
    }
}

setInterval(readString,speed);