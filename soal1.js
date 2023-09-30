// soal1.js

// Mengimpor modul geometry.js
const geometry = require('./geometry');

// Menggunakan fungsi-fungsi dari modul geometry.js
const squareSide = 5;
const squareArea = geometry.calculateSquareArea(squareSide);
const squarePerimeter = geometry.calculateSquarePerimeter(squareSide);

console.log('Persegi:');
console.log('Luas:', squareArea);
console.log('Keliling:', squarePerimeter);

const rectangleLength = 7;
const rectangleWidth = 4;
const rectangleArea = geometry.calculateRectangleArea(rectangleLength, rectangleWidth);
const rectanglePerimeter = geometry.calculateRectanglePerimeter(rectangleLength, rectangleWidth);

console.log('\nPersegi Panjang:');
console.log('Luas:', rectangleArea);
console.log('Keliling:', rectanglePerimeter);