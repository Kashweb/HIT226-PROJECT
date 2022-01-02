function validateForm(){
	var x = document.forms["myForm"]["licence_no"].value;
	  if (x == ""){
		alert("Enter Your Licence Number !!!");
		return false;
	  }
	  var y = document.forms["myForm"]["fname"].value;
	  if (y == ""){
		alert("Enter Your First Name !!!");
		return false;
	  }
	  var z = document.forms["myForm"]["lname"].value;
	  if (z == ""){
		alert("Enter Your Last Name !!!");
		return false;
	  }
	  var q = document.forms["myForm"]["address"].value;
	  if (q == ""){
		alert("Enter Your Address !!!");
		return false;
	  }
	}