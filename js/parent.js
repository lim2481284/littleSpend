
//Loader and fader animation 
$(document).ready(function(){
	
	
	
	$('.createTaskBtn').click(function() {
	  $(this).html() == "Create task" ? $(this).html('Back') : $(this).html('Create task');
	  $('.taskToggle').animate({
		height: "toggle",
		width:"toggle",
		margin:"toggle",
		opacity: "toggle"
	  }, "slow");
	  
	});
	
	$(document).on('click','.deleteTaskBtn',function(){
		var value = $(this).attr('value');
		deleteTask(value);
		
	});
	

});



$('.createTask').on('click',function(){
		var description = $('.taskDescription').val();
		var reward = $('.taskReward').val();
		checkTask(description, reward);
	
});


//Check user is first time user or not 
if(localStorage.getItem("verified")==0)
{
	var href = location.href;
	var url = (href.match(/([^\/]*)\/*$/)[1]);
	if(url !='account_shop.html')
	{
		swal('Please setup your account first','','info').then((result) => {
				location.href='account_shop.html';
		});
		
	}
	
}
else 
{
	$('.bankAccBtn').html('Update');	
}

$('.bankAccBtn').on('click',function(){
	var bankAcc = $('.bankAccNo').val();
	var username = localStorage.getItem("username");
	updateBankAcc(bankAcc,username);
	updateVerified();
	localStorage.setItem("verified", 1);
	swal('Account updated','','success').then((result) => {
		
		location.href='shop.html';
	});
	
});

getTaskListForParent();