// geometry.js

// Fungsi untuk menghitung luas persegi
const calculateSquareArea = (side) => {
  return side * side;
};

// Fungsi untuk menghitung keliling persegi
const calculateSquarePerimeter = (side) => {
  return 4 * side;
};

// Fungsi untuk menghitung luas persegi panjang
const calculateRectangleArea = (length, width) => {
  return length * width;
};

// Fungsi untuk menghitung keliling persegi panjang
const calculateRectanglePerimeter = (length, width) => {
  return 2 * (length + width);
};

// Ekspor fungsi-fungsi agar bisa diakses di luar modul
module.exports = {
  calculateSquareArea,
  calculateSquarePerimeter,
  calculateRectangleArea,
  calculateRectanglePerimeter,
};