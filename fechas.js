'use strict'

var fecha= new Date();
var año= fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var tiempo = fecha.getTime();


var texhora = ` 
    el año es : ${año}</br>
    el mes es : ${mes+1}</br>
    el dia es : ${dia}</br>
    la hora es : ${hora}</br>
    los minutos son : ${minutos}</br>
    los segundos son: ${segundos}</br>
    el tiempo es : ${tiempo}</br>

`
var divfecha = document.querySelector('#fecha');

divfecha.innerHTML = `<p>La fecha de hoy es : </p>
<hr>
${texhora}
`
console.log(Math.sin(360));
