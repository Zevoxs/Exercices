// Algo that generate rectangles in the canvas

// Find canvas and set context
var canv = document.getElementById("canvasOne");
var canvctx = canv.getContext("2d");

// Setup variables
var mapArray = [] // Contains arrays with booleans values 

var initialise = {
    // Create the map with red rectangles
    "rects": function() {
        for (i = 0; i < mapArray.length; i++) {
            for (j = 0; j < mapArray[i].length; j++) {
                if ((mapArray[i][j])) {
                    canvctx.fillStyle = "red";
                    canvctx.fillRect(i * 10 + 30, j * 10 + 30 , 10, 10);
                }
                canvctx.fillStyle = "black";
                canvctx.fillRect(i *10 + 30, j*10 + 30, 10, 1);
                canvctx.fillRect(i *10 + 30, j*10 +30, 1, 10);
            }
            canvctx.font = "7px arial";
            canvctx.fillText(i,10,i * 10 + 40);
            canvctx.fillText( i ,i * 10 + 30, 20);
        }
    },

    // Create an array that compose the columns 
    "array": function() {
    for (i = 0; i < 60; i++) {
        mapArray.push([])
        // Push lines into columns
        for (j = 0; j < 60; j++) {
            mapArray[i].push(Math.random() < 0.01);
        }
    }
    }
}
initialise.array();
initialise.rects();


/*
    //////////////////////
    /// YOUR WORK HERE ///
    //////////////////////

    This function will be executed when you click on the start button. 
    Make your algo in this function

    mapArray[Xvalue][Yvalue]  (begin on 0 !!)(array into array)

*/
function startResolution() {
    // Return true if next horizontal en vertical line are set to false in the mapArray 
    /*
        Plan algo : 
        check size ==== 
    */

    // renvoie la valeur du carré crée a partir de la coordonnée

    

var findRedCoord = function () {
    
    for (x = 0; x < 60; x++) {
        for (y = 0; y < 60; y++) {
            if (mapArray[x][y]) {
                redCoord.push("(" + x + ";" + y + ")")
            }
        }
    }
}

var redCoord = [];

findRedCoord();

console.log(redCoord);


}