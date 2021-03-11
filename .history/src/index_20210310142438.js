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

function createVinyl(vinylObj){
    fetch ("http://localhost:3000/vinyl", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vinylObj)
    })
    .then(response => response.json())
    .then(vinyl => makeVinyl(vinyl))
    .catch(error => console.log(error))
}

function deleteVinyl(id) {
    fetch (`http://localhost:3000/vinyl/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById(id).remove()
    })
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
    }, {once:true})
    
    vinylCard.appendChild(vinylCover)
    container.appendChild(vinylCard)
}

//Events
document.querySelector("#vinyl-form").addEventListener("submit", handleSubmit)


//Handlers

function handleSubmit(e){
    e.preventDefault()
    let vinylObj = {
        "album name":e.target.album_name.value,
        cover: e.target.image_url.value,
        artist: e.target.artist.value,
        "vinyl color": e.target.vinyl_color.value,
        format: e.target.format.value
    }
    createVinyl(vinylObj)
}

function showVinylInfo(vinyl) {
    let vinylCard = document.getElementById(vinyl.id)
    
    let title = document.createElement("h2")
    let artist = document.createElement("h3")
    let vinylColor = document.createElement("h4")
    let format = document.createElement("p")
    let btn = document.createElement("button")
    let deletebtn = document.createElement("button")

    title.textContent = vinyl["album name"]
    artist.textContent = vinyl.artist
    vinylColor.textContent = "Vinyl Color: " + vinyl["vinyl color"]
    format.textContent = vinyl.format
    btn.textContent = "Hide Info"
    btn.id = "hide"
    btn.classList ="buttons"
    deletebtn.id = "deleteB"
    deletebtn.textContent = "Delete Album"
    deletebtn.classList = "buttons"
    vinylCard.classList = "card"
    vinylCard.id = vinyl.id

    btn.addEventListener("click", () => {
        vinylCard.innerHTML = ""
        let vinylCover = document.createElement("img")
        vinylCover.classList = "album-cover"
        vinylCover.src = vinyl.cover
        vinylCover.addEventListener('click', () => {
            showVinylInfo(vinyl)
        }, {once:true})
        vinylCard.appendChild(vinylCover)
    })
    
    deletebtn.addEventListener("click",() => {
        if (confirm("Are you sure you want to delete this vinyl?")) {
        deleteVinyl(vinyl.id)}
    })


    vinylCard.append(title, artist, vinylColor, format, btn, deletebtn)
}