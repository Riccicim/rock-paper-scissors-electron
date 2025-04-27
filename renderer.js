function play(playerChoice) {
    const choices = ['rock', 'paper', 'scıssors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'DRAW!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scıssors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scıssors' && computerChoice === 'papaer')
    ) {
        result = 'YOU WIN! 🎉';
    } else {
        result = 'YOU LOSE! 😢';
    }

    document.getElementById('result').innerText = `YOU: ${playerChoice} - BOT: ${computerChoice}\n${result}`;
}
