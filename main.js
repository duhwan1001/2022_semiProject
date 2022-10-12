


$(document).ready(function(){

    $('#map').on('click', function(){
        if($("#map").hasClass("mapSizeDown")){
            $("#map").removeClass("mapSizeDown");
            $("#map").addClass("mapSizeUp");
            $("#mainSection").removeClass("fadeInPage");
            $("#mainSection").addClass("fadeOutPage");
            $("#cityList").removeClass("fadeInPage");
            $("#cityList").addClass("fadeOutPage");
  
            $("#mainSection").css("display", 'none')
            $("#cityList").css("display", 'none')
        } else {
            $("#map").removeClass("mapSizeUp");
            $("#map").addClass("mapSizeDown");
            $("#mainSection").removeClass("fadeOutPage");
            $("#mainSection").addClass("fadeInPage");
            $("#cityList").removeClass("fadeOutPage");
            $("#cityList").addClass("fadeInPage");
            $("#mainSection").css("display", '')
            $("#cityList").css("display", '')
        }   
    })

    // pinSections
    $('#pinSection1').on('click', function(){
        alert("서울!");
        console.log($("#mainIframe").attr("src"));
        $("#mainIframe").attr("src", "./citys/seoul.html");
        console.log($("#mainIframe").attr("src"));

    })
    $('#pinSection2').on('click', function(){
        alert("서울!");
    })
    $('#pinSection3').on('click', function(){
        alert("서울!");
    })

    //    $(document).mousemove(function(e){      console.log(e.pageX + ', ' + e.pageY);   });
})