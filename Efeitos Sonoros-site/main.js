function tocaSom(seletorAudio){
    const elemento=document.querySelector(seletorAudio);
    /*if (elemento===null){
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }
    if (elemento!=null){
        //console.log(elemento.localName==='audio');
        if(elemento.localName==='audio'){
        elemento.play();
        }        
    }*/
    if (elemento /*!=null*/ && elemento.localName==='audio'){
        elemento.play();
    }
    else{
            console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas=document.querySelectorAll('.tecla');

//let contador=0;
/*
while(contador<listaDeTeclas.length){
    const tecla=listaDeTeclas[contador];
    const instrumento=tecla.classList[1];
    const idAudio=`#som_${instrumento}`;
    console.log(idAudio);
    tecla.onclick=function(){
        tocaSom(idAudio);
    }
    contador=contador+1;
    console.log(contador);
}

for(let contador=0; contador<listaDeTeclas.length; contador++){
    const tecla=listaDeTeclas[contador];
    const instrumento=tecla.classList[1];
    const idAudio=`#som_${instrumento}`;
    tecla.onclick=function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown=function(){
        tecla.classList.add('ativa');
    }
    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }
    */
    for(let contador=0; contador<listaDeTeclas.length; contador++){
        const tecla=listaDeTeclas[contador];
        const instrumento=tecla.classList[1];
        const idAudio=`#som_${instrumento}`;
        tecla.onclick=function(){
            tocaSom(idAudio);
        }
        tecla.onkeydown=function(evento){            
            if(evento.code==='Space' || evento.code==='Enter'){
                tecla.classList.add('ativa');
            }
        }
        tecla.onkeyup=function(){
            tecla.classList.remove('ativa');
        }

}