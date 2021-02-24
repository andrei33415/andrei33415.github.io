function check() {
    // luam paragraful cu id ul redplanet intr-o variabila!!!
    var planet = document.getElementById("redplanet")

    planet.innerText = "Aliens landed on Mars"
    planet.classList.add("alert", "alert-danger")
}


var button = document.querySelector("input[type='button']")
button.addEventListener("click", check)