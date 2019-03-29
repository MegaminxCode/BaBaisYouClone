
function make2DArray (cols, rows) {
 var arr = new Array(cols);
 for (var i = 0; i < arr.length; i++) {
	arr[i] = new Array(rows);

	}	
	return arr;
}


var grid;
var cols;
var rows;
var w = 30;
var dir = "";
var obj = "";
function setup(){
	createCanvas(241, 241);
    //createCanvas(85,85);
	cols = 8;
	rows = 8;
	
	grid = make2DArray(cols, rows);
    
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			
			grid[i][j] = new Cell(i, j, w);
			
		}
	}
	
    for ( i = 0; i < cols; i++) {
        for ( j = 0; j < rows; j++) {
            a = "color" + 15;
            grid[i][j][a] = true;
            grid[i][j].obj = "";
        }
    }
    
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
    
    i = 3;
    j = 5;
    grid[i][j].pushBlock = true;
    obj = grid[i][j].obj = "pushBlock";
    grid[i][j].command = "this.setPushable";
    grid[i][j].undoCommand = "this.unSetPushable";
    grid[i][j].pushable = true;
    grid[i][j].hasACommand = true;
    //console.log(grid[i][j].obj);
    
    i = 3;
    j = 3;
    grid[i][j].rock = true;
    obj = grid[i][j].obj = "rock";
    
    
    i = 1;
    j = 0;
    console.log("was ran from here");
    grid[i][j].checkIsCommand();
    
}



window.addEventListener("contextmenu", function(e) { e.preventDefault(); })
function mousePressed () {
	
	
			
				if (mouseButton === LEFT) {
                    
				}
				if (mouseButton === RIGHT) {
					
				}
				if (mouseButton === CENTER){
					
				}
			
		
	
	
}

function keyTyped() {
    //Controls wasd
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (key === 'w' || key === 'W') {
                //console.log("1");
                if(grid[i][j].player == true){
                    grid[i][j][dir] = "up";
                    // console.log("2");
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        grid[i][j].playerMove(i, j, dir);
                        console.log("was ran from here");
                        grid[i][j].checkIsCommand();
                        return;
                    }
                }
            } else if (key === 'a' || key === 'A') {
                //console.log("1");
                if(grid[i][j].player == true){
                    grid[i][j][dir] = "left";
                    // console.log("2");
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        grid[i][j].playerMove(i, j, dir);
                        console.log("was ran from here");
                        grid[i][j].checkIsCommand();
                        return;
                    }
                }
            }else if (key === 's' || key === 'S') {
                //console.log("1");
                if(grid[i][j].player == true){
                    grid[i][j][dir] = "down";
                    // console.log("2");
                    //console.log(grid[i][j].obj);
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        grid[i][j].playerMove(i, j, dir);
                        console.log("was ran from here");
                        grid[i][j].checkIsCommand();
                        return;
                    }
                }
            }else if (key === 'd' || key === 'D') {
                //console.log("1");
                if(grid[i][j].player == true){
                    grid[i][j][dir] = "right";
                   // console.log("2");
                    if(grid[i][j].check(i, j, dir)){
                      //  console.log("3");
                        grid[i][j].playerMove(i, j, dir);
                        console.log("was ran from here");
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
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			
			grid[i][j].show();
		}
	}
	
}
