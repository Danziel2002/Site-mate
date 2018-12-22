var Angle;

function setup(){
	var cnv = createCanvas(400, 400);
	cnv.parent('Grafic');
	Angle = createSlider(-15, 15, -15, 0.1);
	Angle.parent('MainText');
	Angle.class('Bar');
	background(51);


}

var Tang = function(){
	background(51);
	stroke(255);
	strokeWeight(1);
	translate(200, 200);
	stroke(255);
	text(0,1,0);
	line(0,0,0,200);
	line(0,0,0,-200);
	line(0,0,200,0);
	line(0,0,-200,0);
	noFill();
	ellipse(0,0,400);

	var Alfa = Angle.value();

	for(var x = -100; x < Alfa; x = x + 0.01){
		var y = tan(x) * 20;
		point(x * 15, -y);
	}
}

function draw(){

Tang();
}