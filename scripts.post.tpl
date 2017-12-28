<script type="text/javascript">
(function(_, $) {

   $('#slide1').mouseenter(function(event) {
		$('#slide2').css('left','70%');
		$('#slide3').css('left','85%');
	}).mouseleave(function(event) {
		setTimeout(function(){
			$('#slide2').css('left','33%');
			$('#slide2').css('transition','left ease 0.5s');
			$('#slide3').css('left','66%');
		},300);
	}); 
	$('#slide2').mouseenter(function(event) {
		$('#slide2').css('left','15%');
		$('#slide3').css('left','85%');
	}).mouseleave(function(event) {
		setTimeout(function(){
			$('#slide2').css('left','33%');
			$('#slide3').css('left','66%');
			$('#slide3').css('transition','left ease 0.5s');
		},300);
	});   
	$('#slide3').mouseenter(function(event) {
		$('#slide2').css('left','15%');
		$('#slide3').css('left','33%');
	}).mouseleave(function(event) {
		setTimeout(function(){
			$('#slide2').css('left','33%');
			$('#slide3').css('left','66%');
			$('#slide3').css('transition','left ease 0.5s');
		},300);
	});   

}(Tygh, Tygh.$));
 


</script>

