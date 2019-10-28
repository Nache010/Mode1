
var total = 0;
var abierto = false;
var js1 = document.querySelector('.js1');
js1.addEventListener('click',function(){
    if(!abierto && total == 0){
        var ens = document.querySelector('.seleccionar1');
        ens.classList.remove('hidden');
        abierto=true;
        total = 1;
    } else {
        var abs = document.querySelector('.seleccionar1');
        abs.classList.add('hidden');
        abierto = false;
        if(total == 1){
            total = 0;
        }
    }
    
});

var abierto2 = false;
var js2 = document.querySelector('.js2');
js2.addEventListener('click',function(){
    if(!abierto2 && total == 0){
        var ens = document.querySelector('.seleccionar2');
        ens.classList.remove('hidden');
        abierto2=true;
        total = 2;
    } else {
        var abs = document.querySelector('.seleccionar2');
        abs.classList.add('hidden');
        abierto2 = false;
        if(total == 2){
            total = 0;
        }
    }
    
});


var abierto3 = false;
var js3 = document.querySelector('.js3');
js3.addEventListener('click',function(){
    if(!abierto3 && total == 0){
        var ens = document.querySelector('.seleccionar3');
        ens.classList.remove('hidden');
        abierto3 = true;
        total = 3;
    } else {
        var abs = document.querySelector('.seleccionar3');
        abs.classList.add('hidden');
        abierto3 = false;
        if(total == 3){
            total = 0;
        } 
    }
    
});
    