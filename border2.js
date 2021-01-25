class Border2{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic': true
 
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        angleMode(DEGREES);
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);

        
        this.sprite = createSprite(this.x+695,this.y+310,this.width,this.height);
        this.sprite.shapeColor = 'indigo';
        this.sprite.visible = false;
        spritesGroup.push(this.sprite);

      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        fill('green');
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        if(r1.isTouching(this.sprite)||r2.isTouching(this.sprite)||r3.isTouching(this.sprite)||r4.isTouching(this.sprite)){
          this.sprite.shapeColor = "red";
        }else{

          this.sprite.shapeColor = "blue";
          console.log("nhi hua ")

        }
      }

}