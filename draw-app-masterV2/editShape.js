function EditShape()
{
    // Naming the Function
    this.name = "editShapeTool";
    // Setting the Icon
    this.icon = "assets/editshapeicon.png";
    
    // Initialising the edit button we want to click on when 
    var editButton;
    var finishButton;

    var editMode = false;
    var currentShape = [];

	loadPixels();
	editButton = createButton('Edit Shape');
	editButton.mousePressed(function()
	{
		if(editMode)
		{
			editMode = false;
			editButton.html("Edit Shape");
		}
		else
		{
			editMode = true;
			editButton.html("Add Vertices");
		}
	})

	finishButton = createButton('Finish Shape');
	finishButton.mousePressed(function()
	{
		editMode = false;
		draw();
		loadPixels();
		currentShape = [];
	}
	)

    this.draw = function()
    {
        updatePixels();
        if(mousePressOnCanvas(canvas) && mouseIsPressed)
        {
            if(!editMode)
            {
                currentShape.push
                (
                    {
                        x: mouseX,
                        y: mouseY
                    }
                );
            }
            else
            {
                for(var i =0;i<currentShape.length; i++)
                {
                    if(dist(currentShape[i].x,
                            currentShape[i].y,
                            mouseX,mouseY)
                            < 15
                            )
                            {
                                currentShape[i].x = mouseX;
                                currentShape[i].y = mouseY;
                            }
                }
            }
        }

        beginShape();
        for(var i=0;i<currentShape.length;i++)
        {
            vertex(currentShape[i].x,currentShape[i].y);
            if(editMode)
            {
                fill('red');
                ellipse(currentShape[i].x,currentShape[i].y,10);
                noFill();
            }
        }
        endShape();
        
    }

    // Helper to detect if the mouse Function is on the Canvas or not
    this.mousePressedOnCanvas = function(canvas)
    {

        if(mouseX > canvas.elt.offsetLeft &&
            mouseX < (canvas.elt.offsetLeft + canvas.width)&&
            mouseY> canvas.elt.offsetTop &&
            mouseY < canvas.elt.offsetTop + canvas.height)
            {
                return true;
            }
        return false;

    }


}
