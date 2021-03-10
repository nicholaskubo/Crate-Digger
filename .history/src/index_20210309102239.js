document.addEventListener("DOMContentLoaded", () => {
    getVinyl()
})

// Fetch data
function getVinyl () {
    fetch ("http://localhost:3000/vinyl")
    .then (response => response.json())
    .then (vinyl => console.log(vinyl))
    .catch (error => console.log(error))
}

//Dom manipulation

function makeVinyl(vinyl){
    let container = document.querySelector("#vinyl-collection")
}