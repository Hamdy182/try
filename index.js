let arrow = document.querySelectorAll(".arrow")
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle("show")
    })
}
let body = document.querySelector("body"),
    sdiebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener('click', () => {
        sdiebar.classList.toggle("close")
    })

    modeSwitch.addEventListener('click', () => {
        body.classList.toggle("dark")
    })

    // Select Landing Page Elelment
    let LandingPage = document.querySelector(".landing-page");

    // get array of imags
    let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

    setInterval(() => {
         // get random number 
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

         // Change background images url
    LandingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")'

    }, 5000)