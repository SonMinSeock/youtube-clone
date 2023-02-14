const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlayClick = (event) => {
  // 만약에 비디오 플레이중이면 멈추고 아니면 비디오를 실행하게 하자.
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const handlePause = () => (playBtn.innerText = "Play");

const handlePlay = () => (playBtn.innerText = "Pause");

const handleMute = () => {};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
