/* Styles Switcher */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	"use strict"

		$("#colors" ).attr("href", "css/colors/blue.css" );


});



//Inject Necessary Styles and HTML
jQuery('head').append('<link rel="stylesheet" id="colors" href="css/colors/preset.css" type="text/css" />');
jQuery('head').append('<link rel="stylesheet" href="css/color-switcher.css" type="text/css" />');

// jQuery('body').append('' +
// 	'<div id="color-style-switcher">' +
// 		'<div>' +
// 			'<h3>Color Palette</h3>' +
// 			'<ul class="colors">' +
// 				'<li><a class="color2 " href="#"></a></li>' +
// 				'<li><a class="color1 active" href="#"></a></li>' +
// 				'<li><a class="color3" href="#"></a></li>' +
// 				'<li><a class="color4" href="#"></a></li>' +
// 				'<li><a class="color5" href="#"></a></li>' +
// 				'<li><a class="color6" href="#"></a></li>' +
// 			'</ul>' +
// 		'</div>' +
// 		'<div class="bottom"> <a href="#" class="settings"><i class="lni-cog"></i></a> </div>' +
// 	'</div>' +
// '');
