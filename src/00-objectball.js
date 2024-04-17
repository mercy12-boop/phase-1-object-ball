function gameObject() {
  return {
    teams: {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    },
  };
}

const game = gameObject();
function numPointsScored(playersName, game) {
  for (let i in game.teams) {
    let players = game.teams[i].players;
    for (let i in players) {
      if (i === playersName) {
        let points = players[i].points;
        console.log(playersName, points);
      }
    }
  }
}
numPointsScored("Ben Gordon", game);

function shoeSize(playersName, game) {
  for (let i in game.teams) {
    let players = game.teams[i].players;
    for (let i in players) {
      if (i === playersName) {
        let size = players[i].shoe;
        console.log(playersName, size);
      }
    }
  }
}
shoeSize("Ben Gordon", game);

function teamColors(teamInput, game) {
  for (let i in game.teams) {
    let teamName = game.teams[i].teamName;
    let teamColors = game.teams[i].colors;
    if (teamName === teamInput) {
      console.log(teamInput, teamColors);
      return;
    }
  }
}

teamColors("Brooklyn Nets", game);

function teamNames(game) {
  for (let i in game.teams) {
    let teamName = game.teams[i].teamName;
    let teamArrays = [];
    teamArrays.push(teamName);
    console.log(teamArrays);
  }
}

teamNames(game);

function playerNumbers(teamInput, game) {
  let numbers = [];
  for (let i in game.teams) {
    let teamName = game.teams[i].teamName;
    let players = game.teams[i].players;
    for (let i in players) {
      let teamNumbers = players[i].points;
      if (teamName === teamInput) {
        numbers.push(teamNumbers);
      }
    }
  }
  return numbers;
}
console.log(playerNumbers("Brooklyn Nets", game));

function playerStats(playerInput, game) {
  for (i in game.teams) {
    let player = game.teams[i].players;
    for (let playerName in player) {
      if (playerName === playerInput) {
        console.log(player[playerName]);
      }
    }
  }
}
playerStats("Ben Gordon", game);

// function mostPointsScored(game) {
//   let maxPoints = 0;
//   let playerWithMaxPoints = "";
//   for (let i in game.teams) {
//     let player = game.teams[i].players;
//     if (player.points > maxPoints) {
//       maxPoints = player.points;
//       playerWithMaxPoints = player;
//     }
//   }
//   console.log(playerWithMaxPoints);
// }

// mostPointsScored(game);
function mostPointsScored(game) {
  let maxPoints = 0;
  let playerWithMaxPoints = "";

  // Iterate through teams
  for (let teamKey in game.teams) {
    let players = game.teams[teamKey].players;

    // Iterate through players in each team
    for (let playerName in players) {
      let player = players[playerName];

      // Check if current player's points exceed the current max
      if (player.points > maxPoints) {
        maxPoints = player.points;
        playerWithMaxPoints = playerName;
      }
    }
  }

  console.log(playerWithMaxPoints, maxPoints);
}

mostPointsScored(game);
