'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let maiorZero = 0, menorZero = 0, zero = 0;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i]> 0){
            maiorZero++;
        }else if(arr[i] < 0){
            menorZero++;
        }else if(arr[i] === 0){
            zero++;
        }else return "Error"
    } 
    console.log((maiorZero/arr.length).toFixed(6));
    console.log((menorZero/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
