let b = false;

function botonInfo(a, c) {


    if (b == false) {
        document.getElementById(a).style.display = "block";
        document.getElementById(c).style.background = "red";
        document.getElementById(c).innerHTML = "ocultar";
        console.log('si');
        b = true;
    } else {
        document.getElementById(a).style.display = "none";
        document.getElementById(c).style.background = "green";
        document.getElementById(c).innerHTML = "mostrar";
        b = false;
        console.log('no');
    };
};


//vinculacion de botones a funcion

document.getElementById('btn').addEventListener('click', function() {
    botonInfo('infot', 'btn');
});

document.getElementById('bt').addEventListener('click', function() {
    botonInfo('infot2', 'bt');
});

document.getElementById('b').addEventListener('click', function() {
    botonInfo('infot3', 'b');
});




//barra superior
function moOver(obj) {
    obj.style = 'background-color: gray';
};

function moOverOut(obj) {
    obj.style = 'background-color: rgb(96, 77, 77)';

};

//efecto botones