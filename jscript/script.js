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

var beg = 0;
var inter = 0; 
var adv = 0; 

var songbankClear = 0; // Indicates if song bank is clear


/* Click 'x' to not add to wordbank */

	$('.add-hide').live('click', function(e) {
    e.preventDefault(); 
    console.log("Cats");

	$('.popup').popover('hide');
	return false;

});  

/* Add to beginner wordbank */ 

$('.add').live('click', function(e) {
	e.preventDefault();

	if (beg == 0) {
		$("#eBankEmpty").remove(); 
		$("#easy-wb").append("<button style='color: white;width:100px; height: 25px; padding: 2px 5px' class='delete-easy btn btn-default'>Clear</button>"); 
	}

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
//	$("#easy-wb").append("<a class ='deleteBankButton'> <img src='img/delete.png'> </a>");
	$("#easy-wb").append("<br></p>");

	//$('.small-text').close();
		$('.popup').popover('hide');

		


	
	
	beg++;
	return false;
	
});

/* Add to intermediate wordbank */ 

$('.add-int').live('click', function(e) {
	e.preventDefault();

	if (inter == 0) {
		$("#iBankEmpty").remove(); 
		$("#int-wb").append("<button style='color: white;width:100px; height: 25px; padding: 2px 5px' class='delete-intermed btn btn-default'>Clear</button>"); 
	}

	var targetFrench=$(".line-int").find(".french3");
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
	$("#int-wb").append("</p>");
	$('.popup').popover('hide'); // Hide notification 

	
	inter++; 
	return false;
	
});

/* Add to advanced wordbank */ 

$('.add-exp').live('click', function(e) {
	e.preventDefault();

	if (adv == 0) {
		$("#aBankEmpty").remove();  // Remove "empty word bank" message
		$("#exp-wb").append("<button style='color: white;width:100px; height: 25px; padding: 2px 5px' class='delete-exp btn btn-default'>Clear</button>"); 
	}

	var targetFrench=$(".line-exp").find(".french3");
	var cloneFrench=targetFrench.clone()[0];
	//console.log(targetFrench);
	//console.log(cloneFrench);
	$("#exp-wb").append("<p class='wb-exp'>");
	$("#exp-wb").append(cloneFrench);

	$("#exp-wb").append("</br>");

	var targetEng=$(".line-exp").find(".eng-exp");
	var cloneEng=targetEng.clone()[0];
	//console.log(cloneEng);
	//console.log(targetEng);
	$("#exp-wb").append(cloneEng);
	$("#exp-wb").append("</p>");
	$('.popup').popover('hide');

	
	adv++; 
	return false;
	
}); 


/* Add sympa to playlist */ 

$(document).ready(function() {
	$(".add-sympa").click(function(e) {
		e.preventDefault();
	if (song2 != 0) { // Prevent duplication 
		 // Playlist is already empty
	alert("This song is already in your favorites!");		 
		return false;
	} /*
	if (songbankClear != 0) { // Deletes "bank is clear message"
		$("#emptySongList").remove();
		songbankClear = 0; // Decrement 
	} */
	});
	$('.add-sympa').live('click', function(e) {
		e.preventDefault();

		// Add song in a new div 
	    alert("Added to your favorites!");
		$("#myPlaylist").append("<div class= 'bank-sympa'>"); // Append new div 
		$(".sound-sympa").clone().appendTo(".bank-sympa"); // Append to new div 
		$(".bank-sympa").append("<button style='color:white; width:100px; height: 25px; padding: 3px 10px;' class='delete-sympa btn btn-default'>Delete Song</button>"); // Append song to new div
		$(".bank-sympa").append("<br></div>"); // Close new div 
		$("#emptySongList").hide(); // Show message

		song2++; 

		

		return false; 
	});
});

/* Add ma tete to playlist */ 
$(document).ready(function() {
	$(".add-matete").click(function(e) {
		e.preventDefault();
	if (song1 != 0) {  // Prevent duplication 
		alert("This song is already in your favorites!");
		return false;
	}
	});
	$('.add-matete').live('click', function(e) {
		e.preventDefault(); 
		song1++; 
		

		// Add song in a new div 
		  alert("Added to your favorites!");
		$("#myPlaylist").append("<div class= 'bank-matete'>"); // Append new div 
		$(".sound-matete").clone().appendTo(".bank-matete"); // Append  song to new div 
		$(".bank-matete").append("<button style='color:white; width:100px; height: 25px; padding: 3px 10px;' class='delete-matete btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-matete").append("<br></div>"); // Close new div 
		$("#emptySongList").hide(); // Show message


		return false; 
	});
});

/* Add quand cest to playlist */ 
$(document).ready(function() {
	$(".add-quandcest").click(function(e) {
		e.preventDefault();
	if (song3 != 0) {  // Prevent duplication 
		alert("This song is already in your favorites!");
		return false;
	}
	});
	$('.add-quandcest').live('click', function(e) {
		e.preventDefault();
		song3++; 

// Add song in a new div 
		  alert("Added to your favorites!"); 
		$("#myPlaylist").append("<div class= 'bank-quandcest'>"); // Append new div  
		$(".sound-quandcest").clone().appendTo(".bank-quandcest"); // Append  song to new div		
		$(".bank-quandcest").append("<button style='color: white; width:100px; height: 25px; padding: 3px 10px;' class='delete-quandcest btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-quandcest").append("<br></div>"); // Close new div 
		$("#emptySongList").hide(); // Show message

		return false; 
	});
});


/* Add quelquun to playlist */ 
$(document).ready(function() {
	$(".add-quelquun").click(function(e) {
		e.preventDefault();
	if (song4 != 0) {  // Prevent duplication 
		alert("This song is already in your favorites!");
		return false;
	}
	});
	$('.add-quelquun').live('click', function(e) {
		e.preventDefault();
		song4++; 

		// Add song in a new div 
		  alert("Added to your favorites!"); 
		$("#myPlaylist").append("<div class= 'bank-quelquun'>"); // Append new div 
		$(".sound-quelquun").clone().appendTo(".bank-quelquun"); // Append  song to new div 
		$(".bank-quelquun").append("<button style='color:white; width:100px; height: 25px; padding: 3px 10px;' class='delete-quelquun btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-quelquun").append("<br></div>"); // Close new div 
		$("#emptySongList").hide(); // Show message

		return false; 
	});
});

/* Add tous to playlist */ 
$(document).ready(function() {
	$(".add-tous").click(function(e) {
		e.preventDefault();
	if (song5 != 0) {  // Prevent duplication 
		alert("This song is already in your favorites!");
		return false
	}
	});
	$('.add-tous').live('click', function(e) {
		e.preventDefault();
		song5++; 

// Add song in a new div 
		  alert("Added to your favorites!"); 
		$("#myPlaylist").append("<div class= 'bank-tous'>"); // Append new div  
		$(".sound-tous").clone().appendTo(".bank-tous"); // Append  song to new div
		$(".bank-tous").append("<button style='color: white; width:100px; height: 25px; padding: 3px 10px;' class='delete-tous btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-tous").append("<br></div>"); // Close new div
		$("#emptySongList").hide(); // Show message 


		return false; 
	});
});

/* Add papaoutai to playlist */ 
$(document).ready(function() {
	$(".add-papa").click(function(e) {
		e.preventDefault();
	console.log("Monkeys");
	if (song6 != 0) {  // Prevent duplication 
		alert("This song is already in your favorites!");
		return false
	}
	});
	
	$(".add-papa").live('click', function(e) {
		e.preventDefault();
		song6++; 

		// Add song in a new div
		  alert("Added to your favorites!"); 
		$("#myPlaylist").append("<div class= 'bank-papa'>"); // Append new div 
		console.log("Monkeys and hoes know where it goes");
		$(".sound-papa").clone().appendTo(".bank-papa"); // Append  song to new div 
		$(".bank-papa").append("<button style='color: white; width:100px; height: 25px; padding: 3px 10px;' class='delete-papa btn btn-default'>Delete Song</button>"); // Append delete-song to new div
		$(".bank-papa").append("<br></div>"); // Close new div 
		$("#emptySongList").hide(); // Show message 

		return false; 
	});
});



















/* Delete wordbank entry */ 


$('.deleteBankButton').live('click', function() {
		//beg--;
		//var variable=$(".hold-easy-wb").find(".french3");
	//	console.log(variable);
	//	console.log("This printed....");
		//$(".hold-easy-wb").variable.remove();
	//	$('.wb').remove();

		//$(document).on('click', '.deleteBankButton', function(){
   			//var test = $(this).closest('.wb').clone();
   			//console.log("Next line is dog");
   			//console.log(dog);

   			 console.log("Pressed");
   			 $('#easy-wb').find('.wb').remove();

   			// console.log(test);

//})

		//return false;



























		
});



/* Clear advanced wordbank */ 

$(".delete-exp").live('click', function() {
		adv = 0;
		console.log("This is happening");
		var r = confirm("Your are about to clear your wordbank.  Is that ok?");
		if (r == true)  {
          $("#exp-wb").remove();
		  $("#hold-exp-wb").append("<div id='exp-wb'>");
		  $("#hold-exp-wb").append("<p id='aBankEmpty'> You have not added any Advanced phrases!");
		  $("#hold-exp-wb").append("</div>");
		 }
		 else
		 	return false; 
		  
});

/* Clear intermediate wordbank */ 

$(".delete-intermed").live('click', function() {
		inter = 0; 
		var x = confirm("Your are about to clear your wordbank.  Is that ok?");
		if (x == true) {
			$("#int-wb").remove();
			$("#hold-int-wb").append("<div id='int-wb'> ");
			$("#hold-int-wb").append("<p id='iBankEmpty'> You have not added any Intermediate phrases!");
			$("#hold-int-wb").append("</div>");
		}	
		else
			return false;
		
});

/* Clear beginner wordbank */ 

$(".delete-easy").live('click', function() {
		beg = 0; 
		var e = confirm("Your are about to clear your wordbank.  Is that ok?");
		if (e == true) {
			$("#easy-wb").remove();
			$("#hold-easy-wb").append("<div id='easy-wb'> </div>");
			$("#hold-easy-wb").append("<p id='eBankEmpty'> You have not added any Beginner phrases!");
			$("#hold-easy-wb").append("</div>");
		}
		else
			return false; 
		
});


/* Clear playlist */ 

$(".delete-playlist").live('click', function() {
	if (song1+song2+song3+song4+song5+song6 == 0) { // Playlist is already empty
		alert("You haven't added any favorites!");
		return false; 
	}

	var p = confirm("Your are about to clear your playlist.  Is that ok?");
	if (p == true) {
		
		$("#myPlaylist").remove();
		$("#emptySongList").show(); // Show message 
		$("#holdPlaylist").append("<div id='myPlaylist'>");
		$("#holdPlaylist").append("</div>");
		
		
	song1 = 0;  // "Où est Ma Tête?"
	song2 = 0;  // "Sympathique"
	song3 = 0;  // "Quand C'est"
	song4 = 0;  // "Quelqu'un a Touché Ma Femme"
	song5 = 0;  // "Tous Les Mêmes"
	song6 = 0;  // "Papaoutai"

	// alert("Your favorites have been cleared!");
	// Above line might not be necessary... instant feeback on screen

	songbankClear++;  // Message displayed 
	}
	else   // Presses 'Cancel'
		return false; 

	

}); 


/* Delete Sympa from playlist */ 

$('.delete-sympa').live('click', function() {
		$('.bank-sympa').remove();
		
	song2 = 0;  // "Sympathique" not present
	if (song1+song2+song3+song4+song5+song6 == 0) {
			$("#emptySongList").show(); // Show emply playlist message 
		} 

}); 

/* Delete Ma Tete from playlist */ 

$('.delete-matete').live('click', function() {
		$('.bank-matete').remove();
		
		
	song1 = 0;  // "Où Est Ma Tête" not present
	if (song1+song2+song3+song4+song5+song6 == 0) {
			$("#emptySongList").show(); // Show emply playlist message 
		} 

}); 

/* Delete Quand C'est from playlist */ 

$('.delete-quandcest').live('click', function() {
		$('.bank-quandcest').remove();
		
		
	song3 = 0;  // "Quand C'est" not present
	if (song1+song2+song3+song4+song5+song6 == 0) {
			$("#emptySongList").show(); // Show emply playlist message 
		} 

}); 

/* Delete Quelqu'un a Touché ma Femme from playlist */ 

$('.delete-quelquun').live('click', function() {
		$('.bank-quelquun').remove();
		
		
	song4 = 0;  // "Quelqu'un a Touché ma Femme" not present
	if (song1+song2+song3+song4+song5+song6 == 0) {
			$("#emptySongList").show(); // Show emply playlist message 
		} 

}); 


/* Delete Tous Les Mêmes from playlist */ 
$('.delete-tous').live('click', function() {
		$('.bank-tous').remove();
		
		
	song5 = 0;  // "Tous Les Mêmes" not present
	if (song1+song2+song3+song4+song5+song6 == 0) {
			$("#emptySongList").show(); // Show emply playlist message 
		} 

}); 

/* Delete Papaoutai from playlist */ 
$('.delete-papa').live('click', function() {
		$('.bank-papa').remove();
		
		
	song6 = 0;  // "Papaoutai" not present
	if (song1+song2+song3+song4+song5+song6 == 0) {
			$("#emptySongList").show(); // Show emply playlist message 
		} 

}); 


/* Song Pages */
$(document).ready(function() {
	$("#ouest").click(function() {
		$("#ouest-reveal").fadeIn('fast');
		$("#ouest, #sympathique").fadeOut('fast');
		$(".back").fadeIn('fast');
		console.log('hello');
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
        $('html,body').animate({scrollTop: 0}, "fast");
    }); 

     $('#flag-icon').on('click', function(){
        $('html,body').animate({scrollTop: 0}, "fast");
    }); 

     $('#playlist-icon').on('click', function(){
        $('html,body').animate({scrollTop: 0}, "fast");
    }); 

     $('#settings-icon').on('click', function(){
        $('html,body').animate({scrollTop: 0}, "fast");
    }); 

     $('#home-icon').on('click', function(){
        $('html,body').animate({scrollTop: 0}, "fast");
        
    }); 
});  

/* redesign page js */
$(document).ready(function() {
	$("#ouest1").click(function() {
		$("#ouest-reveal1").fadeIn('fast');
		$("#ouest1, #sympathique1, #quand1, #quel1, #tous1, #papa1, #easy-songs, #inter-songs, #exp-songs").fadeOut('fast');
		$(".back-1").fadeIn('fast');
	});

	$("#sympathique1").click(function() {
		$("#sympathique-reveal1").fadeIn('fast');
		$("#ouest1, #sympathique1, #quand1, #quel1, #tous1, #papa1, #easy-songs, #inter-songs, #exp-songs").fadeOut('fast');
		$(".back-1").fadeIn('fast');

	});

	$("#quand1").click(function() {
		$("#quand-reveal1").fadeIn('fast');
		$("#ouest1, #sympathique1, #quand1, #quel1, #tous1, #papa1, #easy-songs, #inter-songs, #exp-songs").fadeOut('fast');
		$(".back-1").fadeIn('fast');
	});

	$("#quel1").click(function() {
		$("#quel-reveal1").fadeIn('fast');
		$("#ouest1, #sympathique1, #quand1, #quel1, #tous1, #papa1, #easy-songs, #inter-songs, #exp-songs").fadeOut('fast');
		$(".back-1").fadeIn('fast');
	});

	$("#tous1").click(function() {
		$("#tous-reveal1").fadeIn('fast');
		$("#ouest1, #sympathique1, #quand1, #quel1, #tous1, #papa1, #easy-songs, #inter-songs, #exp-songs").fadeOut('fast');
		$(".back-1").fadeIn('fast');
	});

	$("#papa1").click(function() {
		$("#papa-reveal1").fadeIn('fast');
		$("#ouest1, #sympathique1, #quand1, #quel1, #tous1, #papa1, #easy-songs, #inter-songs, #exp-songs").fadeOut('fast');
		$(".back-1").fadeIn('fast');
	});

	$(".back-1").click(function() {
		$("#easy-songs, #ouest1, #sympathique1, #inter-songs, #quel1, #quand1, #exp-songs, #tous1, #papa1").fadeIn('fast');
		$(".back-1, #sympathique-reveal1, #ouest-reveal1, #quand-reveal1, #quel-reveal1, #tous-reveal1, #papa-reveal1").fadeOut('fast');
	});
});

$("#allsongs").on('click', function(){
	d = new Date();
	ga('send', 'event', 'image', 'click', 'Version A song tab clicked REAL', d.getTime());
})

$("#tous").on('click', function(){
	d = new Date();
	ga('send', 'event', 'a', 'click', 'Version A song name clicked REAL', d.getTime());
})

$("#allsongs-redesign").on('click', function(){
	d = new Date();
	ga('send', 'event', 'image', 'click', 'Version B song tab clicked REAL', d.getTime());
})

$("#tous1").on('click', function(){
	d = new Date();
	ga('send', 'event', 'a', 'click', 'Version B song name clicked REAL', d.getTime());
})

ga('send', 'event', 'image', 'click', 'Image clicked');


