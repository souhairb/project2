// const express = require("express");
// const router = new express.Router();

// const input = document.getElementById("filter_universities");
// const list = document.getElementById("universities");

// const geoAPI = axios.create({
//   baseURL:
//     "https://raw.githubusercontent.com/doselect/data/master/universities.json"
// });

// geoAPI
//   .get()
//   .then(APIres => {
//     const universities = Object.values(APIres.data);
//     // console.log(APIres);
//     // console.log(APIres.data);
//     displayUniversities(universities);
//     input.onkeyup = evt => filterUniversities(evt.target.value, universities);
//   })
//   .catch(APIErr => console.error(APIErr));

// function displayUniversities(universities) {
//   list.innerHTML = "";
//   universities.forEach(
//     university => (list.innerHTML += `<li>${university}</li>`)
//   );
// }

// function createDOMElements(str) {
//   const li = document.getElementById("li");
//   li.className = "item university";
//   li.textContent = str;
//   return li;
// }

// function filterUniversities(needle, universities) {
//   console.log(needle, universities);
//   const findInputMatch = university => {
//     return Boolean(university.toLowerCase().match(needle.toLowerCase()));
//   };
//   displayUniversities(universities.filter(findInputMatch));
// }

// module.exports = router;
