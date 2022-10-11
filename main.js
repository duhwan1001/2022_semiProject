
$(document).ready(function(){

    var mapFlag = 0;
    $('#map').on('click', function(){
        if(mapFlag === 0){
            $('#map').width(200);
            $('#map').height(300);
            $("#map").css("margin-left", 50);
            mapFlag = 1;
        } else {
            $('#map').width(650);
            $('#map').height(761);
            $("#map").css("margin-left", 150);
            mapFlag = 0;
        }
    })
    



})
