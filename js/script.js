function nextPage() {
    $(".intro").fadeOut(200, function() {
        $(".home").fadeIn(200);
    });
}
document.getElementById("btn").addEventListener("click",function(){
    let display =document.getElementById("display");
    display.textContent = "Your perecentage: --%"
});