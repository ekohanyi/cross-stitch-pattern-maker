$(document).ready(function(){
	var mouseState = false;
	var n = 1;

	$(".cell").on("mousedown", function(){
		mouseState = true;
		console.log(mouseState);
	    $(this).toggleClass("selected");
	    setNumberSelected(n++);
	});

	$(".cell").on("mouseup", function(){
		mouseState = false;
		console.log(mouseState);
		n = 1;
	});

	$(".cell").on("mouseenter", function(){
		if (mouseState){
			$(this).toggleClass("selected");
			setNumberSelected(n++);
		};
	});

	$('#clear').on("click", function(){
		$(".cell").removeClass("selected");
		setNumberSelected("-");
	});

	var setNumberSelected = function(n){
		$('#number').text(n);
	}
});