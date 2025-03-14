const prompt = require("prompt-sync")()

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o'
var vencedor = ' '
var fimJogo = false
var tab = []

function trocarJogador(jog) {
    if (jog === 'o')
        jogador = 'x'
    if (jog === 'x')
        jogador = 'o'
}

// a
for (let i = 0; i < 3; i++) {
    tab[i] = []
    for (let j = 0; j < 3; j++) {
        tab[i][j] = ' '
    }
}

while ((jogadas < 9) && (fimJogo === false)) {
    // b
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            process.stdout.write(`[${tab[i][j]}]`);
        }
        process.stdout.write("\n")
    }
    lin = parseInt(prompt(`${jogador} em [linha]:`))
    col = parseInt(prompt(`${jogador} em [coluna]:`))
    // c
    if (lin < 0 || lin > 2 || col < 0 || col > 2) {
        console.log("Jogada inválida, fora do tabuleiro");
    }

    if (tab[lin][col] !== ' ') {
        console.log("Campo preenchido, escolha outro");
    }

    tab[lin][col] = jogador
    jogadas++;

    if (
        tab[0] == ["o", "o", "o"] ||
        tab[1] == ["o", "o", "o"] ||
        tab[2] == ["o", "o", "o"] 
    ) {
        vencedor = jogador
        break;
    } else {
        trocarJogador(jogador)
    }
}

// d
if (vencedor === ' ') {
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu`);
}
