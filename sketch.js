var tempX;
var tempY;
/*
	Put the code for your game in this file.
	This code is just for you to get started.	

	by Sam Kolovson
 */

// constants to set up the environment
const CANVAS_WIDTH = 750;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = 'lightgrey';

// variables to hold the players location
var playerX = 50;
var playerY = 400;
var mx = mouseX;
var mxc = constrain(mouseX, 0, 100);
var my = mouseY;
var myc = constrain(mouseY, 0, 500);


 var leftWall = 100;
  var rightWall = 500;



//physics variables
var jumpDisplacement = 10;
var accel = 9.8;
var time;
var previousTime;
//var gravity = createVector(0, 9.8, 0);

/*
	The setup function runs once when the program starts.
 */
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

/*
	 The draw function loops over and over until the program stops
	 or when noLoop() is called.
   
   
 */


function draw() {
  // Draw background
  background(BACKGROUND_COLOR);
  
 
  
  // Draw player
  drawPlayer(playerX, playerY);
  
  
  if(keyIsDown(RIGHT_ARROW)) {
  	playerX += 4;
  }
    if(keyIsDown(LEFT_ARROW)) {
  	playerX -= 4;
  }
  
  
  
} 
 
/*
	This function draw the player on the screen at pX, pY.


*/


function drawPlayer(pX, pY) {
  noStroke();
  fill('grey');
  
  
  
 // rect(pX, pY, 50, 25, 20);
  rect(pX, pY+25, 20, 60, 16);
  
	
  ellipse(pX+10, pY, 40, 40);
//   ellipse(pX, pY+50, 75, 75);
//   ellipse(pX, pY+100, 100, 100);
  
//   // eyes
//   fill('black');
//   ellipse(pX-10, pY-5, 10, 10);
//   ellipse(pX+10, pY-5, 10, 10);
  
     ellipse(700, 450, 40, 40);
  
 
	var mxc = constrain(mouseX, pX+40, 200);
	
	var myc = constrain(mouseY, 300, 400);
  
  	stroke(150);
  	//line(pX+40, pY, mxc, myc);
  
  
//    if(mouseButton == LEFT) {
    
     
//     	//drawBullet();
    
//   }
  
//   if(mouseButton == LEFT) {
//     push();
//   	tempX = mouseX;
//     tempY = mouseY;
    
//     rect(tempX, tempY, 50 , 50 );
//   }
}
  
  
  

//  	 	line(pX+90, pY-50, pX+90, pY+5);
//   	line(pX+90, pY-50, pX+25, pY-50);
  
  //var pointTowards = createVector(mouseX, mouseY, 0);
  
  
  // nose
  // fill('orange');
  // triangle(pX, pY, pX+10, pY+5, pX-10, pY+10);
  


  
  
    
  

