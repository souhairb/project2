var count;
const input = document.getElementById("rating");
console.log("hey");
function starmark(item) {
  count = item.id[0];
  console.log(count);
  input.value = count;
  sessionStorage.starRating = count;
  var subid = item.id.substring(1);
  for (var i = 0; i < 5; i++) {
    if (i < count) {
      document.getElementById(i + 1 + subid).style.color = "#f12424";
    } else {
      document.getElementById(i + 1 + subid).style.color = "black";
    }
  }
}

// function result() {
//   Rating: Count;
//   Review: Comment(id);
//   alert(
//     "Rating : " +
//       count +
//       "\nReview : " +
//       document.getElementById("comment").value
//   );
// }
// result();
