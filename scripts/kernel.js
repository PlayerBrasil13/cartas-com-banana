
var player = {
    current: null,
    active: null,
    name: [],
    deck: []
}
/*
player {
    current: 0, (indicates who's the turn)
    active: 0, (indicates who's playing)
    name: ["player0", "player1"] (shows the players' name)
    deck: [
        ["0š", "9š", "Rš„", "Bš„"], 
        ["Cš", "0š", "2š", "3š„", "5š„", "5š„", "5š„"]]
    ]
}
*/
var pile = {
    draw: [],
    discard: []
}


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
ššš„š„
*/