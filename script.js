const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const swissor = document.getElementById('swissor');
const botListner = document.querySelectorAll('button')
const resultsBox = document.getElementById('resultsBox')


let player = '';
let bot = '';

function botPlays() {
    bot = Math.floor(Math.random() * 3);
    return bot
}

rock.addEventListener('click', function() {
    player = 0
    botPlays()
    winCondition()
    return player
})

paper.addEventListener('click', function() {
    player = 1
    botPlays()
    winCondition()
    return player
})

swissor.addEventListener('click', function() {
    player = 2
    botPlays()
    winCondition()
    return player
}) 




function winCondition() {

    const singleResult = document.createElement('span')
    const result = document.createElement('div')
    const playInfo = document.createElement('div')
    resultsBox.innerHTML = '';
    
    if (player === bot) {
        singleResult.innerHTML = `Empate!`
        playInfo.innerHTML = `Jogador = Bot`
        singleResult.appendChild(playInfo)
        resultsBox.appendChild(singleResult)
    }

    else if (player === 0 && bot === 2) {
        result.innerText = 'Você ganhou!'
        singleResult.appendChild(result)
        playInfo.innerHTML = `Jogador: Pedra | Bot: Tesoura`;
        singleResult.appendChild(playInfo)
        resultsBox.appendChild(singleResult)
    }
    
    else if (player === 0 && bot === 1) {
        result.innerText = 'Você perdeu ¯\\_(ツ)_/¯ '
        singleResult.appendChild(result)
        playInfo.innerHTML = `Jogador: Pedra | Bot: Papel`;
        singleResult.appendChild(playInfo)
        resultsBox.appendChild(singleResult)
    }

    else if (player === 1 && bot === 2) {
        result.innerText = 'Você perdeu ¯\\_(ツ)_/¯ '
        singleResult.appendChild(result)
        playInfo.innerText = `Jogador: Papel | Bot: Tesoura`;
        singleResult.appendChild(playInfo)
        resultsBox.appendChild(singleResult)
    }

    else if (player === 1 && bot === 0) {
        result.innerText = 'Você ganhou!'
        singleResult.appendChild(result)
        playInfo.innerHTML = `Jogador: Papel | Bot: Pedra`;
        singleResult.appendChild(playInfo)
        resultsBox.appendChild(singleResult)
    }

    else if (player === 2 && bot === 0) {
        result.innerText = 'Você perdeu ¯\\_(ツ)_/¯ '
        singleResult.appendChild(result)
        playInfo.innerHTML = `Jogador: Tesoura | Bot: Pedra`;
        singleResult.appendChild(playInfo)
        resultsBox.appendChild(singleResult)
    }

    else if (player === 2 && bot === 1) {
        result.innerText = 'Você ganhou!'
        singleResult.appendChild(result)
        playInfo.innerHTML = `Jogador: Tesoura | Bot: Papel`;
        singleResult.appendChild(playInfo)
        resultsBox.appendChild(singleResult)
    }
}



