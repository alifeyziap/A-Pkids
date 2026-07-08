const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.style.transform = "scale(0.96)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});
