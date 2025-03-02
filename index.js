
let name_list = []
let Grid1 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
let Grid2 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

let player = 0 
function submit(name) {
    if (name=='') {
        alert("no name given")
    } else {
    name_list.push(name)
    alert(  `hello ${name}`)
    console.log(name_list)
    }
}

function updateVal() {
    //index = event.currentTarget.id 
    //myGrid[index[0]][index[1]] = 0
    //console.log(myGrid)
    if (event.currentTarget.textContent != "____") {
        alert(`cant override the move`)
    } else {index = event.currentTarget.id
        if (player % 2 == 0) {
            index = event.currentTarget.id
            Grid1[index[0]][index[1]] = 0
            console.log(Grid1)
            event.currentTarget.textContent = "X"
            if (checkwin(Grid1)) {
                ref()
                alert(`${name_list[0]} won`)
            }
        } else {
            index = event.currentTarget.id
            Grid2[index[0]][index[1]] = 0
            console.log(Grid2)
            event.currentTarget.textContent = "O"
            if (checkwin(Grid2)) {
                ref()
                alert(`${name_list[1]} won`)
            }
        }
        player++}
}

function checkwin(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].every(val => val ==0 )) {
            return true
        }
    }
    for (let k = 0; k < grid.length; k++) {
        let count = 0
        for (let j = 0; j<grid.length;j++) {
            if (grid[j][k] == 0 ) {
                count++
            }
        if (count == 3) {
            return true
        } 
        }
    }
    tr1 = [grid[0][0],grid[1][1],grid[2][2]]
    tr2 = [grid[2][0],grid[1][1],grid[0][2]]

    if (tr1.every( val => val == 0) || tr2.every( val => val == 0)) {
        return true
    }
}
function ref() {
    console.log("Refresh function called");
    Grid1 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
    Grid2 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`${i}${j}`).textContent = "____";
        }
    }
}






