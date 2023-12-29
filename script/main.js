const vid = document.getElementById("clip");
let count = 1;
function playPauseVid() {
    if (count%2!=0) {
        vid.play();
        count++
    }
    else{
        vid.pause();
        count++
    }
}