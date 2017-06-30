var ball = {
    
    xPosition : 200,
    yPosition : 400,
    xSpeed : 5,
    ySpeed : 5,
    
    move : function()
    {
        this.xPosition+=this.xSpeed;
        this.yPosition+=this.ySpeed;
    },
    
    display : function()
    {
        rect(this.xPosition,this.yPosition,1,1);
    },
    
    bounce : function()
    {
         if(this.yPosition>height || this.yPosition<0) //Odbicie od góry i dołu
            {
              this.ySpeed*=-1;
            }
        
        if(this.xPosition>width) //Punkt dla gracza
            {
                pointCounter.playerPoints++;
                ball.xPosition=400;
                ball.yPosition=random(0,height)
            }
        
        if(this.xPosition <0) //Punkt dla gracza
            {
                pointCounter.computerPoints++;
                ball.xPosition=400;
                ball.yPosition=random(0,height)
            }
         if(this.xPosition==paddle1.xPosition && (this.yPosition<=paddle1.yPosition+40 && this.yPosition>=paddle1.yPosition)) //Odbijanie od 1 paletki
             {
                 this.xSpeed*=-1;
             }
        if(this.xPosition==paddle2.xPosition && (this.yPosition<=paddle2.yPosition+40 && this.yPosition>=paddle2.yPosition)) //Odbijanie od 2 paletki
             {
                 this.xSpeed*=-1;
             }
    }
};

var paddle1 = {
    xPosition : 50,
    yPosition : 300,
    speed : 4,
    
    display : function()
    {
        line(this.xPosition,this.yPosition,this.xPosition,this.yPosition+40);
    },
    
     move : function()
    {
        if(ball.yPosition>this.yPosition)
            {
                this.yPosition+=this.speed;
            }
        else if (ball.yPosition<this.yPosition)
            {
                this.yPosition-=this.speed;
            }
    }
};

var paddle2 = {
    
    xPosition : 750,
    yPosition : 300,
    
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

var pointCounter = {
playerPoints : 0,
computerPoints: 0,
    
showPoint : function()
    {
        textSize(72);
        fill(255);
        text(this.playerPoints,300,100);
        text(this.computerPoints,472,100);
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
    
    strokeWeight(4);
    
    ball.display();
    ball.move();
    ball.bounce();
    
    paddle1.display();
    paddle1.move();
    
    paddle2.display();
    paddle2.move();
    
   
    pointCounter.showPoint();
    
    

    
}