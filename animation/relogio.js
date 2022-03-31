const deg = 6;
const degHora = 30;
const hora = document.querySelector("#hr");
const minuto = document.querySelector("#min");
const segundo = document.querySelector("#seg");

setInterval(() => {
  const date = new Date();

  hora.value = date.getHours();
  minuto.value = date.getMinutes();
  segundo.value = date.getSeconds();

  hora.style.transform = `rotateZ(${
    degHora * hora.value + minuto.value / 12
  }deg)`;
  minuto.style.transform = `rotateZ(${deg * minuto.value}deg)`;
  segundo.style.transform = `rotateZ(${deg * segundo.value}deg)`;
}, 1000);
