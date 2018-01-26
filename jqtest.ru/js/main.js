	$(document).ready(function(){
	setInterval(function(){
			var first_item = $('.slider').find(':nth-child(1)').css("z-index");
			var second_item = $('.slider').find(':nth-child(2)').css("z-index");
			var third_item = $('.slider').find(':nth-child(3)').css("z-index");
			$('.slider').find(':nth-child(1)').css("z-index",third_item);
			$('.slider').find(':nth-child(2)').css("z-index",first_item);
			$('.slider').find(':nth-child(3)').css("z-index",second_item);
		
		},5000);
	
	
	
	});
	
	$(document).on('click','.next',function(){
		var first_item = $('.slider').find(':nth-child(1)').css("z-index");
		var second_item = $('.slider').find(':nth-child(2)').css("z-index");
		var third_item = $('.slider').find(':nth-child(3)').css("z-index");
		$('.slider').find(':nth-child(1)').css("z-index",third_item);
		$('.slider').find(':nth-child(2)').css("z-index",first_item);
		$('.slider').find(':nth-child(3)').css("z-index",second_item);
		
		
	});

	