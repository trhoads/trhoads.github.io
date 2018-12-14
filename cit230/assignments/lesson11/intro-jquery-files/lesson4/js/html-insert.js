$(function(){
		// jQuery Code goes here
      let box1 = $('.box1');
	  let box2 = $('.box2');
	  
	  function leftToRight(){
		  if(box1.html()!= ''){
			  //Get content from box 1 & move to box2 & Empty out box1
			  box2.html( box1.html() );
              box1.html( '' );			  
		  }
	  }
	  
	  $('#LeftToRight').click( leftToRight );
	  
	  function rightToLeft(){
		  if(box1.html() === ''){
			  //Get content from box 2 & move to box 1 & Empty out box 2
			  box1.html( box2.html() );
              box2.html( '' );			  
		  }
	  }
	  
	  $('#RightToLeft').click( rightToLeft );
	})