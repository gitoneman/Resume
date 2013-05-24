function draw() {
	var oCan = document.getElementById('progress');
	var ctx = oCan.getContext("2d");
	var w= oCan.offsetWidth;
	var h= oCan.offsetHeight;
	
	ctx.beginPath();
	ctx.fillstyle = "red";
	// ctx.arc(100,100,50,0,2*Math.PI);
	ctx.fillRect(0,0,50,50);
	ctx.closePath();
}