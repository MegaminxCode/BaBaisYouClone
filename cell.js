function Cell(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    
    this.obj = obj;
    this.dir = dir;
    this.playerIcon = false; //Normal
    this.playerBlock = false;
    this.isBlock = false;
    this.pushable = false;
    this.isYou = false;
    this.commandWasRanX = "";
    this.commandWasRanY = "";
    this.pushBlock = false;
    this.stopBlock = false;
    this.wasPushed = "";
    this.wasStopped = "";
    this.wasYoued = "";
    this.youBlock = false;
    this.stop = false;
    this.hasACommand = false;
    this.command = "";
    this.undoCommand = "";
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
        if(this.stopBlock){
            fill(237, 2, 11);
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
    if(grid[i][j][dir] === "up"){
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
    if(grid[i][j][dir] === "left"){
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
    if(grid[i][j][dir] === "down"){
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
    if(grid[i][j][dir] === "right"){
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
    
    if(grid[i][j][dir] === "up"){
        console.log("check  up");
        var yoff = -1;
        j = j + yoff;
        if(j < 0){
            
            return false;
        }else{
            if(grid[i][j].stop){
                console.log("there's a wall");
                return false;
                
            }else if(grid[i][j].obj === ""){
                //console.log("check false is fine");
                return true;
                
            }else{
                
                console.log("check else was ran");
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
            }
        }
    }
    if(grid[i][j][dir] === "left"){
        console.log("check  left");
        var xoff = -1;
        i = i + xoff;
        if(i < 0){
            return false;
        }else{
            if(grid[i][j].stop){
                console.log("there's a wall");
                return false;
                
            }else if(grid[i][j].obj === ""){
                //console.log("check false is fine");
                return true;
            }else{
               
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
                
            }
        }
    }
    if(grid[i][j][dir] === "down"){
        console.log("check  down");
        var yoff3 = 1;
        j = j + yoff3;
        if(j >= cols){
            return false;
        }else{
            if(grid[i][j].stop){
                console.log("there's a wall");
                return false;
                
            }else if(grid[i][j].obj === ""){
                //console.log("check false is fine");
                return true;
                
            } else{
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
                
            }
        }
    }
    if(grid[i][j][dir] === "right"){
        console.log("check  right");
        var xoff3 = 1;
        i = i + xoff3;
        if(i >= rows){
            return false;
        }else{
            if(grid[i][j].stop){
                console.log("there's a wall");
                return false;
                
            } else if(grid[i][j].obj === ""){
                //console.log("check true is fine");
                console.log("right2");
                return true;
                
            }else{
                console.log("chrck rock was ran");
                //Pushing twice fix
                grid[i][j][dir] = "right";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir,obj)){
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
                        console.log("right");
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                
            }
            
        }
    }
    
};

Cell.prototype.checkIsCommand = function () {
    var i;
    var j;
    var xoff1 = 1;
    var xoff2 = -1;
    var yoff1 = 1;
    var yoff2 = -1;
    var temp;
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            if(grid[i][j].isBlock){
                console.log("iscommand being ran");
                xoff1 = 1;
                xoff2 = -1;
                yoff1 = 1;
                yoff2 = -1;
                 console.log("iscommand being ran2");
                if(i + xoff1 >= cols || i + xoff2 < 0 || j + yoff1 >= rows || j + yoff2 < 0){
                    console.log("out of bounds1");
                    break;
                }else{
                    console.log(grid[i + xoff1][j].obj);
                    console.log(grid[i + xoff2][j].obj);
                    console.log(grid[i][j + yoff1].obj);
                    console.log(grid[i][j + yoff2].obj);
                }
                
                console.log(grid[i][j].commandWasRanX);
                console.log(grid[i][j].commandWasRanY);
                 console.log(grid[i][j].obj);
        BreakMeY: {
            BreakMeX:{
                if(i + xoff1 >= cols || i + xoff2 < 0 || j + yoff1 >= rows || j + yoff2 < 0){
                    console.log("out of bounds2");
                    break BreakMeX;
                }else if(grid[i][j].commandWasRanX  !== ""){
                    if (grid[i + xoff1][j].obj === "" && grid[i + xoff2][j].obj === ""){
                        
                        
                        i = i + xoff1;
                        switch(grid[i + xoff2][j].commandWasRanX){
                            case"this.setStop":
                                console.log("what i think it is");
                                console.log(grid[i][j + yoff2].wasStopped);
                                grid[i][j].obj = grid[i + xoff2][j].wasStopped;
                                this.unSetStop(i, j,  grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                        }
                        grid[i + xoff2][j].commandWasRanX  = "";
                        break BreakMeX;
                    }else if (grid[i + xoff1][j].hasACommand && grid[i + xoff2][j].hasACommand){
                        
                        
                        i = i + xoff1;
                        switch(grid[i + xoff2][j].commandWasRanX){
                            case"this.setStop":
                                console.log("what i think it is");
                                console.log(grid[i][j + yoff2].wasStopped);
                                temp = grid[i][j].obj;
                                grid[i][j].obj = grid[i + xoff2][j].wasStopped;
                                this.unSetStop(i, j,  grid[i][j].obj);
                                grid[i][j].obj = temp;
                                temp = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                temp =  grid[i][j].obj;
                                grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                grid[i][j].obj = temp;
                                temp = "";
                                break;
                        }
                        grid[i + xoff2][j].commandWasRanX  = "";
                        break BreakMeX;
                    }else if (!grid[i + xoff1][j].hasACommand && !grid[i + xoff2][j].hasACommand){
                        if(grid[i + xoff1][j].obj === "" || grid[i + xoff1][j].obj === "player"){
                            console.log("false");
                            i = i + xoff1;
                            switch(grid[i + xoff2][j].commandWasRanX){
                                case "this.setStop":
                                    console.log("what i didnt think it is 3");
                                    console.log(grid[i][j + yoff2].wasStopped);
                                    grid[i][j].obj = grid[i + xoff2][j].wasStopped;
                                    this.unSetStop(i, j, grid[i][j].obj);
                                    grid[i][j].obj = "";
                                    break;
                                case "this.setPushable":
                                    console.log("what i think it is");
                                    console.log(grid[i][j].obj);
                                    grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                                    this.unSetPushable(i, j,  grid[i][j].obj);
                                    grid[i][j].obj = "";
                                    break;
                            }
                            grid[i + xoff2][j].commandWasRanX  = "";
                            console.log(grid[i][j].commandWasRanY);
                           break BreakMeX;
                        }else if(grid[i + xoff2][j].obj === "" || grid[i + xoff2][j].obj === "player"){
                            console.log("false2");
                            
                            
                            
                            
                            switch(grid[i][j].commandWasRanX){
                                case "this.setStop":
                                    console.log("what i didnt think it is 2");
                                    console.log(grid[i][j + yoff1].wasStopped);
                                    console.log(grid[i][j + yoff1].obj);
                                    
                                    console.log(grid[i][j + yoff1].wasStopped);
                                    this.unSetStop(i + xoff1, j, grid[i + xoff1][j].obj);
                                    
                                    break;
                                case "this.setPushable":
                                    console.log("what i didnt think it is");
                                    //Keep an Eye on this. Seems off. Called it XD Got an issue fixed it.
                                    //console.log(grid[i][j].obj = grid[i][j + yoff1].wasPushed);
                                   // grid[i][j].obj = grid[i + xoff1][j].wasPushed;
                                    this.unSetPushable(i + xoff1, j, grid[i + xoff1][j].obj);
                                 //   grid[i][j].obj = "";
                                    break;
                            }
                            
                            grid[i + xoff1][j].commandWasRanX  = "";
                            break BreakMeX;
                        }else{
                            
                            i = i + yoff1;
                            switch(grid[i + xoff2][j].commandWasRanX){
                                case "this.setStop":
                                    console.log("what i think it is");
                                    console.log(grid[i][j].obj);
                                    
                                    this.unSetStop(i, j,  grid[i][j].obj);
                                    grid[i + xoff2][j].commandWasRanX  = "";
                                    break;
                                case "this.setPushable":
                                    console.log("what i think it is");
                                    console.log(grid[i][j].obj);
                                    
                                    this.unSetPushable(i, j,  grid[i][j].obj);
                                    grid[i + xoff2][j].commandWasRanX  = "";
                                    break;
                            }
                        }
                        
                        break BreakMeX;
                    }
                    else if(grid[i + xoff1][j].obj === "" || grid[i + xoff1][j].obj === "player"){
                        console.log("false");
                        i = i + xoff1;
                        switch(grid[i + xoff2][j].commandWasRanX){
                            case "this.setStop":
                                console.log("what i didnt think it is 3");
                                console.log(grid[i][j + yoff2].wasStopped);
                                grid[i][j].obj = grid[i + xoff2][j].wasStopped;
                                this.unSetStop(i, j, grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                        }
                        grid[i + xoff2][j].commandWasRanX  = "";
                        console.log(grid[i][j].commandWasRanY);
                        break BreakMeX;
                    }else if(grid[i + xoff2][j].obj === "" || grid[i + xoff2][j].obj === "player"){
                        console.log("false2");
                        
                        
                        
                        i = i + xoff2;
                        switch(grid[i + xoff1][j].commandWasRanX){
                            case "this.setStop":
                                console.log("what i didnt think it is 2");
                                console.log(grid[i + xoff1][j].wasStopped);
                                console.log(grid[i + 2][j].obj);
                                grid[i][j].obj = grid[i + xoff1][j].wasStopped;
                                console.log(grid[i + 2][j].obj = grid[i + xoff1][j].wasStopped);
                                this.unSetStop(i, j, grid[i + 2][j].obj);
                                grid[i][j].obj = "";
                                break;
                            case "this.setPushable":
                                console.log("what i didnt think it is");
                                console.log(grid[i][j].obj = grid[i][j + yoff1].wasPushed);
                                grid[i][j].obj = grid[i + xoff1][j].wasPushed;
                                this.unSetPushable(i, j, grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                        }
                        
                        grid[i + xoff1][j].commandWasRanX  = "";
                        break BreakMeX;
                    }else if(grid[i + xoff2][j].hasACommand){
                        console.log("first run");
                        //console.log(grid[i + xoff2][j].obj);
                        //console.log(grid[i + xoff2][j].obj);
                        //console.log(this.i);
                        //console.log(this.j);
                        
                        console.log(grid[i][j].commandWasRanY);
                        if(grid[i][j].commandWasRanX !== grid[i + xoff2][j].command){
                            switch(grid[i + xoff2][j].command){
                                case "this.setPushable":
                                    
                                    i = i + xoff1;
                                    
                                    this.unSetStop(i, j, grid[i][j].obj);
                                    console.log(grid[i + xoff1][j].obj);
                                    grid[i + xoff2][j].wasPushed  = grid[i][j].obj;
                                    console.log(grid[i][j].wasPushed);
                                    console.log(grid[i][j].obj);
                                    
                                    
                                    this.setPushable(i, j, grid[i][j].obj);
                                    break;
                                case "this.setStop":
                                    
                                    i = i + xoff1;
                                    //grid[i][j].wasPsuhed needs to be accesses somwhow.
                                    this.unSetPushable(i, j, grid[i][j].obj);
                                    grid[i + xoff2][j].wasStopped  = grid[i][j].obj;
                                    
                                    
                                    this.setStop(i, j, grid[i][j].obj);
                                    break;
                            }
                            grid[i + xoff2][j].commandWasRanX  = grid[i - 2][j].command;
                        }
                        
                        console.log(grid[i][j + yoff2].commandWasRanY);
                        console.log(grid[i][j + yoff2].commandWasRanY);
                        console.log(grid[i][j + yoff2].wasStopped);
                        console.log(grid[i][j + yoff2].wasPushed);
                        break BreakMeX;
                        
                    } else if (grid[i + xoff1][j].hasACommand){
                        console.log("second run");
                        
                        console.log(grid[i][j].commandWasRanY);
                        if(grid[i][j].commandWasRanX !== grid[i + xoff1][j].command){
                            switch(grid[i + xoff1][j].command){
                                    
                                case "this.setPushable":
                                    //console.log("this stuff works");
                                    console.log(grid[i][j + yoff2].obj);
                                    
                                    console.log(grid[i][j].wasPushed);
                                    i = i + xoff2;
                                    
                                    this.unSetStop(i, j, grid[i][j].obj);
                                    
                                    console.log(grid[i][j + yoff2].obj);
                                    grid[i + xoff1][j].wasPushed  = grid[i][j].obj;
                                    console.log(grid[i][j].wasPushed);
                                    
                                    
                                    this.setPushable(i, j, grid[i][j].obj);
                                    break;
                                case "this.setStop":
                                    //  console.log("this stuff  TOTALLY works");
                                    
                                    i = i + xoff2;
                                    
                                    this.unSetPushable(i, j, grid[i][j].obj);
                                    grid[i + xoff1][j].wasStopped  = grid[i][j].obj;
                                    
                                    
                                    this.setStop(i, j, grid[i][j].obj);
                                    break;
                            }
                            grid[i + xoff1][j].commandWasRanX  = grid[i + 2][j].command;
                        }
                        
                        console.log(grid[i][j].obj);
                        break BreakMeX;
                    }else{
                        console.log("i dont know2");
                    }
                }else if (grid[i + xoff1][j].hasACommand && grid[i + xoff2][j].hasACommand){
                    grid[i][j].commandWasRanX  = "";
                    break BreakMeX;
                }else if(grid[i + xoff2][j].hasACommand){
                    console.log("first run");
                    //console.log(grid[i + xoff2][j].obj);
                    //console.log(grid[i + xoff2][j].obj);
                    //console.log(this.i);
                    //console.log(this.j);
                    grid[i][j].commandWasRanX  = grid[i + xoff2][j].command;
                    console.log(grid[i][j].commandWasRanY);
                    if(grid[i + xoff1][j].obj !== ""){
                        switch(grid[i + xoff2][j].command){
                            case "this.setPushable":
                                console.log(grid[i + xoff1][j].obj);
                                grid[i][j].wasPushed  = grid[i + xoff1][j].obj;
                                console.log(grid[i][j].wasPushed);
                                console.log(grid[i][j].obj);
                                i = i + xoff1;
                                
                                this.setPushable(i, j, grid[i][j].obj);
                                break;
                            case "this.setStop":
                                grid[i][j].wasStopped  = grid[i + xoff1][j].obj;
                                i = i + xoff1;
                                
                                this.setStop(i, j, grid[i][j].obj);
                                break;
                        }
                    }
                    break BreakMeX;
                    
                } else if (grid[i + xoff1][j].hasACommand){
                    console.log("second run");
                    if(grid[i + xoff2][j].obj !== ""){
                        grid[i][j].commandWasRanX  = grid[i + xoff1][j].command;
                        console.log(grid[i][j].commandWasRanY);
                        
                        switch(grid[i + xoff1][j].command){
                                
                            case "this.setPushable":
                                //console.log("this stuff works");
                                
                                console.log(grid[i][j + yoff2].obj);
                                grid[i][j].wasPushed  = grid[i + xoff2][j].obj;
                                console.log(grid[i][j].wasPushed);
                                i = i + xoff2;
                                
                                this.setPushable(i, j, grid[i][j].obj);
                                break;
                            case "this.setStop":
                                //  console.log("this stuff  TOTALLY works");
                                grid[i][j].wasStopped  = grid[i + xoff2][j].obj;
                                i = i + xoff2;
                                
                                this.setStop(i, j, grid[i][j].obj);
                                break;
                        }
                    }
                    break BreakMeX;
                }else{
                    console.log("i dont know");
                }
            }
            if(grid[i][j].commandWasRanY  !== ""){
                if (grid[i][j + yoff1].obj === "" && grid[i][j + yoff2].obj === ""){
                    
                    
                    j = j + yoff1;
                    switch(grid[i][j + yoff2].commandWasRanY){
                        case"this.setStop":
                            console.log("what i think it is");
                            console.log(grid[i][j + yoff2].wasStopped);
                            grid[i][j].obj = grid[i][j + yoff2].wasStopped;
                            this.unSetStop(i, j,  grid[i][j].obj);
                            grid[i][j].obj = "";
                            break;
                        case "this.setPushable":
                            console.log("what i think it is");
                            console.log(grid[i][j].obj);
                            grid[i][j].obj = grid[i][j + yoff2].wasPushed;
                            this.unSetPushable(i, j,  grid[i][j].obj);
                            grid[i][j].obj = "";
                            break;
                    }
                    grid[i][j + yoff2].commandWasRanY  = "";
                    break BreakMeY;
                }else if (grid[i][j + yoff1].hasACommand && grid[i][j + yoff2].hasACommand){
                    
                    
                    j = j + yoff1;
                    switch(grid[i][j + yoff2].commandWasRanY){
                        case"this.setStop":
                            console.log("what i think it is");
                            console.log(grid[i][j + yoff2].wasStopped);
                            temp = grid[i][j].obj;
                            grid[i][j].obj = grid[i][j + yoff2].wasStopped;
                            this.unSetStop(i, j,  grid[i][j].obj);
                            grid[i][j].obj = temp;
                            temp = "";
                            break;
                        case "this.setPushable":
                            console.log("what i think it is");
                            console.log(grid[i][j].obj);
                            temp =  grid[i][j].obj;
                            grid[i][j].obj = grid[i][j + yoff2].wasPushed;
                            this.unSetPushable(i, j,  grid[i][j].obj);
                            grid[i][j].obj = temp;
                            temp = "";
                            break;
                    }
                    grid[i][j + yoff2].commandWasRanY  = "";
                    break BreakMeY;
                }else if (!grid[i][j + yoff1].hasACommand && !grid[i][j + yoff2].hasACommand){
                    if(grid[i][j + yoff1].obj === "" || grid[i][j + yoff1].obj === "player"){
                        console.log("false");
                        j = j + yoff1;
                        switch(grid[i][j + yoff2].commandWasRanY){
                            case "this.setStop":
                                console.log("what i didnt think it is 3");
                                console.log(grid[i][j + yoff2].wasStopped);
                                grid[i][j].obj = grid[i][j + yoff2].wasStopped;
                                this.unSetStop(i, j, grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                grid[i][j].obj = grid[i][j + yoff2].wasPushed;
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                        }
                        grid[i][j + yoff2].commandWasRanY  = "";
                        console.log(grid[i][j].commandWasRanY);
                        break BreakMeY;
                    }else if(grid[i][j + yoff2].obj === "" || grid[i][j + yoff2].obj === "player"){
                        console.log("false2");
                        
                        
                        
                        
                        switch(grid[i][j].commandWasRanY){
                            case "this.setStop":
                                console.log("what i didnt think it is 2");
                                console.log(grid[i][j + yoff1].wasStopped);
                                console.log(grid[i][j + yoff1].obj);
                                
                                console.log(grid[i][j + yoff1].wasStopped);
                                this.unSetStop(i, j + yoff1, grid[i][j + yoff1].obj);
                                
                                break;
                            case "this.setPushable":
                                console.log("what i didnt think it is");
                                //console.log(grid[i][j].obj = grid[i][j + yoff1].wasPushed);
                                //grid[i][j].obj = grid[i][j + yoff1].wasPushed;
                                this.unSetPushable(i, j + yoff1, grid[i][j + yoff1].obj);
                              //  grid[i][j].obj = "";
                                break;
                        }
                        
                        grid[i][j + yoff1].commandWasRanY  = "";
                        break BreakMeY;
                    }else{
                        
                        j = j + yoff1;
                        switch(grid[i][j + yoff2].commandWasRanY){
                            case "this.setStop":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                
                                this.unSetStop(i, j,  grid[i][j].obj);
                                grid[i][j + yoff2].commandWasRanY  = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                grid[i][j + yoff2].commandWasRanY  = "";
                                break;
                        }
                    }
                    
                    break BreakMeY;
                }
                else if(grid[i][j + yoff1].obj === "" || grid[i][j + yoff1].obj === "player"){
                    console.log("false");
                    j = j + yoff1;
                    switch(grid[i][j + yoff2].commandWasRanY){
                        case "this.setStop":
                            console.log("what i didnt think it is 3");
                            console.log(grid[i][j + yoff2].wasStopped);
                            grid[i][j].obj = grid[i][j + yoff2].wasStopped;
                            this.unSetStop(i, j, grid[i][j].obj);
                            grid[i][j].obj = "";
                            break;
                        case "this.setPushable":
                            console.log("what i think it is");
                            console.log(grid[i][j].obj);
                            grid[i][j].obj = grid[i][j + yoff2].wasPushed;
                            this.unSetPushable(i, j,  grid[i][j].obj);
                            grid[i][j].obj = "";
                            break;
                    }
                    grid[i][j + yoff2].commandWasRanY  = "";
                    console.log(grid[i][j].commandWasRanY);
                    break BreakMeY;
                }else if(grid[i][j + yoff2].obj === "" || grid[i][j + yoff2].obj === "player"){
                    console.log("false2");
                    
                    
                    
                    j = j + yoff2;
                    switch(grid[i][j + yoff1].commandWasRanY){
                        case "this.setStop":
                            console.log("what i didnt think it is 2");
                            console.log(grid[i + xoff1][j].wasStopped);
                            console.log(grid[i + 2][j].obj);
                            grid[i][j].obj = grid[i][j + yoff1].wasStopped;
                            console.log(grid[i + 2][j].obj = grid[i + xoff1][j].wasStopped);
                            this.unSetStop(i, j, grid[i][j + 2].obj);
                            grid[i][j].obj = "";
                            break;
                        case "this.setPushable":
                            console.log("what i didnt think it is");
                            console.log(grid[i][j].obj = grid[i][j + yoff1].wasPushed);
                            grid[i][j].obj = grid[i][j + yoff1].wasPushed;
                            this.unSetPushable(i, j, grid[i][j].obj);
                            grid[i][j].obj = "";
                            break;
                    }
                    
                    grid[i][j + yoff1].commandWasRanY  = "";
                    break BreakMeY;
                }else if(grid[i][j + yoff2].hasACommand){
                    console.log("first run");
                    //console.log(grid[i + xoff2][j].obj);
                    //console.log(grid[i + xoff2][j].obj);
                    //console.log(this.i);
                    //console.log(this.j);
                    
                    console.log(grid[i][j].commandWasRanY);
                    if(grid[i][j].commandWasRanY !== grid[i][j + yoff2].command){
                        switch(grid[i][j + yoff2].command){
                            case "this.setPushable":
                                
                                j = j + yoff1;
                                
                                this.unSetStop(i, j, grid[i][j].obj);
                                console.log(grid[i + xoff1][j].obj);
                                grid[i][j + yoff2].wasPushed  = grid[i][j].obj;
                                console.log(grid[i][j].wasPushed);
                                console.log(grid[i][j].obj);
                                
                                
                                this.setPushable(i, j, grid[i][j].obj);
                                break;
                            case "this.setStop":
                                
                                j = j + yoff1;
                                //grid[i][j].wasPsuhed needs to be accesses somwhow.
                                this.unSetPushable(i, j, grid[i][j].obj);
                                grid[i][j + yoff2].wasStopped  = grid[i][j].obj;
                                
                                
                                this.setStop(i, j, grid[i][j].obj);
                                break;
                        }
                        grid[i][j + yoff2].commandWasRanY  = grid[i][j - 2].command;
                    }
                    
                    console.log(grid[i][j + yoff2].commandWasRanY);
                    console.log(grid[i][j + yoff2].commandWasRanY);
                    console.log(grid[i][j + yoff2].wasStopped);
                    console.log(grid[i][j + yoff2].wasPushed);
                    break BreakMeY;
                    
                } else if (grid[i][j + yoff1].hasACommand){
                    console.log("second run");
                    
                    console.log(grid[i][j].commandWasRanY);
                    if(grid[i][j].commandWasRanY !== grid[i][j + yoff1].command){
                        switch(grid[i][j + yoff1].command){
                                
                            case "this.setPushable":
                                //console.log("this stuff works");
                                console.log(grid[i][j + yoff2].obj);
                                
                                console.log(grid[i][j].wasPushed);
                                j = j + yoff2;
                                
                                this.unSetStop(i, j, grid[i][j].obj);
                                
                                console.log(grid[i][j + yoff2].obj);
                                grid[i][j + yoff1].wasPushed  = grid[i][j].obj;
                                console.log(grid[i][j].wasPushed);
                                
                                
                                this.setPushable(i, j, grid[i][j].obj);
                                break;
                            case "this.setStop":
                                //  console.log("this stuff  TOTALLY works");
                                
                                j = j + yoff2;
                                
                                this.unSetPushable(i, j, grid[i][j].obj);
                                grid[i][j + yoff1].wasStopped  = grid[i][j].obj;
                                
                                
                                this.setStop(i, j, grid[i][j].obj);
                                break;
                        }
                        grid[i][j + yoff1].commandWasRanY  = grid[i][j + 2].command;
                    }
                    
                    console.log(grid[i][j].obj);
                    break BreakMeY;
                }else{
                    console.log("i dont know2");
                }
            }else if (grid[i][j + yoff1].hasACommand && grid[i][j + yoff2].hasACommand){
                grid[i][j].commandWasRanY  = "";
                break BreakMeY;
            }else if(grid[i][j + yoff2].hasACommand){
                console.log("first run");
                //console.log(grid[i + xoff2][j].obj);
                //console.log(grid[i + xoff2][j].obj);
                //console.log(this.i);
                //console.log(this.j);
                grid[i][j].commandWasRanY  = grid[i][j + yoff2].command;
                console.log(grid[i][j].commandWasRanY);
                if(grid[i][j + yoff1].obj !== ""){
                    switch(grid[i][j + yoff2].command){
                        case "this.setPushable":
                            console.log(grid[i + xoff1][j].obj);
                            grid[i][j].wasPushed  = grid[i][j + yoff1].obj;
                            console.log(grid[i][j].wasPushed);
                            console.log(grid[i][j].obj);
                            j = j + yoff1;
                            
                            this.setPushable(i, j, grid[i][j].obj);
                            break;
                        case "this.setStop":
                            grid[i][j].wasStopped  = grid[i][j + yoff1].obj;
                            j = j + yoff1;
                            
                            this.setStop(i, j, grid[i][j].obj);
                            break;
                    }
                }
                break BreakMeY;
                
            } else if (grid[i][j + yoff1].hasACommand){
                console.log("second run");
                if(grid[i][j + yoff2].obj !== ""){
                    grid[i][j].commandWasRanY  = grid[i][j + yoff1].command;
                    console.log(grid[i][j].commandWasRanY);
                    
                    switch(grid[i][j + yoff1].command){
                            
                        case "this.setPushable":
                            //console.log("this stuff works");
                            
                            console.log(grid[i][j + yoff2].obj);
                            grid[i][j].wasPushed  = grid[i][j + yoff2].obj;
                            console.log(grid[i][j].wasPushed);
                            j = j + yoff2;
                            
                            this.setPushable(i, j, grid[i][j].obj);
                            break;
                        case "this.setStop":
                            //  console.log("this stuff  TOTALLY works");
                            grid[i][j].wasStopped  = grid[i][j + yoff2].obj;
                            j = j + yoff2;
                            
                            this.setStop(i, j, grid[i][j].obj);
                            break;
                    }
                }
                break BreakMeY;
            }else{
                console.log("i dont know");
            }
        }
                
            
                //Next command dont edit
                //////////////////////////
                //////////////////////////
                
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
            if(grid[i][j].obj === t){
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
            if(grid[i][j].obj === t){
                grid[i][j].pushable = false;
            }
        }
    }
    
};

Cell.prototype.setStop = function (i, j, obj) {
    var t = grid[i][j].obj;
    console.log("t");
    console.log(t);
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            // make sure to have 2 = or else it applies instead of comparing
            if(grid[i][j].obj === t){
                grid[i][j].stop = true;
            }
        }
    }
    
};
Cell.prototype.unSetStop = function (i, j, obj) {
    var t = grid[i][j].obj;
    console.log("t");
    console.log(t);
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            if(grid[i][j].obj === t){
                grid[i][j].stop = false;
            }
        }
    }
    
};

Cell.prototype.push = function (i, j, dir, obj, pushable) {
    console.log(grid[i][j].pushable);
    console.log("push 1");
    if(grid[i][j].pushable === true){
        var t = grid[i][j].obj;
        var u = grid[i][j].wasPushed;
        var v = grid[i][j].commandWasRanX;
        var w = grid[i][j].commandWasRanY;
        var tt = grid[i][j].hasACommand;
        var uu = grid[i][j].wasStopped;
        var vv = grid[i][j].command;
        console.log(uu);
        console.log(t);
        console.log("t");
        console.log(u);
        console.log("u");
        if(grid[i][j][dir] === "up"){
            console.log("Push Up is fine");
            grid[i][j][t]  = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            grid[i][j].commandWasRanX = "";
            grid[i][j].commandWasRanY = "";
            grid[i][j].hasACommand = false;
            grid[i][j].wasStopped = "";
            grid[i][j].command = "";
            var yoff = -1;
            j = j + yoff;
            
            grid[i][j][t]  = true;
            grid[i][j].obj = t;
            grid[i][j].wasPushed = u;
            grid[i][j].pushable = true;
            grid[i][j].commandWasRanX = v;
            grid[i][j].commandWasRanY = w;
            grid[i][j].hasACommand = tt;
            grid[i][j].wasStopped = uu;
            grid[i][j].command = vv;
            //console.log("checkcommand");
            
            return true;
        }
        if(grid[i][j][dir] === "left"){
            console.log("Push Left is fine");
            grid[i][j][t]  = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            grid[i][j].commandWasRanX = "";
            grid[i][j].commandWasRanY = "";
            grid[i][j].hasACommand = false;
            grid[i][j].wasStopped = "";
            grid[i][j].command = "";
            var xoff = -1;
            i = i + xoff;
            
            grid[i][j][t]  = true;
            grid[i][j].obj = t;
            grid[i][j].wasPushed = u;
            grid[i][j].pushable = true;
            grid[i][j].commandWasRanX = v;
            grid[i][j].commandWasRanY = w;
            grid[i][j].hasACommand = tt;
            grid[i][j].wasStopped = uu;
            grid[i][j].command = vv;
            return true;
        }
        if(grid[i][j][dir] === "down"){
            console.log("Push Down is fine");
            grid[i][j][t] = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            grid[i][j].commandWasRanX = "";
            grid[i][j].commandWasRanY = "";
            grid[i][j].hasACommand = false;
            grid[i][j].wasStopped = "";
            grid[i][j].command = "";
            var yoff4 = 1;
            j = j + yoff4;
            
            grid[i][j][t] = true;
            grid[i][j].obj = t;
            grid[i][j].wasPushed = u;
            grid[i][j].pushable = true;
            grid[i][j].commandWasRanX = v;
            grid[i][j].commandWasRanY = w;
            grid[i][j].hasACommand = tt;
            grid[i][j].wasStopped = uu;
            grid[i][j].command = vv;
            return true;
        }
        if(grid[i][j][dir] === "right"){
            console.log("Push Right is fine");
            grid[i][j][t] = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            grid[i][j].commandWasRanX = "";
            grid[i][j].commandWasRanY = "";
            grid[i][j].hasACommand = false;
            grid[i][j].wasStopped = "";
            grid[i][j].command = "";
            var xoff4 = 1;
            i = i + xoff4;
            
            grid[i][j][t] = true;
            grid[i][j].obj = t;
            grid[i][j].wasPushed = u;
            grid[i][j].pushable = true;
            grid[i][j].commandWasRanX = v;
            grid[i][j].commandWasRanY = w;
            grid[i][j].hasACommand = tt;
            grid[i][j].wasStopped = uu;
            grid[i][j].command = vv;
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
