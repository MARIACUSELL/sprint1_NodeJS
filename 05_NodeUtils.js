// NIVELL 1

//Exercici 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require("fs");

function writeLine() {
  let writeText = "I'm trying to learn code";

  fs.writeFile("./05_file1.txt", writeText, (err) => {
    if (err) {
      console.log(error);
    } else {
      console.log("Line saved!");
    }
  });
}
//Exercici 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

function printFile() {
  fs.readFile("./05_file1.txt", (err, datos) => {
    if (err) {
      console.log(error);
    } else {
      console.log(datos.toString());
    }
  });
}
writeLine();
printFile();

// Exercici 3
//Crea una funció que comprimeixi el fitxer del nivell 1 (gzip)

const { createReadStream, createWriteStream } = require("fs");
const { createGzip } = require("zlib");

function compressFile(filePath) {
  const stream = createReadStream(filePath);
  stream
    .pipe(createGzip())
    .pipe(createWriteStream(`${filePath}.gz`))
    .on("finish", () =>
      console.log(`Successfully compressed the file at ${filePath}`)
    );
}

compressFile("./05_file1.txt");

// NIVELL 2

// Exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
// Ho aturo als 8 segons

const { setInterval, setTimeout } = require("timers");

async function recursiveFunction() {
  try {
    const timer = setInterval(() => console.log("Printing every second"), 1000);
    setTimeout(() => {
      clearInterval(timer);
      console.log("Stop");
    }, 8000);
  } catch (err) {
    console.log(err.message);
  }
}
recursiveFunction();

//- Exercici 2
//Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador
//utilizant Node Child Processes.
// NOTA: EM RESULTA IMPOSSIBLE D'ENTENDRE EN UN DIA
/* 
const { spawn } = require("child_process");
const ls = spawn("ls", ["-lh", "/usr"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
 */
// NIVELL 3
// NOTA: IMPOSSIBLE D'ENTENDRE EN UN DIA
