/* ***AfficheTuile.js***********************************************************      */
/*                                                                                    */
/*  										                                          */
/* ********************************************************************************** */

Tileset.prototype.dessinerTile = function(numero, context, xDestination, yDestination, zone) {
	var xSourceEnTiles = numero % this.largeur;
	if(xSourceEnTiles == 0) {xSourceEnTiles = this.largeur};
	var ySourceEnTiles = Math.ceil(numero / this.largeur);
	
	var xSource = (xSourceEnTiles - 1) * 32;
	var ySource = (ySourceEnTiles - 1) * 32;
	
	$('canvas')
		.drawImage({
		  source : this.image,
		  scale : zoom,
		  layer: true,
		  draggable: true,
		  bringToFront: true,
		  fillStyle: '#36c',
		  groups: ['shapes'],
		  dragGroups: ['shapes'],
			
		  x: xDestination  , y: yDestination ,
		  //this.tileset.dessinerTile(ligne[j], context, (500+j * 32 - yl*32), (300+ i *32-xl*32) ,zoom);
		  
		  radius: 50,
		  sWidth: 32,
		  sHeight: 32,
		  sx: xSource, sy: ySource,
		  
		  //interaction directe avec la map
		  click: function(layer) {
			// Spin star
				asidePanel(numero, xDestination, yDestination, zone);
							
		  }
		})
		;
	
}




/* ***TraitementMap.js*************************************************************** */
/*                                                                                    */
/*  										                                          */
/* ********************************************************************************** */

/*Map.prototype.dessinerMap = function(context,zoom) {
	
	for(var i = 0, l = this.terrain.length ; i < l ; i++) {
		var ligne = this.terrain[i];
		var y = i * 32;
		for(var j = 0, k = ligne.length ; j < k ; j++) {
			this.tileset.dessinerTile(ligne[j], context, j * 32, y ,zoom);
			
			}
	}
}*/

 Map.prototype.dessinerMap = function(context,zoom, xl, yl) {
	// les lignes
	for(var i = xl, l = this.terrain.length ; i < l  ; i++) {
		var ligne = this.terrain[i];
		//les colones
		for(var j = yl, k = ligne.length ; j < k    ; j++) {
			this.tileset.dessinerTile(ligne[j], context, (j * 32 - yl*32), (i *32-xl*32) ,zoom);
			//console.log("i="+i +"; j="+j + "; imax="+l );
			}
	}
	
}

 Map.prototype.dessinerMap = function(context,zoom, xl, yl,zone) {
	// les lignes
	console.log(" dessin fait");
	var lo = xl - zone;
     
	
		
		for(var i = xl - zone, l = this.terrain.length ; i < xl +zone  ; i++) {
			if(!(i < 0)){
				var ligne = this.terrain[i];//les colones
				
				for(var j = yl - zone, k = ligne.length ; j < xl + zone +1   ; j++) {
					if( i < 0 || j < 0){
						console.log(" la valeur peut pas ");
					}
					else{
						this.tileset.dessinerTile(ligne[j], context, (500+j * 32 - yl*32), (300+ i *32-xl*32) ,zone);
						//console.log("i="+i +"; j="+j + "; imax="+l );
						//console.log("i="+(500+j * 32 - yl*32)/32 +"; j="+(300+ i *32-xl*32)/32 );
					}
				}
			}
		}
		
}


Map.prototype.getHauteur = function() {
	return this.terrain.length;
}

Map.prototype.getLargeur = function() {
	return this.terrain[0].length;
}