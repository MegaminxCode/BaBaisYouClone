function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
    
    this.dir = dir;
    this.player = false;
    this.isBlock = false;
    this.pushable = false;
    this.rock = false;
    this.flag = false;
    this.wall = false;
    this.color1 = false;
    this.color2 = false;
    this.color3 = false;
    this.color4 = false;
    this.color5 = false;
    this.color6 = false;
    this.color7 = false;
    this.color8 = false;
    this.color9 = false;
    this.color10 = false;
    this.color11 = false;
    this.color12 = false;
    this.color13 = false;
    this.color14 = false;
    this.color15 = false;
}

Cell.prototype.show = function() {
	
	
	if(!this.gameover) {
		stroke(0);
		//noFill();
		
        
        if(this.color1){
            fill(237, 2, 11);
        }
        if(this.color2){
            
            fill(244, 0, 40);
        }
        if(this.color3){
            
            fill(255, 202, 43);
        }
        if(this.color4){
            
            fill(238, 47, 127);
        }
        if(this.color5){
            
            fill(241, 80, 149);
        }
        if(this.color6){
            
            fill(255, 169, 206);
        }
        if(this.color7){
            
            fill(64, 120, 211);
        }
        if(this.color8){
            
            fill(80, 168, 227);
        }
        if(this.color9){
            
            fill(173, 222, 250);
        }
        if(this.color10){
            
            fill(127, 176, 5);
        }
        if(this.color11){
            
            fill(184, 214, 4);
        }
        if(this.color12){
            
            fill(204, 255, 0);
        }
        if(this.color13){
            
            fill(124, 20, 77);
        }
        if(this.color14){
            
            fill(127, 66, 51);
        }
        if(this.color15){
            
            fill(108, 92, 50);
        }
        if(this.player){
            
            fill(0);
        }
        if(this.wall){
            
            fill(255);
        }
        if(this.rock){
            fill(125);
        }
		rect(this.x, this.y, this.w, this.w);
        
	}
	if (this.revealed) {
        
                fill(200);
                rect(this.x, this.y, this.w, this.w);
        
	}
}

Cell.prototype.contains = function (x, y) {
	
	return(x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w); 
		
}

Cell.prototype.playerMove = function (i,j, dir) {
    if(grid[i][j][dir] == "up"){
        console.log("playerMove Up is fine");
        grid[i][j].player = false;
        yoff = -1;
        j = j + yoff;
        
        grid[i][j].player = true;
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "left"){
        console.log("playerMove Left is fine");
        grid[i][j].player = false;
        xoff = -1;
        i = i + xoff;
        
        grid[i][j].player = true;
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "down"){
        console.log("playerMove Down is fine");
        grid[i][j].player = false;
        yoff = 1;
        j = j + yoff;
        
        grid[i][j].player = true;
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "right"){
        console.log("playerMove Right is fine");
        grid[i][j].player = false;
        xoff = 1;
        i = i + xoff;
        
        grid[i][j].player = true;
        //Moving twice fix
        return;
    }
    
    
}

Cell.prototype.check = function (i, j, dir, player, rock) {
    console.log("check has been ran");
    //console.log(grid[i][j].rock);
    //console.log(grid[i][j][dir]);
    
    if(grid[i][j][dir] == "up"){
        console.log("check  up");
        yoff = -1;
        j = j + yoff;
        if(j < 0){
            return;
        }else{
        if(grid[i][j].wall == true){
            console.log("there's a wall");
            return false;
            
        }else if(grid[i][j].rock == true){
            //Pushing twice fix
            grid[i][j][dir] = "up";
            if(grid[i][j].check(i, j, dir,player, rock)){
                console.log("push true");
                this.push(i, j, dir);
                return true;
            }else{
                return false;
            }
        } else{
            //console.log("check false is fine");
            return true;
            
        }
        }
    }
    if(grid[i][j][dir] == "left"){
        console.log("check  left");
        xoff = -1;
        i = i + xoff;
        if(i < 0){
            return;
        }else{
        if(grid[i][j].wall == true){
            console.log("there's a wall");
            return false;
            
        }else if(grid[i][j].rock == true){
            //Pushing twice fix
            grid[i][j][dir] = "left";
            if(grid[i][j].check(i, j, dir,player, rock)){
                console.log("push true");
                this.push(i, j, dir);
                return true;
            }else{
                return false;
            }
        } else{
            //console.log("check false is fine");
            return true;
            
        }
        }
    }
    if(grid[i][j][dir] == "down"){
        console.log("check  down");
        yoff = 1;
        j = j + yoff;
        if(j >= cols){
            return;
        }else{
        if(grid[i][j].wall == true){
            console.log("there's a wall");
            return false;
            
        }else if(grid[i][j].rock == true){
            //Pushing twice fix
            grid[i][j][dir] = "down";
            if(grid[i][j].check(i, j, dir,player, rock)){
                console.log("push true");
                this.push(i, j, dir);
                return true;
            }else{
                return false;
            }
        } else{
            //console.log("check false is fine");
            return true;
            
        }
        }
    }
    if(grid[i][j][dir] == "right"){
        console.log("check  right");
        xoff = 1;
        i = i + xoff;
        if(i >= rows){
            return false;
        }else{
            if(grid[i][j].wall == true){
                console.log("there's a wall");
                return false;
            
            } else if(grid[i][j].rock == true){
                //Pushing twice fix
                grid[i][j][dir] = "right";
                if(grid[i][j].check(i, j, dir,player, rock)){
                    console.log("push true");
                    this.push(i, j, dir);
                    return true;
                }else{
                    return false;
                }
            }else{
                //console.log("check true is fine");
                return true;
            
            }
            
        }
    }
    
}

Cell.prototype.push = function (i, j, dir) {
    if(grid[i][j][dir] == "up"){
        console.log("Push Up is fine");
        grid[i][j].rock = false;
        yoff = -1;
        j = j + yoff;
        
        grid[i][j].rock = true;
        return;
    }
    if(grid[i][j][dir] == "left"){
        console.log("Push Left is fine");
        grid[i][j].rock = false;
        xoff = -1;
        i = i + xoff;
        
        grid[i][j].rock = true;
        return;
    }
    if(grid[i][j][dir] == "down"){
        console.log("Push Down is fine");
        grid[i][j].rock = false;
        yoff = 1;
        j = j + yoff;
        
        grid[i][j].rock = true;
        return;
    }
    if(grid[i][j][dir] == "right"){
        console.log("Push Right is fine");
        grid[i][j].rock = false;
        xoff = 1;
        i = i + xoff;
        
        grid[i][j].rock = true;
        return;
    }
}

Cell.prototype.reveal = function (x, y) {
	this.revealed = true;		
}
