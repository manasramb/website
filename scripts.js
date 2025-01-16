// Auto-switching feature cards
const featureCards = document.querySelectorAll('.feature-card');
let currentFeature = 0;

function showNextFeature() {
    featureCards[currentFeature].classList.remove('active');
    currentFeature = (currentFeature + 1) % featureCards.length;
    featureCards[currentFeature].classList.add('active');
}

// Initialize first feature
featureCards[currentFeature].classList.add('active');
setInterval(showNextFeature, 5000);

// Progress Bar Animation
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

let progress = 0;

function updateProgress() {
    // Increment progress
    progress += 10;

    // Update the width of the progress bar
    progressBar.style.width = progress + '%';

    // Update the text
    progressText.textContent = `Loading... ${progress}%`;

    // Reset progress if it reaches 100%
    if (progress >= 30) {
        setTimeout(() => {
            progress = 0;
            progressBar.style.width = '0%';
            progressText.textContent = 'Loading... 0%';
        }, 1000); // Wait 1 second before resetting
    }
}

// Run the updateProgress function every 1 second
setInterval(updateProgress, 1000);


