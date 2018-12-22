var Angle;
var Click = 0;


let ButtonP = function() {
	if (Click === 0){

		Click = 1
	} else {
		Click = 0;
	}

}


function setup() {
	var cnv = createCanvas(400, 400);
	cnv.parent('CercCos');
	if(Click == 0){
	Angle = createSlider(-52, 52, -52, 0.01);
		}else {
			Angle = createSlider(0, 360, 0);
		}
	Angle.parent('MainText');
	Angle.class('Bar');
	background(51);


}

var Mare = function(){
	strokeWeight(1);
	translate(200, 200);
	background(51);
	stroke(255)
	text(0,1,0)
	line(0,0,0,200);
	line(0,0,0,-200);
	line(0,0,200,0);
	line(0,0,-200,0);
	noFill();
	ellipse(0,0,400);
	var Alfa = Angle.value()/4;
	//Inbetween space is 50 px;
	for(var x = -100; x < Alfa; x = x + 0.1){
		strokeWeight(1);
		strokeWeight(2);
		y = sin(x) * 49;
		point(x * 15, -y);
		point(0  +(x * x *x) , 50);
		point(0  +(x * x *x) , -50);
		if (Alfa > -9.25){
			strokeWeight(0.1);
			text("-3π/2", -147, 60);
			line(-167, -50, -167, 0);
			if(Alfa > -6.27){
				text("-π", -97, -60);
				line(-117, 50, -117, 0);
				if (Alfa > -3){
					text("-π/2", -47, 60);
					line(-67, -50, -67, 0);

					if(Alfa > 0){
						text("0", 0, -60);
						if(Alfa > 3.25){
							text('π/2', 47, 60);
							line(27, -50, 27, 0);
							if(Alfa > 6.25){
								text('π', 97, -60);
								line(77, 50, 77, 0);
								if(Alfa > 9.25){
									text('3π/2', 147, 60);
									line(127, -50, 127, 0);
								}
							}
						}
					}
				}
			}
		}
	}
}
var Circle = function(){

	//Face graficul pentru cerc
	strokeWeight(1);
	translate(200, 200);
	background(51);
	stroke(255)
	line(0,0,0,200);
	line(0,0,0,-200);
	line(0,0,200,0);
	line(0,0,-200,0);
	noFill();
	ellipse(0,0,400);
	
	var a = map(Angle.value(), -52, 52, 0, 360);
	var Alfa = radians(a); 
	var r = 200;
	//Deseneaza triunghiul
	var dx = r * cos(Alfa);
	var dy = r * sin(Alfa);
	var dd = dist(dx,dy,dy);
	strokeWeight(4);
	stroke(0,255,0);
	line(0,0,dx, dy);
	stroke(255,0,0);
	line(0,0,dx,0);
	stroke(0,255,0);
	line(dx,dy,dx, 0);
	
}

function draw(){
	if (Click == 0){
		Circle();
	}
	else{
		Mare();
	}

		}