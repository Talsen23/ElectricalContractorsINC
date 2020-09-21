//Author: Daniel Baitz
//Date: 4/26/2020
//Case Project: Final Project

var KwHinput = document.getElementById("numInput");
var state = document.getElementById("state");
var isNumber = /^-?\d*[\.]?\d+$/;
var tax;


if (KwHinput.addEventListener) {
	KwHinput.addEventListener("change",function(){
		var taxRate = 0.05;
		var chkbxTaxrate = 0.04;
		var finalBill = (KwHinput.value*0.13);
		

			try {
				if(finalBill >= 0 && isNumber.test(KwHinput.value)) {
					if(state.checked){
						tax = finalBill*chkbxTaxrate;
						finalBill = finalBill + tax;
					}else{
						tax = finalBill*taxRate;
						finalBill = finalBill + tax;
					}
					alert("Your estimated bill is $"+finalBill.toFixed(2));
				}else{
					throw(error);
				}
			} catch(err){
				alert("An error has occurred, please use a valid number.");
			}
		}
	);
}
else if (KwHinput.attachEvent) { 
	KwHinput.attachEvent("onload", setUpPage);
};

function get(ID){
	return document.getElementById(ID);
  }
  
  function calDiff(){
	var fromDay 	= get('fromDay').value;
	var fromMonth = get('fromMonth').value;
	var fromYear 	= get('fromYear').value;
	var toDay 	= get('toDay').value;
	var toMonth 	= get('toMonth').value;
	var toYear 	= get('toYear').value;
	var fromDate 	= new Date(fromYear,fromMonth,fromDay);   
	var toDate 	= new Date(toYear,toMonth,toDay);         
	var diff 	= new Date(toDate.getTime() - fromDate.getTime());
  
	get('resultsYear').value  = diff.getUTCFullYear()-1970;  
	get('resultsMonth').value = diff.getUTCMonth();          
	get('resultsDay').value   = diff.getUTCDate()-1;         
  }
  
  calDiff();
  
  var Calculate = get('Calculate');
  
  Calculate.onclick = function(){
	calDiff();
  }
