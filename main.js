const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

const datosViaje = {
  Cuzco:     { simbolo: "S/",   cambio: 370 / 27 },
  Rio:       { simbolo: "R$",   cambio: 370 / 5 },
  Miami:     { simbolo: "US$",  cambio: 370 / 1 },
  Barcelona: { simbolo: "€",    cambio: 370 / 1.1 },
  Tokio:     { simbolo: "¥",    cambio: 370 / 150 },
  "Dubái":   { simbolo: "AED",  cambio: 100 },       // 1 AED ≈ 100 ARS
  "El Cairo":{ simbolo: "E£",   cambio: 370 / 30 },  // 1 E£ ≈ 30 ARS (aprox)
  "Sídney":  { simbolo: "A$",   cambio: 370 / 1.5 }  // 1.5 AUD ≈ 1 USD
};

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const destino = document.getElementById("destino").value;
  const dias = parseInt(document.getElementById("dias").value);

  if (!destino) {
    resultado.innerHTML = "Por favor, seleccioná una ciudad.";
    return;
  }

  const info = datosViaje[destino];
  const dineroExtranjero = 100 * dias;
  const pesosArg = Math.round(dineroExtranjero * info.cambio);

  resultado.innerHTML = `
    Necesitás ${info.simbolo}${100} por día para estar tranquilo.<br>
    Entonces juntá ${pesosArg} pesos argentinos.
  `;
});