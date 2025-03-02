
let name_list = []
let myGrid = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
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
    index = event.currentTarget.id 
    myGrid[index[0]][index[1]] = 0
    console.log(myGrid)
    if (checkwin(myGrid)) {
        alert("player won")
    }
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


