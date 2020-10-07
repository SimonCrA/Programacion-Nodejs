
let conditionals = (N) => {

    
    if(N % 2 == 0){

        if(N >= 2 && N <= 5){
            //Si es par y esta entre 2 y 5 imprime Not Weird
            console.log('Not Weird')
        }else if(N >= 6 && N <= 20) {
            //Si es par y esta entre 6 y 20 imprime Weird
            console.log('Weird');
        }else if (N > 20) {
            //Si es par y mayor que 20 imprime Not Weird
            console.log('Not Weird')
        }
        
    }else {
        //si n es impar imprime weird
        console.log('Weird')
    }

};

conditionals(8);