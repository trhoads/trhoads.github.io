  /* Vanilla JS for Lesson 3.1
	<script>
	  window.onload = function(){
	     let element = document.getElementById('alcoveLogo'); 
		 element.style.opacity = 0.2;
		 let elements  = document.getElementsByClassName('servicesBtn');
		 for (let i =0; i<elements.length; i++){
		   if(i % 2 === 0){
		      elements[i].style.color = 'rgb(0,106,255)';
		   }
		 }
	  }
	</script>
	
	<script>
	  window.onload = function(){
	      let elements  = document.getElementsByTagName('h2');
		 for (let i =0; i<elements.length; i++){
		      elements[i].style.borderColor = 'rgb(255,0,0)';
			  elements[i].style.borderwidth = '2px';
			  elements[i].style.borderStyle = 'solid';
			  elements[i].style.backgroundColor = 'rgb(255,0,0, 0.2)';
		   
		 }
	  }
	</script>
	
	<script>
	  window.onload = function(){
	      let elements  = document.querySelectorAll('.navigation > li:nth-child(even) > a');
		  
		  for (let i = 0; i<elements.length; i++){
		    elements[i].style.color = 'red';
		  }
	   }
		 </script>
		 */
		 $(function () {
			// All jQuery code goes here

			$('#alcoveLogo').css('opacity', 0.4);
            $('.servicesBtn').css('color', '#FFF');
			$('button').css('border', '1px solid red');
			$('h2').css('border', '1px solid red');
			$('input[name ="nameVal"]').css('border', '1px solid red');
			$('input[name != "phoneNum"]').css('border', '1px solid red');
			$('input[name *= "Num"]').css('border', '1px solid red');
		    $('input[name $= "Val"]').css('border', '1px solid red');
			//$('#alcoveLogo').next().css('background-color', 'rgba(255,0,0,0.2)');
			$('.box1').nextAll().css('background-color', 'rgba(255,0,0,0.2)');
			$('.header').children().css('background-color', 'rgba(255,0,0,0.2)');
			$('.navigation > li:eq(2)').parent().css('opacity', '0.3');
			$('.navigation > li:eq(2)').parent().parent().css('opacity', '0.3');
			$('.servicesBtn').closest('div').css('background-color', 'rgba(255,0,0,0.2)');;
			
			
			
			
		})