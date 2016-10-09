(function main () {
	console.log("Welcome! ");


	console.log("musique", dancer); // undifined 
	var   musique = "suite de tonalité";
	musique = " immeuble neuf"; 
 		console.log("batiment", dancer); // affice immeuble neuf 

 		function rouler (){
 			console.log("fct rouler");


 			var musiqueElectronique = "Boooom Boooom";
 			console.log("musiqueElectronique", musique) 
 			function bouger (){
 				console.log("fct bouger"); 

 			}
 			bouger(); 
// le scope 
/* 
bouger, musique  
batiment, rouler 
*/ 
}
rouler(); 
 // le scope contient batiment et rouger 

 

})();