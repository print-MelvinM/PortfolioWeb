document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        let welcomeText = document.getElementById("welcome-text");
        welcomeText.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "front.html";
        }, 2000); 
    }, 5000);
});
