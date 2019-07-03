window.onload = () => {
  const ironhackBCN = {
    lat: 41.38623,
    lng: 2.17498
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: ironhackBCN
  });

  let center = {
    lat: undefined,
    lng: undefined
  };
};

function getUniversities() {
  axios
    .get("/universities/api")
    .then(response => {
      placeUniversities(response.data.universities);
    })
    .catch(error => {
      console.log(error);
    });
}
function placeUniversities(universities) {
  universities.forEach(function(universities) {
    const center = {
      lat: universities.location.coordinates[1],
      lng: universities.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: universities.name
    });
    markers.push(pin);
  });
}
getUniversities();
