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
    vinylCard.classList = "card"
    vinylCard.id = vinyl.id
    vinylCard.innerHTML = `
        <img src =${vinyl.cover} />
    `
    container.appendChild(vinylCard)
}