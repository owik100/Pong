var ball = {
    
    xPosition : 200,
    yPosition : 400,
    xSpeed : 3,
    ySpeed : 3,
    
    move : function()
    {
        this.xPosition+=this.xSpeed;
        this.yPosition+=this.ySpeed;
        
        if(this.yPosition>height || this.yPosition<0)
            {
              this.ySpeed*=-1;
            }
        
        if(this.xPosition>width || this.xPosition <0)
            {
                this.xSpeed*=-1;
            }
    },
    
    display : function()
    {
        rect(this.xPosition,this.yPosition,4,4);
    }
};


function setup()
{
    createCanvas(800,600);
}

function draw()
{
    background(0);
    stroke(255);
    
  for(var i =0; i < height; i+=20)
      {
          line(width/2,i+10,width/2,i+20);
      }
    
    ball.display();
    ball.move();
    
}