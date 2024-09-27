function MidpointRule(x) {
    return 4 * x - x * x;
}

let step = 1;

function Integration(minX, maxX, F) {
    var summ = 0;
    for (let x = minX; x < maxX; x += step) {
        summ += F(x);
    }
    return summ;
}

let minX = Number(prompt('Input minX:', 0)); 
let maxX = Number(prompt('Input maxX:', 0)); 
let integrationX = Integration(minX, maxX, MidpointRule);
alert('Function: ' + integrationX);