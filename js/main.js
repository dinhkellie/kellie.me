function past() {
    var x = document.getElementById('pastBody');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var y = document.getElementById('pastTitle');
    var z = document.getElementById('pastTitle2');
    if (y.style.display === "none") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        z.style.display = "block";
        y.style.display = "none";
    }
    
}

function present() {
    var x = document.getElementById('presentBody');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var y = document.getElementById('presentTitle');
    var z = document.getElementById('presentTitle2');
    if (y.style.display === "none") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        z.style.display = "block";
        y.style.display = "none";
    }
    
}

function future() {
    var x = document.getElementById('futureBody');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var y = document.getElementById('futureTitle');
    var z = document.getElementById('futureTitle2');
    if (y.style.display === "none") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        z.style.display = "block";
        y.style.display = "none";
    }
    
}
