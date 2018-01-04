
//Loader and fader animation 
$(document).ready(function(){
	
	$('.loader').hide();
	$('.fade').removeClass('fade-out');

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




$('.createPayment').on('click', function(){
	
	var amount = $('.amount').val();
	if(amount)
	{
		if($.isNumeric(amount))
		{
			$('#qrcode').qrcode(amount);
			$('.qrBody').show();
		}
		else 
		{
			swal('Please insert number only','','error');
		}
		
	}
	else 
	{
		swal('Please fill in all the field' ,'' ,'error');
	}
	
});

$('.cancelQR').on('click', function(){
	$('#qrcode').html('');
	$('.qrBody').hide();
});

