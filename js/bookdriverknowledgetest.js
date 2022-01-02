var testLocation = "";
var testName = "";
function setButtonDefaultColor(){
  document.getElementById("darwin").className = "btn btn-outline-dark";
  document.getElementById("parap").className = "btn btn-outline-dark";
  document.getElementById("Katherine").className = "btn btn-outline-dark";
  document.getElementById("casuarina").className = "btn btn-outline-dark";
}
function chooseLocation(location){
  testLocation = location;
  setButtonDefaultColor();
  document.getElementById(location.toLowerCase()).className =
    "btn btn btn-dark";
  document.getElementById("test-list").style.display = "block";
}
function chooseTest(test){
  testName = document.getElementById(test).textContent;
  document.getElementById("choose-location-div").style.display = "none";
  document.getElementById("test-list").style.display = "none";
  document.getElementById("calendar-block").style.display = "block";

  document.getElementById("test-detail").textContent =
    "Test detail: " + testName;
  document.getElementById("test-location").textContent =
    "Test location: " + testLocation;
}