var x = 0;
var y = 0;
let Cont = document.querySelector(".Input");
var pointx, pointy;
function setup(){

	createCanvas(500, 300);

}

pow = function(x, y){
	var y1 = y;
	for(var i = 1; i <= x; i++){
		y1 = y1 * y;
	}
	return y1;
}
ArcGraf = function(){
	for(var x = -1; x < 100; x = x + 0.01){
		y =  (1/asin(x)) * 20; //x * 30

		point(x * 15, -y);
	}}
CoTanGraf = function(){
	for(var x = -100; x < 100; x = x + 0.01){
		y =  (1/tan(x)) * 20; //x * 30

		point(x * 15, -y);
	}}

TanGraf = function(){
	for(var x = -20; x < 20; x = x + 0.01){
		y = tan(x) * 20;

		point(x * 15, -y);
	}}

SinGraf = function(){
	for(var x = -100; x < 100; x = x + 0.01){
		y = sin(x) * 50;
		point(x * 15, -y);
	}}

CosGraf = function(){
	for(var x = -100; x < 100; x = x + 0.01){
		y = cos(x) * 50;

		point(x * 15, -y);
	}}



function draw(){

	background(204);
	translate(250, 150);
	strokeWeight(1);
	line(0, 0, 0, 150);
	line(0, 0, 0, -150);
	line(0, 0, 250, 0);
	line(0, 0, -250, 0);
	strokeWeight(2);
	// translate(500, 150);
	noFill()
	ellipse(0, 0, 200)
//	if (Cont.value == "Dan"){
	ArcGraf();
}
