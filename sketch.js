
function make2DArray (cols, rows) {
 var arr = new Array(cols);
 var arrLength = arr.length;
 var i;
 for (i = 0; i < arrLength; i++) {
	arr[i] = new Array(rows);

	}	
	return arr;
}


var grid;
var a;
var cols;
var rows;
var w = 30;
var dir = "";
var obj = "";
function setup(){
	createCanvas(481, 481);
    //createCanvas(85,85);
	cols = 16;
	rows = 16;
	
	grid = make2DArray(cols, rows);
    var i;
    var j;
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			//creates the cells
			grid[i][j] = new Cell(i, j, w);
			
		}
	}
	
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            //sets the colour
            a = "color" + 15;
            grid[i][j][a] = true;
            grid[i][j].obj = "";
        }
    }
    
    //sets all the starting blocks
    //currently used for testing purposes will be changed when its near completion
    
    i = 0;
    j = 0;
    grid[i][j].player = true;
    grid[i][j].obj = "player";
    //console.log(grid[i][j].obj);
    i = 2;
    j = 0;
    obj = grid[i][j].wall = true;
    grid[i][j].stop = true;
    
    i = 2;
    j = 6;
    grid[i][j].rock = true;
    obj = grid[i][j].obj = "rock";
    
    i = 6;
    j = 8;
    grid[i][j].flag = true;
    obj = grid[i][j].obj = "flag";
    
    
    i = 6;
    j = 10;
    grid[i][j].pushBlock = true;
    obj = grid[i][j].obj = "pushBlock";
    grid[i][j].command = "this.setPushable";
    grid[i][j].undoCommand = "this.unSetPushable";
    grid[i][j].pushable = true;
    grid[i][j].hasACommand = true;
    
    i = 4;
    j = 6;
    grid[i][j].stopBlock = true;
    obj = grid[i][j].obj = "stopBlock";
    grid[i][j].command = "this.setStop";
    grid[i][j].undoCommand = "this.unSetStop";
    grid[i][j].pushable = true;
    grid[i][j].hasACommand = true;
    
    i = 3;
    j = 4;
    grid[i][j].isBlock = true;
    obj = grid[i][j].obj = "isBlock";
    grid[i][j].pushable = true;
    
    i = 6;
    j = 9;
    grid[i][j].isBlock = true;
    obj = grid[i][j].obj = "isBlock";
    grid[i][j].pushable = true;
    
    i = 2;
    j = 4;
    grid[i][j].pushBlock = true;
    obj = grid[i][j].obj = "pushBlock";
    grid[i][j].command = "this.setPushable";
    grid[i][j].undoCommand = "this.unSetPushable";
    grid[i][j].pushable = true;
    grid[i][j].hasACommand = true;
    //console.log(grid[i][j].obj);
    
    i = 4;
    j = 4;
    grid[i][j].rock = true;
    obj = grid[i][j].obj = "rock";
    
    
    i = 1;
    j = 0;
    console.log("was ran from here");
    //sets all the starting blocks
    //currently used for testing purposes will be changed when its near completion ^^^^
    
    //runs checkiscommand so starting blocks have correct information.
    grid[i][j].checkIsCommand();
    
}



window.addEventListener("contextmenu", function(e) { e.preventDefault(); });
function mousePressed () {
	//not used but useful if mouse buttons are needed
	
			
				if (mouseButton === LEFT) {
                    
				}
				if (mouseButton === RIGHT) {
					
				}
				if (mouseButton === CENTER){
					
				}

}

function keyTyped() {
    //Controls wasd
    var i;
    var j;
    //checks all blocks for the player and moves it
    //this will be changed when the you command is implemented
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            if (key === "w" || key === "W") {
                //console.log("1");
                //checks if player
                if(grid[i][j].player === true){
                    //sets its direction to move to up
                    grid[i][j][dir] = "up";
                    // console.log("2");
                    //checks if it can move and push is called in check if theres a pushable block
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        //moves the player
                        grid[i][j].playerMove(i, j, dir);
                        console.log("was ran from here");
                        //checkIsCommand is ran to check if commands have changed
                        //it is ran now to stop a bug happening where if it was called after
                        //every pushed object many things would break
                        grid[i][j].checkIsCommand();
                        return;
                    }
                }
            } else if (key === "a" || key === "A") {
                //console.log("1");
                //checks if player
                if(grid[i][j].player === true){
                    grid[i][j][dir] = "left";
                    // console.log("2");
                    //checks if it can move and push is called in check if theres a pushable block
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        //moves the player
                        grid[i][j].playerMove(i, j, dir);
                        console.log("was ran from here");
                        //checkIsCommand is ran to check if commands have changed
                        //it is ran now to stop a bug happening where if it was called after
                        //every pushed object many things would break
                        grid[i][j].checkIsCommand();
                        return;
                    }
                }
            }else if (key === "s" || key === "S") {
                //console.log("1");
                //checks if player
                if(grid[i][j].player === true){
                    grid[i][j][dir] = "down";
                    // console.log("2");
                    //checks if it can move and push is called in check if theres a pushable block
                    //console.log(grid[i][j].obj);
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        //moves the player
                        grid[i][j].playerMove(i, j, dir);
                        console.log("was ran from here");
                        //checkIsCommand is ran to check if commands have changed
                        //it is ran now to stop a bug happening where if it was called after
                        //every pushed object many things would break
                        grid[i][j].checkIsCommand();
                        return;
                    }
                }
            }else if (key === "d" || key === "D") {
                //console.log("1");
                //checks if player
                if(grid[i][j].player === true){
                    grid[i][j][dir] = "right";
                   // console.log("2");
                    //checks if it can move and push is called in check if theres a pushable block
                    if(grid[i][j].check(i, j, dir)){
                      //  console.log("3");
                        //moves the player
                        grid[i][j].playerMove(i, j, dir);
                        console.log("was ran from here");
                        //checkIsCommand is ran to check if commands have changed
                        //it is ran now to stop a bug happening where if it was called after
                        //every pushed object many things would break
                        grid[i][j].checkIsCommand();
                        return;
                    }
                }
            }
        }
    }
}

function draw(){
	background(255);
    // apparently this is better for performance idk
    var i;
    var j;
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			//calls show to display blocks
			grid[i][j].show();
		}
	}
	
}
