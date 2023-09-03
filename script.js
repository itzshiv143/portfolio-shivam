var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x -150 +"px";
    crsr.style.top = dets.y -150 +"px";
})