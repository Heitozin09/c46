var Barril,BarrilImg
var Buraco,BuracoImg
var Carro1,Carro1Img
var Carro2,Carro2Img
var Cavalo,CavaloImg
var Cerca,CercaImg
var Moto,MotoImg
var Pedra,PedraImg
var Road,RoadImg

function preload()
{
	BarrilImg = loadImage("Barril.png")
	BuracoImg= loadImage("Buraco.png")
	Carro1Img= loadImage("Carro1.png")
	Carro2Img= loadImage("Carro2.png")
	CavaloImg= loadImage("Cavalo.png")
	CercaImg= loadImage("Cerca.png")
	PedraImg= loadImage("Pedra.png")
	MotoImg= loadImage("Moto.png")
	RoadImg= loadImage("Road.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);//800,700

	Road = createSprite(width/2,0,width,height)
	Road.addImage(RoadImg)

	Carro1 = createSprite(width/2,height-100)
	Carro1.addImage(Carro1Img)
	Carro1.scale = 0.2



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Road.velocityY = 25
  if (Road.y>1000) {
	Road.y = height/2
  }
  

  move()
  Barricada()
  drawSprites();
 
}


function move(){
 if (keyIsDown(UP_ARROW)||keyDown("W")) {
	Carro1.y-=5
 }

 if (keyIsDown(DOWN_ARROW)||keyDown("S")) {
	Carro1.y+=5
 }

 if (keyIsDown(LEFT_ARROW)||keyDown("A")) {
	Carro1.x-=5
 }
 if (keyIsDown(RIGHT_ARROW)||keyDown("D")) {
	Carro1.x+=5
 }
}

function Barricada(){
	if (frameCount%250==0) {
		Pedra=createSprite(200,-50)
		Barril=createSprite(50,-50)
		Cerca=createSprite(250,-50)

		Pedra.x= Math.round(random(120,800))
		//Barril.x= Pedra.x
		//Cerca.x= Pedra.x

		Pedra.addImage(PedraImg)
		Barril.addImage(BarrilImg)
		Cerca.addImage(CercaImg)

		Pedra.scale = 0.15
		Barril.scale = 0.15
		Cerca.scale = 0.15

		Pedra.velocityY=5
		Barril.velocityY=5
		Cerca.velocityY=5
	}
}
