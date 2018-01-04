//Check user setup the profile already or not 
if(localStorage.getItem("verified")==1)
{
	displayCurrentAmount();
	$('.bankAccBtn').html('Update');	
	$('.topUpSection').show();
	$('.quitBtn').hide();
	
}else 
{
	$('.loader').hide();
	$('.fade').removeClass('fade-out');
	$('.bankAccBtn').html('Confirm');
	$('.open').hide();
	if(localStorage.getItem("role")=='child')	
		$('.currentAmount').html('Please insert parent info');
	else 
		$('.currentAmount').html('Please insert your bank account number');
}

$('.topUpBtn').on('click',function(){
	var amount = $('.topUp').val();
	topUpCalculate(amount);
		
});

$('.quitBtn').on('click',function(){


	window.location = 'index.html';
});


$('.parentBtn').on('click',function(){
	var parentUsername  = $('.parentUsername').val();
	var parentPass = $('.parentPass').val();
	$('loader').show();
	checkParent(parentUsername,parentPass);
});

$('.bankAccBtn').on('click',function(){
	var bankAcc = $('.bankAccNo').val();
	var username = localStorage.getItem("username");
	var role= localStorage.getItem("role");
	updateBankAcc(bankAcc,username);
	updateVerified();
	localStorage.setItem("verified", 1);
	swal('Account updated','','success').then((result) => {
		if(role == 'shop')
		{
				window.location = 'shop.html';
		}
		else if(role == 'parent')
		{
				window.location = 'parent.html';
		}
		else if(role == 'child')
		{
				window.location = 'child.html';
		}
	});
	
});
