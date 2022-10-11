$(document).ready(function(){

    $('#map').on('click', function(){
        if($("#map").hasClass("mapSizeDown")){
            $("#map").removeClass("mapSizeDown");
            $("#map").addClass("mapSizeUp");
            $("#mainSection").css("display", 'none')
        } else {
            $("#map").removeClass("mapSizeUp");
            $("#map").addClass("mapSizeDown");
            $("#mainSection").css("display", '')
        }   
        
        

    })
})