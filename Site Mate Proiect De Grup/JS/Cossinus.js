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
	Angle = createSlider(-52, 52, -52);
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
		y = cos(x) * 49;
		point(x * 15, -y);
		point(0  +(x * x *x) , 50);
		point(0  +(x * x *x) , -50);
		if (Alfa > -9.25){
			strokeWeight(0.1);
			//text("-3π", -147, 60);
			line(-147, 50, -147, 0);
			if(Alfa > -6.27){
				//text("-2π", -97, -60);
				line(-97, -50, -97, 0);
				if (Alfa > -3){
					//text("-π", -47, 60);
					line(-47, 50, -47, 0);

					if(Alfa > 0){
						//text("0", 0, -60);
						if(Alfa > 3.25){
							//text('π', 47, 60);
							line(47, 50, 47, 0);
							if(Alfa > 6.25){
								//text('2π', 97, -60);
								line(97, -50, 97, 0);
								if(Alfa > 9.25){
									//text('3π', 147, 60);
									line(147, 50, 147, 0);
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
	line(0,0,dx,0);
	stroke(255,0,0);
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