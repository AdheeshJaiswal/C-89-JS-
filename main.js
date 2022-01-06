const { fabric } = require("./fabric");


varcanvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    
   {player_object = Img;

    player_object.scaleaToWidth(150);
    player_object.scaleaToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
canvas.add(player_object);
   }) 

    
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keypreesed = e.keycode;
	if(e.shiftyKey == true && keypressed == '80')
{
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;

}
if (e.shiftyKey && keypreesed == '77') 
{
block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById("current_width").innerHTML = block_image_width	
document.getElementById("current_height").innerHTML = block_image_height
}

if(keypreesed == '38')
{
	up();
}
if (keypreesed == '40') {
	down();
}
if (keypreesed == '37' ) {
	left();
}

if (keypreesed == '39' ) {
	right();
}

if (keypreesed == '87' ) {
	new_image('wall.png');
}

if (keypreesed == '71' ) {
	new_image('ground.png');
}

if (keypreesed == '76' ) {
	new_image('light_green.png');
}

if (keypreesed == '84' ) {
	new_image('trunk.png');
}

if (keypreesed == '82' ) {
    new_image('roof.png');
}


if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
	}

	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 

		
		if(keyPressed == '67')
		{
			new_image('cloud.png'); 

		}
	
	
}
if(keyPressed == '85')
		{
			new_image('unique.png'); 

	

		}
}


function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}


















