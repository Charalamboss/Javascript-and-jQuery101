var test=10;



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
  						"class": "grid"
  							})
						.appendTo(".container");
	}
	// when enter to DIVs change the color, it doesnt work
	$('.grid').mouseenter(function(){
		$('.grid').css("background-color","green");
		
	});

	$(".grid").mouseleave(function(){
        $(".grid").css("background-color","red");
    })
});



