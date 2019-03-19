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
    this.wasPushed = "";
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
        if(this.flag){
            fill(184, 214, 4);
        }
        if(this.player){
            
            fill(0);
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
        var yoff = -1;
        j = j + yoff;
        
        grid[i][j].player = true;
        grid[i][j].obj = "player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "left"){
        console.log("playerMove Left is fine");
        grid[i][j].player = false;
        grid[i][j].obj = "";
        var xoff = -1;
        i = i + xoff;
        
        grid[i][j].player = true;
        grid[i][j].obj = "player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "down"){
        console.log("playerMove Down is fine");
        grid[i][j].player = false;
        grid[i][j].obj = "";
        var yoff2 = 1;
        j = j + yoff2;
        
        grid[i][j].player = true;
        grid[i][j].obj = "player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] == "right"){
        console.log("playerMove Right is fine");
        grid[i][j].player = false;
        grid[i][j].obj = "";
        var xoff2 = 1;
        i = i + xoff2;
        
        grid[i][j].player = true;
        grid[i][j].obj = "player";
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
        var yoff = -1;
        j = j + yoff;
        if(j < 0){
            return;
        }else{
            if(grid[i][j].wall == true){
                console.log("there's a wall");
                return false;
                
            }else if(!grid[i][j].obj == ""){
                console.log("chrck rock was ran");
                //Pushing twice fix
                grid[i][j][dir] = "up";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir)){
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                //console.log("check false is fine");
                return true;
                
            }
        }
    }
    if(grid[i][j][dir] == "left"){
        console.log("check  left");
        var xoff = -1;
        i = i + xoff;
        if(i < 0){
            return;
        }else{
            if(grid[i][j].wall == true){
                console.log("there's a wall");
                return false;
                
            }else if(!grid[i][j].obj == ""){
                //Pushing twice fix
                console.log("chrck rock was ran");
                grid[i][j][dir] = "left";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir,obj)){
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                //console.log("check false is fine");
                return true;
                
            }
        }
    }
    if(grid[i][j][dir] == "down"){
        console.log("check  down");
        var yoff3 = 1;
        j = j + yoff3;
        if(j >= cols){
            return;
        }else{
            if(grid[i][j].wall == true){
                console.log("there's a wall");
                return false;
                
            }else if(!grid[i][j].obj == ""){
                //Pushing twice fix
                console.log("chrck rock was ran");
                grid[i][j][dir] = "down";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir,obj)){
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
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
        var xoff3 = 1;
        i = i + xoff3;
        if(i >= rows){
            return false;
        }else{
            if(grid[i][j].wall == true){
                console.log("there's a wall");
                return false;
                
            } else if(!grid[i][j].obj == ""){
                console.log("chrck rock was ran");
                //Pushing twice fix
                grid[i][j][dir] = "right";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir,obj)){
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
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
                console.log("iscommand being ran");
                var xoff1 = 1;
                var xoff2 = -1;
                 console.log("iscommand being ran2");
                console.log(grid[i + xoff1][j].obj);
                console.log(grid[i + xoff2][j].obj);
                console.log(grid[i][j].pushWasRan);
                 console.log(grid[i][j].obj);
                if (grid[i + xoff1][j].obj == "" && grid[i + xoff2][j].obj == ""){
                    //console.log("nearly there1");
                   // if(grid[i][j].pushWasRan  == true){
                        //console.log("nearly there2");
                       // grid[i][j].pushWasRan  = false;
                     //console.log(grid[i][j].obj);
                     //console.log(grid[i][j].wasPushed);
                    //i = i + xoff1;
                    //console.log(grid[i][j].obj);
                        //grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                        //this.unSetPushable(i, j, grid[i][j].obj);
                      //  grid[i][j].obj = "";
                 //   }
                    //return false;
                    //if(grid[i][j].pushWasRan  == true){
                        grid[i][j].pushWasRan  = false;
                        i = i + xoff1;
                        
                            console.log("what i think it is");
                            console.log(grid[i][j].obj);
                            grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                            this.unSetPushable(i, j,  grid[i][j].obj);
                            grid[i][j].obj = "";
                        
                    //}
                    return false;
                }else if(grid[i + xoff1][j].obj == "" || grid[i + xoff1][j].obj == "player"){
                    console.log("false");
                    if(grid[i][j].pushWasRan  == true){
                        grid[i][j].pushWasRan  = false;
                        i = i + xoff1;
                        if(grid[i][j].obj == "pushBlock"){
                            console.log("what i didnt think it is 3");
                            console.log(grid[i + xoff2][j].wasPushed);
                            grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                            this.unSetPushable(i, j, grid[i][j].obj);
                            return false;
                        }else{
                            console.log("what i think it is");
                            console.log(grid[i][j].obj);
                            grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                            this.unSetPushable(i, j,  grid[i][j].obj);
                            grid[i][j].obj = "";
                        }
                    }
                    return false;
                }else if(grid[i + xoff2][j].obj == "" || grid[i + xoff2][j].obj == "player"){
                    console.log("false2");
                   
                    if(grid[i][j].pushWasRan  == true){
                        grid[i][j].pushWasRan  = false;
                        i = i + xoff2;
                        if(grid[i][j].obj == "pushBlock"){
                            console.log("what i didnt think it is 2");
                            console.log(grid[i + xoff1][j].wasPushed);
                            console.log(grid[i + 2][j].obj);
                            grid[i + 2][j].obj = grid[i + xoff1][j].wasPushed;
                            console.log(grid[i + 2][j].obj = grid[i + xoff1][j].wasPushed);
                            this.unSetPushable(i, j, grid[i + 2][j].obj);
                            grid[i + 2][j].obj = "";
                        }else{
                            console.log("what i didnt think it is");
                            console.log(grid[i][j].obj = grid[i + xoff1][j].wasPushed);
                            grid[i][j].obj = grid[i + xoff1][j].wasPushed;
                            this.unSetPushable(i, j, grid[i][j].obj);
                            grid[i][j].obj = "";
                        }
                        
                    }
                    return false;
                }else if(grid[i + xoff2][j].obj == "pushBlock"){
                    
                    
                    console.log("first run");
                    //console.log(grid[i + xoff2][j].obj);
                    
                    
                    //console.log(grid[i + xoff2][j].obj);
                    //console.log(this.i);
                    //console.log(this.j);
                    grid[i][j].pushWasRan  = true;
                    console.log(grid[i][j].pushWasRan);
                    console.log(grid[i + xoff1][j].obj);
                    grid[i][j].wasPushed  = grid[i + xoff1][j].obj;
                    console.log(grid[i][j].wasPushed);
                     console.log(grid[i][j].obj);
                    i = i + xoff1;
                    
                    this.setPushable(i, j, grid[i][j].obj);
                    
                    
                } else if (grid[i + xoff1][j].obj == "pushBlock"){
                    console.log("second run");
                    grid[i][j].pushWasRan  = true;
                    console.log(grid[i][j].pushWasRan);
                    grid[i][j].wasPushed  = grid[i][j].obj;
                    console.log(grid[i + xoff2][j].obj);
                    grid[i][j].wasPushed  = grid[i + xoff2][j].obj;
                    console.log(grid[i][j].wasPushed);
                    i = i + xoff2;
                    
                    this.setPushable(i, j, grid[i][j].obj);
                }else{
                    console.log("i dont fing know");
                }
                
            }
        }
    }
    
};

Cell.prototype.setPushable = function (i, j, obj) {
    var t = grid[i][j].obj;
    console.log("t");
    console.log(t);
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            // make sure to have 2 = or else it applies instead of comparing
            if(grid[i][j].obj == t){
                grid[i][j].pushable = true;
            }
        }
    }
    
};
Cell.prototype.unSetPushable = function (i, j, obj) {
    var t = grid[i][j].obj;
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
        var u = grid[i][j].wasPushed;
        console.log(t);
        console.log("t");
        if(grid[i][j][dir] == "up"){
            console.log("Push Up is fine");
            grid[i][j][t]  = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            var yoff = -1;
            j = j + yoff;
            
            grid[i][j][t]  = true;
            grid[i][j].obj = t;
            grid[i][j].wasPushed = u;
            grid[i][j].pushable = true;
            //console.log("checkcommand");
            
            return true;
        }
        if(grid[i][j][dir] == "left"){
            console.log("Push Left is fine");
            grid[i][j][t]  = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            var xoff = -1;
            i = i + xoff;
            
            grid[i][j][t]  = true;
            grid[i][j].obj = t;
            grid[i][j].wasPushed = u;
            grid[i][j].pushable = true;
            
            return true;
        }
        if(grid[i][j][dir] == "down"){
            console.log("Push Down is fine");
            grid[i][j][t] = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            var yoff4 = 1;
            j = j + yoff4;
            
            grid[i][j][t] = true;
            grid[i][j].obj = t;
            grid[i][j].wasPushed = u;
            grid[i][j].pushable = true;
            
            return true;
        }
        if(grid[i][j][dir] == "right"){
            console.log("Push Right is fine");
            grid[i][j][t] = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            var xoff4 = 1;
            i = i + xoff4;
            
            grid[i][j][t] = true;
            grid[i][j].obj = t;
            grid[i][j].wasPushed = u;
            grid[i][j].pushable = true;
            //if(t == "isBlock"){
             //   this.checkIsCommand();
           // }
            return true;
        }
    }else{
        return false;
    }
    
};

Cell.prototype.reveal = function (x, y) {
    this.revealed = true;
};
