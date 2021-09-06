"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var valores1 = new _impuestos["default"](2000, 1000);
console.log(valores1._monto_bruto_anual, valores1._deducciones);
valores1._monto_bruto_anual = 500000;
valores1._deducciones = 10000;
console.log(valores1._monto_bruto_anual, valores1._deducciones);
var cliente1 = new _cliente["default"]("Felipe", valores1);
console.log(cliente1._nombre, cliente1._impuesto);
console.log(cliente1.calcularImpuesto());