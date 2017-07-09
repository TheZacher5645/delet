window.onload = function() {
	var shirt = document.getElementById("shirt");
	var ctx = shirt.getContext("2d");
	var hot = document.getElementById("hot")

	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, shirt.width, shirt.height);
	ctx.drawImage(hot, -129, -75, 720, 720);
}