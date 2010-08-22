/*!
 * HTML5 Placeholder jQuery Plugin v1.2
 * @link http://github.com/mathiasbynens/Placeholder-jQuery-Plugin
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
 
 
 
 
 
;(function($) {





$.fn.placeholder = function (options) {
	
	
	this.options =  $.extend(true, {
	
		placeholderClassName: "placeholder",
		placeholderClassNameDataKey: "jQuery.placeholder.className"
	
	}, options);
	
	
	
	
	
	if (this[0] && 'placeholder' in document.createElement('input'))
	return this;
	
		



	var thisObject = this;
	
	var updatePlaceholder = function (theElement) {
	
		if (theElement.val() === '' || theElement.val() === theElement.attr("placeholder")) {
	
			theElement.addClass(theElement.data(thisObject.options.placeholderClassName)).val(theElement.attr("placeholder"));
	
		} else {
	
			theElement.removeClass(thisObject.options.placeholderClassName);
	
		};

	};
	
	
	
	
	
	$('form:has([placeholder])').submit(function() {

		$('.placeholder', this).val('');

	});

	$(window).unload(function() {

		$('.placeholder').val('');

	});
	
	
	
	
	
	return this.each(function() {

		var thisElement = $(this);
		
		if (thisElement.is(':password') || !(thisElement.is(':input')))
		return;
	
		updatePlaceholder(thisElement);
	
		thisElement.focus(function() {
		
			if (thisElement.val() === thisElement.attr('placeholder'))	
			thisElement.val('').removeClass(thisObject.options.placeholderClassName);
		
		}).blur(function() {
		
			updatePlaceholder(thisElement);
		
		});

	});





};





})(jQuery);