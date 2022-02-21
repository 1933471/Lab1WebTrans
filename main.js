
$("#dropdownMenu").click(function (){

    $.get("https://jsonplaceholder.typicode.com/albums",function (donnees,status){
        $("#button1").text("Album1");
        $("#button2").text("Album2");
        $("#button3").text("Album3");
        console.log(donnees)
    });
});
$("#button1").click(function (){

    $.get("https://jsonplaceholder.typicode.com/photos?albumId=1",function (donnees,status){
        console.log(donnees);
        for(let i=0;i<5;i++){
            console.log(donnees[i].thumbnailUrl)
            $("#img"+i).attr('src',donnees[i].thumbnailUrl);
            $("#img"+i).attr('onload',document.getElementById('imgModal').src=this.src);
        }
    });

});
$("#button2").click(function (){

    $.get("https://jsonplaceholder.typicode.com/photos?albumId=2",function (donnees,status){
        console.log(donnees);
        for(let i=0;i<5;i++){
            console.log(donnees[i].thumbnailUrl)
            $("#img"+i).attr('src',donnees[i].thumbnailUrl)
            $("#img"+i).attr('onload',document.getElementById('imgModal').src=this.src);
        }
    });

});
$("#button3").click(function (){

    $.get("https://jsonplaceholder.typicode.com/photos?albumId=3",function (donnees,status){
        console.log(donnees);
        for(let i=0;i<5;i++){
            console.log(donnees[i].thumbnailUrl)
            $("#img"+i).attr('src',donnees[i].thumbnailUrl);
            $("#img"+i).attr('onload',document.getElementById('imgModal').src=this.src);
        }
    });

});
function clickImg(imageNo){
    $('#exampleModal').modal('show');
    $("#imgModal").attr("src", $("#img"+imageNo).attr("src"));
}


