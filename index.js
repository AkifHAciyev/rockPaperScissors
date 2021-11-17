// section element name
const getSection = document.getElementById('play_content');

// create div title
const createDivTitle = document.createElement('div');
createDivTitle.className = 'col-lg-12';
getSection.append(createDivTitle);

// create div title innner
const createTitleInner = document.createElement('div');
createTitleInner.className = 'jumbotron text-center bg-light p-4';
createDivTitle.append(createTitleInner);

const titleInnerH1 = document.createElement('h1');
titleInnerH1.className = 'display-4';
titleInnerH1.textContent = 'Rock Paper Scissors';

const titleInnerP = document.createElement('p');
titleInnerP.className = 'lead';
titleInnerP.textContent = "Please select one of the 'R S P' (press) buttons to play";

createTitleInner.append(titleInnerH1, titleInnerP);

// create div of content
const createDivContent = document.createElement('div');
createDivContent.className = 'col-lg-12';
createDivTitle.append(createDivContent);

// create div content inner (row)
const createContentRow = document.createElement('div');
createContentRow.className = 'row';
createDivContent.append(createContentRow);

// palyer 1 inner
const createRowPlayer1 = document.createElement('div');
createRowPlayer1.className = 'col-lg-5';
createRowPlayer1.id = 'player_1';
createContentRow.append(createRowPlayer1);

const createPlayer1Point = document.createElement('div');
createPlayer1Point.className = 'jumbotron bg-light';
createRowPlayer1.append(createPlayer1Point);

const createPointP1 = document.createElement('p');
createPointP1.className = 'h1 text-center';
createPointP1.textContent = '';

const createPointP2 = document.createElement('p');
createPointP2.className = 'h3 text-center';
createPointP2.textContent = 'Player 1 (ME)';

const createPointP3 = document.createElement('p');
createPointP3.className = 'h4 text-center text-success';
createPointP3.textContent = 'Point: 0';

createPlayer1Point.append(createPointP1, createPointP2, createPointP3);

const createPlayer1Card = document.createElement('div');
createPlayer1Card.className = 'card p-2 d-flex flex-column align-items-center bg-light';
createRowPlayer1.append(createPlayer1Card);

const player1CardImg = document.createElement('img');
player1CardImg.className = 'card-img-top';
player1CardImg.src = './img/r.png';
player1CardImg.style = 'width: 250px; height: auto';
player1CardImg.alt = 'Rock Paper Scissors';

createPlayer1Card.append(player1CardImg);

const player1CardBody = document.createElement('div');
player1CardBody.className = 'card-body';
createPlayer1Card.append(player1CardBody);

const player1CardBodyP = document.createElement('p');
player1CardBodyP.className = 'card-text h2 text-center';
player1CardBodyP.textContent = 'Rock';
player1CardBody.append(player1CardBodyP);

// create VS

const createVs = document.createElement('div');
createVs.className = 'col-lg-2 pb-5';
createContentRow.append(createVs);

const createVsInner = document.createElement('div');
createVsInner.className = 'display-2 mt-5 text-center text-light';
createVsInner.textContent = 'VS';
createVs.append(createVsInner);
// palyer 2 inner

const createRowPlayer2 = document.createElement('div');
createRowPlayer2.className = 'col-lg-5';
createRowPlayer2.id = 'player_comp';
createContentRow.append(createRowPlayer2);

const createPlayer2Point = document.createElement('div');
createPlayer2Point.className = 'jumbotron bg-light';
createRowPlayer2.append(createPlayer2Point);

const createPointPlayer2P1 = document.createElement('p');
createPointPlayer2P1.className = 'h1 text-center';
createPointPlayer2P1.textContent = '';

const createPointPlayer2P2 = document.createElement('p');
createPointPlayer2P2.className = 'h3 text-center';
createPointPlayer2P2.textContent = 'Player 2 (COM)';

const createPointPlayer2P3 = document.createElement('p');
createPointPlayer2P3.className = 'h4 text-center text-success';
createPointPlayer2P3.textContent = 'Point: 0';

createPlayer2Point.append(createPointPlayer2P1, createPointPlayer2P2, createPointPlayer2P3);

const createPlayer2Card = document.createElement('div');
createPlayer2Card.className = 'card p-2 d-flex flex-column align-items-center bg-light';
createPlayer2Card.id = 'player2';
createRowPlayer2.append(createPlayer2Card);

const player2CardImg = document.createElement('img');
player2CardImg.className = 'card-img-top';
player2CardImg.src = './img/s.png';
player2CardImg.style = 'width: 250px; height: auto; transform: rotateY(-180deg)';
player2CardImg.alt = 'Rock Paper Scissors';

createPlayer2Card.append(player2CardImg);

const player2CardBody = document.createElement('div');
player2CardBody.className = 'card-body';
createPlayer2Card.append(player2CardBody);

const player2CardBodyP = document.createElement('p');
player2CardBodyP.className = 'card-text h2 text-center';
player2CardBodyP.textContent = 'Scissors';
createPlayer2Card.append(player2CardBodyP);

//Global General Variables
let gameData = ['r', 'p', 's'];
let player1Point = 0;
let player2Point = 0;

//Random Comp Attack
function randomGameAttack(arr) {
	let randomNum = Math.floor(Math.random() * arr.length);

	return arr[randomNum];
}

//Play Result
const playResult = (player1, player2) => {
	let player1Status = document.querySelector('#player_1 .jumbotron .h1');
	let playerCompStatus = document.querySelector('#player_comp .jumbotron .h1');
	let player1Img = document.querySelector('#player_1 img');
	let playerCompImg = document.querySelector('#player_comp img');
	let player1Score = document.querySelector('#player_1 .jumbotron .h4');
	let playerCompScore = document.querySelector('#player_comp .jumbotron .h4');

	// Player Win Status
	function status() {
		player1Status.innerHTML = 'WIN';
		playerCompStatus.innerHTML = 'LOSE';
	}

	if (player1 === player2) {
		player1Score.innerHTML = player1Point;
		playerCompScore.innerHTML = player2Point;

		player1Img.src = `./img/${player1}.png`;
		playerCompImg.src = `./img/${player2}.png`;

		player1Status.classList.remove('text-success');
		playerCompStatus.classList.remove('text-success');

		player1Status.classList.remove('text-danger');
		playerCompStatus.classList.remove('text-danger');

		player1Status.innerHTML = 'DRAF';
		playerCompStatus.innerHTML = 'DRAF';
	} else if (player1 === 'p' && player2 === 'r') {
		player1Point++;
		player1Img.src = `./img/${player1}.png`;
		playerCompImg.src = `./img/${player2}.png`;

		player1Score.innerHTML = player1Point;

		status();

		player1Status.classList.add('text-success');
		playerCompStatus.classList.remove('text-success');

		player1Status.classList.remove('text-danger');
		playerCompStatus.classList.add('text-danger');
	} else if (player1 === 'r' && player2 === 's') {
		player1Point++;

		player1Img.src = `./img/${player1}.png`;
		playerCompImg.src = `./img/${player2}.png`;

		player1Score.innerHTML = player1Point;

		status();

		player1Status.classList.add('text-success');
		playerCompStatus.classList.remove('text-success');

		player1Status.classList.remove('text-danger');
		playerCompStatus.classList.add('text-danger');
	} else if (player1 === 's' && player2 === 'p') {
		player1Point++;

		player1Img.src = `./img/${player1}.png`;
		playerCompImg.src = `./img/${player2}.png`;

		player1Score.innerHTML = player1Point;

		status();

		player1Status.classList.add('text-success');
		playerCompStatus.classList.remove('text-success');

		player1Status.classList.remove('text-danger');
		playerCompStatus.classList.add('text-danger');
	} else {
		player2Point++;
		player1Img.src = `./img/${player1}.png`;
		playerCompImg.src = `./img/${player2}.png`;

		playerCompScore.innerHTML = player2Point;

		player1Status.innerHTML = 'LOSE';
		playerCompStatus.innerHTML = 'WIN';

		player1Status.classList.remove('text-success');
		playerCompStatus.classList.add('text-success');

		player1Status.classList.add('text-danger');
		playerCompStatus.classList.remove('text-danger');
	}
};

//Play Game
const playGame = (event) => {
	let realPlayerAttack = event.key.toLowerCase();
	let compRandomAttack = randomGameAttack(gameData);

	if (gameData.indexOf(realPlayerAttack) !== -1) {
		playResult(realPlayerAttack, compRandomAttack);
	} else {
		alert("Please choose 'R S P' button ");
	}
};

//Run App
window.onkeypress = playGame;
