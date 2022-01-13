//Get The Html Elements
var daysElement =  document.getElementById("days");
var hoursElement = document.getElementById("hours");
var minsElement = document.getElementById("mins");
var secondsElement = document.getElementById("seconds");

//Get The Current Year
var newYearEveDate = "Dec 31, " + new Date().getFullYear() + " 00:00:00";

//Calculate Target Date
var newYears = new Date(newYearEveDate).getTime();

function countdown() {
    //Get Current Date
    var currentDate = new Date().getTime();
    //Calculate The Distance
    var distance = (newYears - currentDate);

    //Calculate  Days 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    //Calculate Hours
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    //Calculate Minutes
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    //Calculate Seconds
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //Inner Html
    daysElement.innerHTML =  days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

//Intial Call
countdown();

setInterval(countdown, 1000);