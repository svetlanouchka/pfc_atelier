// Utilisez prompt pour demander au joueur de choisir entre "Pierre", "Papier", ou "Ciseaux".
// Choix aléatoire de l'ordinateur :

// Générez un choix aléatoire parmi les trois options.


// Détermination du gagnant :
// Comparez les choix pour afficher le résultat :
// Pierre bat Ciseaux.
// Ciseaux bat Papier.
// Papier bat Pierre.
// Gérer les égalités.
// Affichage du score :
// Ajoutez un score qui s'affiche après chaque manche.
// Boucle de jeu :
// Le joueur peut choisir de continuer ou quitter le jeu après chaque manche.
// Ajoutez une gestion des erreurs :

// Si le joueur entre une réponse invalide, affichez un message d'erreur et redemandez une entrée.

//Etape 1
//créer des variables pour Pierre, Papier et Ciseaux
//créer une variable pour le score
//créer une variable pour le choix de joueur(avec un écouteur d'événements)
//créer une variable pour chaque élément du DOM 


//Etape 1 

const score = document.getElementById("score");
let countComputer = 0;
let countPlayer = 0;

let playerChoice
let computerChoice;
let winner;
let history = document.getElementById("history");

const result = document.getElementById("result");

const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const buttons = document.getElementsByClassName(".button");
const buttonRestart = document.getElementById("restart");

let playerChoiceRock = playerRock.addEventListener("click", () => {
    playerChoice = "🗿Pierre";
    getComputerChoice();
    playGame();
    newGame();
});

let playerChoicePaper = playerPaper.addEventListener("click", () => {
    playerChoice = "📃Papier";
    getComputerChoice();
    playGame();
    newGame();
});

let playerChoiceScissors = playerScissors.addEventListener("click", () => {
    playerChoice = "✂️Ciseaux";
    getComputerChoice();
    playGame();
    newGame();
});




//Etape 2
//créer une fonction pour générer un choix de l'ordinateur

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    let choices = ["🗿Pierre", "📃Papier", "✂️Ciseaux"];
    computerChoice = choices[random];
    return computerChoice;
}

//Etape 3 
//créer une fonction pour comparer les choix(playGame) avec un switch case

const playGame = () => {
    // Comparaison des choix du joueur et de l'ordinateur
    if (computerChoice === "Ciseaux" && playerChoice === "Pierre") {
        winner = "Player";
    } else if (computerChoice === "Pierre" && playerChoice === "Ciseaux") {
        winner = "Computer";
    } else if (computerChoice === "Papier" && playerChoice === "Pierre") {
        winner = "Computer";
    } else if (computerChoice === "Ciseaux" && playerChoice === "Papier") {
        winner = "Computer";
    } else if (computerChoice === "Pierre" && playerChoice === "Papier") {
        winner = "Player";
    } else if (computerChoice === "Papier" && playerChoice === "Ciseaux") {
        winner = "Player";
    } else if (computerChoice === playerChoice) {
        winner = "Egalité";
    }

    // Masquer les éléments après un choix
    playerScissors.classList.add("hidden");
    playerPaper.classList.add("hidden");
    playerRock.classList.add("hidden");

    console.log(winner);

    // Affichage du résultat
    if (winner === "Player") {
        result.innerHTML = "Player wins🎉";
        result.style.color = "green";
        countPlayer++;
    } else if (winner === "Computer") {
        result.innerHTML = "Computer wins🤖";
        result.style.color = "red";
        countComputer++;
    } else {
        result.innerHTML = "Egalité🤝";
        result.style.color = "orange";
    }

    // Affichage de l'historique
    history.innerHTML = `Player: ${playerChoice} | Computer: ${computerChoice}`;
    score.innerHTML = `Player: ${countPlayer} | Computer: ${countComputer}`;
}
//Etape 4 
//créer une fonction pour endGame
const newGame = () => {
    buttonRestart.addEventListener("click", () => {
        playerScissors.classList.toggle("hidden", false); 
        playerScissors.classList.toggle("visible", true); 

        playerPaper.classList.toggle("hidden", false);
        playerPaper.classList.toggle("visible", true);

        playerRock.classList.toggle("hidden", false);
        playerRock.classList.toggle("visible", true);
    });

    const hideAllPlayers = () => {
        playerScissors.classList.toggle("visible", false); 
        playerScissors.classList.toggle("hidden", true);  

        playerPaper.classList.toggle("visible", false);
        playerPaper.classList.toggle("hidden", true);

        playerRock.classList.toggle("visible", false);
        playerRock.classList.toggle("hidden", true);
    };

    playerScissors.addEventListener("click", hideAllPlayers);
    playerRock.addEventListener("click", hideAllPlayers);
    playerPaper.addEventListener("click", hideAllPlayers);
};

//Etape 5
//créer une fonction pour gérer les erreurs


