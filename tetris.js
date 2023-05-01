//defining global variables here
const gameSpeed = 5;
let currentScore = 0;



//catching the board elements into javascript by using an eventlistener that does not wait for all elements to be loaded and parsed in the html document

document.addEventListener('DOMContentLoaded', () => {

//SETTING VARIABLES

    //timer for shape movement animation
    speedOfMovement = 500
    timer = setInterval(shapeDownBoard, speedOfMovement)

    //this seeds the shape grid, allowing to create the 5 different tetris shapes
    const width = 10


//CALLING DOM
    //accessing the DOM and connecting all elements to variables for JS processing
    const gameBoard = document.querySelector('.board')

    //capturing all the html divs and placng them into an array
    let squares = Array.from(document.querySelectorAll('.board div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#play')

    //tracking last score

    //set class for shapes, render them to preview box

    //shapes are declared here, each shape has an array and each shape has 4 different positions
    /* 
    note that the grid position is starting at 0, so for example the blocks that need to be colored for the first L position would correspond to the grid position of 

    0 1  2
    0 11 0
    0 21 0

    also note that the tetris shape MUST by definition be comprised of 4 blacks
    */

//NOTE TO SELF, TURN THESE INTO A CLASS OBJECT

    const lShape = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const oShape = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]

    const zShape = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const tShape = [
        [1, width,  width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1,width, width+1, width*2+1]
    ]

    const iShape = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]

    //placing all shapes in an array
    const shapeArray = [lShape, oShape, zShape, tShape, iShape]

    //shape starting position on the board and setting shape rotation position
    let position = 4
    let rotationPosition = 0

    //selecting shapes
    let rand = Math.floor(Math.random()*shapeArray.length)
    let currentShape = shapeArray[rand][rotationPosition]

//SETTING FUNCTIONS

    //render function here
    function draw() {
        currentShape.forEach(i  => {
            squares[position + i].classList.add('shape')
        })
}

    //undrawing shape
    function undraw() {
        currentShape.forEach(i => {
            squares[position + i].classList.remove('shape')
        }) 
    }

    //moving the shape down the board

    function shapeDownBoard() {
        undraw()
        position += width
        draw() 
        collisionDetection()
    } 

    //stopping the shape

    function collisionDetection() {
        if (currentShape.some(i => squares[position + i + width].classList.contains('endOfBoard'))) {
            //changing the inner div of the shape to endOfBoard to create the barrier for collision detection
            currentShape.forEach(i => squares[position + i].classList.add('endOfBoard'))

            //creating new shape to continue game (NOTE TO SELF MAYBE MAKE THIS WHOLE THING A SEPERATE FUNCTION)
            random = Math.floor(Math.random() * shapeArray.length)
            currentShape = shapeArray[random][rotationPosition]
            position = 4    
            draw()
        } 

        draw()
    }

    //moving the shapes
    function moveLeft() {
        undraw()
        const leftEdge = currentShape.some(i => (position + i) % width === 0)

        if(!leftEdge) position -=1

        if(currentShape.some(i => squares[position +i].classList.contains('endOfBoard'))) {
            position += 1
        }
    }

})

//set function to store a grid as a data structure for javascript to utilize and call render function anytime the grid state changes
 
//set function for play again after the board has filled, track grid for filled position above a certain point

//button to rotate shape fucntionality (rotation)

//Logic starts here

    //check for location of shape in grid and tracking position of shape

    //collision detection for when shape hits the top of the last placed shape

    //function to check for the top of the grid and making player loose

    //function clear solid line positions and add points to the score
        //2x points for clearing a full tetris

