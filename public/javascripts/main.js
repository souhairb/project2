const ironhackBCN = {
  lat: 41.38623,
  lng: 2.17498
};

const markers = [];

const map = new google.maps.Map(document.getElementById("map"), {
  center: ironhackBCN,
  zoom: 3
});

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
      lat: university.location[0],
      lng: university.location[1]
    };

    console.log("yolo", center);

    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: university.name
    });
    console.log("---->");
    console.log("pipin", pin);
    // markers.push(pin);
  });
}
getUniversities();
