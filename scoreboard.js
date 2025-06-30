// Fetch match and team names
const matchTitle = document.getElementById("matchTitle");
const teamAName = localStorage.getItem("teamAName");
const teamBName = localStorage.getItem("teamBName");

matchTitle.innerText = `${teamAName} vs ${teamBName}`;
document.getElementById("teamAName").innerText = teamAName;
document.getElementById("teamBName").innerText = teamBName;

// Initialize scores and overs
let teamAScore = 0;
let teamAOvers = 0;
let teamBScore = 0;
let teamBOvers = 0;

// Update score and overs functions
function addRun(team) {
  if (team === "A") {
    teamAScore++;
    document.getElementById("teamAScore").innerText = teamAScore;
  } else {
    teamBScore++;
    document.getElementById("teamBScore").innerText = teamBScore;
  }
}

function addOver(team) {
  if (team === "A") {
    teamAOvers++;
    document.getElementById("teamAOvers").innerText = teamAOvers;
  } else {
    teamBOvers++;
    document.getElementById("teamBOvers").innerText = teamBOvers;
  }
}
