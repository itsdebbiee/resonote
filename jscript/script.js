/* Add new element into list */ 

var data;
$('#b1').click(function() {
	$('#wait').show();
	$.get("/data", callbackFn);
	console.log('AJAX');
})

function callbackFn(result) {
	$('#wait').hide();
	data= result['wordbank'] + "!";
	$('.container').append(data);
	console.log('its working')
}

/*adding html
function addWord(result) {
	console.log(result);
	var projectHTML = ''
}
*/