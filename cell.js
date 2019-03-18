function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
    
    this.obj = obj;
    this.dir = dir;
    this.player = false; //Normal
    this.isBlock = false;
    this.pushable = false;
    this.pushWasRan = false;
    this.pushBlock = false;
    this.rockBlock = false;
    this.rock = false;
    this.flag = false;
    this.wall = false;
    this.objtocheck = "";
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
        if(this.isBlock){
            
            fill(200);
        }
        
        if(this.rockBlock){
            
            fill(125);
        }
        if(this.pushBlock){
            
            fill(127, 176, 5);
        }
		rect(this.x, this.y, this.w, this.w);
        
	}
	if (this.revealed) {
        
                fill(200);
                rect(this.x, this.y, this.w, this.w);
        
	}
};

Cell.prototype.contains = function (x, y) {
	
	return(x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w); 
		
};

Cell.prototype.playerMove = function (i,j, dir) {
    if(grid[i][j][dir] == "up"){
        console.log("playerMove Up is fine");
        grid[i][j].player = false;
        grid[i][j].obj = "";
        yoff = -1;
        j = j + yoff;
        
        grid[i][j].player = true;
        grid[i][j].obj = "Player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "left"){
        console.log("playerMove Left is fine");
        grid[i][j].player = false;
        grid[i][j].obj = "";
        xoff = -1;
        i = i + xoff;
        
        grid[i][j].player = true;
        grid[i][j].obj = "Player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "down"){
        console.log("playerMove Down is fine");
        grid[i][j].player = false;
        grid[i][j].obj = "";
        yoff = 1;
        j = j + yoff;
        
        grid[i][j].player = true;
        grid[i][j].obj = "Player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "right"){
        console.log("playerMove Right is fine");
        grid[i][j].player = false;
        grid[i][j].obj = "";
        xoff = 1;
        i = i + xoff;
        
        grid[i][j].player = true;
        grid[i][j].obj = "Player";
        //Moving twice fix
        return;
    }
    
    
};

Cell.prototype.check = function (i, j, dir) {
    console.log("check has been ran");
    //console.log(grid[i][j].rock);
    //console.log(grid[i][j].obj);
    
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
            console.log("chrck rock was ran");
            //Pushing twice fix
            grid[i][j][dir] = "up";
            if(grid[i][j].check(i, j, dir, obj)){
                console.log("push true");
                if(this.push(i, j, dir, obj)){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else if(grid[i][j].pushBlock == true){
            //grid[i][j].obj = "pushBlock";
            console.log(grid[i][j].obj);
            console.log("check 1");
            grid[i][j][dir] = "up";
            if(grid[i][j].check(i, j, dir)){
                console.log("push true");
                if(grid[i][j].push(i, j, dir, obj)){
                    return true;
                }else{
                    return false;
                }
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
            console.log("chrck rock was ran");
            grid[i][j][dir] = "left";
            if(grid[i][j].check(i, j, dir,obj)){
                console.log("push true");
                if(this.push(i, j, dir, obj)){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else if(grid[i][j].pushBlock == true){
            //grid[i][j].obj = "pushBlock";
            console.log(grid[i][j].obj);
            console.log("check 1");
            grid[i][j][dir] = "left";
            if(grid[i][j].check(i, j, dir)){
                console.log("push true");
                if(grid[i][j].push(i, j, dir, obj)){
                    return true;
                }else{
                    return false;
                }
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
            console.log("chrck rock was ran");
            grid[i][j][dir] = "down";
            if(grid[i][j].check(i, j, dir,obj)){
                console.log("push true");
                if(this.push(i, j, dir, obj)){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else if(grid[i][j].pushBlock == true){
            //grid[i][j].obj = "pushBlock";
            console.log(grid[i][j].obj);
            console.log("check 1");
            grid[i][j][dir] = "down";
            if(grid[i][j].check(i, j, dir)){
                console.log("push true");
                if(grid[i][j].push(i, j, dir, obj)){
                    return true;
                }else{
                    return false;
                }
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
                console.log("chrck rock was ran");
                //Pushing twice fix
                grid[i][j][dir] = "right";
                if(grid[i][j].check(i, j, dir,  obj)){
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                    return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else if(grid[i][j].pushBlock == true){
                console.log(grid[i][j].obj);
                console.log("check 1");
                grid[i][j][dir] = "right";
                if(grid[i][j].check(i, j, dir)){
                console.log("push true");
                if(grid[i][j].push(i, j, dir, obj)){
                    return true;
                }else{
                    return false;
                }
                }else{
                    return false;
                }
            }else{
                //console.log("check true is fine");
                return true;
            
            }
            
        }
    }
    
};

Cell.prototype.checkIsCommand = function () {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if(grid[i][j].isBlock){
                xoff1 = 1;
                xoff2 = -1;
                if(grid[i + xoff1][j].obj == ""){
                    console.log("false");
                    if(grid[i][j].pushWasRan  == true){
                        if(grid[i + xoff2][j].obj == "rockBlock"){
                            this.objtocheck = "rock";
                            this.unSetPushable( this.objtocheck);
                            grid[i][j].pushWasRan  = false;
                        }
                        
                        
                    }
                    return false;
                }else if(grid[i + xoff2][j].obj == ""){
                    console.log("false");
                    if(grid[i][j].pushWasRan  == true){
                        if(grid[i + xoff1][j].obj == "rockBlock"){
                            this.objtocheck = "rock";
                            this.unSetPushable( this.objtocheck);
                            grid[i][j].pushWasRan  = false;
                        }
                        
                        
                    }
                    return false;
                }else if(grid[i + xoff2][j].obj == "pushBlock"){
                    console.log("first run");
                    if(grid[i + xoff1][j].obj == "rockBlock"){
                        console.log("first run");
                        //console.log(grid[i + xoff2][j].obj);
                       this.objtocheck = "rock";
                        //console.log(this.objtocheck);
                        //console.log(grid[i + xoff2][j].obj);
                        //console.log(this.i);
                        //console.log(this.j);
                        this.setPushable(this.objtocheck);
                        grid[i][j].pushWasRan  = true;
                    }
                } else if (grid[i + xoff1][j].obj == "pushBlock"){
                    console.log("second run");
                    if(grid[i + xoff2][j].obj == "rockBlock"){
                        this.objtocheck = "rock";
                        this.setPushable( this.objtocheck);
                        grid[i][j].pushWasRan  = true;
                    }
                }
                
            }
        }
    }
    
};

Cell.prototype.setPushable = function (objtocheck) {
    t = this.objtocheck;
    console.log("t");
    console.log(t);
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            if(grid[i][j].obj == t){
            grid[i][j].pushable = true;
            }
        }
    }
  
};
Cell.prototype.unSetPushable = function (objtocheck) {
    t = this.objtocheck;
    console.log("t");
    console.log(t);
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            if(grid[i][j].obj == t){
                grid[i][j].pushable = false;
            }
        }
    }
    
};

Cell.prototype.push = function (i, j, dir, obj, pushable) {
    console.log(grid[i][j].pushable);
    console.log("push 1");
    if(grid[i][j].pushable == true){
    var t = grid[i][j].obj;
        console.log(t);
         console.log("t");
    if(grid[i][j][dir] == "up"){
        console.log("Push Up is fine");
        grid[i][j][t]  = false;
        grid[i][j].obj = "";
         grid[i][j].pushable = false;
        yoff = -1;
        j = j + yoff;
        
        grid[i][j][t]  = true;
        grid[i][j].obj = t;
         grid[i][j].pushable = true;
        this.checkIsCommand();
        return true;
    }
    if(grid[i][j][dir] == "left"){
        console.log("Push Left is fine");
        grid[i][j][t]  = false;
        grid[i][j].obj = "";
        grid[i][j].pushable = false;
        xoff = -1;
        i = i + xoff;
        
        grid[i][j][t]  = true;
        grid[i][j].obj = t;
         grid[i][j].pushable = true;
        this.checkIsCommand();
        return true;
    }
    if(grid[i][j][dir] == "down"){
        console.log("Push Down is fine");
        grid[i][j][t] = false;
        grid[i][j].obj = "";
         grid[i][j].pushable = false;
        yoff = 1;
        j = j + yoff;
        
        grid[i][j][t] = true;
        grid[i][j].obj = t;
         grid[i][j].pushable = true;
        this.checkIsCommand();
        return true;
    }
    if(grid[i][j][dir] == "right"){
        console.log("Push Right is fine");
        grid[i][j][t] = false;
        grid[i][j].obj = "";
         grid[i][j].pushable = false;
        xoff = 1;
        i = i + xoff;
        
        grid[i][j][t] = true;
        grid[i][j].obj = t;
         grid[i][j].pushable = true;
        this.checkIsCommand();
        return true;
    }
    }else{
        return false;
    }
};

Cell.prototype.reveal = function (x, y) {
	this.revealed = true;		
};
