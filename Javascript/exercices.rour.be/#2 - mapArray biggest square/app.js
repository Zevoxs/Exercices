// Algo that generate rectangles in the canvas

// Find canvas and set context
var canv = document.getElementById("canvasOne");
var canvctx = canv.getContext("2d");

// Setup variables
var mapArray = [] // Contains arrays with booleans values 

var initialise = {
    // Create the map with red rectangles
    "rects": function () {
        for (i = 0; i < mapArray.length; i++) {
            for (j = 0; j < mapArray[i].length; j++) {
                if ((mapArray[i][j])) {
                    canvctx.fillStyle = "red";
                    canvctx.fillRect(i * 10 + 30, j * 10 + 30, 10, 10);
                }
                canvctx.fillStyle = "black";
                canvctx.fillRect(i * 10 + 30, j * 10 + 30, 10, 1);
                canvctx.fillRect(i * 10 + 30, j * 10 + 30, 1, 10);
            }
            canvctx.font = "7px arial";
            canvctx.fillText(i, 10, i * 10 + 40);
            canvctx.fillText(i, i * 10 + 30, 20);
        }
    },

    // Create an array that compose the columns 
    "array": function () {
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

*/
var findBiggestSquare = function (x, y) {
    var size = 0;

    // we check for one more unit
    for (i = 0; i < (60 - x) && i < (60 - y); i++) {
        var XBlock = false;
        var YBlock = false;

        // we check for the x line of the diagonal
        for (m = 0; m <= i; m++) {
            if (mapArray[(x + m)][(y + i)]) {
                XBlock = true;
                break;
            }
        }
        // we check for the y line of the diagonal
        for (n = 0; n <= i; n++) {
            if (mapArray[(x + i)][(y + n)]) {
                YBlock = true;
                break;
            }
        }
        if (XBlock || YBlock) {
            size = i;
            break;
        } else {
            size = 1;
        }
    }
    console.log("RETURNED : biggest square in (" + x + ";" + y + ") is [" + size + "]")
    return size;
}


function startResolution() {

    var biggestSquareOnMap = {
        xCoord: 0,
        yCoord: 0,
        size: 0
    }
    for (y = 0; y < 60; y++) {
        for (x = 0; x < 60; x++) {
            var result = findBiggestSquare(x, y);
            if (result > biggestSquareOnMap.size) {
                biggestSquareOnMap.xCoord = x;
                biggestSquareOnMap.yCoord = y;
                biggestSquareOnMap.size = result;
            }
        }
    }
    console.log(" [RESULT] the biggest square is begin on (" + biggestSquareOnMap.xCoord +
        ";" + biggestSquareOnMap.yCoord + ")  And is size is  [ " + biggestSquareOnMap.size + " ]");
}