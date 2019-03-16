
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
var w = 28;


function setup(){
	createCanvas(757, 757);
    //createCanvas(85,85);
	cols = floor (width / w);
	rows = floor (height / w);
	
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

function draw(){
	background(255);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			
			grid[i][j].show();
		}
	}
	
}
