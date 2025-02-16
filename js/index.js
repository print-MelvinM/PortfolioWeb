document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        let welcomeText = document.getElementById("welcome-text");
        welcomeText.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "details.html";
        }, 2000); 
    }, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcome-text');

    // Trigger fadeOut after fadeIn
    setTimeout(function() {
        welcomeText.classList.add('fade-out');
    }, 3000); // Adjust the timeout as needed

    welcomeText.addEventListener('animationend', function(event) {
        if (event.animationName === 'fadeOut') {
            document.body.classList.add('black-background');
        }
    });
});