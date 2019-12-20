let a = 5;
let b = 5;
let c = 5;


if (a === '' || b === '' || c === '' || typeof a === 'undefined' || typeof b === 'undefined' || typeof c === 'undefined') {
    alert('Input values should be ONLY numbers');
}
else if (a == 0 || b == 0 || c == 0) {
    alert('A triangle must have 3 sides with a positive definite length');
}
else if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        console.log('Equilateral triangle');
    }
    else if (a == b || b == c || a == c) {
        console.log('Isosceles triangle');
    }
    else {
        console.log('Scalene triangle');
    }
}


