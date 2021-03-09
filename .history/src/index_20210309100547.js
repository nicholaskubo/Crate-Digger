document.addEventListener("DOMContentLoaded", () => {
    getVinyl()
})

function getVinyl () {
    fetch ("http://localhost:3000/vinyl")
    .then (response => response.json())
    .then (vinyl => console.log(vinyl))
    .catch (error => console.log(error))
}
