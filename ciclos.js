/**
 * 
 Ciclos- bucles - loops


 while 
 Do While
 For

 */


 /**WHILE
  * 
  * let condicion =1;//Valor inicial

    while(condicion){
    *tu codigo
    modificacion a nuestro valor inicial
 }

  */


 //Imprimir numeros del 1 - 10

 let condicion = 1;//Vale uno

 while (condicion <= 10){//se evalua condicion y si cumple se mete a las instrucciones
     console.log(condicion);// se imprime condicion
     condicion++;
    // condicion = condicion + 1;// se le suma a condicion 1 y ahora ya vele 2 

 }



 //let numero = 1;
 //numero++;
 //console.log(numero);


 /*
 DO WHILE
 */


 let numero = 1;// valor de 1

 do{
     console.log(numero); //imprime 1
     numero++;//incremento de numero
 }while(numero<=20);//hacemos la condicion



  /*
 ciclo FOR
 */
 for (let control = 1; control <=10; control++ ) {//se asiga a la variable control 1, se hace la comparacion y se incremente
     console.log(control);//se imprime el valor
     
 }


/*Example */

const comidas =  ["Pozole", "Tacos", "Tamales", "Tortas"];

for(let i =0; i<=comidas.length; i++){
    console.log(comidas[i]);
}





 