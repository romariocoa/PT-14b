'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[0]
  console.log(pivot)
  const left = [];
  const rigth = [];
  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      left.unshift(array[i])
      console.log(left)
    } else {
      rigth.push(array[i])
      console.log(rigth)
    }
  }
  const orde = [];
  orde.push(...quickSort(left), pivot, ...quickSort(rigth));
  return orde;


}
console.log(quickSort([5, 3, 7, 1, 4, 9, 8, 2]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  const mitad = Math.floor(array.length / 2)
  console.log(mitad)
  let left = array.slice(0, mitad);
  console.log(left)
  let rigth = array.slice(mitad);
  console.log(rigth)
  array = []
  left = mergeSort(left)
  console.log(left)
  rigth = mergeSort(rigth)
  console.log(rigth)
  while (left.length && rigth.length) {
    if (left[0] < rigth[0]) {
      array.push(left.shift())
      console.log(array)
    } else array.push(rigth.shift())
    console.log(array)
  }

  array = array.concat(left, rigth)

  return array;

  console.log(mergeSort([9, 7, 3, 1, 5, 2, 6,]))
  // No modificar nada debajo de esta línea
  // --------------------------------

  module.exports = {
    quickSort,
    mergeSort,
  };
