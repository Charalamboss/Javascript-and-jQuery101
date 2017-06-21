

function clearBox() {
    var con= confirm("Shall i cler the Sketch?")
    if (con){
    $(".container").empty(); 
    		} // ok so far
	}

function number(){
	squarePerSide =prompt("enter value");
	var gridSize=100/squarePerSide; /* to calculate the witdth percentage i am using
 	the container width and divide it with the number of squares*/
	var totalBoxes=squarePerSide*squarePerSide;


	if(squarePerSide>100){
		squarePerSide=2;
		alert("the maximum number of cells on each side is 100");
		squarePerSide =prompt("enter the right value this time");
	};

	

	
	$(document).ready(function(){
	
	$(".container").empty(); // clear the previous Boxes

	for(i=0;i<totalBoxes;i++){

	/*Create empty DIVS with with the style properties of the cell and then add them to the box
	more info at
	 https://stackoverflow.com/questions/10619445/the-preferred-way-of-creating-a-new-element-with-jquery
	 */
		$( "<div>", {
  						"class": "grid" , id:"grid"+i /* use it for each Div to be unique when i hover, 
  						better to use "this" in the $function*/
  							})
						.appendTo(".container");
		
		
		/*$( "<div></div>", {
  					"class": "grid" , id:"grid"+i // use it for each Div to be unique when i hover, 
  		better to use "this" in the $function
  							})
						.appendTo(".colum");*/
		
	}

	$(".grid").css({ "width": gridSize + "%", "height": gridSize +"%" });/*
	 change the width percentage if using pixels remove +"%"*/

	
	$('.grid').mouseenter(function(){
		$(this).css("background-color","green");// use "this" to change only the selected div and not all 
	
	});

	/*$(".grid").mouseleave(function(){
        $(".grid").css("background-color","red");
    })*/
});


	
}






