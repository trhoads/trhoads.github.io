$(function (){
	
	//jQuery Code...
	let inputFields =  $('input[type = "text"]');
	let nameVal = $('input[name="nameVal"]');
	
	console.log(inputFields.css('background-color'));
	
	let toggleStyle = function (){
		if (inputFields.css('background-color') === "rgb(255, 0, 0)"){
			//Set BG to White
			inputFields.css('background-color', "white"); 
		}
		else {
			//Set BG to Red
			inputFields.css('background-color', "red") ;
		}
	}
	
	//$('#ReqAQuoteBtn').click( toggleStyle );
	
	$('.coreValues').append("<li><strong>This is brand new!!</strong></li>");
	
	$("<li><strong>This is also great!!</strong></li>").appendTo('.coreValues');
	$('.coreValues').prepend("<li><strong>This is brand new!!</strong></li>");
	
	function fillEmpty(){
		if(nameVal.val()=== ''){
			nameVal.val( "John Doe" );
			
		}
		
		
	}
	
	$('#ReqAQuoteBtn').click( fillEmpty );
	
	
})