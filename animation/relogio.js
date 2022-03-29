const deg = 6;
const degHora = 30;
const hora = document.querySelector("#hr");
const minuto = document.querySelector("#min");
const segundo = document.querySelector("#seg");

hora.value = 1;
minuto.value = 1;
segundo.value = 1;

setInterval(() => {
  segundo.style.transform = `rotateZ(${deg * segundo.value}deg)`;
  segundo.value++;
}, 1000);

setInterval(() => {
  minuto.style.transform = `rotateZ(${deg * minuto.value}deg)`;
  minuto.value++;
}, 60 * 1000);

setInterval(() => {
  hora.style.transform = `rotateZ(${degHora * hora.value}deg)`;
  hora.value++;
}, 60 * 60 * 1000);
