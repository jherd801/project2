function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");
  const googleLink = document.querySelector("#google-link");

  mapLink.href = "";
  mapLink.textContent = "";
  googleLink.textContent = "";
  googleLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = "Latitude: ${latitude} °, Longitude: ${longitude} °";
    googleLink.href =
      "https://www.google.com/maps/place/?api=1&query=40.7175168,-111.8208";
    googleLink.textContent =
      "Latitude: ${latitude} °, Longitude: ${longitude} °";
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
