$(document).ready(function(){

    // 체크박스 배열 Loop
    var link = $("input[name=link]").attr("value");
    var cityNameKr = $("input[name=cityNameKr]").attr("value");
    var cityNameEn = $("input[name=cityNameEn]").attr("value");

    const li = document.createElement("li");
    li.setAttribute('id', cityNameEn);
    li.setAttribute('value', link);
    li.setAttribute('class', 'city');
    li.innerHTML = cityNameKr + "<i style='cursor : pointer' id='deleteBookmark' class='fa fa-trash' aria-hidden='true'></i>";
    // 쓰레기 통 아이콘 박았으나 기능 미구현
    
    var citiesList = window.parent.document.getElementById("cities");
    $('#bookMark').on('click', function(){
        $("#id", parent.document.getElementById("cities").appendChild(li));
        
        // 즐겨찾기 기능인데 삭제는 미구현
    });
})