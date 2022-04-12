//Game constants and Variables

let inputDir= {x:0, y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed=5;
let score=0; 
let lastPaintTime=0;
let snakeArr=[
    {x: 3, y:10}
]

let food ={x:8,y:6}


//Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000< 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}



function isCollide(sarr){
    // if u pump into yourself
    for(let i=1;i<snakeArr.length;i++){
        if(snakeArr[0].x===snakeArr[i].x && snakeArr[0].y===snakeArr[i].y){
            return true;
        }
    }
    //if u pump into the wall
        if(snakeArr[0].x>=18 || snakeArr[0].x <=0  ||snakeArr[0].y>=18 || snakeArr[0].y <=0){
            return true;
        }
    
}
function gameEngine(){
    //Part1 : Updating the snake array and food(changing the positions of the snake)
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0,y:0};
        alert("GAme over,Press any key to play again");
        snakeArr =[{x:3,y:10}];
        musicSound.play();
        score =0;
    }
    
    // If you have eaten the food ,increment the score and and regenarte the food

    if(snakeArr[0].y ===food.y & snakeArr[0].x ===food.x){
        //incrementing snake size
        foodSound.play();
        score+=1;
        scoreBox.innerHTML="Score:"+ score;
        
        snakeArr.unshift({x : snakeArr[0].x + inputDir.x ,y : snakeArr[0].y + inputDir.y});


        //re-generating food
        let a=2;
        let b=16;
        food ={x: Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())}
    }

        //moving the snake
        for(let i=(snakeArr.length-2); i>=0; i--){

            snakeArr[i+1]= {...snakeArr[i]};
        }

        snakeArr[0].x +=inputDir.x;
        snakeArr[0].y += inputDir.y;

    
    


    // Part2 : Display The snake and food

    //Display the snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index===0){
            snakeElement.classList.add('head');

        }
        else{
            snakeElement.classList.add('snake');
        }

        board.appendChild(snakeElement);


    });

    //Display the food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);


    
}










//Game logic---

 window.requestAnimationFrame(main);

 window.addEventListener('keydown', e=>{
      inputDir={x:0,y:1} //Start the game---
      moveSound.play();
      switch (e.key){
          case "ArrowUp":
              console.log("ArrowUp");
                  inputDir.x=0;
                  inputDir.y=-1;
              break;
              
      
          case "ArrowDown":
              console.log("ArrowDown");
                 inputDir.x=0;
                 inputDir.y=1;
              break;
             

          case "ArrowLeft":
             console.log("ArrowLeft");
                 inputDir.x=-1;
                 inputDir.y=0;
             break;
             

          case "ArrowRight":
             console.log("ArrowRight");
                 inputDir.x=1;
                 inputDir.y=0;
             break;
             
        
        default:
            break;
      }

 });