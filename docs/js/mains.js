const navNumberPrincipal = document.querySelector('.navNumberPrincipal');
const navNumberOption = document.querySelectorAll('.navNumberOption');
const navImage = document.querySelector('.navImage');
const matrixDeleteValue = document.querySelector("#btnEliminar");
const btnTutorial = document.querySelector('#btnTutorial');

let navImageOpen = false;
let matrixNumber = '2';
let resultado;
let matrixValues = []

// Nav Image btn
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

// Nav Number Options
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

    // console.log(matrixNumber, typeof matrixNumber);
    matrixCreateElement();
    
});

// * Check checkTutorialDiv

//  Delete Inputs Values
matrixDeleteValue.addEventListener('click', () => {
    const elem = document.querySelectorAll('#matrixValue');
    elem.forEach(elem => {elem.value='';});
    document.getElementById("btnResultado").innerText = ' ';
    let checkTutorialDiv = (document.getElementById("divTutorial") != null) ? btnTutorial.classList.add("disabled") + tutorialContent() : btnTutorial.classList.add("disabled");
});

// Create Inputs Elements

const matrixCreateElement = () => {
    matrixNumber = document.getElementById("value1").innerText;
    const contentNumber = document.querySelector("#contentNumber");
    const elem = document.querySelectorAll('#matrixValue');
    elem.forEach(elem => {elem.remove();});

    if(matrixNumber == '2'){
        for (let index = 0; index < 4  ; index++) {
            let divInput = document.createElement('input');
            divInput.setAttribute('type','number');
            divInput.id = 'matrixValue';
            divInput.className = 'contentNumberInput';
            divInput.setAttribute('onchange', 'matrixType();');
            contentNumber.className = 'contentNumber';
            document.getElementById('contentNumber').appendChild(divInput);
        }
    }else if(matrixNumber == '3'){
        for (let index = 0; index < 9  ; index++) {
            let divInput = document.createElement('input');
            divInput.setAttribute('type','number');
            divInput.id = 'matrixValue';
            divInput.className = 'contentNumberInput';
            divInput.setAttribute('required','');
            divInput.setAttribute('onchange', 'matrixType();');
            contentNumber.className = 'contentNumber2';
            document.getElementById('contentNumber').appendChild(divInput);
        }
    }else if(matrixNumber == '4'){
        for (let index = 0; index < 16  ; index++) {
            let divInput = document.createElement('input');
            divInput.setAttribute('type','number');
            divInput.id = 'matrixValue';
            divInput.className = 'contentNumberInput';
            divInput.setAttribute('onchange', 'matrixType();');
            contentNumber.className = 'contentNumber3';
            document.getElementById('contentNumber').appendChild(divInput);
        }
    }
    matrixType();
};

// Process
const matrixType = () => {
    matrixValues.splice(0,16,)
    let matrixNumber2Values = document.querySelectorAll('#matrixValue');
    matrixNumber2Values.forEach( key => {matrixValues.push(Number(key.value));});

    if(matrixNumber === '2'){
        resultado = (matrixValues[0] * matrixValues [3]) - (matrixValues[1] * matrixValues[2]);
    }else if(matrixNumber === '3'){
        resultado = ((matrixValues[0] * matrixValues [4] * matrixValues[8])+(matrixValues[1]*matrixValues[5]*matrixValues[6])+(matrixValues[2]*matrixValues[3]*matrixValues[7])) + ((-1 * matrixValues[2] * matrixValues [4] * matrixValues[6])+(-1 *matrixValues[1]*matrixValues[3]*matrixValues[8])+(-1*matrixValues[5]*matrixValues[7]*matrixValues[0]));
    }else if(matrixNumber === '4'){
        let dt1 = matrixValues[0]*((matrixValues[5] * matrixValues [10] * matrixValues[15])+(matrixValues[6]*matrixValues[11]*matrixValues[13])+(matrixValues[9]*matrixValues[14]*matrixValues[7]) + (-1 * matrixValues[7] * matrixValues [10] * matrixValues[13])+(-1 *matrixValues[6]*matrixValues[9]*matrixValues[15])+(-1*matrixValues[5]*matrixValues[11]*matrixValues[14]));
        let dt2 = -1*matrixValues[1]*((matrixValues[4] * matrixValues [10] * matrixValues[15])+(matrixValues[8]*matrixValues[14]*matrixValues[7])+(matrixValues[6]*matrixValues[11]*matrixValues[12]) + (-1 * matrixValues[7] * matrixValues [10] * matrixValues[12])+(-1 *matrixValues[6]*matrixValues[8]*matrixValues[15])+(-1*matrixValues[4]*matrixValues[11]*matrixValues[14]));
        let dt3 = matrixValues[2]*((matrixValues[4] * matrixValues [9] * matrixValues[15])+(matrixValues[8]*matrixValues[13]*matrixValues[7])+(matrixValues[5]*matrixValues[11]*matrixValues[12]) + (-1 * matrixValues[7] * matrixValues [9] * matrixValues[12])+(-1 *matrixValues[5]*matrixValues[8]*matrixValues[15])+(-1*matrixValues[11]*matrixValues[13]*matrixValues[4]));
        let dt4 = -1*matrixValues[3]*((matrixValues[4] * matrixValues [9] * matrixValues[14])+(matrixValues[8]*matrixValues[13]*matrixValues[6])+(matrixValues[5]*matrixValues[10]*matrixValues[12]) + (-1 * matrixValues[6] * matrixValues [9] * matrixValues[12])+(-1 *matrixValues[5]*matrixValues[8]*matrixValues[14])+(-1*matrixValues[10]*matrixValues[13]*matrixValues[4]));
        resultado = dt1 + dt2 + dt3 + dt4;    
    }
    document.getElementById("btnResultado").innerText = resultado;
    btnTutorial.classList.remove('disabled');
    let checkTutorial = (document.getElementById("divTutorial") !== null) ? tutorialContent() : undefined;
};

// Create Tutorial
btnTutorial.addEventListener('click', () => {tutorialContent();});
const tutorialContent = () => {
    if (document.getElementById("divTutorial") == null) {

        let divTutorial = document.createElement('div');
        divTutorial.className = 'divTutorial';
        divTutorial.id = 'divTutorial';
    
        let divTitle = document.createElement('h1');
        divTitle.innerHTML = 'Definición de determinante';
    
        let divTitleContent = document.createElement('p');
        divTitleContent.innerHTML = 'El determinante de una matriz 𝐴 de orden 𝑛, es un número escalar que se relaciona con la matriz, mediante una regla de operación. Denotada por 𝑑𝑒𝑡𝐴 = |𝐴|.'

        let divTitleH1 = document.createElement('h1');
        let divImage = document.createElement('img');
        let divImage2 = document.createElement('img');
        let divTitleH2 = document.createElement('h2');
        let divTitleH2Content = document.createElement('p');

        if(matrixNumber == 2){        
            divTitleH1.innerHTML = 'Determinantes de Segundo Orden';
        
            divImage.src = 'resources/tutorial/detOrden2.png';
        
            divTitleH2.innerText = 'En tu caso:'
        
            divTitleH2Content.innerHTML = "detA = (" + matrixValues[0] + '*' +  matrixValues [3] + ') - (' + matrixValues[1] + '*' + matrixValues[2] + ") <br> detA = ("+ matrixValues[0]*matrixValues[3] + ") - (" + matrixValues[1]*matrixValues[2] +") <br> detA = " + resultado;
                    
        }else if (matrixNumber == 3){
        
            divTitleH1.innerHTML = 'Determinantes de Tercer Orden';
        
            divImage.src = 'resources/tutorial/detOrden3.png';
            
            divImage2.src = 'resources/tutorial/detOrden3Sarrus.png';
                    
            divTitleH2.innerHTML = 'En tu caso usando la Regla de Sarrus:'
        
            divTitleH2Content.innerHTML = 
            "detA = ((" +
                matrixValues[0] + "*" + matrixValues[4] + "*" + matrixValues[8] + ") + (" +
                matrixValues[3] + "*" + matrixValues[7] + "*" + matrixValues[2] + ") + (" + 
                matrixValues[6] + "*" + matrixValues[1] + "*" + matrixValues[5] + ")) - ((" +
            
                matrixValues[3] + "*" + matrixValues[1] + "*" + matrixValues[8] + ") + (" +
                matrixValues[0] + "*" + matrixValues[7] + "*" + matrixValues[5] + ") + (" +
                matrixValues[6] + "*" + matrixValues[4] + "*" + matrixValues[2] + ")) <br>" + 
            "detA = ((" +
                matrixValues[0] * matrixValues[4] * matrixValues[8] + " + " + 
                matrixValues[3] * matrixValues[7] * matrixValues[2] + " + " +
                matrixValues[6] * matrixValues[1] * matrixValues[5] + ") - (" +      
                matrixValues[3] * matrixValues[1] * matrixValues[8] + " + " +
                matrixValues[0] * matrixValues[7] * matrixValues[5] + " + " +
                matrixValues[6] * matrixValues[4] * matrixValues[2] + ")) <br>" +      
            "detA = (" +
                (matrixValues[0] * matrixValues[4] * matrixValues[8] + 
                matrixValues[3] * matrixValues[7] * matrixValues[2] + 
                matrixValues[6] * matrixValues[1] * matrixValues[5]) + ") - (" +

                (matrixValues[3] * matrixValues[1] * matrixValues[8] + 
                matrixValues[0] * matrixValues[7] * matrixValues[5] + 
                matrixValues[6] * matrixValues[4] * matrixValues[2] ) +") <br>" +
            "detA = " + resultado;        
        }else if (matrixNumber == 4){

            divTitleH1.innerHTML = 'Determinantes de Cuarto Orden';
        
            divImage.src = 'resources/tutorial/detOrden4.png';
            divImage2.src = 'resources/tutorial/detOrden4-1.png';                
            divTitleH2.innerHTML = 'En tu caso:';

            let cofactorA11 = matrixValues[0]*((matrixValues[5] * (matrixValues[10] * matrixValues[15] - matrixValues[11] * matrixValues[14]) - matrixValues[6] * (matrixValues[9] * matrixValues[15] - matrixValues[11] * matrixValues[13]) + matrixValues[7] * (matrixValues[9] * matrixValues[14] - matrixValues[10] * matrixValues[13])));
            let cofactorA12 = (-matrixValues[1])*((matrixValues[4] * (matrixValues[10] * matrixValues[15] - matrixValues[11] * matrixValues[14]) + (-matrixValues[6]) * (matrixValues[8] * matrixValues[15] - matrixValues[11] * matrixValues[12]) + matrixValues[7] * (matrixValues[8] * matrixValues[14] - matrixValues[10] * matrixValues[12])));
            let cofactorA13 = matrixValues[2]*((matrixValues[4] * (matrixValues[9] * matrixValues[15]  - matrixValues[11] * matrixValues[14]) - matrixValues[5] * (matrixValues[8] * matrixValues[15] - matrixValues[11] * matrixValues[12]) - matrixValues[7] * (matrixValues[8] * matrixValues[13] - matrixValues[9]  * matrixValues[12])));
            let cofactorA14 = (-matrixValues[3])*((matrixValues[4] * (matrixValues[9] * matrixValues[14]  + (-matrixValues[10]) * matrixValues[14]) + (- matrixValues[5]) * (matrixValues[8] * matrixValues[14] - matrixValues[10] * matrixValues[12]) + matrixValues[6] * (matrixValues[8] * matrixValues[13] - matrixValues[9]  * matrixValues[12])));
           
            divTitleH2Content.innerHTML = 
                "𝐴11 = " + matrixValues[0]+"["+matrixValues[5]+"("+matrixValues[10]+"*"+matrixValues[15]+"-"+matrixValues[11]+"*"+matrixValues[14]+") - [" + (matrixValues[6])+"("+matrixValues[9]+"*"+matrixValues[15]+"-"+matrixValues[11]+"*"+matrixValues[13]+")] + " + matrixValues[7]+"("+matrixValues[9]+"*"+matrixValues[14]+"-"+matrixValues[10]+"*"+matrixValues[13] + ")] <br>" +
                    "𝐴11 = " + matrixValues[0]+"["+matrixValues[5]+"("+ (matrixValues[10] * matrixValues[15] - matrixValues[11] * matrixValues[14])+") - [" +(matrixValues[6])+"("+(matrixValues[9] * matrixValues[15] - matrixValues[11] * matrixValues[13])+")] + " + matrixValues[7]+"("+ (matrixValues[9] * matrixValues[14] - matrixValues[10] * matrixValues[13]) + ")] <br>" +
                        "𝐴11 = " + matrixValues[0]+"[("+matrixValues[5] * (matrixValues[10] * matrixValues[15] - matrixValues[11] * matrixValues[14])+") - (" +(matrixValues[6]) * (matrixValues[9] * matrixValues[15] - matrixValues[11] * matrixValues[13])+") + (" + matrixValues[7] * (matrixValues[9] * matrixValues[14] - matrixValues[10] * matrixValues[13]) + ")] <br>"+
                            "𝐴11 = " + matrixValues[0]+"["+(matrixValues[5] * (matrixValues[10] * matrixValues[15] - matrixValues[11] * matrixValues[14]) - matrixValues[6] * (matrixValues[9] * matrixValues[15] - matrixValues[11] * matrixValues[13]) + matrixValues[7] * (matrixValues[9] * matrixValues[14] - matrixValues[10] * matrixValues[13]))+"] <br>"+
                                "𝐴11 = " + cofactorA11 +"<br><br>"+
             
             
                 "𝐴12 = " + (-matrixValues[1])+"["+matrixValues[4]+"("+matrixValues[10]+"*"+matrixValues[15]+"-"+matrixValues[11]+"*"+matrixValues[14]+") - [" + (matrixValues[6])+"("+matrixValues[8]+"*"+matrixValues[15]+"-"+matrixValues[11]+"*"+matrixValues[12]+")] + " + matrixValues[7]+"("+matrixValues[8]+"*"+matrixValues[14]+"-"+matrixValues[10]+"*"+matrixValues[12] + ")] <br>" +
                    "𝐴12 = " + (-matrixValues[1])+"["+matrixValues[4]+"("+ (matrixValues[10] * matrixValues[15] - matrixValues[11] * matrixValues[14])+") - [" +(matrixValues[6])+"("+(matrixValues[8] * matrixValues[15] - matrixValues[11] * matrixValues[12])+")] + " + matrixValues[7]+"("+ (matrixValues[8] * matrixValues[14] - matrixValues[10] * matrixValues[12]) + ")] <br>" +
                        "𝐴12 = " + (-matrixValues[1])+"[("+matrixValues[4] * (matrixValues[10] * matrixValues[15] - matrixValues[11] * matrixValues[14])+") - (" +(matrixValues[6]) * (matrixValues[8] * matrixValues[15] - matrixValues[11] * matrixValues[12])+") + (" + matrixValues[7] * (matrixValues[8] * matrixValues[14] - matrixValues[10] * matrixValues[12]) + ")] <br>" +
                            "𝐴12 = " + (-matrixValues[1])+"["+(matrixValues[4] * (matrixValues[10] * matrixValues[15] - matrixValues[11] * matrixValues[14]) + (-matrixValues[6]) * (matrixValues[8] * matrixValues[15] - matrixValues[11] * matrixValues[12]) + matrixValues[7] * (matrixValues[8] * matrixValues[14] - matrixValues[10] * matrixValues[12]))+"] <br>"+
                                "𝐴12 = " + cofactorA12 +"<br><br>"+
             
             
                 "𝐴13 = " + matrixValues[2]+"["+matrixValues[4]+"("+matrixValues[9] +"*"+matrixValues[15]+"-"+matrixValues[11]+"*"+matrixValues[14]+") - [ " + (matrixValues[5])+"("+matrixValues[8]+"*"+matrixValues[15]+"-"+matrixValues[11]+"*"+matrixValues[12]+")] + " + matrixValues[7]+"("+matrixValues[8]+"*"+matrixValues[13]+"-"+matrixValues[9]+"*"+matrixValues[12] + ")] <br>" +
                    "𝐴13 = " + matrixValues[2]+"["+matrixValues[4]+"("+ (matrixValues[9] * matrixValues[15]  - matrixValues[11] * matrixValues[14])+") - [" +(matrixValues[5])+"("+(matrixValues[8] * matrixValues[15] - matrixValues[11] * matrixValues[12])+")] + " + matrixValues[7]+"("+ (matrixValues[8] * matrixValues[13] - matrixValues[9] * matrixValues[12]) + ")] <br>" +
                        "𝐴13 = " + matrixValues[2]+"[("+matrixValues[4] * (matrixValues[9] * matrixValues[15]  - matrixValues[11] * matrixValues[14])+") - (" +(matrixValues[5]) * (matrixValues[8] * matrixValues[15] - matrixValues[11] * matrixValues[12])+") + (" + matrixValues[7] * (matrixValues[8] * matrixValues[13] - matrixValues[9] * matrixValues[12]) + ")] <br>" +
                            "𝐴13 = " + matrixValues[2]+"["+(matrixValues[4] * (matrixValues[9] * matrixValues[15]  - matrixValues[11] * matrixValues[14]) - matrixValues[5] * (matrixValues[8] * matrixValues[15] - matrixValues[11] * matrixValues[12]) - matrixValues[7] * (matrixValues[8] * matrixValues[13] - matrixValues[9]  * matrixValues[12]))+"] <br>"+
                                "𝐴13 = " + cofactorA13 +"<br><br>"+
             
                "𝐴14 = " + (-matrixValues[3])+"["+matrixValues[4]+"("+matrixValues[9] +"*"+matrixValues[14]+"-"+matrixValues[10]+"*"+matrixValues[14]+") - [" + (matrixValues[5])+"("+matrixValues[8]+"*"+matrixValues[14]+"-"+matrixValues[10]+"*"+matrixValues[12]+")] + " + matrixValues[6]+"("+matrixValues[8]+"*"+matrixValues[13]+"-"+matrixValues[9]+"*"+matrixValues[12] + ")] <br>" + 
                   "𝐴14 = " + (-matrixValues[3])+"["+matrixValues[4]+"("+ (matrixValues[9] * matrixValues[14]  - matrixValues[10] * matrixValues[14])+") - [" +(matrixValues[5])+"("+(matrixValues[8] * matrixValues[14] - matrixValues[10] * matrixValues[12])+")] + " + matrixValues[6]+"("+ (matrixValues[8] * matrixValues[13] - matrixValues[9] * matrixValues[12]) + ")] <br> " +  
                       "𝐴14 = " + (-matrixValues[3])+"[("+matrixValues[4] * (matrixValues[9] * matrixValues[14]  - matrixValues[10] * matrixValues[14])+") - (" +(matrixValues[5]) * (matrixValues[8] * matrixValues[14] - matrixValues[10] * matrixValues[12])+") + (" + matrixValues[6] * (matrixValues[8] * matrixValues[13] - matrixValues[9] * matrixValues[12]) + ")] <br>" + 
                           "𝐴14 = " + (-matrixValues[3])+"["+(matrixValues[4] * (matrixValues[9] * matrixValues[14]  + (-matrixValues[10]) * matrixValues[14]) + (-matrixValues[5]) * (matrixValues[8] * matrixValues[14] - matrixValues[10] * matrixValues[12]) + matrixValues[6] * (matrixValues[8] * matrixValues[13] - matrixValues[9]  * matrixValues[12]))+"] <br>"+
                              "𝐴14 = " + cofactorA14 +"<br><br>"+
             
                "detA = (" + cofactorA11 +") + (" + cofactorA12 + ") + (" + cofactorA13 + ") + (" + cofactorA14 + ") <br> detA = " + resultado; 
        }

        document.getElementById('containerTutorial').appendChild(divTutorial);
        divTutorial.appendChild(divTitle);
        divTutorial.appendChild(divTitleContent);
        divTutorial.appendChild(divTitleH1);
        divTutorial.appendChild(divImage);
        divTutorial.appendChild(divImage2);
        divTutorial.appendChild(divTitleH2);
        divTutorial.appendChild(divTitleH2Content);

    }else {divTutorial.remove();}
};