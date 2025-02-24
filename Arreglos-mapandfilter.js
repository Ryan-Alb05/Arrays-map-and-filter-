let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cuadrados = numeros.map(num => num * num);
console.log("cuadrados:", cuadrados);

let mayoresa40 = cuadrados.filter(num => num > 40);
console.log("mayores a 40:", mayoresa40);