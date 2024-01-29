var elem = document.querySelectorAll('.elem');

elem.forEach(function(val){
    var elemImage = val.childNodes[3];
    // console.log(val.childNodes[3])
    
    val.addEventListener("mousemove", function(dets){
        elemImage.style.left = dets.x+"px"
        // elemImage.style.top = dets.y+"px"
    })
    
    val.addEventListener("mouseenter", function(dets){
        elemImage.style.opacity = 1;
    })
    
    val.addEventListener("mouseleave", function(dets){
        elemImage.style.opacity = 0;
    })
})