import display from './display';

// place your code on line 5 above the export statement below

class Snake{
  private currentPosition: number;
  private currentDirection: number;
   constructor(Snake:number){
     this.currentPosition = 0;
   }

   public move(distance:number){
    if(this.currentPosition > 0){
      this.currentPosition = this.currentPosition + distance;
      }
    else{
      this.currentPosition = this.currentPosition - distance;
    }
  }

   public turn(snakeDirection:string){
     if(this.currentDirection > 0){
       this.currentDirection = -1;
     }
     else{
       this.currentDirection = 1;
     }
  }
  public get position(){
    return this.currentPosition;
  } 
}

export default Snake; 