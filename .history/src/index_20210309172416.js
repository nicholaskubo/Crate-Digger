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
        showVinylInfo(vinyl)
    })
    
    vinylCard.appendChild(vinylCover)
    container.appendChild(vinylCard)
}

//Event handlers

function showVinylInfo(vinyl) {
    let vinylCard = document.getElementById(vinyl.id)
    let title = document.createElement("h2")
    let artist = document.createElement("h3")
    let vinylColor = document.createElement("h4")
    let format = document.createElement("p")
    let btn = document.createElement("button")

    title.textContent = vinyl["album name"]
    artist.textContent = vinyl.artist
    vinylColor.textContent = "Vinyl Color: " + vinyl["vinyl color"]
    format.textContent = vinyl.format
    btn.textContent = "Hide Info"
    vinylCard.classList = "card"
    vinylCard.id = vinyl.id

    vinylCard.addEventListener("click", () => {
        vinylCard.innerHTML = ""
        let vinylCover = document.createElement("img")
        vinylCover.classList = "album-cover"
        vinylCover.src = vinyl.cover
        vinylCover.addEventListener('click', () => {
            showVinylInfo(vinyl)
        })
        vinylCard.appendChild(vinylCover)
    })

    vinylCard.append(title, artist, vinylColor, format, btn)
}