//EXEMPLES CALLBACKS I SETTIMEOUTS

function sum(a, b) {
  console.log(a + b);
}
setTimeout(function () {
  sum(2, 2);
}, 3000);

sum(4, 4);

///////Exemple

function saludar(nombre) {
  console.log("Hola " + nombre);
}

function recibirInvitadoJuan(callback) {
  var invitado = "Juan";
  callback(invitado);
}

recibirInvitadoJuan(saludar); // Hola Juan

///////Exemple

function saludar(nombre) {
  console.log("Hola " + nombre);
}

function recibirJuanMasTarde(callback) {
  setTimeout(function () {
    var invitado = "Juan";
    callback(invitado);
  }, 5000);
}

recibirJuanMasTarde(saludar);
// ... (Espera por 5 segundos)
// Hola Juan

//EXEMPLE FUNCTION ASYNC

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then((valor) => {
  console.log(valor);
});
