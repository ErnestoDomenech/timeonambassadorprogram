// JavaScript source code
const input = document.getElementById('usuarios');
const tarifaEl = document.getElementById('tarifa');
const mensualEl = document.getElementById('mensual');
const anualEl = document.getElementById('anual');

function calcularTarifa(usuarios) {
    if (usuarios <= 1000) return 0.20;
    if (usuarios <= 2000) return 0.25;
    if (usuarios <= 3000) return 0.30;
    return 0.35;
}

function actualizarResultados() {
    const usuarios = parseInt(input.value) || 0;
    const tarifa = calcularTarifa(usuarios);
    const mensual = usuarios * tarifa;
    const anual = mensual * 12;

    tarifaEl.textContent = tarifa.toFixed(2) + ' \u20AC';
    mensualEl.textContent = mensual.toFixed(2) + ' \u20AC';
    anualEl.textContent = anual.toFixed(2) + ' \u20AC';
}

input.addEventListener('input', actualizarResultados);
actualizarResultados();