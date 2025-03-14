const prompt = require("prompt-sync")()

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o'
var vencedor = ' '
var fimJogo = false
var tab = [3]

// a
for (let i = 0; i < tab.length; i++) {
    tab[i] = [' ', ' ', ' ']
}

while ((jogadas < 9) && (fimJogo === false)) {
    // b
    tab.forEach((elem) => {
        console.log(`[${elem}]`)
    })
    lin = parseInt(prompt(`${jogador} em [linha]:`))
    col = parseInt(prompt(`${jogador} em [coluna]:`))
    jogadas++;
    // c
}

// d
if (vencedor === ' ') {
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu`);
}
