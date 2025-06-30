// Fetch team names and player lists from localStorage
const teamAName = localStorage.getItem("teamAName");
const teamBName = localStorage.getItem("teamBName");
const teamAPlayers = JSON.parse(localStorage.getItem("teamAPlayers")) || [];
const teamBPlayers = JSON.parse(localStorage.getItem("teamBPlayers")) || [];

// Set headings
document.getElementById("matchTitle").innerText = `${teamAName} vs ${teamBName}`;
document.getElementById("teamAHeading").innerText = teamAName;
document.getElementById("teamBHeading").innerText = teamBName;
document.getElementById("startMatchBtn").addEventListener("click", () => {
window.location.href = "live-scoreboard.html";
})

// Display players for each team
const teamAList = document.getElementById("teamAPlayers");
const teamBList = document.getElementById("teamBPlayers");

teamAPlayers.forEach(player => {
  const li = document.createElement("li");
  li.innerText = player;
  teamAList.appendChild(li);
});

teamBPlayers.forEach(player => {
  const li = document.createElement("li");
  li.innerText = player;
  teamBList.appendChild(li);
});
