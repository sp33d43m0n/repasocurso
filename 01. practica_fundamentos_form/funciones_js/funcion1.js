//0,1,2,3,4,5//
for (var i=0; i<5; i++){
    console.log("salida 1:", i);
}

//salida 1,3,5//
for (var i=0; i<5; i++){
    i = i+1;
    console.log("salida 2:", i);
} 

//function y//
function y(num1,num2){
    return num1 + num2;
}

// salida 5//
console.log("salida 3a:", y(2,3))
//salida 8//
console.log("salida 3b:",y(3,5))

// x=5, x=8//
function x(num1, num2) {
    console.log("salida 4:", num1);
    return num1 + num2;
}

console.log("salida 5a:", x(2,3))
console.log("salida 5b:", x(3,5))

//z=15//
a=15;
console.log("salida 6:", a);
function z(a){
    console.log("salida 7:", a);
    return a;
}