const navNumberPrincipal = document.querySelector('.navNumberPrincipal');
const navNumberOption = document.querySelectorAll('.navNumberOption');
const navImage = document.querySelector('.navImage');
const matrixDeleteValue = document.querySelector("#btnEliminar");
const btnTutorial = document.querySelector('#btnTutorial');

let navImageOpen = false;
let matrixNumber = 2;
let resultado;
let tutorialOpen = false;

navImage.addEventListener('click', () => {
    if (!navImageOpen) { 
        navImage.classList.add('open');
        navImageOpen = true;
        setTimeout(() => {navNumberOption.forEach(navNumberOption => {navNumberOption.classList.remove('disabled');});}, 300);
    } else {
        navImage.classList.remove('open');
        navImageOpen = false;
        setTimeout(() => {navNumberOption.forEach(navNumberOption => {navNumberOption.classList.add('disabled');});}, 300);
    }
});

navNumberOption[0].addEventListener('click', () =>{
    navImage.classList.remove('open');
    navImageOpen = false;
    navNumberOption.forEach(navNumberOption => {navNumberOption.classList.add('disabled');});
    matrixNumber = document.getElementById("value1").innerText;
    let matrixNumber2 = document.getElementById("value2").innerText;
    let matrixReplace = document.getElementById("value1").innerText = matrixNumber2;
    matrixNumber2 = document.getElementById("value2").innerText =  matrixNumber;
    matrixCreateElement();
});

navNumberOption[1].addEventListener('click', () =>{
    navImage.classList.remove('open');
    navImageOpen = false;
    navNumberOption.forEach(navNumberOption => {navNumberOption.classList.add('disabled');});
    
    
    matrixNumber = document.getElementById("value1").innerText;
    let matrixNumber2 = document.getElementById("value3").innerText;
    let matrixReplace = document.getElementById("value1").innerText = matrixNumber2;
    matrixNumber2 = document.getElementById("value3").innerText =  matrixNumber;
    
    matrixCreateElement();
    
});

// * btn Delete Button

matrixDeleteValue.addEventListener('click', () => {
    alert("Clicked");
    const elem = document.querySelectorAll('#matrixValue');
    elem.forEach(elem => {elem.value='';});
    document.getElementById("btnResultado").innerText = '0';

    if (document.getElementById("divTutorial") != null) {btnTutorial.classList.add("disabled");tutorialContent();}
    // tutorialContent();
});

const matrixCreateElement = () => {
    matrixNumber = document.getElementById("value1").innerText;
    const contentNumber = document.querySelector("#contentNumber");
    const elem = document.querySelectorAll('#matrixValue');
    elem.forEach(elem => {elem.remove();});

    if(matrixNumber == 2){
        for (let index = 1; index <= 4  ; index++) {
            let divInput = document.createElement('input');
            divInput.setAttribute('type','number');
            divInput.id = 'matrixValue';
            divInput.className = 'contentNumberInput';
            divInput.setAttribute('required','');
            divInput.setAttribute('onchange', 'matrixType2();');
            contentNumber.className = 'contentNumber';
            document.getElementById('contentNumber').appendChild(divInput);
        }
        matrixType2();
    }else if(matrixNumber == 3){
        for (let index = 1; index <= 9  ; index++) {
            let divInput = document.createElement('input');
            divInput.setAttribute('type','number');
            divInput.id = 'matrixValue';
            divInput.className = 'contentNumberInput';
            divInput.setAttribute('required','');
            divInput.setAttribute('onchange', 'matrixType3();');
            contentNumber.className = 'contentNumber2';
            document.getElementById('contentNumber').appendChild(divInput);
        }
        matrixType3();
    }else if(matrixNumber == 4){
        for (let index = 1; index <= 16  ; index++) {
            let divInput = document.createElement('input');
            divInput.setAttribute('type','number');
            divInput.id = 'matrixValue';
            divInput.className = 'contentNumberInput';
            divInput.setAttribute('required','');
            divInput.setAttribute('onchange', 'matrixType4();');
            contentNumber.className = 'contentNumber3';
            document.getElementById('contentNumber').appendChild(divInput);
        }
        matrixType4();
    }
};

const matrixType2 = () => {
    let value = [];
    let matrixNumber2Values = document.querySelectorAll('#matrixValue');
    matrixNumber2Values.forEach( key => {value.push(Number(key.value));});
    resultado = (value[0] * value [3]) - (value[1] * value[2]);
    document.getElementById("btnResultado").innerText = resultado;
    
    console.log(resultado);
    btnTutorial.classList.remove('disabled');

    if (document.querySelector("#divTutorial") !== null) {
        console.log("The element exists");
        divTutorial.remove();
    }
    else {
        console.log("The element does not exist");
    }
};

const matrixType3 = () => {
    let value = [];
    let matrixNumber2Values = document.querySelectorAll('#matrixValue');
    matrixNumber2Values.forEach( key => {value.push(Number(key.value));});
    resultado = ((value[0] * value [4] * value[8])+(value[1]*value[5]*value[6])+(value[2]*value[3]*value[7])) + ((-1 * value[2] * value [4] * value[6])+(-1 *value[1]*value[3]*value[8])+(-1*value[5]*value[7]*value[0]));
    document.getElementById("btnResultado").innerText = resultado;
    
};

const matrixType4 = () => {
    console.clear();
    let value = [];
    let matrixNumber2Values = document.querySelectorAll('#matrixValue');
    matrixNumber2Values.forEach( key => {value.push(Number(key.value));});
    let dt1 = value[0]*((value[5] * value [10] * value[15])+(value[6]*value[11]*value[13])+(value[9]*value[14]*value[7]) + (-1 * value[7] * value [10] * value[13])+(-1 *value[6]*value[9]*value[15])+(-1*value[5]*value[11]*value[14]));
    let dt2 = -1*value[1]*((value[4] * value [10] * value[15])+(value[8]*value[14]*value[7])+(value[6]*value[11]*value[12]) + (-1 * value[7] * value [10] * value[12])+(-1 *value[6]*value[8]*value[15])+(-1*value[4]*value[11]*value[14]));
    let dt3 = value[2]*((value[4] * value [9] * value[15])+(value[8]*value[13]*value[7])+(value[5]*value[11]*value[12]) + (-1 * value[7] * value [9] * value[12])+(-1 *value[5]*value[8]*value[15])+(-1*value[11]*value[13]*value[4]));
    let dt4 = -1*value[3]*((value[4] * value [9] * value[14])+(value[8]*value[13]*value[6])+(value[5]*value[10]*value[12]) + (-1 * value[6] * value [9] * value[12])+(-1 *value[5]*value[8]*value[14])+(-1*value[10]*value[13]*value[4]));
    
    console.log(dt1,dt2,dt3, dt4);
    resultado = dt1 + dt2 + dt3 + dt4;
    document.getElementById("btnResultado").innerText = resultado;
};

btnTutorial.addEventListener('click', () => {

    // Swal.fire(
    //     '!El Tutorial dinámico se ha creado con éxito¡',
    //     'Revisa debajo y encontrarás un tutorial hermoso :)',
    //     'success'
    // )
    tutorialContent();
});

// a = false //  if (!a) <=> if (!a == true)

const tutorialContent = () => {

    if (document.getElementById("divTutorial") == null) {
        let value = [];
        let matrixNumber2Values = document.querySelectorAll('#matrixValue');
        matrixNumber2Values.forEach( key => {value.push(Number(key.value));});
        console.table(value);

        if(matrixNumber == 2){
            let divTutorial = document.createElement('div');
            divTutorial.className = 'divTutorial';
            divTutorial.id = 'divTutorial';
        
            let divTitle = document.createElement('h1');
            divTitle.innerHTML = 'Definición de determinante';
        
            let divTitleContent = document.createElement('p');
            divTitleContent.innerHTML = 'El determinante de una matriz 𝐴 de orden 𝑛, es un número escalar que se relaciona con la matriz, mediante una regla de operación. Denotada por 𝑑𝑒𝑡𝐴 = |𝐴|.'
        
            let divTitleH1 = document.createElement('h1');
            divTitleH1.innerHTML = 'Determinantes de Segundo Orden';
        
            let divImage = document.createElement('img');
            divImage.src = 'resources/tutorial/detOrden2.png';
        
            let divTitleH2 = document.createElement('h2');
            divTitleH2.innerHTML = 'En tu caso:'
        
            let divTitleH2Content = document.createElement('p');
            divTitleH2Content.innerHTML = "detA = (" + value[0] + '*' +  value [3] + ') - (' + value[1] + '*' + value[2] + ") <br> detA = ("+ value[0]*value[3] + ") - (" + value[1]*value[2] +") <br> detA = " + resultado;
        
            document.getElementById('containerTutorial').appendChild(divTutorial);
            divTutorial.appendChild(divTitle);
            divTutorial.appendChild(divTitleContent);
            divTutorial.appendChild(divTitleH1);
            divTutorial.appendChild(divImage);
            divTutorial.appendChild(divTitleH2);
            divTutorial.appendChild(divTitleH2Content);
            
            // tutorialOpen = true;
        }

    }
    else {
        divTutorial.remove();
    }
}