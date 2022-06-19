// This is the code that creates the text-based interface and asks for input.

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
        cli.innerHTML += `${player.deck[player.active][card]}`
    }
}


player.name.push("Adefado", "DOremi")
player.deck.push(["0🍌", "0🍌", "2🍆", "3🥕", "5🥒"], ["0🍌", "0🍌", "2🍆", "3🥕", "5🥒", "5🥒", "5🥒"])
player.current = 1
player.active = 0

reloadUi()