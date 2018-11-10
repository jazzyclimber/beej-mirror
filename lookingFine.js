const exclaimations = ["Jeepers kats -", "Holy moly -", "Daaaaammnnn booii -", "Daaammnn gurl -", "Jesus...", "Cripes -", "Wub-a-lub-a-dub-dub -", "Toes on the ceiling -", "Wowzers -", "Well you got me..."];
const statements = ["you're on fire!", "looking sharp.", "dressed to kill.", "looking good Mr.President.", "suited and booted.", "did you comb your hair with a rock?", "I dont know if I would wear that...", "you're looking better than you did yesterday at least...", "didn't you wear that yesterday?", "you're going to slay, today!"];

function lookingFine() {
  //random number 0-9
   function randomNumber() {
     return Math.floor(Math.random() * 10);
   }
   var randomNumberTwo = Math.floor(Math.random() * 10);
  //Calls random number to generate statement string
  var finalThought = exclaimations[randomNumber()] + " " + statements[randomNumber()];
  //destination
  var dest = document.getElementById('kind-words');

  dest.innerHTML = finalThought;

  //loop every x hours
  setInterval(function() {
    lookingFine();
  },60*60*3000)// 3 hours
}

//call Method lookingFine()
lookingFine();
