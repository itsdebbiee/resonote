$(document).load(function(){
	var flag = Math.floor(Math.random() * 6) + 1;
	flag % 2;
	console.log(flag);
	if (flag == 0) {
		jQuery.noop();
	}
	else (flag == 1) 
		window.location.href="http://acsweb.ucsd.edu/~depan/resonote/redesign.html"; 
		//window.location.replace("http://acsweb.ucsd.edu/~depan/resonote/redesign.html");
	
});