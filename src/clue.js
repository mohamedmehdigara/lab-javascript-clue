// ITERATION 1

// Suspects Array

const suspectsArray = [{firstName: "Jacob", lastName: "Green", occupation: "Entrepreneur", age: 45, description: "He has a lot of connections", 
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", color: "green"},
  {firstName: "Doctor", lastName: "Orchid", occupation: "Scientist", age: 26, description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy", image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", color: "white"
    },
     {firstName: "Victor", lastName: "Plum", occupation: "Designer", age: 22, description: "Billionaire video game designer", image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", color: "purple"},
     {firstName: "Kasandra", lastName: "Scarlet", occupation: "Actor", age: 31, description: "She is an A-list movie star with a dark past", image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg", color: "red"}
, "mrsPeacock", "mrsWhite", "mrMustard"];

// Rooms Array

const roomsArray = ["Dining Room",
"Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

// Weapons Array

const weaponsArray = ["rope", "knife", "candlestick", "dumbbell", "poison", "axe", "bat", "trophy", "pistol"];


// ITERATION 2

function selectRandom() {}

function pickMystery() {}


// ITERATION 3

function revealMystery() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
