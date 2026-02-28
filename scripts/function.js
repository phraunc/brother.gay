let originalImage = ""; // store original image path

function showPicture(imagePath) {
    const main = document.getElementById("mainImage");

    // Save original image the first time
    if (!originalImage) {
        originalImage = main.src;
    }

    // Replace the main image
    main.src = imagePath;

    // Hide buttons
    document.getElementById("options").style.display = "none";
    document.getElementById("menuBtn").style.display = "none";

    // Show return button
    document.getElementById("returnBtn").style.display = "block";
}

function resetQuestion() {
    const main = document.getElementById("mainImage");

    // Restore original image
    main.src = originalImage;

    // Show buttons again
    document.getElementById("options").style.display = "block";
    document.getElementById("menuBtn").style.display = "block";

    // Hide return button
    document.getElementById("returnBtn").style.display = "none";
}

function playSound(id) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
}

function returnToMenu() {
    window.location.href = "welcome.html";
}