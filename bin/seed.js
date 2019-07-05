const universityModel = require("./../models/university");

const data = [
  {
    country: "United States",
    name: "Harvard University",
    location: [42.378036, -71.11834],
    exchange: [
      "Ecole Superieure des Sciences Economiques et Commerciales (ESSEC) Paris and Hong Hong University of Science and technology (HKUST)"
    ]
  },
  {
    country: "France",
    name: "Ecole des Hautes Etudes Commerciales aka HEC",
    location: [48.754830314, 2.168832658],
    exchange: ["Harvard University, IE Madrid and Bocconi"]
  },
  {
    country: "United States",
    name: "Stanford University",
    location: [37.424107, -122.166077],
    exchange: ["Polytechnique", "Bocconi"]
  },
  {
    country: "United States",
    name: "Princeton University",
    location: [40.3487, -74.6593],
    exchange: [
      "Ecole Superieure des Sciences Economiques et Commerciales",
      "Hong Hong University of Science and technology"
    ]
  },
  {
    country: "United States",
    name: "University of California, Los Angeles",
    location: [34.1477, -118.44],
    exchange: ["", ""]
  },
  {
    country: "Mexico",
    name: "Mexico University",
    location: [19.56, -99.1],
    exchange: ["", ""]
  },
  {
    country: "Canada",
    name: "McGill University",
    location: [45.5041, -73.5747],
    exchange: ["", ""]
  },
  {
    country: "France",
    name: "Ecole Superieure des Sciences Economiques et Commerciales",
    location: [49.026499894, 2.07333304],
    exchange: ["", ""]
  },
  {
    country: "France",
    name: "Ecole Nationale Superieure des Mines de Paris",
    location: [48.844952, 2.339193],
    exchange: ["", ""]
  },
  {
    country: "Argentina",
    name: "Universidad Atlantida Argentina",
    location: [-38.0114741, -57.5465725],
    exchange: ["", ""]
  },
  {
    country: "Bolivia, Plurinational State of",
    name: "Escuela Militar de Ingenierueda",
    location: [-17.0568696, -64.9912286],
    exchange: ["", ""]
  },
  {
    country: "Hong Kong",
    name: "University of Hong Kong",
    location: [22.4135688, 114.2101033],
    exchange: ["", ""]
  },
  {
    country: "China",
    name: "Peking University",
    location: [39.9917393, 116.3039803],
    exchange: ["", ""]
  },
  {
    country: "China",
    name: "Chongqing Three Gorges University",
    location: [29.5629467, 106.4496481],
    exchange: ["", ""]
  },
  {
    country: "New Zealand",
    name: "University of Auckland",
    location: [-36.8500711, 174.7705586],
    exchange: ["", ""]
  },
  {
    country: "Australia",
    name: "Australian National University",
    location: [-35.2812134, 149.1166533],
    exchange: ["", ""]
  },
  {
    country: "Italy",
    name: "University Bocconi",
    location: [45.4497194, 9.1887081],
    exchange: ["", ""]
  },
  {
    country: "Italy",
    name: "University of Bologna",
    location: [44.4947702, 11.3558967],
    exchange: ["", ""]
  },
  {
    country: "United Kingdom",
    name: "IE",
    location: [52.865196, -7.9794599],
    exchange: ["", ""]
  },
  {
    country: "United Kingdom",
    name: "University of Exeter",
    location: [50.7369302, -3.5364767],
    exchange: ["", ""]
  },
  {
    country: "United Kingdom",
    name: "University College London, University of London",
    location: [51.5214214, -0.1306744],
    exchange: ["", ""]
  },
  {
    country: "United Kingdom",
    name: "University of Cambridge",
    location: [52.2048518, 0.1179132],
    exchange: ["", ""]
  },
  {
    country: "Russian Federation",
    name: "Moscow State University of Civil Engineering",
    location: [55.8579915, 37.6914436],
    exchange: ["", ""]
  },
  {
    country: "United States",
    name: "Stavropol State Technical University",
    location: [34.36594, -89.52536],
    exchange: ["", ""]
  },
  {
    country: "Chad",
    name: "Universite de N'Djamena",
    location: [12.1190873, 15.0656074],
    exchange: ["", ""]
  },
  {
    country: "Saudi Arabia",
    name: "College of Technology at Abha",
    location: [18.21639, 42.50528],
    exchange: ["", ""]
  },
  {
    country: "Algeria",
    name: "Universite Amar Telidji",
    location: [33.7957617, 2.8472873],
    exchange: ["", ""]
  },
  {
    country: "India",
    name: "AISECT University",
    location: [12.9530316, 77.5138655],
    exchange: ["", ""]
  },
  {
    country: "Norway",
    name: "Oslo School of Architecture",
    location: [59.9133301, 10.7389701],
    exchange: ["", ""]
  }
];

// universityModel
//   .insertMany(data)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
