const scroll = document.getElementById("vt");

changeColor = function(cor) {
    setInterval(function(){
        if(cor == 'rosa'){
            document.getElementById("btnCv").style.background = "#b1164a42";
            document.getElementById("btnCv").style.borderColor = "#99063ee1";
            document.getElementById("nome").style.color = "#d80645e1";
            document.getElementById("eu").style.borderColor = "#b1164a42";
            document.getElementById("ds").style.borderColor = "#b1164a42";
            document.getElementById("cont").style.borderColor = "#b1164a42";
            cor = 'roxo';
        }
        else if(cor == 'roxo'){
            document.getElementById("btnCv").style.background = "#9f16b142";
            document.getElementById("btnCv").style.borderColor = "#800699e1";
            document.getElementById("nome").style.color = "blueviolet";
            document.getElementById("eu").style.borderColor = "#9f16b142";
            document.getElementById("ds").style.borderColor = "#9f16b142";
            document.getElementById("cont").style.borderColor = "#9f16b142";
            cor = 'azul';
        }
        else if(cor == 'azul'){
            document.getElementById("btnCv").style.background = "#1620b142";
            document.getElementById("btnCv").style.borderColor = "#062199e1";
            document.getElementById("nome").style.color = "blue";
            document.getElementById("eu").style.borderColor = "#1620b142";
            document.getElementById("ds").style.borderColor = "#1620b142";
            document.getElementById("cont").style.borderColor = "#1620b142";
            cor = 'verde';
        }
        else if(cor == 'verde'){
            document.getElementById("btnCv").style.background = "#16b14442";
            document.getElementById("btnCv").style.borderColor = "#06992be1";
            document.getElementById("nome").style.color = "#05af1be1";
            document.getElementById("eu").style.borderColor = "#16b14442";
            document.getElementById("ds").style.borderColor = "#16b14442";
            document.getElementById("cont").style.borderColor = "#16b14442";
            cor = 'amarelo';
        }
        else if(cor == 'amarelo'){
            document.getElementById("btnCv").style.background = "#aeb11642";
            document.getElementById("btnCv").style.borderColor = "#999706e1";
            document.getElementById("nome").style.color = "yellow";
            document.getElementById("eu").style.borderColor = "#aeb11642";
            document.getElementById("ds").style.borderColor = "#aeb11642";
            document.getElementById("cont").style.borderColor = "#aeb11642";
            cor = 'laranja';
        }
        else if(cor == 'laranja'){
            document.getElementById("btnCv").style.background = "#b1691642";
            document.getElementById("btnCv").style.borderColor = "#994d06e1";
            document.getElementById("nome").style.color = "orangered";
            document.getElementById("eu").style.borderColor = "#b1691642";
            document.getElementById("ds").style.borderColor = "#b1691642";
            document.getElementById("cont").style.borderColor = "#b1691642";
            cor = 'rosa';
        }
    }, 3000);
}
    
changeColor('rosa');

function abrir(obj){
    obj.src= "img/vent2.png";
    
}

function fechar(obj){
    obj.src= "img/ventfechada.png";
    
}

function scrollTop() {
    if (this.scrollY >= 420)
        scroll.style.visibility = "visible";
    else
        scroll.style.visibility = "hidden";
}

window.addEventListener('scroll', scrollTop);

scroll.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});





