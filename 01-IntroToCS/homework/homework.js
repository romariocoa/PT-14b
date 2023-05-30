'use strict';

function BinarioADecimal(num) {

   let decimal = 0;

   for (let i = 0; i < num.length; i++) {

      decimal += (2 ** i) * parseInt(num.charAt(num.length - 1 - i), 2);;

   }
   return decimal;
}

function DecimalABinario(num) {
   let binario = num.toString(2);
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
