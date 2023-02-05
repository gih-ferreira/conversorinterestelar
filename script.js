var nome = prompt("Informe seu nome");
var valorEmAnosLuz = prompt("Informe um valor");
var anosLuzEmKm = 9460800000000;
var anosLuzEmMetros = 9460800000000000;

var valorEmMetros = (valorEmAnosLuz * anosLuzEmMetros).toFixed(2);
var valorEmKm = (valorEmAnosLuz * anosLuzEmKm).toFixed (2);

alert('Olá, ' + nome + '! ' + valorEmAnosLuz + ' Corresponde em metros: ' + valorEmMetros + ' e ' + ' Corresponde em Km: ' + valorEmKm);
