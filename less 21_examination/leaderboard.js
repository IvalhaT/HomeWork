const tbody = document.querySelector('#leaderboard tbody');
const leaderboard = JSON.parse(localStorage.getItem('rps_leaderboard') || '[]');

leaderboard.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${entry.name}</td>
    <td>${entry.percent}%</td>
    <td>${entry.wins}</td>
    <td>${entry.rounds}</td>
`;
    tbody.appendChild(row);
});