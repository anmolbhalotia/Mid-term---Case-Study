function StampTool()
{
    // Naming the Function
    this.name = "stampTool";
    // Setting the Icon
    this.icon = "assets/smiley.png";

    // Loading the image
    var smile = loadImage('./assets/smiley.png');//Load Image
    
    //Size of the stamp

    // Creating a slider to define the size of the stamp
    sizeSlider = createSlider(3,200,20);

    // Linking it to the parent in Index File
    sizeSlider.parent("#sizeOfSmileys");

    // Creating a slider to define the number of stamps on the canvas
    nSmileySlider = createSlider(1,100,1);

    // Linking it to the parent in Index File
	nSmileySlider.parent("numberOfSmileys");
    
    // Creating a draw Function to create the stamp on the canvas
    this.draw = function()
    {
        // When the mouse is Pressed
        if(mouseIsPressed)
        {
            // Creating a "for" loop for the number of stamps
            // we want to on the canvas after setting the slider
            for(var i=0;i<nSmileySlider.value();i++)
            {
                
                // Initializing the value of the size of the stamp with the size of the stamp
                var size = sizeSlider.value(); // Size of the stamp
                // Initializing the x position of the stamp
                var smileX = mouseX - size/2;
                // initialising the y position of the stamp
                var smileY = mouseY - size/2;
                // Calling the Stamp on the canvas as soon as the user presses the mouse
                image(smile,smileX,smileY,size,size);
            }
        }
	};
}