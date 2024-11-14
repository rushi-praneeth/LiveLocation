// MAP
let map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

let marker = L.marker([0, 0]).addTo(map);

function updateLocation(position) {
  const { latitude, longitude } = position.coords;
  console.log("Latitude:", latitude, "Longitude:", longitude); // Log coordinates
  map.setView([latitude, longitude], 15);  
  marker.setLatLng([latitude, longitude]); 
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(updateLocation, (error) => {
    console.error("Error getting location:", error);
    alert("Error: " + error.message); 
  });
} else {
  alert("Geolocation is not supported by this browser.");
}
// TOGGLE MENU
function toggleMenu() {
  const menuItems = document.getElementById('dropdownmenu');
  const currentDisplay = window.getComputedStyle(menuItems).display;

  if (currentDisplay === 'none') {
      menuItems.style.display = 'block';  // Show the menu
      menuItems.style.display = 'block';
  } else {
      menuItems.style.display = 'none';   // Hide the menu
  }
}
// LOADING SCREEN
setTimeout(function() {
  document.querySelector('.loading-screen').style.opacity = '0'; 
  setTimeout(() => {
      document.querySelector('.loading-screen').style.display = 'none'; 
      document.querySelector('.container').style.display = 'block'; 
  }, 1000); 
}, 3000); 
