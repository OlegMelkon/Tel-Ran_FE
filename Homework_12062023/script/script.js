// 1
let d = 7;
for(i = 1; i <= 3; i++){
    console.log(d**i);       
}

// 2
let num = Number(prompt('Введите положительное число'));
if (num > 0) {
    console.log(num*2);
} else {
    console.log('Вы ввели не положительное число');    
}

// 3
let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
if (num1 > num2) {
    console.log(num1 + num2);
} 
else if (num2 > num1) {
    console.log(num1 * num2);
} 
else {
    console.log('числа одинаковые');
}

// 4
let num3 = Number(prompt('Введите число'));
if (num3 < 0) {
    console.log(num3**2);
} else {
    console.log('ошибка');
}

// 5
let pup = Number(prompt('Введите число учеников'));
let cha = Number(prompt('Введите число стульев'));
if (pup <= cha) {
    console.log('стульев хватает'); 
} else {
    console.log('стульев не хватает');
}

// 6
for(let i = 0; i <= 10; i++){
    if (i == 0){
        console.log('старт'); 
    } else if (i == 10) {
        console.log('финиш');  
    } else {
        console.log(i);
    }   
}

// 7
for(let i = 1; i <= 99; i++){
    if (i%5 == 0){
        console.log(i); 
    }
}

// 8
let array = [];
for(let i = 0; i <= 10; i++){
    if(i == 0 || i == 1){
        array[i] = 1;
    } else {
        array[i] = array[i-2] + array[i-1];
    }
    if(array[i] >= 15){
        console.log(array[i]);
    }
}

// 9
for(let i = 0; i < array.length; i++){
        if(array[i]%2 != 0){
        console.log(array[i]);
    }
}

// 10
for(let i = 0; i < array.length; i++){
    if(i%3 == 0){
    console.log(array[i]);
}
}


