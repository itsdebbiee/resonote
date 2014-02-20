/* Add new element into list */ 

$(document).ready(function() {
	$(".add").click(f);
});

function f(e) {
	e.preventDefault();

	var target=$(this).parent();
	var clone=target.clone()[0];
	$("#easy-wb").append(clone);

	return false;
}


