$(document).ready(function(){

    // 체크박스 배열 Loop
    var link = $("input[name=link]").attr("value");
    var cityNameKr = $("input[name=cityNameKr]").attr("value");
    var cityNameEn = $("input[name=cityNameEn]").attr("value");

    const li = document.createElement("li");
    li.setAttribute('id', cityNameEn);
    li.setAttribute('value', link);
    li.setAttribute('class', 'city');
    li.innerHTML = cityNameKr;

    $('#bookMark').on('click', function(){
        window.parent.document.getElementById("cities").appendChild(li); 
    });
})