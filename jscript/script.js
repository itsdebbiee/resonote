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
	} /*
	if (songbankClear != 0) { // Deletes "bank is clear message"
		$("#emptySongList").remove();
		songbankClear = 0; // Decrement 
	} */
	});
	$('.add-sympa').live('click', function(e) {
		e.preventDefault();

		// Add song in a new div 

		$("#myPlaylist").append("<div class= 'bank-sympa'>"); // Append new div 
		$(".sound-sympa").clone().appendTo(".bank-sympa"); // Append to new div 
		$(".bank-sympa").append("<button style='width:100px; height: 25px; padding: 3px 10px' class='delete-sympa btn btn-default'>Delete Song</button>"); // Append song to new div
		$(".bank-sympa").append("</div>"); // Close new div 

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
		song1++; 
		

		// Add song in a new div 
		$("#myPlaylist").append("<div class= 'bank-matete'>"); // Append new div 
		$(".sound-matete").clone().appendTo(".bank-matete"); // Append  song to new div 
		$(".bank-matete").append("<button style='width:100px; height: 25px; padding: 3px 10px' class='delete-matete btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-matete").append("</div>"); // Close new div 


		return false; 
	});
});

/* Add quand cest to playlist */ 
$(document).ready(function() {
	$(".add-quandcest").click(function(e) {
		e.preventDefault();
	if (song3 != 0) {  // Prevent duplication 
		return false
	}
	});
	$('.add-quandcest').live('click', function(e) {
		e.preventDefault();
		song3++; 

// Add song in a new div 
		$("#myPlaylist").append("<div class= 'bank-quandcest'>"); // Append new div 
		$(".sound-quandcest").clone().appendTo(".bank-quandcest"); // Append  song to new div 
		$(".bank-quandcest").append("<button style='width:100px; height: 25px; padding: 3px 10px' class='delete-quandcest btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-quandcest").append("</div>"); // Close new div 

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
		song4++; 

		// Add song in a new div 
		$("#myPlaylist").append("<div class= 'bank-quelquun'>"); // Append new div 
		$(".sound-quelquun").clone().appendTo(".bank-quelquun"); // Append  song to new div 
		$(".bank-quelquun").append("<button style='width:100px; height: 25px; padding: 3px 10px' class='delete-quelquun btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-quelquun").append("</div>"); // Close new div 

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
		song5++; 

// Add song in a new div 
		$("#myPlaylist").append("<div class= 'bank-tous'>"); // Append new div 
		$(".sound-tous").clone().appendTo(".bank-tous"); // Append  song to new div 
		$(".bank-tous").append("<button style='width:100px; height: 25px; padding: 3px 10px' class='delete-tous btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-tous").append("</div>"); // Close new div 


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
		song6++; 

		// Add song in a new div 
		$("#myPlaylist").append("<div class= 'bank-papa'>"); // Append new div 
		$(".sound-papa").clone().appendTo(".bank-papa"); // Append  song to new div 
		$(".bank-papa").append("<button style='width:100px; height: 25px; padding: 3px 10px' class='delete-papa btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-papa").append("</div>"); // Close new div 

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
	//$("#playlistClear").show();  // hide playlist 

}); 


/* Delete Sympa from playlist */ 

$('.delete-sympa').live('click', function() {
		$('.bank-sympa').remove();
		
		
	song2 = 0;  // "Sympathique" not present

}); 

/* Delete Ma Tete from playlist */ 

$('.delete-matete').live('click', function() {
		$('.bank-matete').remove();
		
		
	song1 = 0;  // "Où Est Ma Tête" not present

}); 

/* Delete Quand C'est from playlist */ 

$('.delete-quandcest').live('click', function() {
		$('.bank-quandcest').remove();
		
		
	song3 = 0;  // "Quand C'est" not present

}); 

/* Delete Quelqu'un a Touché ma Femme from playlist */ 

$('.delete-quelquun').live('click', function() {
		$('.bank-quelquun').remove();
		
		
	song4 = 0;  // "Quelqu'un a Touché ma Femme" not present

}); 


/* Delete Tous Les Mêmes from playlist */ 
$('.delete-tous').live('click', function() {
		$('.bank-tous').remove();
		
		
	song5 = 0;  // "Tous Les Mêmes" not present

}); 

/* Delete Papaoutai from playlist */ 
$('.delete-papa').live('click', function() {
		$('.bank-papa').remove();
		
		
	song6 = 0;  // "Papaoutai" not present

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





