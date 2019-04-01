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
    //displays the blocks
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
};

Cell.prototype.contains = function (x, y) {
    //not used but helpful if I need the use of a mouse
    return(x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
    
};

Cell.prototype.playerMove = function (i,j, dir) {
    //checks have been ran and other objects were pushed before
    if(grid[i][j][dir] === "up"){
        console.log("playerMove Up is fine");
        //unsets the player
        grid[i][j].player = false;
        grid[i][j].obj = "";
        //shifts it over
        var yoff = -1;
        j = j + yoff;
        //sets the player
        grid[i][j].player = true;
        grid[i][j].obj = "player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] === "left"){
        console.log("playerMove Left is fine");
        //unsets the player
        grid[i][j].player = false;
        grid[i][j].obj = "";
         //shifts it over
        var xoff = -1;
        i = i + xoff;
        //sets the player
        grid[i][j].player = true;
        grid[i][j].obj = "player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] === "down"){
        console.log("playerMove Down is fine");
        //unsets the player
        grid[i][j].player = false;
        grid[i][j].obj = "";
         //shifts it over
        var yoff2 = 1;
        j = j + yoff2;
        //sets the player
        grid[i][j].player = true;
        grid[i][j].obj = "player";
        //Moving twice fix
        return;
    }
    if(grid[i][j][dir] === "right"){
        console.log("playerMove Right is fine");
        //unsets the player
        grid[i][j].player = false;
        grid[i][j].obj = "";
         //shifts it over
        var xoff2 = 1;
        i = i + xoff2;
        //sets the player
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
        console.log("checking  up");
        var yoff = -1;
        j = j + yoff;
        if(j < 0){
            //checks if out of bounds
            return false;
        }else{
            if(grid[i][j].stop){
                console.log("there's a wall");
                //checks for a block that has this.stop  which acts as a wall
                return false;
                
            }else if(grid[i][j].obj === ""){
                //console.log("check false is fine");
                //checks if blank allows to move
                return true;
                
            }else{
                
                console.log("check else was ran");
                //Pushing twice fix
                grid[i][j][dir] = "up";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir)){
                    //checks if the block is pushable and if it can be pushed successfully
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
                        return true;
                    }else{
                        return false;
                    }
                }else{
                     //couldn't push
                    return false;
                }
            }
        }
    }
    if(grid[i][j][dir] === "left"){
        console.log("checking  left");
        var xoff = -1;
        i = i + xoff;
        if(i < 0){
            //checks if out of bounds
            return false;
        }else{
            if(grid[i][j].stop){
                console.log("there's a wall");
                //checks for a block that has this.stop  which acts as a wall
                return false;
                
            }else if(grid[i][j].obj === ""){
                //console.log("check false is fine");
                //checks if blank allows to move
                return true;
            }else{
               
                //Pushing twice fix
                console.log("chrck rock was ran");
                grid[i][j][dir] = "left";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir,obj)){
                    //checks if the block is pushable and if it can be pushed successfully
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
                        return true;
                    }else{
                        return false;
                    }
                }else{
                     //couldn't push
                    return false;
                }
                
            }
        }
    }
    if(grid[i][j][dir] === "down"){
        console.log("checking  down");
        var yoff3 = 1;
        j = j + yoff3;
        if(j >= cols){
            //checks if out of bounds
            return false;
        }else{
            if(grid[i][j].stop){
                console.log("there's a wall");
                //checks for a block that has this.stop  which acts as a wall
                return false;
                
            }else if(grid[i][j].obj === ""){
                //console.log("check false is fine");
                //checks if blank allows to move
                return true;
                
            } else{
                //Pushing twice fix
                console.log("chrck rock was ran");
                grid[i][j][dir] = "down";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir,obj)){
                    //checks if the block is pushable and if it can be pushed successfully
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
                        return true;
                    }else{
                        return false;
                    }
                }else{
                     //couldn't push
                    return false;
                }
                
            }
        }
    }
    if(grid[i][j][dir] === "right"){
        console.log("checking  right");
        var xoff3 = 1;
        i = i + xoff3;
        if(i >= rows){
            //checks if out of bounds
            return false;
        }else{
            if(grid[i][j].stop){
                console.log("there's a wall");
                //checks for a block that has this.stop  which acts as a wall
                return false;
                
            } else if(grid[i][j].obj === ""){
                //console.log("check true is fine");
                //checks if blank allows to move
                console.log("right2");
                return true;
                
            }else{
                console.log("chrck rock was ran");
                //Pushing twice fix
                grid[i][j][dir] = "right";
                if(grid[i][j].pushable && grid[i][j].check(i, j, dir,obj)){
                    //checks if the block is pushable and if it can be pushed successfully
                    console.log("push true");
                    if(this.push(i, j, dir, obj)){
                        //this.checkIsCommand();
                        //runs push
                        console.log("right");
                        return true;
                    }else{
                        //error handling idk
                        return false;
                        
                    }
                }else{
                    //couldn't push
                    return false;
                }
                
            }
            
        }
    }
    
};

Cell.prototype.checkIsCommand = function () {
    //used for the commands
    //A command is a command block e.g pushBlock + an isBlock
    //+ another object(except other command blocks, isBlock, Player or blank "").
    var i;
    var j;
    var xoff1 = 1;
    var xoff2 = -1;
    var yoff1 = 1;
    var yoff2 = -1;
    var temp;
    //searches the grid for an isBlock
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            if(grid[i][j].isBlock){
                console.log("iscommand being ran");
                 console.log("iscommand being ran2");
                if(i + xoff1 >= cols || i + xoff2 < 0 || j + yoff1 >= rows || j + yoff2 < 0){
                    //checks if out of bounds
                    console.log("out of bounds1");
                    break;
                }else{
                    //logs some useful info for debugging
                    console.log(grid[i + xoff1][j].obj);
                    console.log(grid[i + xoff2][j].obj);
                    console.log(grid[i][j + yoff1].obj);
                    console.log(grid[i][j + yoff2].obj);
                }
                
                console.log(grid[i][j].commandWasRanX);
                console.log(grid[i][j].commandWasRanY);
                 console.log(grid[i][j].obj);
                //this breakMeY and breakMeX setup is essentially a goto function
                // its used so that when an x axis command is ran and a y axis command is unset
                //that they both happen instead of just one happening the way I had it before.
        BreakMeY: {
            BreakMeX:{
                if(i + xoff1 >= cols || i + xoff2 < 0 || j + yoff1 >= rows || j + yoff2 < 0){
                    //checks if out of bounds
                    console.log("out of bounds2");
                    //breaks out so the y command can be ran
                    //doesnt break out of the loop entirely
                    break BreakMeX;
                }else if(grid[i][j].commandWasRanX  !== ""){
                    //checks if a x axis command was ran as these checks only aply to it.
                    if (grid[i + xoff1][j].obj === "" && grid[i + xoff2][j].obj === ""){
                        // if the isBlock is pushed both tiles will be blank
                        
                        i = i + xoff1;
                        //this checks which command was ran and undoes it
                        switch(grid[i + xoff2][j].commandWasRanX){
                            case"this.setStop":
                                console.log("what i think it is");
                                console.log(grid[i][j + yoff2].wasStopped);
                                //sets one of the blank tiles to an object so the unsetstop command works
                                grid[i][j].obj = grid[i + xoff2][j].wasStopped;
                                this.unSetStop(i, j,  grid[i][j].obj);
                                //unsets it afterwards
                                grid[i][j].obj = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                //sets one of the blank tiles to an object so the unsetPushable command works
                                grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                //unsets it afterwards
                                grid[i][j].obj = "";
                                break;
                        }
                        //sets it to blank so it isnt ran again until its needed
                        grid[i + xoff2][j].commandWasRanX  = "";
                        //breaks out so the y command can be ran
                        //doesnt break out of the loop entirely
                        break BreakMeX;
                    }else if (grid[i + xoff1][j].hasACommand && grid[i + xoff2][j].hasACommand){
                        //if a commandblock replaces a normal object(e.g rock and flag for now)
                        //it undoes the command
                        
                        i = i + xoff1;
                        //command is undone.
                        switch(grid[i + xoff2][j].commandWasRanX){
                            case"this.setStop":
                                console.log("what i think it is");
                                console.log(grid[i][j + yoff2].wasStopped);
                                //temp is used as the tile isnt blank
                                //so setting it would "break" it
                                temp = grid[i][j].obj;
                                grid[i][j].obj = grid[i + xoff2][j].wasStopped;
                                this.unSetStop(i, j,  grid[i][j].obj);
                                grid[i][j].obj = temp;
                                temp = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                 //temp is used as the tile isnt blank
                                //so setting it would "break" it
                                temp =  grid[i][j].obj;
                                grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                grid[i][j].obj = temp;
                                temp = "";
                                break;
                        }
                        //sets it to blank so it isnt ran again until its needed
                        grid[i + xoff2][j].commandWasRanX  = "";
                        //breaks out so the y command can be ran
                        //doesnt break out of the loop entirely
                        break BreakMeX;
                    }else if (!grid[i + xoff1][j].hasACommand && !grid[i + xoff2][j].hasACommand){
                        //minor check for if the tile isnt a command
                        //more checks are ran to know specifically what to do
                        
                        
                        if(grid[i + xoff1][j].obj === "" || grid[i + xoff1][j].obj === "player"){
                            //if the player pushes a command block
                            //the command is undone
                            console.log("false");
                            i = i + xoff1;
                            switch(grid[i + xoff2][j].commandWasRanX){
                                case "this.setStop":
                                    console.log("what i didnt think it is 3");
                                    console.log(grid[i][j + yoff2].wasStopped);
                                    temp = grid[i][j].obj;
                                    grid[i][j].obj = grid[i + xoff2][j].wasStopped;
                                    this.unSetStop(i, j, grid[i][j].obj);
                                    grid[i][j].obj = temp;
                                    temp = "";
                                    break;
                                case "this.setPushable":
                                    console.log("what i think it is");
                                    console.log(grid[i][j].obj);
                                    temp = grid[i][j].obj;
                                    grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                                    this.unSetPushable(i, j,  grid[i][j].obj);
                                    grid[i][j].obj = temp;
                                    temp = "";
                                    break;
                            }
                            //sets it to blank so it isnt ran again until its needed
                            grid[i + xoff2][j].commandWasRanX  = "";
                            console.log(grid[i][j].commandWasRanY);
                            //breaks out so the y command can be ran
                            //doesnt break out of the loop entirely
                           break BreakMeX;
                        }else if(grid[i + xoff2][j].obj === "" || grid[i + xoff2][j].obj === "player"){
                            console.log("false2");
                            
                            //if the player pushes a command block
                            //the command is undone
                            
                            i = i + xoff2;
                            switch(grid[i + xoff1][j].commandWasRanX){
                                case "this.setStop":
                                    console.log("what i didnt think it is 2");
                                    console.log(grid[i][j + yoff1].wasStopped);
                                    console.log(grid[i][j + yoff1].obj);
                                    
                                    console.log(grid[i][j + yoff1].wasStopped);
                                    temp = grid[i][j].obj;
                                    grid[i][j].obj = grid[i + xoff1][j].wasStopped;
                                    this.unSetStop(i, j, grid[i][j].obj);
                                    grid[i][j].obj = temp;
                                    temp = "";
                                    break;
                                case "this.setPushable":
                                    console.log("what i didnt think it is");
                                    //note to self dont use = in console.log
                                    //console.log(grid[i][j].obj = grid[i][j + yoff1].wasPushed);
                                    temp = grid[i][j].obj;
                                    grid[i][j].obj = grid[i + xoff1][j].wasPushed;
                                    this.unSetPushable(i, j,  grid[i][j].obj);
                                    grid[i][j].obj = temp;
                                    temp = "";
                                    break;
                            }
                            //sets it to blank so it isnt ran again until its needed
                            grid[i + xoff1][j].commandWasRanX  = "";
                            //breaks out so the y command can be ran
                            //doesnt break out of the loop entirely
                            break BreakMeX;
                        }else{
                            //not too sure...... probs just incase any other configuration of non commands
                            i = i + xoff1;
                            switch(grid[i + xoff2][j].commandWasRanX){
                                case "this.setStop":
                                    console.log("what i think it is");
                                    console.log(grid[i][j].obj);
                                    
                                    this.unSetStop(i, j,  grid[i][j].obj);
                                    //sets it to blank so it isnt ran again until its needed
                                    
                                    break;
                                case "this.setPushable":
                                    console.log("what i think it is");
                                    console.log(grid[i][j].obj);
                                    
                                    this.unSetPushable(i, j,  grid[i][j].obj);
                                    //sets it to blank so it isnt ran again until its needed
                                    
                                    break;
                            }
                            grid[i + xoff2][j].commandWasRanX  = "";
                        }
                        //breaks out so the y command can be ran
                        //doesnt break out of the loop entirely
                        break BreakMeX;
                    }
                    else if(grid[i + xoff1][j].obj === "" || grid[i + xoff1][j].obj === "player"){
                        //if the player pushes the normal block
                        //it undoes the command
                        console.log("false");
                        i = i + xoff1;
                        switch(grid[i + xoff2][j].commandWasRanX){
                            case "this.setStop":
                                console.log("what i didnt think it is 3");
                                console.log(grid[i][j + yoff2].wasStopped);
                                //player obj is set in move so it doesnt matter if its unset here
                                grid[i][j].obj = grid[i + xoff2][j].wasStopped;
                                this.unSetStop(i, j, grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                //player obj is set in move so it doesnt matter if its unset here
                                grid[i][j].obj = grid[i + xoff2][j].wasPushed;
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                        }
                        //sets it to blank so it isnt ran again until its needed
                        grid[i + xoff2][j].commandWasRanX  = "";
                        console.log(grid[i][j].commandWasRanY);
                        //breaks out so the y command can be ran
                        //doesnt break out of the loop entirely
                        break BreakMeX;
                    }else if(grid[i + xoff2][j].obj === "" || grid[i + xoff2][j].obj === "player"){
                        console.log("false2");
                        //if the player pushes the normal block
                        //it undoes the command
                        
                        
                        i = i + xoff2;
                        switch(grid[i + xoff1][j].commandWasRanX){
                            case "this.setStop":
                                console.log("what i didnt think it is 2");
                                console.log(grid[i + xoff1][j].wasStopped);
                                console.log(grid[i + 2][j].obj);
                                 //player obj is set in move so it doesnt matter if its unset here
                                grid[i][j].obj = grid[i + xoff1][j].wasStopped;
                                console.log(grid[i + 2][j].obj = grid[i + xoff1][j].wasStopped);
                                this.unSetStop(i, j, grid[i + 2][j].obj);
                                grid[i][j].obj = "";
                                break;
                            case "this.setPushable":
                                console.log("what i didnt think it is");
                                console.log(grid[i][j].obj = grid[i][j + yoff1].wasPushed);
                                 //player obj is set in move so it doesnt matter if its unset here
                                grid[i][j].obj = grid[i + xoff1][j].wasPushed;
                                this.unSetPushable(i, j, grid[i][j].obj);
                                grid[i][j].obj = "";
                                break;
                        }
                        //sets it to blank so it isnt ran again until its needed
                        grid[i + xoff1][j].commandWasRanX  = "";
                        //breaks out so the y command can be ran
                        //doesnt break out of the loop entirely
                        break BreakMeX;
                    }else if(grid[i + xoff2][j].hasACommand){
                        
                        console.log("first run");
                        //console.log(grid[i + xoff2][j].obj);
                        //console.log(grid[i + xoff2][j].obj);
                        //console.log(this.i);
                        //console.log(this.j);
                        
                        console.log(grid[i][j].commandWasRanY);
                        //if a command was ran before and the
                        //player pushed a different command block in place of the other
                        //undo the first command and do the second
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
                            //sets it to blank so it isnt ran again until its needed
                            grid[i + xoff2][j].commandWasRanX  = grid[i - 2][j].command;
                        }
                        
                        console.log(grid[i][j + yoff2].commandWasRanY);
                        console.log(grid[i][j + yoff2].commandWasRanY);
                        console.log(grid[i][j + yoff2].wasStopped);
                        console.log(grid[i][j + yoff2].wasPushed);
                        //breaks out so the y command can be ran
                        //doesnt break out of the loop entirely
                        break BreakMeX;
                        
                    } else if (grid[i + xoff1][j].hasACommand){
                        console.log("second run");
                        
                        console.log(grid[i][j].commandWasRanY);
                        //if a command was ran before and the
                        //player pushed a different command block in place of the other
                        //undo the first command and do the second
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
                        //breaks out so the y command can be ran
                        //doesnt break out of the loop entirely
                        break BreakMeX;
                    }else{
                        console.log("i dont know2");
                    }
                }else if (grid[i + xoff1][j].hasACommand && grid[i + xoff2][j].hasACommand){
                    //If a command wasnt ran the commands are Ignored
                    //as I dont want commands to act on each other
                    //sets it to blank so it isnt ran again until its needed
                    grid[i][j].commandWasRanX  = "";
                    //breaks out so the y command can be ran
                    //doesnt break out of the loop entirely
                    break BreakMeX;
                }else if(grid[i + xoff2][j].hasACommand){
                    console.log("first run");
                    //console.log(grid[i + xoff2][j].obj);
                    //console.log(grid[i + xoff2][j].obj);
                    //console.log(this.i);
                    //console.log(this.j);
                    
                    //the beginning of a y axis command
                    //checks that that the tile next to it isnt blank
                    if(grid[i + xoff1][j].obj !== ""){
                        //sets what command was ran
                        grid[i][j].commandWasRanX  = grid[i + xoff2][j].command;
                        console.log(grid[i][j].commandWasRanX);
                        //runs the command
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
                    //breaks out so the y command can be ran
                    //doesnt break out of the loop entirely
                    break BreakMeX;
                    
                } else if (grid[i + xoff1][j].hasACommand){
                    console.log("second run");
                    //the beginning of a y axis command
                    //checks that that the tile next to it isnt blank
                    if(grid[i + xoff2][j].obj !== ""){
                        //sets what command was ran
                        grid[i][j].commandWasRanX  = grid[i + xoff1][j].command;
                        console.log(grid[i][j].commandWasRanY);
                        //runs the command
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
                    //breaks out so the y command can be ran
                    //doesnt break out of the loop entirely
                    break BreakMeX;
                }else{
                    console.log("i dont know");
                }
            }
            ///////////////////////////////////////////////////////
            //The exact same as above just translated to the y axis
            ///////////////////////////////////////////////////////
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
                                temp = grid[i][j].obj;
                                grid[i][j].obj = grid[i][j + yoff2].wasStopped;
                                this.unSetStop(i, j, grid[i][j].obj);
                                grid[i][j].obj = temp;
                                temp = "";
                                break;
                            case "this.setPushable":
                                console.log("what i think it is");
                                console.log(grid[i][j].obj);
                                temp = grid[i][j].obj;
                                grid[i][j].obj = grid[i][j + yoff2].wasPushed;
                                this.unSetPushable(i, j,  grid[i][j].obj);
                                grid[i][j].obj = temp;
                                temp = "";
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
                
                if(grid[i][j + yoff1].obj !== ""){
                    grid[i][j].commandWasRanY  = grid[i][j + yoff2].command;
                    console.log(grid[i][j].commandWasRanY);
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
                
            }
        }
    }
    
};

Cell.prototype.setPushable = function (i, j, obj) {
    //if push command is active all blocks of the same type are set
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
    //if push command isnt active all blocks of the same type that were affected are unset
    //however if a block was set by me e.g the command blocks they wont be unset
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
    //if stop command is active all blocks of the same type are set
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
    //if stop command isnt active all blocks of the same type that were affected are unset
    //however if a block was set by me e.g the white wall it wont be unset
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
    //double checks the object is pushable
    if(grid[i][j].pushable === true){
        //copies the necessary information of the object
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
            //unsets all information
            grid[i][j][t]  = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            grid[i][j].commandWasRanX = "";
            grid[i][j].commandWasRanY = "";
            grid[i][j].hasACommand = false;
            grid[i][j].wasStopped = "";
            grid[i][j].command = "";
            //shifts it over
            var yoff = -1;
            j = j + yoff;
            //sets all the previous information
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
             //copies the necessary information of the object
            grid[i][j][t]  = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            grid[i][j].commandWasRanX = "";
            grid[i][j].commandWasRanY = "";
            grid[i][j].hasACommand = false;
            grid[i][j].wasStopped = "";
            grid[i][j].command = "";
            //shifts it over
            var xoff = -1;
            i = i + xoff;
            //sets all the previous information
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
             //copies the necessary information of the object
            grid[i][j][t] = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            grid[i][j].commandWasRanX = "";
            grid[i][j].commandWasRanY = "";
            grid[i][j].hasACommand = false;
            grid[i][j].wasStopped = "";
            grid[i][j].command = "";
            //shifts it over
            var yoff4 = 1;
            j = j + yoff4;
            //sets all the previous information
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
             //copies the necessary information of the object
            grid[i][j][t] = false;
            grid[i][j].obj = "";
            grid[i][j].wasPushed = "";
            grid[i][j].pushable = false;
            grid[i][j].commandWasRanX = "";
            grid[i][j].commandWasRanY = "";
            grid[i][j].hasACommand = false;
            grid[i][j].wasStopped = "";
            grid[i][j].command = "";
            //shifts it over
            var xoff4 = 1;
            i = i + xoff4;
            //sets all the previous information
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
