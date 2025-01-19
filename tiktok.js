// Get all video elements
const videos = document.querySelectorAll('video');
let currentVideoIndex = 0;

// Function to go to the next video
function goToNextVideo() {
  // Pause current video
  videos[currentVideoIndex].pause();

  // Move to the next video (loop back to the first one if at the end)
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;

  // Play the next video
  videos[currentVideoIndex].play();
}

// Listen for the right arrow key press (keydown event)
window.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    // If a video is in fullscreen, move to the next video
    if (document.fullscreenElement) {
      goToNextVideo();
    }
  }
});

// Listen for the 'fullscreenchange' event to handle fullscreen toggles
document.addEventListener('fullscreenchange', function() {
  if (!document.fullscreenElement) {
    // If exiting fullscreen, pause the current video
    videos[currentVideoIndex].pause();
  }
});
