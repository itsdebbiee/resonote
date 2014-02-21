/* Add new element into list  

$('.add').live('click', function(e) {
	e.preventDefault();

	var target=$(this).parent();
	var clone=target.clone()[0];
	console.log(clone);
	console.log(target);
	$("#easy-wb").append(clone);


	return false;
});*/

$('.add').live('click', function(e) {
	e.preventDefault();

	var targetFrench=$(".line").find(".french");
	var cloneFrench=targetFrench.clone()[0];
	console.log(cloneFrench);
	console.log(targetFrench);
	$("#easy-wb").append("<p>");
	$("#easy-wb").append(cloneFrench);

	$("#easy-wb").append("</br>");

	var targetEng=$(this).siblings();
	var cloneEng=targetEng.clone()[0];
	console.log(cloneEng);
	console.log(targetEng);
	$("#easy-wb").append(cloneEng);
	$("#easy-wb").append("</p>");

	$("#easy-wb").append("<img class='delete' src='img/delete.png'/>");


	return false;
});

/*function f(e) {
	e.preventDefault();

	var target=$(this).parent();
	var clone=target.clone()[0];
	console.log(clone);
	console.log(target);
	$("#easy-wb").append(clone);


	return false;
}*/


/* Song Pages */
$(document).ready(function() {
	$("#ouest").click(function() {
		$("#ouest-reveal").fadeIn('fast');
		$("#ouest, #sympathique").fadeOut('fast');
		$(".back").fadeIn('fast');
	});

	$("#sympathique").click(function() {
		$("#sympathique-reveal").fadeIn('fast');
		$("#ouest, #sympathique").fadeOut('fast');
		$(".back").fadeIn('fast');
	});

	$("#quand").click(function() {
		$("#quand-reveal").fadeIn('fast');
		$("#quand, #quel").fadeOut('fast');
		$(".back1").fadeIn('fast');
	});

	$("#quel").click(function() {
		$("#quel-reveal").fadeIn('fast');
		$("#quel, #quand").fadeOut('fast');
		$(".back1").fadeIn('fast');
	});

	$("#tous").click(function() {
		$("#tous-reveal").fadeIn('fast');
		$("#tous, #papa").fadeOut('fast');
		$(".back2").fadeIn('fast');
	});

	$("#papa").click(function() {
		$("#papa-reveal").fadeIn('fast');
		$("#tous, #papa").fadeOut('fast');
		$(".back2").fadeIn('fast');
	});

	$(".back").click(function() {
		$("#ouest, #sympathique").fadeIn('fast');
		$(".back, #sympathique-reveal, #ouest-reveal").fadeOut('fast');
	});

	$(".back1").click(function() {
		$("#quel, #quand").fadeIn('fast');
		$(".back1, #quel-reveal, #quand-reveal").fadeOut('fast');
	});

	$(".back2").click(function() {
		$("#tous, #papa").fadeIn('fast');
		$(".back2, #tous-reveal, #papa-reveal").fadeOut('fast');
	});


});

/* Popover */

$(document).ready(function() {
	$(".line a").popover({
		html:true,
});
	$(".popup").click(function (e) {
		e.stopPropagation();
});
	$(document).click(function (e) {
		if (($('.popover').has(e.target).length == 0) || $(e.target).is('.close')) {
		$('.popup').popover('hide');
	}
});

	$(".line a").click(function(e) {
		e.preventDefault();
	});
});





