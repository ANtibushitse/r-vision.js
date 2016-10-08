// fichier app
// IIFE  imediately invoked fonction expression 
(function () {
	console.log("Welcome! ");
	console.log("batiment", batiment); // undifined 
 	var   batiment = "immeuble neuf";
 	batiment = " immeuble neuf"; 
 	console.log("batiment", batiment); // affice immeuble neuf 

 	function rouler (){
 		console.log("fct rouler"); 
 	}
 	  rouler(); // appelle de la fonction hors du scope 
})();