
// Create canvas variable

var canvas=new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{



	// to upload images
	fabric.Image.fromURL(get_image,function(Img)) {
		block_image_object=Img;

		
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			Left:block_x

	});
	canvas.add(block_image_object);

			
		
	
	}

	


}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // add appropriate keycode
	{
		new_image('rr1.png')
		console.log("r")
		
	}
	if(keyPressed == '71')
	{
		new_image('gr.png')
		console.log("g")
		block_x = 200;
		
	}
	new_image('rr1.png')
		console.log("r")
	
	if(keyPressed == '89')
	{
		new_image('rr1.png')
		console.log("r")
		block_x =350;
		// upload yellow ranger
	}
	console.log("r")
		block_x =350;
	

	if(keyPressed == '80')
	{
		console.log("r")
		block_x =350;
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		console.log("r")
		block_x =350;
		block_x = 700;
	// upload blue ranger
	}
	
}

