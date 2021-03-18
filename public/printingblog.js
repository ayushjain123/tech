$(document).ready(function(){

	$("#get-form").submit(function(e){
e.preventDefault();
		tinymce.activeEditor.setContent("<p>Hello world!</p>");
		return false;

	});

});