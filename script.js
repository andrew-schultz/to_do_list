$(document).ready(function(){

	$('#newInputForm').on('submit', function(e){
	//when the submit button on the form is clicked, do this
		e.preventDefault();
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		var timestamp = month + "/" + day + "/" + year
		//prevents the default function of the submit button from firing
		//doesn't send the input away
		if ($('#newInput').val().length >= 1){
				$('ul' ).append('<li><i class="fa fa-times-circle"></i><p>' + $("#newInput").val() + ' <span>' + timestamp + '</span></p></li>');
			//this adds an item to the list with the same formatting as the ones that are already there
			};
		$('#newInput').val("");
		//this just clears the previous input from the text box

		$('.fa').on('click', function(){
		//selects the class .fa on click, runs a function
			$(this).parent().fadeOut(200 ,function(){
			//fades out the element with the .fa class
				$(this).remove();
				//removes the element completely from the html
			});
		});	
	});
	$('ul').on('click', 'li', function(){
	//selects the ul element on click, runs a function
		$(this).toggleClass('complete');
	}); //toggles the class complete

	$('.fa').on('click', function(){
	//selects the class .fa on click, runs a function
		$(this).parent().fadeOut(200 ,function(){
		//fades out the element with the .fa class
			$(this).remove();
			//removes the element completely from the html
		});
	});
});

