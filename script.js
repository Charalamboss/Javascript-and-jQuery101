var squarePerSide=20;
var gridSize=1000/squarePerSide; // to calculate the witdth percentage i am using the container width and divide it with the number of squares
var totalBoxes=squarePerSide*squarePerSide;
console.log(gridSize);

function myFunction() {
    alert("Hello! I am an alert box!");}

function number(){
	var test =prompt("enter value");
	alert("the number entered is " + test);
	
}




$(document).ready(function(){
	
	


	for(i=0;i<totalBoxes;i++){

	//Create empty DIVS with with the style properties of the cell and then add them to the box
	//more infor at https://stackoverflow.com/questions/10619445/the-preferred-way-of-creating-a-new-element-with-jquery
		$( "<div>", {
  						"class": "grid" , id:"grid"+i // use it for each Div to be unique when i hover, better to use "this" in the $function
  							})
						.appendTo(".container");
		
		
		//$( "<div></div>", {
  		//				"class": "grid" , id:"grid"+i // use it for each Div to be unique when i hover, better to use "this" in the $function
  		//					})
		//				.appendTo(".colum");
		
	}

	$(".grid").css({ "width": gridSize, "height": gridSize });

	// when enter to DIVs change the color, it doesnt work
	$('.grid').mouseenter(function(){
		$(this).css("background-color","green");// use "this" to change only the selected div and not all 
	
	});

	/*$(".grid").mouseleave(function(){
        $(".grid").css("background-color","red");
    })*/
});



