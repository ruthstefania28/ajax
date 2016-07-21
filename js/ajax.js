var request = new XMLHttpRequest();

function loadTxt() {
    // Cuando cambia el estado de la solicitud
    request.onreadystatechange = processTxt;
    request.open("GET", "data.txt", true);
    request.send();
}

function processTxt(data) {
    if(request.status == 200 && request.readyState == 4){
        var txt = document.getElementById("txt");
        txt.innerHTML = request.responseText;
    }
}