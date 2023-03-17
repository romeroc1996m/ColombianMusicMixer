// select your elements first - what is the user going to interact with?
// there are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector("#navButton");

// this is a 1 to many connection to elements in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
	startOver = document.querySelector('#start-over'),
	theHeadline = document.querySelector('#headLine h1'),
	// collect the draggable pieces
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	//collect all of the drop zone elements
	dropZones = document.querySelectorAll(".drop-zone"),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector("a"),
	element1 = document.getElementById("puzzlecomplete1"),
	element2 = document.getElementById("puzzlecomplete2"),
	element3 = document.getElementById("puzzlecomplete3"),
	element4 = document.getElementById("puzzlecomplete4"),
    element5 = document.getElementById("puzzlecomplete5"),
    element6 = document.getElementById("puzzlecomplete6"),
	songPlay = document.createElement("audio"),
	songPlay2 = document.createElement("audio"),
	songPlay3 = document.createElement("audio"),
	songPlay4 = document.createElement("audio"),
	songPlay5 = document.createElement("audio"),
	songPlay6 = document.createElement("audio"),
	currentTimeSong,


	// set up a global variable to store a reference to the dragged piece
	//I need to know this later when i drop it on a zone
	draggedPiece;



	function removePuzzle(){


		//check if element has child
		if (element1.firstChild) {
			// add image (firstchild) back to puzzlepieces
			document.getElementById("puzzlepieces").appendChild(element1.firstChild);
			console.log("element 1 is working")
		}

		if (element2.firstChild) {
			document.getElementById("puzzlepieces").appendChild(element2.firstChild);
			console.log("element 2 is working")
		}	

		if (element3.firstChild) {
			document.getElementById("puzzlepieces").appendChild(element3.firstChild);
			console.log("element 3 is working")
		}

		if (element4.firstChild) {
			document.getElementById("puzzlepieces").appendChild(element4.firstChild);
			console.log("element 4 is working")
		}

        if (element5.firstChild) {
			document.getElementById("puzzlepieces").appendChild(element5.firstChild);
			console.log("element 5 is working")
		}

        if (element6.firstChild) {
			document.getElementById("puzzlepieces").appendChild(element6.firstChild);
			console.log("element 6 is working")
		}
}

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage(){
	// object.property = new value
	// theHeadLine.textContent = "Junior tu papa";
	// theHeadLine.classList.add("orange-headline");

	// let newBGPath = "images/backGround"	+ this.id + ".jpg";
	// debugger;
	
	//Change the background image in the drop zone
	// The `${} is called a Javascript Template String - whatever is inside the curly
	// braces is evaluated at runtime and interpolated (replaces the bracket notation)

	// You can use variables etc online in your code this way
	puzzleBoard.style.backgroundImage = `url(images/${this.id}.scenary-edited.svg)`;
	removePuzzle()
	
	songPlay.pause();
	songPlay2.pause();
	songPlay3.pause();
	songPlay4.pause();
	songPlay5.pause();
	songPlay6.pause();
	songPlay.currentTime = 0;
	songPlay2.currentTime = 0;
	songPlay3.currentTime = 0;
	songPlay4.currentTime = 0;
	songPlay5.currentTime = 0;
	songPlay6.currentTime = 0;
}

function startover(){
	removePuzzle()
	
	songPlay.pause();
	songPlay2.pause();
	songPlay3.pause();
	songPlay4.pause();
	songPlay5.pause();
	songPlay6.pause();
	songPlay.currentTime = 0;
	songPlay2.currentTime = 0;
	songPlay3.currentTime = 0;
	songPlay4.currentTime = 0;
	songPlay5.currentTime = 0;
	songPlay6.currentTime = 0;
}

function handleStartDrag(){
	console.log("start dragging a piece!", this);
	//store the element I am currently dragging in that global draggedPiece variable
	draggedPiece = this;
}

function handleDragOver(e){
	//block the fault behaviour
	e.preventDefault();

	console.log("dragging over me");
}

function handleDrop(e){
	e.preventDefault();
	console.log('dropped something on me');
	// bug fix #1 should go here, and it's at most 3 lines of JS code

	// this line is going to move the dragged piece from the left side of the board
	// into whatever drop zone we choose. appendChild means "add element to the container"

	// check if the div has a child already to add the image
	if (this.children.length == 0){
		this.appendChild(draggedPiece);
		music();
		// currentTimeSongPlaying();
        check_puzzle_confetti();
	}
}

function music(){
	if (draggedPiece == element1.firstChild) {

		songPlay.src = "audio/drums.mp3";
		songPlay.load()

		songPlay.addEventListener("ended", function(){
		document.body.removeChild(songPlay);
		})

		document.body.appendChild(songPlay);
		songPlay.play()
		console.log("element 1 song is on")
		}
		

	if (draggedPiece == element2.firstChild) {
			// add image (firstchild) back to puzzlepieces

		songPlay2.src = "audio/bass.mp3";
		songPlay2.load()

		songPlay2.addEventListener("ended", function(){
		document.body.removeChild(songPlay2);
		})

		document.body.appendChild(songPlay2);
		songPlay2.play()
		console.log("element 2 song is on")
		}

	if (draggedPiece == element3.firstChild) {
			// add image (firstchild) back to puzzlepieces

		songPlay3.src = "audio/vocals.mp3";
		songPlay3.load()

		songPlay3.addEventListener("ended", function(){
		document.body.removeChild(songPlay3);
		})

		document.body.appendChild(songPlay3);
		songPlay3.play()
		console.log("element 3 song is on")
		}

	if (draggedPiece == element4.firstChild) {
			// add image (firstchild) back to puzzlepieces

		songPlay4.src = "audio/others.mp3";
		songPlay4.load()

		songPlay4.addEventListener("ended", function(){
		document.body.removeChild(songPlay4);
		})

		document.body.appendChild(songPlay4);
		songPlay4.play()
		console.log("element 4 song is on")
		}

	if (draggedPiece == element5.firstChild) {
			// add image (firstchild) back to puzzlepieces

		songPlay5.src = "audio/piano.mp3";
		songPlay5.load()

		songPlay5.addEventListener("ended", function(){
		document.body.removeChild(songPlay5);
		})

		document.body.appendChild(songPlay5);
		songPlay5.play()
		console.log("element 5 song is on")
		}

	if (draggedPiece == element6.firstChild) {
			// add image (firstchild) back to puzzlepieces

		songPlay6.src = "audio/guitar.mp3";
		songPlay6.load()

		songPlay6.addEventListener("ended", function(){
		document.body.removeChild(songPlay6);
		})

		document.body.appendChild(songPlay6);
		songPlay6.play()
		console.log("element 5 song is on")
		}

    
	
}

function confetti_start(){
		const start = () => {
            setTimeout(function() {
                confetti.start()
            }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
        };

        //  Stop

        const stop = () => {
            setTimeout(function() {
                confetti.stop()
            }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
        };

        start();
        stop();
}

function check_puzzle_confetti(){
    if (element1.children.length > 0 && element2.children.length > 0 && element3.children.length > 0 && element4.children.length > 0 && element5.children.length > 0 && element6.children.length > 0){
        confetti_start();
    }
}

function currentTimeSongPlaying(){
	// use one track, get its current time, and then pause it
	//then set every other audios current time to match, and then play them all
	if (draggedPiece == element1.firstChild) {
		currentTimeSong = songPlay.currentTime
		songPlay.pause()
		songPlay2.currentTime = currentTimeSong
		songPlay3.currentTime = currentTimeSong
		songPlay4.currentTime = currentTimeSong
		songPlay.play()
	}

	if (draggedPiece == element2.firstChild) {
		currentTimeSong = songPlay2.currentTime
		songPlay2.pause()
		songPlay.currentTime = currentTimeSong
		songPlay3.currentTime = currentTimeSong
		songPlay4.currentTime = currentTimeSong
		songPlay2.play()
	}

	if (draggedPiece == element3.firstChild) {
		currentTimeSong = songPlay3.currentTime
		songPlay3.pause()
		songPlay.currentTime = currentTimeSong
		songPlay2.currentTime = currentTimeSong
		songPlay4.currentTime = currentTimeSong
		songPlay3.play()
	}

	if (draggedPiece == element4.firstChild) {
		currentTimeSong = songPlay4.currentTime
		songPlay4.pause()
		songPlay.currentTime = currentTimeSong
		songPlay2.currentTime = currentTimeSong
		songPlay3.currentTime = currentTimeSong
		songPlay4.play()
	}
}

// function instrument1(){

// 		songPlay.src = "audio/drums.mp3";
// 		songPlay.load()

// 		songPlay.addEventListener("ended", function(){
// 		document.body.removeChild(songPlay);
// 		})

// 		document.body.appendChild(songPlay);
// 		songPlay.play()
// 		songPlay.muted = true
// 		console.log("element 1 song is on")

// }

// function instrument2(){
// 	songPlay2.src = "audio/bass.mp3";
// 	songPlay2.load()

// 	songPlay2.addEventListener("ended", function(){
// 	document.body.removeChild(songPlay2);
// 	})

// 	document.body.appendChild(songPlay2);
// 	songPlay2.play()
// 	songPlay2.muted = true
// 	console.log("element 2 song is on")
// }

// function instrument3(){
	
// 	songPlay3.src = "audio/vocals.mp3";
// 	songPlay3.load()

// 	songPlay3.addEventListener("ended", function(){
// 	document.body.removeChild(songPlay3);
// 	})

// 	document.body.appendChild(songPlay3);
// 	songPlay3.play()
// 	songPlay3.muted = true
// 	console.log("element 3 song is on")
// }

// function instrument4(){
// 	songPlay4.src = "audio/others.mp3";
// 	songPlay4.load()

// 	songPlay4.addEventListener("ended", function(){
// 	document.body.removeChild(songPlay4);
// 	})

// 	document.body.appendChild(songPlay4);
// 	songPlay4.play()
// 	songPlay4.muted = true
// 	console.log("element 4 song is on")
// }

// function instruments(){

// 		songPlay.src = "audio/drums.mp3";
// 		songPlay.load()

// 		songPlay.addEventListener("ended", function(){
// 		document.body.removeChild(songPlay);
// 		})

// 		document.body.appendChild(songPlay);
// 		songPlay.play()
// 		songPlay.muted = true
// 		console.log("element 1 song is on")


// 	songPlay2.src = "audio/bass.mp3";
// 	songPlay2.load()

// 	songPlay2.addEventListener("ended", function(){
// 	document.body.removeChild(songPlay2);
// 	})

// 	document.body.appendChild(songPlay2);
// 	songPlay2.play()
// 	songPlay2.muted = true
// 	console.log("element 2 song is on")


	
// 	songPlay3.src = "audio/vocals.mp3";
// 	songPlay3.load()

// 	songPlay3.addEventListener("ended", function(){
// 	document.body.removeChild(songPlay3);
// 	})

// 	document.body.appendChild(songPlay3);
// 	songPlay3.play()
// 	songPlay3.muted = true
// 	console.log("element 3 song is on")


// 	songPlay4.src = "audio/others.mp3";
// 	songPlay4.load()

// 	songPlay4.addEventListener("ended", function(){
// 	document.body.removeChild(songPlay4);
// 	})

// 	document.body.appendChild(songPlay4);
// 	songPlay4.play()
// 	songPlay4.muted = true
// 	console.log("element 4 song is on")

// }

// function unmute(){
// 	instruments();
// 	if (draggedPiece.children.length == 0){
// 		songPlay.muted = false;
// 	}
// 	if (draggedPiece.children.length == 0){
// 		songPlay2.muted = false;
// 	}
// 	if (draggedPiece.children.length == 0){
// 		songPlay3.muted = false;
// 	}
// 	if (draggedPiece.children.length == 0){
// 		songPlay4.muted = false;
// 	}
// }




// event handling at the bottom -> how things react when you use the targets
// how is the user going to interact with the elements / controls you provide?

// 1 to 1 event handling (1 variable, one element):
// navButton.addEventListener('click', changeBGImage);

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));

// add the drag start handler to all the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver))
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop))




function blockDefaultBehaviour(e){ //e is shorthand for evenet -> in this case the nav event
	//dont let the default behaviour of certain elements happen - block it
	e.preventDefault();
}


//temp handling
tempLink.addEventListener("click", blockDefaultBehaviour);
startOver.addEventListener("click", startover);