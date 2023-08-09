// let mysong = document.getElementById("my Songs");
// let icon = document.getElementById("icon")

// icon.onclick = function(){
//       if(mysong.paused){
//             mysong.play();
//             icon.scr = "dist/accets/accect/pause-removebg-preview.png"
//       }else{
//             mysong.pause();
//             icon.src = "dist/accets/accect/play-removebg-preview.png"
//       }
// }


const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = 'Pause';
  } else {
    audio.pause();
    playPauseButton.innerHTML = 'Play';
  }
}