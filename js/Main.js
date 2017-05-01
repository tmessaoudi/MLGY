
ts = new Tileset("chemin2.png");
map = new Map("premiere");

var zoom = 1;

window.onload = function()
{
    var canvas = document.getElementById('JeuCanvas');
    if(!canvas)
    {
        alert("Impossible de récupérer le canvas");
        return;
    }

    var ctx = canvas.getContext('2d');
    if(!ctx)
    {
        alert("Impossible de récupérer le context du canvas");
        return;
    }


    map.dessinerMap(ctx ,zoom, 5, 6, 4);


    //slider

    zooming(ctx);
    function init() {
    var stage = new createjs.Stage("JeuCanvas");    
var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);
  }


}

