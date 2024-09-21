const  SendButton=document.getElementById('SendButton');
const dniUser=document.getElementById('dniUser');
const passwordUser=document.getElementById('passwordUser');
const message=document.getElementById('message');
const inicio=document.querySelector('.inicio');
const menu=document.querySelector('.menu');
const saldo=document.querySelector('.saldo');
const deposito=document.querySelector('.deposito');
const retiro=document.querySelector('.retiro');
const btnSaldo=document.querySelector('.btnSaldo');
const btnDeposito=document.querySelector('.btnDeposito');
const btnRetiro=document.querySelector('.btnRetiro');
const btnSalir=document.querySelector('.btnSalir');
const btnRegresar=document.getElementById('btnRegresar');
const btnSalirDeposito=document.getElementById('btnSalirDeposito');
const ingresarMonto=document.getElementById('ingresarMonto');
const btnIngresarMonto=document.getElementById('btnIngresarMonto');
const mensajeexito=document.getElementById('mensajeexito');
const montoRetiro=document.getElementById('montoRetiro');
const btnMontoRetiro=document.getElementById('btnMontoRetiro');
const mensajeretiro=document.getElementById('mensajeretiro');
const btnRegresarRetiro=document.getElementById('btnRegresarRetiro');
const btnSalirRetiro=document.getElementById('btnSalirRetiro');
const btnRegresarSaldo=document.getElementById('btnRegresarSaldo');
const btnSalirSaldo=document.getElementById('btnSalirSaldo');



let cuentas=[
            {nombre:"mali", saldo:200,password:"123",dni:123},
            {nombre:"betty", saldo:200,password:"12343",dni:1237778},
            {nombre:"hall", saldo:400,password:"12",dni:12}
            ];

let posicionUsuario;
let totalSaldo;

SendButton.addEventListener('click',validacion);
btnSaldo.addEventListener('click',consultaSaldo);
btnDeposito.addEventListener('click',realizarDeposito);
btnRetiro.addEventListener('click',realizarRetiro);
btnSalir.addEventListener('click',salir);
btnIngresarMonto.addEventListener('click',hacerDeposito);
btnRegresar.addEventListener('click',buttonRegresar);
btnMontoRetiro.addEventListener('click',btnMontoRetiroCuenta);
btnSalirDeposito.addEventListener('click',buttonSalirDeposito);
btnRegresarSaldo.addEventListener('click',buttonRegresarSaldo);
btnSalirSaldo.addEventListener('click',buttonbtnSalirSaldo);
btnRegresarRetiro.addEventListener('click',buttonRegresarRetiro);
btnSalirRetiro.addEventListener('click',buttonSalirRetiro);

function validacion(){
    
    for(i=0; i<cuentas.length;i++){
        message.innerHTML=''
        if(dniUser.value ==cuentas[i].dni  && passwordUser.value==cuentas[i].password){
            cambiarVista(inicio,menu)
            posicionUsuario=i;
        }
        else if(dniUser.value=='' || passwordUser.value==''){

            message.innerHTML=`<h2>complete todos los campos</h2>`
        }
        else{
            message.innerHTML=`<h2>DNI y contraseña incorrecto</h2>`            
        }       
    }
    dniUser.value='' 
    passwordUser.value=''
}

function cambiarVista(ocultar,mostrar){
    ocultar.classList.add('ocultar')
    mostrar.classList.remove('ocultar')
}

function consultaSaldo(){
    cambiarVista(menu,saldo)    
    verSaldo.innerHTML='<div class="mensajeSaldo"><h2>Bienvenido ' +(cuentas[posicionUsuario].nombre)+'<br> el saldo en su cuenta es <p>s/ '+cuentas[posicionUsuario].saldo+'</p></h2></div>';
}

function realizarDeposito(){
    cambiarVista(menu,deposito);
}

function hacerDeposito(){
    if(ingresarMonto.value==''){
        mensajeexito.innerHTML=`<h2>no se ha ingresado ningun monto</h2>`
    } else
    {
        totalSaldo=Number(ingresarMonto.value)+ Number(cuentas[posicionUsuario].saldo);
        mensajeexito.innerHTML='<h2>el monto ingresado es s/ '+ingresarMonto.value+'<br> su nuevo saldo es s/ '+totalSaldo+'</h2>'; 
    }    
}
/*funcion del boton regresar al menu */
function buttonRegresar(){
    cambiarVista(deposito,menu)
    ingresarMonto.value='';
    mensajeexito.innerHTML='';
}
/*funcion del boton salir y regresar al inicio */
function buttonSalirDeposito(){
    cambiarVista(deposito,inicio)
}

function buttonRegresarSaldo(){
    cambiarVista(saldo,menu)
}
function buttonbtnSalirSaldo(){
    cambiarVista(saldo,inicio)
}

function realizarRetiro(){
    cambiarVista(menu,retiro)    
}

function btnMontoRetiroCuenta(){
    if(montoRetiro.value==''){
        mensajeexito.innerHTML=`<h2>no se ha ingresado ningun monto</h2>`
    } else
    {
        totalSaldo=Number(cuentas[posicionUsuario].saldo)-Number(montoRetiro.value);
        mensajeretiro.innerHTML='<h2>el monto ingresado es s/ '+montoRetiro.value+'<br> su nuevo saldo es s/ '+totalSaldo+'</h2>'; 
    }   
    
}
function buttonRegresarRetiro(){
    cambiarVista(retiro,menu)
    montoRetiro.value='';
    mensajeretiro.innerHTML='';
}
function buttonSalirRetiro(){
    cambiarVista(retiro,inicio)
}


function salir(){
    cambiarVista(menu,inicio)
}
