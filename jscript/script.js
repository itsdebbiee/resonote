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

/* Add to beginner wordbank */ 

$('.add').live('click', function(e) {
	e.preventDefault();

	var targetFrench=$(".line").find(".french3");
	var cloneFrench=targetFrench.clone()[0];
	console.log(targetFrench);
	$("#easy-wb").append("<p class='wb'>");
	$("#easy-wb").append(cloneFrench);

	$("#easy-wb").append("</br>");

	var targetEng=$(".line").find(".eng");
	var cloneEng=targetEng.clone()[0];
	console.log(cloneEng);
	console.log(targetEng);
	$("#easy-wb").append(cloneEng);
	$("#easy-wb").append("<img class='delete-beg' src='img/delete.png'/>");
	$("#easy-wb").append("</p>");
	
	return false;
	
});

/* Add to intermediate wordbank */ 

$('.add-int').live('click', function(e) {
	e.preventDefault();

	var targetFrench=$(".line-int").find(".french-int");
	var cloneFrench=targetFrench.clone()[0];
	console.log(targetFrench);
	$("#int-wb").append("<p class='wb-int'>");
	$("#int-wb").append(cloneFrench);

	$("#int-wb").append("</br>");

	var targetEng=$(".line-int").find(".eng-int");
	var cloneEng=targetEng.clone()[0];
	console.log(cloneEng);
	console.log(targetEng);
	$("#int-wb").append(cloneEng);
	$("#int-wb").append("<img class='delete-int' src='img/delete.png'/>");
	$("#int-wb").append("</p>");
	
	return false;
	
});

/* Add to advanced wordbank */ 

$('.add-exp').live('click', function(e) {
	e.preventDefault();

	var targetFrench=$(".line-exp").find(".french-exp");
	var cloneFrench=targetFrench.clone()[0];
	console.log(targetFrench);
	console.log(cloneFrench);
	$("#exp-wb").append("<p class='wb-exp'>");
	$("#exp-wb").append(cloneFrench);

	$("#exp-wb").append("</br>");

	var targetEng=$(".line-exp").find(".eng-exp");
	var cloneEng=targetEng.clone()[0];
	console.log(cloneEng);
	console.log(targetEng);
	$("#exp-wb").append(cloneEng);
	$("#exp-wb").append("<img class='delete-adv' src='img/delete.png'/>");
	$("#exp-wb").append("</p>");
	
	return false;
	
});


/* Add sympa to playlist */ 

$(document).ready(function() {
	$(".testSympa").click(function(e) {
		e.preventDefault();

		$(".sound").clone().append("#myPlaylist");
	});
	
	/*$('.testSympa').live('click', function(e) {
		e.preventDefault();
		$(".sound").clone().appendTo("#myPlaylist"); 
		return false; 
	});*/
});

/* Clear advanced wordbank */ 

$(".delete-adv").live('click', function() {
		$("#exp-wb").remove();
		
});

/* Clear intermediate wordbank */ 

$(".delete-int").live('click', function() {
		$("#int-wb").remove();
		
});

/* Clear beginner wordbank */ 

$(".delete-beg").live('click', function() {
		$("#easy-wb").remove();

		
});


/* Clear playlist */ 

$(".delete-playlist").live('click', function() {
		$("#myPlaylist").remove();
		$("#holdPlaylist").append("<div id='myPlaylist'>");
		$("#holdPlaylist").append("</div"); 
}); 





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
	$(".line-int a").popover({
		html:true,
});
	$(".line-exp a").popover({
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
	$(".line-int a").click(function(e) {
		e.preventDefault();
});
	$(".line-exp a").click(function(e) {
		e.preventDefault();
});
  
});


/* Scroll to top of page on button click */

$(document).ready(function(){
    $('#wb-icon').on('click', function(){
        $('html,body').animate({scrollTop: $(this).offset().top}, 800);
    }); 
});  





