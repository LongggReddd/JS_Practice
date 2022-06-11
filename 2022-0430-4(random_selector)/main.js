let foodImags = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_L5MfeJDKkv4S8G2bHkR-6XOb6QanN8uBQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbcftW6UfAxA0P7XNpkfrwGIIJ-kh-u0INA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YfzmGSiv0-9p8YPPAxWKMKsoM2iL_xM23Q&usqp=CAU",
];

$(function(){
    // console.log("Yo");
    $("input").on("click",function(){
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",foodImags[randomChildNumber]);
        //$("h1").text($("li").eq(Math.floor(Math.random()*($("li").length))).text());
        //$("h1").text($("li").eq(Math.floor(Math.random()*3)).text());
        //alert("H1");
        //("h1").text($("li:first").text());
        //$("h1").text($("li:last").text());
        //  $("input") => let thisInput = document.getElementsByTagName("input")[0]
        //  thisInput.addEventListener("click",function(){alert("Hi")})
    });
});