let deathCount = 0;

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    if (t-10 > 0){
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t-10 > 0) {
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
    if (t < 40){
        document.getElementById('kenny').style.top = 200 +'px';
        document.getElementById('kenny').style.left = 200 +'px';
        alert("kenny est mort");
        deathCount++;
        count.innerHTML = "nbr de mort "+deathCount;
    }
});

document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t-10 < 460) {
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    if (t-10 < 460) {
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.body.addEventListener('keydown',function(event) {
    if (event.key === "ArrowUp") {
        let t = parseInt(document.getElementById('kenny').style.top);
        if (t - 10 > 0) {
            t = t - 10;
            document.getElementById('kenny').style.top = t + 'px';
        }
    }
});

document.body.addEventListener('keydown',function(event) {
    if (event.key === "ArrowLeft") {
        let t = parseInt(document.getElementById('kenny').style.left);
        if (t - 10 > 0) {
            t = t - 10;
            document.getElementById('kenny').style.left = t + 'px';
        }
        if (t < 40) {
            document.getElementById('kenny').style.top = 200 + 'px';
            document.getElementById('kenny').style.left = 200 + 'px';
            alert("kenny est mort");
            deathCount++;
            count.innerHTML = "nbr de mort " + deathCount;
        }
    }
});

document.body.addEventListener('keydown',function(event) {
    if (event.key === "ArrowRight") {
        let t = parseInt(document.getElementById('kenny').style.left);
        if (t - 10 < 460) {
            t = t + 10;
            document.getElementById('kenny').style.left = t + 'px';
        }
    }
});

document.body.addEventListener('keydown',function(event) {
    if (event.key === "ArrowDown") {
        let t = parseInt(document.getElementById('kenny').style.top);
        if (t - 10 < 460) {
            t = t + 10;
            document.getElementById('kenny').style.top = t + 'px';
        }
    }
});

let deathZone = document.createElement("div");
deathZone.style.width = "50px";
deathZone.style.height = "500px";
deathZone.style.backgroundColor = "red";
document.getElementById("viewport").append(deathZone);

let count = document.createElement("p");
count.innerHTML = "nbr de mort "+deathCount;
document.getElementById("buttons").append(count);
