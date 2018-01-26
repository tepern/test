	$(document).ready(function(){
	setInterval(function(){
			//var first_item = $('.slider').find(':nth-child(1)').css("z-index");
			//var second_item = $('.slider').find(':nth-child(2)').css("z-index");
			//var third_item = $('.slider').find(':nth-child(3)').css("z-index");
			var first_item_opacity = $('.slider').find('div:nth-child(1)').css("opacity");
			var second_item_opacity = $('.slider').find('div:nth-child(2)').css("opacity");
			var third_item_opacity = $('.slider').find('div:nth-child(3)').css("opacity");
			//$('.slider').find(':nth-child(1)').css("z-index",third_item);
			//$('.slider').find(':nth-child(2)').css("z-index",first_item);
			//$('.slider').find(':nth-child(3)').css("z-index",second_item);
			$('.slider').find('div:nth-child(1)').css("opacity",third_item_opacity);
			$('.slider').find('div:nth-child(2)').css("opacity",first_item_opacity);
			$('.slider').find('div:nth-child(3)').css("opacity",second_item_opacity);
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

	