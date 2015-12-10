$(document).ready(function(){

	$('#newInputForm').on('submit', function(e){
	//when the submit button on the form is clicked, do this
		e.preventDefault();
		//prevents the default function of the submit button from firing
		//doesn't send the input away
		//console.log($("#newInput").val());
		$('ul').append('<li>' + $("#newInput").val() + '<input class ="check" type="checkbox"/></li>');
		$('#newInput').val("");

		var $item = $('li');

		$item.on('click', function(){
			$(this).toggleClass('complete');
		});
		$('.check').on('click', function(){
			$(this).parent().remove();
		});
		
	});

	var $item = $('li');
	$item.on('click', function(){
			$(this).toggleClass('complete');
	});

	$('.check').on('click', function(){
			$(this).parent().remove();
	});
});

