async function getISS() {
    const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const data = await response.json();
    const issName = data.name;

    console.log(data);
    console.log(data.latitude);
    const myDate = new Date((data.timestamp) * 1000);
    document.getElementById("Lat").textContent = data.latitude.toFixed(2);
    document.getElementById("Lon").textContent = data.longitude.toFixed(2);
    document.getElementById("Alt").textContent = data.altitude.toFixed(2);
    document.getElementById("idName").textContent = data.id;
    document.getElementById("sLat").textContent = data.solar_lat.toFixed(2);
    document.getElementById("sLon").textContent = data.solar_lon.toFixed(2);
    document.getElementById("Time").textContent = myDate;
    document.getElementById("Day").textContent = data.daynum.toFixed(2);
    document.getElementById("Vel").textContent = data.velocity.toFixed(2);
    document.getElementById("Vis").textContent = data.visibility;



    marker.setLatLng([data.latitude, data.longitude]);
    path.addLatLng([data.latitude, data.longitude]);



}
const map = L.map("map").setView([0, 0], 2);
const path = L.polyline([], { color: "purple" }).addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"

}).addTo(map);
document.getElementById("resetP").addEventListener("click",function(){
    //code runs when button gets clicked)
    path.setLatLngs([]);
}) 

const marker = L.marker([0, 0]).addTo(map);
getISS();
setInterval(getISS, 3000);

