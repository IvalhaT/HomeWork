const gameData = {
    playerName: '',
    rounds: 0,
    currentRound: 0,
    playerWins: 0,
    computerWins: 0,
}


const choices = ['Камень', 'Ножницы', 'Бумага'];
if (document.getElementById('startForm')) {
    // если на стартовой стр

    document.getElementById('startForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('playerName').value;
        const rounds = parseInt(document.getElementById('rounds').value, 10);

        localStorage.setItem('rps_player', JSON.stringify({ name, rounds }));
        window.location.href = 'game.html';
    });
} else if (document.getElementById('welcome')) {

    // если на стр игры
    const playerInfo = JSON.parse(localStorage.getItem('rps_player'));
    gameData.playerName = playerInfo.name;
    gameData.rounds = playerInfo.rounds;


    document.getElementById('welcome').textContent = `Игрок: ${gameData.playerName}`;
    window.playerMove = function (playerChoice) {
        if (gameData.currentRound >= gameData.rounds) return;

        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = `Вы выбрали ${playerChoice}, компьютер выбрал ${computerChoice}. `;

        if (playerChoice === computerChoice) {
            result += 'Ничья!';
        } else if (
            (playerChoice === 'Камень' && computerChoice === 'Ножницы') ||
            (playerChoice === 'Ножницы' && computerChoice === 'Бумага') ||
            (playerChoice === 'Бумага' && computerChoice === 'Камень')
        ) {
            result += 'Вы выиграли!';
            gameData.playerWins++;
        } else {
            result += 'Компьютер выиграл!';
            gameData.computerWins++;
        }


        gameData.currentRound++;
        document.getElementById('currentRound').textContent = gameData.currentRound;
        document.getElementById('playerWins').textContent = gameData.playerWins;
        document.getElementById('computerWins').textContent = gameData.computerWins;
        document.getElementById('resultBox').textContent = result;

        if (gameData.currentRound === gameData.rounds) {
            showFinalScreen();
            saveToLeaderboard();
        }
    };

    function showFinalScreen() {
        const percent = Math.round((gameData.playerWins / gameData.rounds) * 100);
        const finalMsg = `${gameData.playerName}, ваша точность: ${percent}%`;

        document.getElementById('finalMessage').textContent = finalMsg;
        document.getElementById('finalScreen').style.display = 'block';
    }

    function saveToLeaderboard() {
        const leaderboard = JSON.parse(localStorage.getItem('rps_leaderboard') || '[]');
        const newEntry = {
            name: gameData.playerName,
            percent: Math.round((gameData.playerWins / gameData.rounds) * 100),
            wins: gameData.playerWins,
            rounds: gameData.rounds,
        }

        leaderboard.push(newEntry);
        leaderboard.sort((a, b) => b.percent - a.percent);
        const trimmed = leaderboard.slice(0, 10);
        localStorage.setItem('rps_leaderboard', JSON.stringify(trimmed));
    }

    window.restartGame = () => {
        window.location.href = 'index.html';
    }
}