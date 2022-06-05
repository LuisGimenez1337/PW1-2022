function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Bienvenido de vuelta " + user);
    } else {
        user = prompt("Porfavor introduzca su nombre: ", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}
function firstFunction() {
    alert("Hola\nComo estas?");
}

function firstFunction2() {
    var r = confirm("Confirmando algo!");
    if (r == true) {
       x = "OK fue presionado";
    }
    else {
       x = "Cancel fue presionado";
    }
    document.getElementById("test").innerHTML = x;
 }

 function firstFunction3() {
    var txt;
    var person = prompt("Porfavor introduzca su nombre completo:", "Harry Potter");
    if (person == null || person == "") {
        txt = "el usuario cancelo el prompt.";
    } else {
        txt = "Hola " + person + "! como estuvo tu dia?"
    }
    document.getElementById("test1").innerHTML = txt;
}
function clickFunction() {
    var text = "";
    if (document.getElementById("out").validity.rangeOverflow) {
        text = "el valor excede el maximo";
    } else {
        text = "Input OK";
    }
    document.getElementById("test").innerHTML = text;
}
function showAlert() {
    alert('y luego de dos segundos!');
}
function download() {
    var save = document.getElementById("example").value;
    var blob = new Blob([save], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "yournewfile.txt");
  }
