/**
 
function sumar(a, b) {
    return a + b;
};


document.getElementById('botonaccion').addEventListener('click', function() {
    
    let numor1 = document.getElementById('num1').value;
    let numor2 = document.getElementById('num2').value;
    
    let resultx = sumar(parseInt(numor1), parseInt(numor2));
    console.log('El result es : ' + resultx);
    document.getElementById('result').innerHTML = resultx;
});


*/


let boo = false;

function botonInfo(a) {
    if (boo == false) {
        document.getElementById(a).style.display = "block";
        boo = true;
    } else {
        document.getElementById(a).style.display = "none";
        boo = false;
    }
};

//---------------------------


document.getElementById('btn').addEventListener('click', function() {
    botonInfo('infot');
});

document.getElementById('bt').addEventListener('click', function() {
    botonInfo('infot2');
});

document.getElementById('b').addEventListener('click', function() {
    botonInfo('infot3');
});