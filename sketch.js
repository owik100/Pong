var ball = {
    
    xPosition : 200,
    yPosition : 400,
    xSpeed : 5,
    ySpeed : 5,
    
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
         if(this.xPosition==paddle1.xPosition && (this.yPosition<=paddle1.yPosition+40 && this.yPosition>=paddle1.yPosition))
             {
                 this.xSpeed*=-1;
             }
        
    },
    
    display : function()
    {
        rect(this.xPosition,this.yPosition,4,4);
    }
};

var paddle1 = {
    xPosition : 50,
    yPosition : 400,
    
    display : function()
    {
        line(this.xPosition,this.yPosition,this.xPosition,this.yPosition+40);
    },
    
    move : function()
    {
        this.yPosition=mouseY;
        
        if(mouseY>height-40)
            {
               this.yPosition=height-40;
            }
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
    strokeWeight(1);
  for(var i =0; i < height; i+=20)
      {
          line(width/2,i+10,width/2,i+20);
      }
    
    ball.display();
    ball.move();
    
    strokeWeight(4);
    
    paddle1.display();
    paddle1.move();
    
    

    
}