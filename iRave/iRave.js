function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById('clock').innerHTML = h + ":" + m;
    document.getElementById('hour').innerHTML = "<b>" + h + "</b>";
    document.getElementById('minute').innerHTML = m;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var active = false;
function changeVisibility() {
    if(active){
        document.getElementById("hour").style.visibility = "hidden";
        document.getElementById("minute").style.visibility = "hidden";
        document.getElementsByClassName("shortcuts")[0].style.visibility = "hidden";
        active = false;
    }else{
        document.getElementById("hour").style.visibility = "visible";
        document.getElementById("minute").style.visibility = "visible";
        document.getElementsByClassName("shortcuts")[0].style.visibility = "visible";
        active=true;
    }
}

function upaupa(element){
    var id = setInterval(frame,5);
    var elem = document.getElementById(element);
    var scale = 30;
    function frame(){
        if (scale == 100){
            clearInterval(id);
        } else {
            elem.style.width = scale +'px';
            elem.style.height = scale +'px';
            scale++;
        }
    }
    document.getElementsByClassName("shortcuts")[0].scrolling = "yes";
}

/*function dragging() {
    //document.getElementById("scroll").dataTransfer.setDragImage("scroll.png",0,0);
    document.getElementById("scroll").addEventListener("dragstart", function(e) {
        var img = document.createElement("img");
        img.src = "https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU_400x400.jpg";
        e.dataTransfer.setDragImage(img, 0, 0);
    }, false);

    console.log("dragging");
}

function drop() {
    document.getElementById("scroll").style.cursor = 'context-menu';
    console.log("dropped");
}*/
