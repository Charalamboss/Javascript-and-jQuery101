var test=1000;



function myFunction() {
    alert("Hello! I am an alert box!");}

function number(){
	var test =prompt("enter value");
	alert("the number entered is " + test);
}




$(document).ready(function(){
	


	for(i=0;i<test;i++){

	//Create empty DIVS with with the style properties of the cell and then add them to the box
	//more infor at https://stackoverflow.com/questions/10619445/the-preferred-way-of-creating-a-new-element-with-jquery
		$( "<div></div>", {
  						"class": "grid" , id:"grid"+i // use it for each Div to be unique when i hover, better to use "this" in the $function
  							})
						.appendTo(".container");
		
	}


	// when enter to DIVs change the color, it doesnt work
	$('.grid').mouseenter(function(){
		$(this).css("background-color","green");// use "this" to change only the selected div and not all 
		
	});

	/*$(".grid").mouseleave(function(){
        $(".grid").css("background-color","red");
    })*/
});



