
var player = {
    current: null,
    active: null,
    reverse: false,
    name: [],
    deck: [],
    draw: 0
}
/*
player {
    current: 0, (indicates who's the turn)
    active: 0, (indicates who's playing)
    reverse: true, (indicates what is the direction of movement - false=clockwise)
    name: ["player0", "player1"] (shows the players' name)
    deck: [
        ["0🍌", "9🍆", "R🥕", "B🥒"], 
        ["C🍌", "0🍌", "2🍆", "3🥕", "5🥒", "5🥒", "5🥒"]]
    ], (shows the cards of the player with matching index - name[1] owns deck[1])
    draw: 8 (shows the amount of cards the chosen player will draw)
}
*/
var pile = {
    draw: [],
    discard: []
}

const cardType = ["🍌", "🍆", "🥕", "🥒"] // Card types by id, 0=banana, 3=eggplant

/*
player{
    current: 0,
    active: 0,
    name: ["name1", "name2", "name3"],
    deck: [[0, 1, 2, 3], [0, 1, 2, 3, 4, 5]]

}
pile {
    draw: [
        [1, "banana"], 
        [2, "carrot"], 
        [3, "cucumber"],
        [4, "eggfruit"]
    ],
    discard: [[1, "banana"]]
}
🍌🍆🥕🥒
*/