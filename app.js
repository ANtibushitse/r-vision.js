// fichier app
// IIFE  imediately invoked fonction expression 
(function main () {
	console.log("Welcome! ");


	console.log("batiment", batiment); // undifined 
 		var   batiment = "immeuble neuf";
 		batiment = " immeuble neuf"; 
 		console.log("batiment", batiment); // affice immeuble neuf 

 	function rouler (){
 		console.log("fct rouler");
 	

 		var voiture = "vroom vroom";
 		console.log("voiture", voiture) 
 		 function bouger (){
 		 	console.log("fct bouger"); 

 		 }
bouger(); 
// le scope 
/* 
bouger, rouler  
batiment, rouler 

*/ 
 	}
 rouler(); 
 // le scope contient batiment et rouger 

 

})();