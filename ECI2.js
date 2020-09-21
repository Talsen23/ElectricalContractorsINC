// Author: Daniel Baitz
// Date: 4/26/2020
// Case Project: Final Project

"use strict"

//global variables
var choices = [];
var stringarray;
  
// validates first name
function validateFirstName(unInput, errorDiv) { 
	try {
	    if (/^[A-Za-z]+$/.test(unInput.value) === false) {
		  throw "Please input a valid first name.";
	   }
	   //removes error message
	   unInput.style.background = "";
	   errorDiv.innerHTML = "";
	}
	catch(msg) {
	   // display error message
	   errorDiv.style.display = "block";
	   errorDiv.innerHTML = msg;
	   // changes the style
	   unInput.style.background = "rgb(255,233,233)";
	}
 }
 
 // validates last name
function validateLastName(unInput, errorDiv) { 
	//var unInput = document.getElementById("lName");
	//var errorDiv = document.getElementById("lNameError");
	try {
		if (/^[A-Za-z]+$/.test(unInput.value) === false) {
		  throw "Please input a valid last name.";
	   }
	// removes the eroor message
	unInput.style.background = "";
	errorDiv.innerHTML = "";
	}
	   catch(msg) {
		// display error message
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		// changes the style
		unInput.style.background = "rgb(255,233,233)";
	 }
  }

// validates address
function validateaddress() { 
	var unInput = document.getElementById("sAddress");
	var errorDiv = document.getElementById("sAddressError");
	try {
	    if (/^[\w ]+$/.test(unInput.value) === false) {
		  throw "Please input valid street address.";
	   }
	   //removes error message
	   unInput.style.background = "";
	   errorDiv.innerHTML = "";
	}

	catch(msg) {
	   // display error message
	   errorDiv.style.display = "block";
	   errorDiv.innerHTML = msg;
	   // changes the style
	   unInput.style.background = "rgb(255,233,233)";
	}
 }

// validates zip code
function validatezipcode() { 
	var unInput = document.getElementById("zCode");
	var errorDiv = document.getElementById("zCodeError");	
	try {
	    if (/^\d{5}$|^\d{5}-\d{4}$/.test(unInput.value) === false) {
		  throw "Please input valid zip.";
	   }
	   //removes error message
	   unInput.style.background = "";
	   errorDiv.innerHTML = "";
	}

	catch(msg) {
	   // display error message
	   errorDiv.style.display = "block";
	   errorDiv.innerHTML = msg;
	   // changes the style
	   unInput.style.background = "rgb(255,233,233)";
	}
 }

 //validates email
function validateEmail() { 
	var unInput = document.getElementById("emailbox");
	var errorDiv = document.getElementById("emailError");
	try {
	    if (/^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/.test(unInput.value) === false) {
		  throw "Please input valid email.";
	   }
	   //removes error message
	   unInput.style.background = "";
	   errorDiv.innerHTML = "";
	}

	catch(msg) {
	   // display error message
	   errorDiv.style.display = "block";
	   errorDiv.innerHTML = msg;
	   // changes the style
	   unInput.style.background = "rgb(255,233,233)";
	}
 }

 // adds the checkboxes check to an array 
function registerquote(event) {
	var servicesChkbx = event.target || event.srcElement;
	var servicesChecked = servicesChkbx.value;
		if (servicesChkbx.checked) { 
		choices.push(servicesChecked);
//checks to see if any boxes become unchecked and removes them from the array.
 		} else { 
			for (var i = 0; i < choices.length; i++) { console.log("for fired")
				if (choices[i] === servicesChecked) { console.log("removing from array")
	choices.splice(i, 1);
 // stops the loop from continuing once it has located a match
			 break;
		  }
		}
	}	
}

// convert form input to strings for submission
function convertToString() { console.log ("string")
// convert lodging array to string
   stringarray = choices.toString();
}

function checkform(form) {
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    return true;
}

function createEventListeners() {
	var fNameInput = document.getElementById("fName");
	var fNameInput1 = document.getElementById("fName1");
	var lNameInput = document.getElementById("lName");
	var lNameInput1 = document.getElementById("lName1");
	var sAddressInput = document.getElementById("sAddress");
	var zCodeinput = document.getElementById("zCode");
	var emailInput = document.getElementById("emailbox");
	var errorForm = document.getElementById("fNameError");
	var errorForm1 = document.getElementById("fNameError1");
	var lErrorForm = document.getElementById("lNameError");
	var lErrorForm1 = document.getElementById("LNameError1");
	   fNameInput.addEventListener("change", function(){validateFirstName(fNameInput, errorForm)}); 
	   fNameInput1.addEventListener("change", function(){validateFirstName(fNameInput1, errorForm1)});
	   lNameInput.addEventListener("change", function(){validateLastName(lNameInput, lErrorForm)});
	   lNameInput1.addEventListener("change", function(){validateLastName(lNameInput1, lErrorForm1)});
	   sAddressInput.addEventListener("change",validateaddress);
	   zCodeinput.addEventListener("change",validatezipcode);
	   emailInput.addEventListener("change",validateEmail);
		//Cick event listenter 
	   var button = document.getElementById("submitBtn");
	   if (button.addEventListener) {
		  button.addEventListener("click", convertToString, false);
	  	} else if (button.attachEvent) {
		button.attachEvent("onclick", convertToString);
	   }
 }
 
 //Loads event listeners
 if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
 } else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
 }