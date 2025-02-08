document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("button");
    btn.addEventListener("click", function () {
        welcomeText.classList.add("fadeOut");
        setTimeout(() => {
            window.location.href = "details.html";
        }, 5000);
    });
});