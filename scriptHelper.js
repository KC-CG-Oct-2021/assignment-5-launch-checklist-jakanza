// Write your helper functions here!
require('isomorphic-fetch');

// Updates the missionTarget div - does not need to return anything
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our missionTarget div.
   missiontarget = document.getElementById("missionTarget");
   missiontarget.innerHTML = `
    <h2>MissionDestination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src=${imageUrl}>
   `
}
