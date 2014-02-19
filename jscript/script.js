/* Add new element into list */ 

$(".add-to").click(f);

function f(e) {
	e.preventDefault();

	var target=$(this).closest(".wb");
	var clone=target.clone()[0];
	target.appendTo("#easy-wb")
}



$(document).ready(function() {
	$('.meep').fadeOut(1600, complete);
});