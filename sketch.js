var plinkos =[];
var particles =[];
var divisions =[];


var divisionHeight=300;

var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//starImg = loadImage("images/star.png");
	//bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,height,width,20);

	for (var k = 0; k <=width; k = k + 80) 
	{ 
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	}

	for (var j = 50; j <=width; j=j+50) 
	{ 
		plinkos.push(new Plinko(j,375)); 
	}

	for (var a = 75; a <=width-10; a=a+50) 
	{ 
		plinkos.push(new Plinko(a,275)); 
	}


	for (var b = 75; b <=width; b=b+50) 
	{ 
		plinkos.push(new Plinko(b,75)); 
	}

	for (var c = 50; c <=width-10; c=c+50) 
	{ 
		plinkos.push(new Plinko(c,175));
	}
	
	
}


function draw() {
  background(0);

  for (var k = 0; k < divisions.length; k++) 
   { 
	  divisions[k].display(); 
   }

   for (var j = 0; j < divisions.length; j++) 
   { 
	  plinkos[j].display(); 
   }

   for (var a = 0; a < divisions.length; a++) 
   { 
	  plinkos[a].display(); 
   }

   for (var c = 0; c < divisions.length; c++) 
   { 
	  plinkos[c].display(); 
   }

   for (var b = 0; a < divisions.length; b++) 
   { 
	  plinkos[b].display(); 
   }

  
  drawSprites();

}

function keyPressed() 
{}