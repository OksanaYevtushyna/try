let a = parseInt(prompt('Please, enter a first value'));
let b = parseInt(prompt('Please, enter a second value'));
let c = parseInt(prompt('Please. enter a third value'));

let discriminant = b * b - 4 * a * c;
let scqDisc = Math.sqrt(discriminant);
let denomin = 2 * a;


if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
}
else if (a == 0 || b == 0 || c == 0) {
    console.log('Invalid input data');
}
else if (discriminant < 0) {
    console.log('No solution');
}
else if (discriminant == 0) {
    console.log((- b + scqDisc) / denomin);
}
else {
    let x1 = (- b + scqDisc) / denomin;
    let x2 = (- b - scqDisc) / denomin;
    console.log(x1);
    console.log(x2);
}
