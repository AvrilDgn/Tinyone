$(document).ready(function() {
	$('.post_fadeIn').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	$('.post_fadeInRight').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInRight',
		offset: 100
	});
});