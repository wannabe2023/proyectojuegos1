//inicializacion de variables
let TarjetasDestapadas=0;
let tarjeta1= null;
let tarjeta2= null;
let PrimerResultado = null;
let SegundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador= false;
let timer = 70;
let TimerInicial = 70; 
let TiempoRegresivoId= null;


//no ejecuta

// let winAudio = new Audio("./sonidos/win.wav");
// let lowAudio = new Audio("./sonidos/low.wav");
// let bendicionAudio = new Audio("./sonidos/bendicion.mp3");
// let pipipiAudio = new Audio("./sonidos/pipipi.mp3");
// let clicAudio = new Audio("./sonidos/clic.wav");

//Apuntando al documento HTML
let MostrarMovimientos= document.getElementById('movimientos');
let MostrarAciertos= document.getElementById('aciertos');
let MostrarTiempo= document.getElementById('t-restante');


//generacion de nuemros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros=numeros.sort(()=>{return Math.random()-0.5}); /* sort es ordenar de acuerso a una fucion o resultados*/
console.log(numeros);


//funciones
function ContarTiempo(){
    TiempoRegresivoId = setInterval(()=>{
        timer--;
        MostrarTiempo.innerHTML=`Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(TiempoRegresivoId);
            BloquearTarjetas();
            // pipipiAudio.play();

        }


    },1000)
}

function BloquearTarjetas(){
    for(let i= 0; i<=15; i++){
        let TarjetaBloqueada = document.getElementById(i);
        TarjetaBloqueada.innerHTML = numeros[i];
        TarjetaBloqueada.disabled = true; 
    }
}

//Funcion principal

function destapar(id){

    if(temporizador == false){
        ContarTiempo();
        temporizador = true;
    }




    TarjetasDestapadas++;
    console.log(TarjetasDestapadas);

    if(TarjetasDestapadas == 1){
        tarjeta1= document.getElementById(id); //elemnto id del boton html 
        PrimerResultado= numeros[id];
        tarjeta1.innerHTML = PrimerResultado; //  imprime en html el valor de id                    hace comparar los Id de los botones del html con los valores de array
         
        // clicAudio.play();
        //Desabilitar primer boton
        tarjeta1.disabled=true;

    }else if(TarjetasDestapadas == 2){
        tarjeta2=document.getElementById(id);
        SegundoResultado=numeros[id];
        tarjeta2.innerHTML=SegundoResultado;

        //Desabilitar segundo botom
        tarjeta2.disabled=true;

        //Incrementar Movimientos
        movimientos++;
        MostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(PrimerResultado == SegundoResultado){
            //encerrar contador tarjetas destapadas
            TarjetasDestapadas=0;

            //aumentar aciertos
            aciertos ++;
            MostrarAciertos.innerHTML= `Aciertos: ${aciertos}`;
            // winAudio.play();

            if(aciertos == 8){
                // bendicionAudio.play();
                clearInterval(TiempoRegresivoId);
                MostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
                MostrarTiempo.innerHTML = `Lo lograstes te demorastes ${TimerInicial-timer} segundos`;
                MostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;


            }

        }else{
            // lowAudio.play();
            //mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                TarjetasDestapadas = 0;
            },800)
        }

    
     
    }

    
}