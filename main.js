// Esto no va a ser mi parte de mi proyecto, como todavía no conozco lo suficiente
// Como para implementarlo en mi proyecto, hice esto.
function ingresarDatosAlumno() {
  let nombre = prompt("Ingrese el nombre del alumno");
  let curso = prompt("Ingrese el curso del alumno");
  return { nombre, curso };
}

function calcularNotas(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function aprobadoNoAprobado(promedio) {
  if (promedio >= 6) {
    console.log(`El alumno está aprobado`);
  } else {
    console.log(`El alumno está desaprobado`);
  }
}

function main() {
  let opcion;
  do {
    const alumno = ingresarDatosAlumno();
    console.log(`Alumno: ${alumno.nombre}`);
    console.log(`Curso: ${alumno.curso}`);

    let nota1 = parseFloat(prompt("Ingrese la primera nota"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota"));

    console.log(`Notas ingresadas: ${nota1}, ${nota2}, ${nota3}`);

    let promedio = calcularNotas(nota1, nota2, nota3);
    console.log(`Promedio Final: ${promedio}`);

    aprobadoNoAprobado(promedio);

    opcion = prompt("Ingresar 'SALIR' para finalizar");
  } while (opcion !== "SALIR");
}
main();
