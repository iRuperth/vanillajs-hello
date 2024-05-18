
function GeneradorDeExcusas() {
    let Pronombre = ["Mi", "Mi", "Mi", "Mi"];
    let Sujetos = ["gata", "alien", "abuelita", "elefanta"];
    let Verbos = ["se cayó", "se durmió", "se escapó", "se enfermó"];
    let Adjetivos = ["ahora", "ayer", "hace una semana", "el siglo pasado"];

    let PronombreAleatorio = Pronombre[Math.floor(Math.random() * Pronombre.length)];
    let SujetoAleatorio = Sujetos[Math.floor(Math.random() * Sujetos.length)];
    let VerboAleatorio = Verbos[Math.floor(Math.random() * Verbos.length)];
    let AdjetivoAleatorio = Adjetivos[Math.floor(Math.random() * Adjetivos.length)];

    let oracion = `${PronombreAleatorio} ${SujetoAleatorio} ${VerboAleatorio} ${AdjetivoAleatorio} .`;
    return oracion;
}
let ExcusaElement = document.getElementById("excusa");
let ExcusaAleatoria = GeneradorDeExcusas();
ExcusaElement.textContent = ExcusaAleatoria;
console.log(excusaAleatoria);