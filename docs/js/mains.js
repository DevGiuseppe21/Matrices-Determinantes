// TODO: Crear una condición que haga posible abrir y cerrar la imagen del menu para mostrar las opciones.

const navNumberPrincipal = document.querySelector('.navNumberPrincipal');
const navNumberOption = document.querySelectorAll('.navNumberOption');
const navImage = document.querySelector('.navImage');
let navImageOpen = false;
let matrixNumber;

navImage.addEventListener('click', () => {
    if (!navImageOpen) { 
        navImage.classList.add('open');
        navImageOpen = true;
        navNumberOption.forEach(navNumberOption => {navNumberOption.classList.remove('disabled');});
    } else {
        navImage.classList.remove('open');
        navImageOpen = false;
        navNumberOption.forEach(navNumberOption => {navNumberOption.classList.add('disabled');});
    }
});

navNumberOption[0].addEventListener('click', () =>{
    navImage.classList.remove('open');
    navImageOpen = false;
    navNumberOption.forEach(navNumberOption => {navNumberOption.classList.add('disabled');});
    
    matrixNumber = document.getElementById("value1").innerText;
    let matrixReplace = document.getElementById("value2").innerText;
    let matrixReplace2 = document.getElementById("value1").innerText = matrixReplace;
    matrixReplace = document.getElementById("value2").innerText =  matrixNumber;

    console.log(matrixNumber, typeof matrixNumber);
    matrixElement();
});

navNumberOption[1].addEventListener('click', () =>{
    navImage.classList.remove('open');
    navImageOpen = false;
    navNumberOption.forEach(navNumberOption => {navNumberOption.classList.add('disabled');});
    
    
    matrixNumber = document.getElementById("value1").innerText;
    let matrixReplace = document.getElementById("value3").innerText;
    let matrixReplace2 = document.getElementById("value1").innerText = matrixReplace;
    matrixReplace = document.getElementById("value3").innerText =  matrixNumber;

    console.log(matrixNumber, typeof matrixNumber);
    matrixElement();
    
});

const matrixElement = () => {
    let matrixTypeNumber = document.getElementById("value1").innerText;
    if( matrixTypeNumber == "2"){
        console.log("Matriz de orden 2");
    }else if(matrixTypeNumber == "3"){
        console.log("Matriz de orden 3");
    }else if(matrixTypeNumber == "4"){
        console.log("Matriz de orden 4");
    }else{
        alert("No arroja nada :c");
    }
}

// * btn Delete Button
const message = () => {
    alert("Message Onclick");
}