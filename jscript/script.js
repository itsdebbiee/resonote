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

/* Global variables */

var song1 = 0;  // "Où est Ma Tête?"
var song2 = 0;  // "Sympathique"
var song3 = 0;  // "Quand C'est"
var song4 = 0;  // "Quelqu'un a Touché Ma Femme"
var song5 = 0;  // "Tous Les Mêmes"
var song6 = 0;  // "Papaoutai"

var songbankClear = 0; // Indicates if song bank is clear

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
	$(".add-sympa").click(function(e) {
		e.preventDefault();
	if (song2 != 0) { // Prevent duplication 
		return false
	}
	if (songbankClear != 0) { // Deletes "bank is clear message"
		$("#emptySongList").remove();
		songbankClear = 0; // Decrement 
	}
	});
	$('.add-sympa').live('click', function(e) {
		e.preventDefault();
		$(".sound-sympa").clone().appendTo("#myPlaylist"); 
		song2++; 

		return false; 
	});
});

/* Add ma tete to playlist */ 
$(document).ready(function() {
	$(".add-matete").click(function(e) {
		e.preventDefault();
	if (song1 != 0) {  // Prevent duplication 
		return false
	}
	});
	$('.add-matete').live('click', function(e) {
		e.preventDefault();
		$(".sound-matete").clone().appendTo("#myPlaylist"); 
		song1++; 

		return false; 
	});
});

/* Add ma tete to playlist */ 
$(document).ready(function() {
	$(".add-quandcest").click(function(e) {
		e.preventDefault();
	if (song3 != 0) {  // Prevent duplication 
		return false
	}
	});
	$('.add-quandcest').live('click', function(e) {
		e.preventDefault();
		$(".sound-quandcest").clone().appendTo("#myPlaylist"); 
		song3++; 

		return false; 
	});
});


/* Add quelquun to playlist */ 
$(document).ready(function() {
	$(".add-quelquun").click(function(e) {
		e.preventDefault();
	if (song4 != 0) {  // Prevent duplication 
		return false
	}
	});
	$('.add-quelquun').live('click', function(e) {
		e.preventDefault();
		$(".sound-quelquun").clone().appendTo("#myPlaylist"); 
		song4++; 

		return false; 
	});
});

/* Add tous to playlist */ 
$(document).ready(function() {
	$(".add-tous").click(function(e) {
		e.preventDefault();
	if (song5 != 0) {  // Prevent duplication 
		return false
	}
	});
	$('.add-tous').live('click', function(e) {
		e.preventDefault();
		$(".sound-tous").clone().appendTo("#myPlaylist"); 
		song5++; 

		return false; 
	});
});

/* Add papaoutai to playlist */ 
$(document).ready(function() {
	$(".add-papa").click(function(e) {
		e.preventDefault();
	if (song6 != 0) {  // Prevent duplication 
		return false
	}
	});
	$('.add-papa').live('click', function(e) {
		e.preventDefault();
		$(".sound-papa").clone().appendTo("#myPlaylist"); 
		song6++; 

		return false; 
	});
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
		$("#holdPlaylist").append("<div id='myPlaylist'>")
		$("#holdPlaylist").append("<p id = 'emptySongList'> Your playlist is empty </p>")
		$("#holdPlaylist").append("</div>")
		
	song1 = 0;  // "Où est Ma Tête?"
	song2 = 0;  // "Sympathique"
	song3 = 0;  // "Quand C'est"
	song4 = 0;  // "Quelqu'un a Touché Ma Femme"
	song5 = 0;  // "Tous Les Mêmes"
	song6 = 0;  // "Papaoutai"

	songbankClear++;  // Message displayed 

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





