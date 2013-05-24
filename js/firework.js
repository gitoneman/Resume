function firework(event){
	var $audio=$("<audio id='audio1' src='b.ogg' autoplay=autoplay></audio>");
	$("body").append($audio);
	var $div=$("<div style='position:absolute'></div>");
	var eLeft=event.pageX;
	var eTop=event.pageY;
	var cHeight=document.documentElement.clientHeight;
	$div.css({"width":16,"height":16,"background":"red","top":cHeight,"left":eLeft,"border-radius":8});
	$("body").append($div);
	$("body").css("overflow","hidden");

	$div.animate({"top":eTop},900,function(){
		$(this).remove();

		for(var i=0;i<30;i++)
		{
			var $yhj=$("<div class='yh' style='position:absolute'></div>");
			
			$("body").append($yhj);

		}

		
		function changeColor(){
			var sjcolor="";
			sjcolor=Math.ceil(Math.random()*16777215).toString(16);
			while(sjcolor.length<6)
			{
				sjcolor="0"+sjcolor;
			}
			return sjcolor;
		}

		$(".yh").css({"width":8,"height":8,"top":eTop,"left":eLeft,"border-radius":4});
		$(".yh").each(function(index,element){
			var $this=$(this);
			var sjcolor1=changeColor();
			var sjcolor2=changeColor();
			var yhX=Math.random()*600-300;
			var yhY=Math.random()*600-300;
			$this.css({"background":"#"+sjcolor1}).animate({"top":eTop+yhY,"left":eLeft+yhX},500);
		

		


			function dropDown(odiv){
				setTimeout(function(){odiv.remove();$audio.remove();},Math.random()*800+1400);
				
					if(yhX<0)
						odiv.animate({"top":"+=30","left":"-=4"},600);
					else
						odiv.animate({"top":"+=30","left":"+=4"},600);
				

			}

			dropDown($this);



		});
	});
		
					
}
