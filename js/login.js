
$(document).ready(function(){
	
	$('.loader').hide();
	$('.fade').removeClass('fade-out');
	$('.message a').click(function() {
	  $('form').animate({
		height: "toggle",
		opacity: "toggle"
	  }, "slow");
	});
	
});



function checkPass()
{
	var pass1 = document.getElementById('pass');
	var pass2 = document.getElementById('confirmpass');
	var message = document.getElementById('confirmMessage');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	if(pass2.value){
		if(pass1.value == pass2.value){
			pass2.style.backgroundColor = goodColor;
			message.style.color = goodColor;

		}else{
			pass2.style.backgroundColor = badColor;
			message.style.color = badColor;

		}
	}
}


$('.loginBtn').click(function(){
	var username = $('.username').val();
	var pass = $('.pass').val();
	$('.loader').show();
	authenticate(username,pass);
});

$('.registerBtn').click(function(){
	var username = $('.registerUsername').val();
	var pass = $('.registerPass').val();
	var email = $('.registerEmail').val();
	var role = $('.registerRole').val();
	var pass2 = $('#confirmpass').val();
	if(pass != pass2)
	{
		swal("Password Not Match",'','error');
		return false;
	}

	if(!username || !pass || !email || !role){
		swal('Please fill in all field','','error');
	}
	else 
	{
		checkUser(username,pass,email,role);
	}
	
});
