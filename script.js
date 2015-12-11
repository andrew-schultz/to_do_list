$(document).ready(function(){

	$('#newInputForm').on('submit', function(e){
	//when the submit button on the form is clicked, do this
		e.preventDefault();
		//prevents the default function of the submit button from firing
		//doesn't send the input away
		//console.log($("#newInput").val());
		$('ul').append('<li>' + $("#newInput").val() + '<i class="fa fa-check-square"></i></li>');
		//this adds an item to the list with the same formatting as the ones that are already there
		$('#newInput').val("");
		//this just clears the previous input from the text box
		$('li').on('click', function(){
			$(this).toggleClass('complete');
		});

		$('.fa').on('click', function(){
			$(this).parent().remove();
		});
		
	});

	$('li').on('click', function(){
		$(this).toggleClass('complete');
	});

	$('.fa').on('click', function(){
		$(this).parent().slideUp(200);
		$(this).parent().hasClass('complete');
	});

	// $('.fa').on('click', function(){
	// 	if ($('li').hasClass('complete')){
	// 		console.log('got it');
	// 		$(this).remove();
	// 	} else {
	// 		console.log('nope');
	// 	};
	// });
});

