// This function triggers the transition from the intro to the main page
function startTransition() {
    const introPage = document.getElementById('intro');
    const mainPage = document.getElementById('main');

    // Fade out the intro page
    introPage.classList.add('hidden');

    // Wait for the intro page to fade out, then show the main page
    setTimeout(() => {
        introPage.style.display = 'none'; // Hide intro completely
        mainPage.classList.remove('hidden'); // Show main
        mainPage.classList.add('visible'); // Apply visible class to fade in
    }, 1000); // Delay to match the transition time
}

// This function triggers the celebration screen
function triggerCelebration() {
    // Hide the main Valentine page and show the celebration screen
    document.getElementById('main').style.display = 'none'; // Hide main
    const celebrationScreen = document.getElementById('celebration-screen');
    celebrationScreen.style.display = 'block'; // Show celebration

    // Trigger confetti
    triggerConfetti();
}

// This function triggers confetti effect
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block'; // Show confetti container

    // Number of confetti pieces
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');

        // Randomize position and animation for each piece
        confettiPiece.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 2}s`; // Random fall speed
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Random delay

        // Add confetti to container
        confettiContainer.appendChild(confettiPiece);

        // Remove confetti piece after animation ends
        setTimeout(() => {
            confettiPiece.remove();
        }, (Math.random() * 2 + 2) * 1000); // Matches the fall duration
    }
}

// Function to handle the "Yes 💖" button click
function sayYes() {
    triggerCelebration(); // Call the function to trigger celebration screen and confetti
    document.getElementById('response').textContent = 'Yay! You said Yes! 💖'; // Show response text
    document.getElementById('yay-text').classList.add('visible'); // Show "YAYAYAYAY" text
}
