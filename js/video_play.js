// Video Banner Play & Pause
const video = document.getElementById('bgVideo');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    toggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause arxa fon video'; 
  } else {
    video.pause();
    toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i> Play arxa fon video'; 
  }
});
