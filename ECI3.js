//Author: Daniel Baitz
//Date: 4/26/2020
//Case Project: Final Project

"use strict"

var waitForUser;

function setUpPage() { console.log("setup page function")
    document.querySelector("nav ul li:first-of-type").addEventListener("click", loadSetup, false);
    loadSetup();
    loadDirections();
    document.querySelector("nav ul li:last-of-type").addEventListener("click", loadDirections, false);
 }
     
function loadSetup() { console.log("loadsetup")
    document.querySelector("nav ul li:first-of-type").className = "current";
    document.querySelector("nav ul li:last-of-type").className = "";
    //document.getElementById("setup").style.display = "block";
    document.getElementById("location").style.display = "none";
    location.search = "";
 }

function loadDirections(string) { console.log("Loaddirections")
  document.querySelector("nav ul li:first-of-type").className = "";
    document.querySelector("nav ul li:last-of-type").className = "current";
   // document.getElementById("setup").style.display = "none";
    document.getElementById("location").style.display = "block";
    if (typeof google !== 'object') {
        var script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAtKd85njub5VK4YsMm8p2fQ1RIeGLdRh4";
        document.body.appendChild(script);
     }
     
  }

  function geoTest() { console.log("geo test function")
    waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(createDirections,fail, {timeout: 10000});
    } else {
       fail();
    }     
 }

 function createDirections(position) {
    clearTimeout(waitForUser);
 //console.log("Longitude: " + position.coords.longitude);
 //console.log("Latitude: " + position.coords.latitude);
 var currPosLat = position.coords.latitude;
 var currPosLng = position.coords.longitude;
 var mapOptions = {
    //center: new google.maps.LatLng(currPosLat, currPosLng),
    center: new google.maps.LatLng(39.96188, -82.99879),
    zoom: 12
 };
 var map = new google.maps.Map(document.getElementById("map"),mapOptions);
 }
 
 function fail() {
    //console.log("Geolocation information not available or notauthorized.");
    document.getElementById("map").innerHTML ="Unable to access your current location.";
 }

 // run setUpPage() function when page finishes loading
window.addEventListener("load", setUpPage, false);