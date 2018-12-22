let meniuStangaActiv = false;
let meniuDreaptaActiv = false;
var Clicks = 0;

let ascundeEcuatii = function() {
	

	let ecuatii = document.querySelector(".Ecuatii");

	if (meniuStangaActiv === false){

		ecuatii.style.opacity = 0;

		meniuStangaActiv = true;

		Clicks = 0;

	}

}

let arataEcuatii = function() {

	let ecuatii = document.querySelector(".Ecuatii");
	if (meniuStangaActiv === true){

		ecuatii.style.opacity  = 1;

		meniuStangaActiv = false;
		
		Clicks = 1;

		FText();
	}

}

let ascundeFunctii = function() {

	let functii = document.querySelector(".Functii");

	if (meniuDreaptaActiv === false || Clicks === 0){

		functii.style.opacity = 0;

		meniuDreaptaActiv = true;

		Clicks = 0;

	}
	

}

let arataFunctii = function() {

	let functii = document.querySelector(".Functii");

	if (meniuDreaptaActiv === true){

		functii.style.opacity = 1;

		meniuDreaptaActiv = false;

		Clicks = 1;
	}
}

let FText = function(){

	let contextF = document.querySelector(".textFunctii");
	let Functii = document.querySelector(".Functii");
	let TWindow = document.querySelector(".Main");

	if(Clicks === 0){
		contextF.style.display = "inline-grid";
		contextF.style.opacity = 1;
		Clicks = 1;
		contextF.style.boxShadow = "2px 2px 3px grey"; 
		TWindow.style.grid_row = '1/2'; 
	}
	else{
		contextF.style.display = "none";
		Clicks = 0;
		contextF.style.boxShadow = 0; 

	}


}