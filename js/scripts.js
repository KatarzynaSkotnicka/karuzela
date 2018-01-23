//carousel movement

var carouselList = $(".slides");

function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
}

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}

$(function() {
	setInterval(changeSlide, 3000);
});


// // carousel controls right & left

// var arrowLeft = $(".glyphicon-menu-left"),
// 	arrowRight = $("glyphicon-menu-right");


// function goToNextSlide() {
// 	carouselList.animate({'marginLeft':800}, 500);
// 	}

// function goToPreviousSlide() {
// 	carouselList.animate({'marginRight':800}, 500);
// }


// $(arrowLeft).on("click", goToNextSlide);
// $(arrowRight).on("click", goToPreviousSlide);
