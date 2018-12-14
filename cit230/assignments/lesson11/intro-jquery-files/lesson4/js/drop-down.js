$(function(){
		// All jQuery code goes here
		/*$('.dropdownMenu > li').hover( function() {
		   // Hover
		   
		   $(this).children("ul").slideDown(200);
		
		}, function() {
		     //No Hover
			 
			 $(this).children("ul").slideUp(200);
		});*/
		
		$('.dropdownMenu > li').hover( function() {
		   
		   $(this).children("ul").slideToggle(200);
		
		})
		
		

	})