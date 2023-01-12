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







function mostrar() {
    
    document.getElementById("infot").style.display = 'block';
    
}

*/



let mostrar = false;

document.getElementById("btn").addEventListener('click', cambio);


function cambio() {

    if (mostrar == false) {

        document.getElementById("infot").style.display = 'block';
        mostrar = true
    } else {
        document.getElementById("infot").style.display = 'none';
        mostrar = flase
    };
};