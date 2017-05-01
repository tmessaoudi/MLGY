<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>			
    <!-- l'ordre des sripts est très important-->	
    <link rel="stylesheet" type="text/css" href="Css/style_div.css">	
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">       
    <title> Mighty Legacy  
    </title>    
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
  </head>
  <body onload= "init();"><h1> 
      <div> Mighty Legacy 
        <div> </h1> 
    <!--div id="menu"> <h3>MENU</h3>
    	<button><a href="Acceuil.html"> Aller sur le site</a></button> </br> </br>
    	<button><a href="Inscription.php"> Inscription</a></button>
    </div-->
    <aside id ="canvasMenu">	
      <p>
        <label for="amount">Zoom:
        </label>	
        <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>		
      <div id="slider">
      </div>	
      </br>	
      <div id="panelConstr">Construction
      </div>	
      <div id="panelInfo">Information 	
        <p id="Info"> Aucune info sur la tuile
        </p>	  
    </aside>   
    <div id="divCanvas">    
      <!--canvas width="1000" height="600" id="JeuCanvas"></canvas-->	
      <canvas id="JeuCanvas" style="position: absolute; left: 6px; top: 63px;" width="1000" height="643">
      </canvas> 
    </div>  
  </body>		
	 
</html>