// select your elements first - what is the user going to interact with?
// there are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector("#navButton");

// this is a 1 to many connection to elements in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
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
	songPlay = document.createElement("audio"),
	songPlay2 = document.createElement("audio"),
	songPlay3 = document.createElement("audio"),
	songPlay4 = document.createElement("audio"),

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
	puzzleBoard.style.backgroundImage = `url(images/${this.id}.carnival.jpg)`;
	removePuzzle()
	
	sound.pause();
	sound.currentTime = 0;
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