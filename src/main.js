import Impuesto from "./impuestos.js";
import Cliente from "./cliente.js";

const valores1 = new Impuesto(2000, 1000);
console.log(valores1._monto_bruto_anual, valores1._deducciones);
valores1._monto_bruto_anual = 500000;
valores1._deducciones = 10000;
console.log(valores1._monto_bruto_anual, valores1._deducciones);

const cliente1 = new Cliente("Felipe", valores1);

console.log(cliente1._nombre, cliente1._impuesto);
console.log(cliente1.calcularImpuesto());
