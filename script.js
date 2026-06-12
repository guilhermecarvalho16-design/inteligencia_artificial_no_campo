const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const dicas = [
    "Use drones para monitorar grandes áreas agrícolas.",
    "Sensores ajudam a controlar a irrigação automaticamente.",
    "A IA pode prever doenças antes que elas se espalhem.",
    "Máquinas inteligentes reduzem desperdícios.",
    "Dados climáticos ajudam a planejar a colheita."
];

function mostrarDica() {
    const numero = Math.floor(Math.random() * dicas.length);

    document.getElementById("resultado").innerHTML =
        dicas[numero];
}