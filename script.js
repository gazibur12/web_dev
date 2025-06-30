// Coin Toss Logic
const coin = document.getElementById("coin");
const tossBtn = document.getElementById("tossBtn");
const tossResult = document.getElementById("tossResult");

tossBtn.addEventListener("click", () => {
  const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
  const fullTurns = Math.floor(Math.random() * 4 + 3) * 360;
  const rotateY = outcome === "Heads" ? fullTurns : fullTurns + 180;

  coin.style.transform = `rotateY(${rotateY}deg)`;
  tossResult.innerText = "";

  setTimeout(() => {
    tossResult.innerText = `Result: ${outcome}`;
  }, 3000);
});

// Cricket Match Management
let teamAPlayers = [];
let teamBPlayers = [];

document.getElementById("addPlayerBtn").addEventListener("click", () => {
  const playerName = document.getElementById("playerName").value.trim();
  const teamSelect = document.getElementById("teamSelect").value;

  if (playerName) {
    if (teamSelect === "A") {
      teamAPlayers.push(playerName);
      updatePlayerLists();
    } else {
      teamBPlayers.push(playerName);
      updatePlayerLists();
    }
    document.getElementById("playerName").value = "";
  } else {
    alert("Please enter a player name!");
  }
});

document.getElementById("startMatchBtn").addEventListener("click", () => {
  const teamAName = document.getElementById("teamAName").value.trim();
  const teamBName = document.getElementById("teamBName").value.trim();

  if (!teamAName || !teamBName) {
    alert("Please enter both team names!");
    return;
  }

  if (teamAPlayers.length === 0 || teamBPlayers.length === 0) {
    alert("Add at least one player to each team!");
    return;
  }

  // Save data to localStorage
  localStorage.setItem("teamAName", teamAName);
  localStorage.setItem("teamBName", teamBName);
  localStorage.setItem("teamAPlayers", JSON.stringify(teamAPlayers));
  localStorage.setItem("teamBPlayers", JSON.stringify(teamBPlayers));

  // Redirect to match page
  window.location.href = "match.html";
});

function updatePlayerLists() {
  const teamAList = document.getElementById("teamAPlayers");
  const teamBList = document.getElementById("teamBPlayers");

  teamAList.innerHTML = "";
  teamBList.innerHTML = "";

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
}
