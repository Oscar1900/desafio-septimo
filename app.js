let titulo = document.querySelector('h1');
titulo.innerHTML = 'CALCULADORA';


function Suma() {
    numero=0;
    t=0;
    while(true) {
        let numero=prompt("Ingrese un numero:");
        if(numero===null || numero==="") {
            break;
        }
        n=parseFloat(numero);
        t+=n;
    }
    alert(t);
}


function Resta(){
    numero=0;
    t=0;
    while(true) {
        let numero=prompt("Ingrese un numero:");
        if(numero===null || numero==="") {
            break;
        }
        n=parseFloat(numero);
        t-=n;
    }
    alert(t);
}
    



function Multiplicacion(){
    numero=0;
    t=1;
    while(true) {
        let numero=prompt("Ingrese un numero:");
        if(numero===null || numero==="") {
            break;
        }
        n=parseFloat(numero);
        t*=n;
    }
    alert(t);
}


function Division(){
    numero=0;
    while(true) {
        let numero=prompt("Ingrese un numero:");
        if(numero===null || numero==="") {
            break;
        }
        let numero1=prompt("Ingrese un numero:");
        n=parseFloat(numero);
        n1=parseFloat(numero1);
        if(n1==0){
            alert("No se puede dividir por 0");
        }
        else{ 
        alert(n/n1);
        }
    }
}

function Salir(){
    alert("Hasta la próxima");
    window.close();
}