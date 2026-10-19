let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let sequenceTitle = document.getElementById("sequence-title");

function showSequenceOne() {
  image1.src = "images/image1.jpg";
  image2.src = "images/image2.jpg";
  image3.src = "images/image3.jpg";
  sequenceTitle.innerHTML = "Sequence 1: Sunrise, Breakfast, Sightseeing";
}

function showSequenceTwo() {
  image1.src = "images/image3.jpg";
  image2.src = "images/image1.jpg";
  image3.src = "images/image2.jpg";
  sequenceTitle.innerHTML = "Sequence 2: Sightseeing, Sunrise, Breakfast";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);
