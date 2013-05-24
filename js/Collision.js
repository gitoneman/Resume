function moveTo(obj){
				var c=obj.offset().left-195;
				var d=obj.offset().top;
				
				if(c>=770)
				{
					obj.attr("speedc",-5);
					
				}
				else if(c<=0)
				{
					obj.attr("speedc",5);
					
				}
				if(d>=160)
				{
					obj.attr("speedd",-2);
				}
				else if(d<=0)
				{
					obj.attr("speedd",2);
				}
				c+=parseInt(obj.attr("speedc"));
				d+=parseInt(obj.attr("speedd"));
				obj.css({"left":c,"top":d});

			}