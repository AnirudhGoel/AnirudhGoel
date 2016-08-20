function resume() {
	email = prompt("Thank you for showing interest in my Resume !\nPlease enter your Email ID", "chocolate@icecream.com");
	if(email != "" && email != null && email != "chocolate@icecream.com") {
		$.ajax({
			url: '../php/resume.php',
			type: 'GET',
			data: { email: email },
			success: function(result) {
				alert('Thank you !\nNow look out for the Owl Post ;)');
			}
		});
	}
	else if(email == "") {
		alert("No Email Id Entered");
	}
	else if(email == "chocolate@icecream.com") {
		alert("I'm sure you like Chocolate Ice Cream but...\nYou'd have entered a valid Email ID");
	}
}