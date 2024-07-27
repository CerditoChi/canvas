var canvas = document.getElementById("mc");
var d = canvas.getContext("2d");
var color = "pink";
d.beginPath();
d.strokeStyle = color;
d.lineWidth = 4;
d.arc(200, 200, 20, 0, 2 * Math.PI);
d.stroke();