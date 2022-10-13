$(document).ready(function(){

    var flag = 0;

    $('img').on('click', function(){
        if($(this).hasClass("pinImg")){
            flag = 1
            $("#map").removeClass("mapSizeUp");
            $("#map").addClass("mapSizeDown");

            $("#mainSection").removeClass("fadeOutPage");
            $("#mainSection").addClass("fadeInPage");

            $("#cityList").removeClass("fadeOutPage");
            $("#cityList").addClass("fadeInPage");

            //pinSection Area
            $("#pinSection1").removeClass("fadeInPage");
            $("#pinSection1").addClass("fadeOutPage");
            // --- pinSection end --

            $("#pinSection").css("display", 'none')
        }
        if($(this).hasClass("map") && flag === 1){
            $("#map").removeClass("mapSizeDown");
            $("#map").addClass("mapSizeUp");

            $("#mainSection").removeClass("fadeInPage");
            $("#mainSection").addClass("fadeOutPage");

            $("#cityList").removeClass("fadeInPage");
            $("#cityList").addClass("fadeOutPage");

            //pinSection Area
            $("#pinSection1").removeClass("fadeOutPage");
            $("#pinSection1").addClass("fadeInPage");
            // --- pinSection end --

            $("#pinSection").css("display", '')
        }
    })

    // pinSections
    $('#location1').on('click', function(){
        alert("서울");
        $("#mainIframe").attr("src", "./citys/seoul.html");
    })
    $('#pinSection2').on('click', function(){
        alert("서울!");
    })
    $('#pinSection3').on('click', function(){
        alert("서울!");
    })

    //    $(document).mousemove(function(e){      console.log(e.pageX + ', ' + e.pageY);   });

    let slideIndex = 0;

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    showSlides();
    
    /* D-day 계산기 */
    document.getElementsByTagName("button")[0].onclick = testDate01;
    
    function testDate01(){
        
        let today = new Date();

        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        
        var curentday = year + '-' + month + '-' + date;

        var seldate = document.getElementById("seldate").value;

        var nowDate = new Date(curentday);
        var afterDate = new Date(seldate);

    
        var resultVal = (afterDate.getTime() - nowDate.getTime())/(1000 * 60 * 60 * 24);
        document.getElementById("result").value = resultVal
    }
    
})