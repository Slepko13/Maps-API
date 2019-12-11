let firstLat;
let firstLng;
let secondLat;
let secondLng;
let firstMarker;
let secondMarker;
//console.log(firstLat);

function getNewCoor() {
    firstLat = document.getElementById('firstLat').value;
    firstLng = document.getElementById('firstLng').value;
    secondLat = document.getElementById('secondLat').value;
    secondLng = document.getElementById('secondLng').value;
    console.log(firstLat);
    console.log(firstLng);
    console.log(secondLat);
    console.log(secondLng);
    firstMarker = L.marker([firstLat, firstLng]).addTo(mymap);
    secondMarker = L.marker([secondLat, secondLng]).addTo(mymap);




}

let lat = 48.9228;
let lng = 24.7111;
let zoom = 10;
let mymap = L.map('mapID').setView([lat, lng], zoom);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXlrb2xhMTMiLCJhIjoiY2szdTQxdXduMDY4YTNsazR1ZTgxYWk3dCJ9.lBdOcRcQFNcPM1c-A7zQHg', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibXlrb2xhMTMiLCJhIjoiY2szdTQxdXduMDY4YTNsazR1ZTgxYWk3dCJ9.lBdOcRcQFNcPM1c-A7zQHg'
}).addTo(mymap);
//var map = L.map('mapID');








function goUp() {
    marker.setLatLng([lat += 0.0001, lng]).update();
}

function goDown() {
    marker.setLatLng([lat -= 0.0001, lng]).update();
}

function goLeft() {
    marker.setLatLng([lat, lng -= 0.0001]).update();
}

function goRight() {
    marker.setLatLng([lat, lng += 0.0001]).update();
}
let popup = L.popup();
let count = 1;

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);



}
let point = 1;
mymap.on('click', onMapClick);