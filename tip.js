function calculate(){  
var name =document.getElementById("fullname").value;
var waiter =document.getElementById("waitress").value;
var bill =document.getElementById("bill").value; 
var tip =document.getElementById("tipamount").value; 
var total = bill * tip;
alert('Hello '+ name +', you left a tip of N'+ total +' for '+ waiter);
}
