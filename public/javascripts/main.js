const ironhackBCN = {
  lat: 41.38623,
  lng: 2.17498
};

let markers = [];

const map = new google.maps.Map(document.getElementById("map"), {
  center: ironhackBCN,
  zoom: 3
});
function getUniversities() {
  axios
    .get("/universities/api")
    .then(response => {
      placeUniversities(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function placeUniversities(universities) {
  universities.forEach(function(university) {
    const center = {
      lat: university.location[0],
      lng: university.location[1]
    };

    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: university.name
    });
    markers.push(pin);
  });
}
getUniversities();

const input = document.getElementById("universityname");
console.log(input);
input.oninput = function(evt) {
  filterUniversities(evt.target.value);
};

function filterUniversities(needle) {
  const findInputMatch = university => {
    return Boolean(university.name.toLowerCase().match(needle.toLowerCase()));
  };
  console.log(markers);
  markers.forEach(m => m.setMap(null));

  axios
    .get("/universities/api")
    .then(res => {
      const universities = res.data;
      const filteredUnis = universities.filter(findInputMatch);
      console.log(filteredUnis);
      placeUniversities(filteredUnis);
    })
    .catch(error => {
      console.log(error);
    });
}
