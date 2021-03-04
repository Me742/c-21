function bounceOff(object1,object2 ){
    if(   object1.x - object2.x < object2.width/2 + object1.width/2
     && object2.x - object1.x < object2.width/2 + object1.width/2){
   object1.velocityX=-1*object1.velocityX
     }
     if( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
       && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
         object1.velocityY=-1*object1.velocityY
       }
   }