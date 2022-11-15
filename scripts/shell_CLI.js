// This is the code that creates the text-based interface and asks for input.

var cliButtons = {
	selection: [
		["Jogar", "Comprar", "Salvar Jogo"],
		["🍌", "🥕", "🥒", "🍆"],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "⏩", "🚫", "🪞", "🔃", "❔", "🔨"],
		["Jogar"]
	],
	showAll: [true, false, false, true],
	option: [0, 0],
	selectedCard: [0, 0]
}

onkeydown = (pressKey) => {
	switch (cliButtons.option[1]) {
		case 0:
			switch (pressKey.code) {
				case "ArrowLeft":
					cliButtons.option[0]--
					if (cliButtons.option[0] < 0) { cliButtons.option[0] = cliButtons.selection[0].length - 1 }
					break
				case "ArrowRight":
					cliButtons.option[0]++
					if (cliButtons.option[0] > cliButtons.selection[0].length - 1) { cliButtons.option[0] = 0 }
					break
				case "ArrowUp":
					cliButtons.option[1]--
					if (cliButtons.option[1] < 0) { cliButtons.option[1] = cliButtons.selection[1].length - 1 }
					break
				case "ArrowDown":
					cliButtons.option[1]++
					if (cliButtons.option[1] > cliButtons.selection[1].length - 1) { cliButtons.option[1] = 0 }
					break
			}
	}

	if (cliButtons.option[1] == 1) {
		cliButtons.selectedCard[0] = cliButtons.option[0]
	} else if (cliButtons.option[1] == 2) {
		cliButtons.selectedCard[1] = cliButtons.option[0]
	}

	reloadUi()
};

//Reloads the user interface
function reloadUi() {
	/*
	PlayerX's turn
	Player1 - n's name and number of cards
	Draw pile's number of cards
	Active player deck
	Input
	*/
	//Clear UI
	cli.innerHTML = ""

	//Shows who will play now
	if (player.current == player.active) {
		cli.innerHTML += `It's your time!`
	} else {
		cli.innerHTML += `It's ${player.name[player.current]}'s time!`
	}

	cli.innerHTML += "<br><br>Players:"
	//Shows the player's name and number of cards
	for (p in player.name) {
		cli.innerHTML += `<br><b>${player.name[p]}</b>: ${player.deck[p].length}`
	}

	cli.innerHTML += "<br><br>My deck:"
	//Shows active player's deck
	for (card in player.deck[player.active]) {
		cli.innerHTML += ` ${player.deck[player.active][card]}`
	}

	//Shows the buttons that you can select
	cliOpt.innerHTML = "-"
	console.log(cliButtons.option)
	for (optionx in cliButtons.selection[0]) {
		if (cliButtons.option[0] == optionx) {
			cliOpt.innerHTML += `[${cliButtons.selection[0][optionx]}]-`
		} else {
			cliOpt.innerHTML += ` ${cliButtons.selection[0][optionx]} -`
		}
	}

}

player.name.push("Adefado", "DOremi")
player.deck.push(["0🍌", "0🍌", "2🍆", "3🥕", "5🥒"], ["0🍌", "0🍌", "2🍆", "3🥕", "5🥒", "5🥒", "5🥒"])
player.current = 0
player.active = 0

reloadUi()