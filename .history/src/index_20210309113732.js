document.addEventListener("DOMContentLoaded", () => {
    getVinyl()
})

// Fetch data
function getVinyl () {
    fetch ("http://localhost:3000/vinyl")
    .then (response => response.json())
    .then (data => data.forEach(vinyl => makeVinyl(vinyl)))
    .catch (error => console.log(error))
}

//Dom manipulation

function makeVinyl(vinyl){
    let container = document.querySelector("#vinyl-collection")
    let vinylCard = document.createElement("div")
    let vinylCover = document.createElement("img")
    vinylCard.classList = "card"
    vinylCard.id = vinyl.id
    vinylCover.classList = "album-cover"
    vinylCover.src = vinyl.cover
    vinylCover.addEventListener('click', () => {
        console.log("Hello")
    })
    
    vinylCard.appendChild(vinylCover)
    container.appendChild(vinylCard)
}

//Event handlers

function showVinylInfo(vinyl) {
    let vinylCard
}