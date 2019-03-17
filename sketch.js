
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
	
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            a = "color" + floor(random(1, 15));
            grid[i][j][a] = true;
        }
    }
    
    i = 0;
    j = 0;
    grid[i][j].player = true;
    
    i = 2;
    j = 0;
    grid[i][j].wall = true;
    
    i = 3;
    j = 3;
    grid[i][j].rock = true;
    
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
                grid[i][j][dir] = "up";
                if(grid[i][j].player == true){
                    // console.log("2");
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        grid[i][j].playerMove(i, j, dir);
                        return;
                    }
                }
            } else if (key === 'a' || key === 'A') {
                //console.log("1");
                grid[i][j][dir] = "left";
                if(grid[i][j].player == true){
                    // console.log("2");
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        grid[i][j].playerMove(i, j, dir);
                        return;
                    }
                }
            }else if (key === 's' || key === 'S') {
                //console.log("1");
                grid[i][j][dir] = "down";
                if(grid[i][j].player == true){
                    // console.log("2");
                    if(grid[i][j].check(i, j, dir)){
                        //  console.log("3");
                        grid[i][j].playerMove(i, j, dir);
                        return;
                    }
                }
            }else if (key === 'd' || key === 'D') {
                //console.log("1");
                grid[i][j][dir] = "right";
                if(grid[i][j].player == true){
                   // console.log("2");
                    if(grid[i][j].check(i, j, dir)){
                      //  console.log("3");
                        grid[i][j].playerMove(i, j, dir);
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
