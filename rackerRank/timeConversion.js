'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let periodo = s.slice(-2);
    let meiota = s.slice(3, 8);
    let hora = parseInt(s.slice(0,2));
    if(periodo == 'AM' && hora ==12){
        hora = '00';
    }else if(periodo == 'AM' && hora !=12){
        hora = '0' + hora; 
    }else if(periodo == 'PM' && hora != 12){
        hora = hora + 12; 
        toString(hora);
    }
    return hora + ':' + meiota;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
