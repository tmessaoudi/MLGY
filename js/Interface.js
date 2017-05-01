lolp =0;

function asidePanel(numero, xDestination, yDestination,zone) {
    $(document).ready(function(){
        $("#canvasMenu").animate({width:'show'},350);
        $("#panelConstr").animate({width:'show'},350);
        $("#panelInfo").animate({width:'show'},350); 
        $("#Info").html("La tuile est un <b>" + typeof this + "</b></br> Son abscisse est " + ((xDestination -500)/32 + zone)+ "</br> Son ordonnée est " + ((yDestination-300)/32+zone) +
                        "</br> Son nature est de type " + nature(numero) + "</br> Le zoom est de " + zoom );
    });
}


infoDisplay();
//canvasMenu

function zooming(ctx){
    $(document).ready(function(){
        $(function() {

            zoomslider = $( "#slider" ).slider({
                orientation: "horizontal",
                min : 1,
                max: 20,
                value: 10,
                slide: function(event, ui) {
                    var zoomten = ui.value;
                    zone = zoomten;
                    $( "#amount" ).val( ui.value );
                    //console.log(typeof zoom);
                },
                change: function(){
					console.log(lolp);
					
                    $("canvas").clearCanvas();
					console.log("chanahahahah");
					map.dessinerMap(ctx ,zoom, 5, 6, zone);
                    //map.dessinerMap(ctx , zoom);
					lolp ++;
                }
            });
            $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
        });



    });

}

function infoDisplay(){
    $("#panelInfo").click(function(){
        $("#Info").animate({width:'toggle'},350);
    });
}

function nature(numero){
    if(numero == 2){
        return "plaine";
    }
    else if(numero == 10)
    {
        return "montagne";
    }

    else{
        return numero;
    }

}


