document.addEventListener("DOMContentLoaded", function () {
    let welcomeText = document.getElementById("welcome-text");
    let continueBtn = document.getElementById("continue-btn");
    continueBtn.addEventListener("click", function () {
        welcomeText.classList.add("fade-out");
        continueBtn.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "details.html";
        }, 2000); 
    });
});
