const ironhackBCN = {
  lat: 41.38623,
  lng: 2.17498
};

const markers = [];

<<<<<<< HEAD
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: ironhackBCN
  });
=======
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 13,
  center: ironhackBCN
});
>>>>>>> 1c34025b066fa83921c2fd6b40f55535d97cd6b4

// let center = {
//   lat: undefined,
//   lng: undefined
// };

function getUniversities() {
  axios
    .get("/universities/api")
    .then(response => {
      console.log(response);
      placeUniversities(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function placeUniversities(universities) {
  universities.forEach(function(university) {
    console.log(university);

    const center = {
      lat: university.location.coordinates[1],
      lng: university.location.coordinates[0]
    };

    console.log(center);

    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: university.name
    });
    console.log("---->");
    console.log(pin);
    markers.push(pin);
  });
}
getUniversities();
