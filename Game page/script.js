// JavaScript to handle player selection and automatic captain assignment
let selectedPlayers = [];
let captainAssigned = false;

// Function to select a player
function selectPlayer(playerName) {
    // Check if the player is already selected
    if (selectedPlayers.includes(playerName)) {
        alert(`${playerName} is already selected!`);
        return;
    }

    // Assign the first player to the captain slot
    if (!captainAssigned) {
        document.getElementById("captain-slot").innerText = playerName;
        captainAssigned = true;
    } else {
        // Assign the next player to a regular slot
        const availableSlot = document.querySelector(".slot:not(.filled)");
        if (availableSlot) {
            availableSlot.innerText = playerName;
            availableSlot.classList.add("filled");
        } else {
            alert("All slots are filled!");
        }
    }

    // Add the player to the selected list
    selectedPlayers.push(playerName);
}

// Function to swap Team A and Team B players
function swapTeams() {
    const teamAPlayers = ['Player A1', 'Player A2', 'Player A3', 'Player A4', 'Player A5', 'Player A6', 'Player A7'];
    const teamBPlayers = ['Player B1', 'Player B2', 'Player B3', 'Player B4', 'Player B5', 'Player B6', 'Player B7'];

    // Clear the selected players and the game plan
    selectedPlayers = [];
    captainAssigned = false;
    document.getElementById("captain-slot").innerText = "Captain";

    // Clear the game plan slots
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => {
        slot.innerText = "";
        slot.classList.remove("filled");
    });

    // Restore players to their respective teams
    const teamAElements = document.querySelectorAll('.team-column:nth-child(1) .player-slot');
    const teamBElements = document.querySelectorAll('.team-column:nth-child(3) .player-slot');

    for (let i = 0; i < teamAElements.length; i++) {
        teamAElements[i].innerText = teamAPlayers[i];
        teamAElements[i].setAttribute('onclick', `selectPlayer('${teamAPlayers[i]}')`);
    }

    for (let i = 0; i < teamBElements.length; i++) {
        teamBElements[i].innerText = teamBPlayers[i];
        teamBElements[i].setAttribute('onclick', `selectPlayer('${teamBPlayers[i]}')`);
    }
}
