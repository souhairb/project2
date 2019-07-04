// const userModel = require("./../models/user");
// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost/projet2", { useNewUrlParser: true })
//   .then(x => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch(err => {
//     console.error("Error connecting to mongo", err);
//   });

const data = [
  {
    name: "Natalie",
    lastname: "Portman",
    email: "natalieportman@gmail.com",
    university: "5d1e01a06b30c21eb055529e",
    password: "natalie",
    ranking: 5,
    review:
      "my one year exchange program was so good that I decided to stay in Paris"
  },
  {
    name: "Francois",
    lastname: "Hollande",
    email: "francoishollande@gmail.com",
    university: "5d1cbca3fc879042e85496d0",
    password: "francois",
    ranking: 4,
    review:
      "my semester abroad with HEC was one of the most richest experiences of my life. I learned a lot about the country and it culture."
  },
  {
    name: "Matt",
    lastname: "Damon",
    email: "mattdamon@gmail.com",
    university: "5d1e01a06b30c21eb055529e",
    password: "matt",
    ranking: 4,
    review:
      "Harvard offers one of the best exchange programs in terms of content, destinations and personal development"
  },
  {
    name: "Ben",
    lastname: "Affleck",
    email: "mattdamon@gmail.com",
    university: "5d1e01a06b30c21eb055529e",
    password: "ben",
    ranking: 4,
    review:
      "Harvard offers one of the best exchange programs in terms of content, destinations and personal development"
  },
  {
    name: "Dominique",
    lastname: "Strauss-Kahn",
    email: "dominiquestrauss@gmail.com",
    university: "5d1cbca3fc879042e85496d0",
    password: "dominique",
    ranking: 3,
    review: "the city was nice but more work that expected."
  }
];

// userModel
//   .insertMany(data)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
