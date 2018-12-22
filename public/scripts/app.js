'use strict';

AOS.init();

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-to-top').fadeIn();
			$('#project-menu').addClass('fixed-project-menu');
		} else {
			$('#back-to-top').fadeOut();
			$('#project-menu').removeClass('fixed-project-menu');
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 120) {
			$('#main-nav').addClass('fixed-nav');
		} else {
			$('#main-nav').removeClass('fixed-nav');
		}
	});

	$('#back-to-top').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	$("a[href^='#']").click(function (e) {
		e.preventDefault();

		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		});

		$('#mobile-links').fadeOut();
	});

	$('#menu-bars').click(function () {
		$('#mobile-links').fadeIn();
	});

	$('#menu-x').click(function () {
		$('#mobile-links').fadeOut();
	});
});

var kyndra = document.getElementById("kyndra-extended");
var ivan = document.getElementById("ivan-extended");
var ana = document.getElementById("ana-extended");

function showKyndra() {
	if (kyndra.style.display === 'none') {
		kyndra.style.display = 'block';
		$('#expandKyndra').html('Close details <i class="fas fa-minus-circle"></i>');
	} else {
		kyndra.style.display = 'none';
		$('#expandKyndra').html('More details <i class="fas fa-plus-circle"></i>');
	}
}

function showIvan() {
	if (ivan.style.display === 'none') {
		ivan.style.display = 'block';
		$('#expandIvan').html('Close details <i class="fas fa-minus-circle"></i>');
	} else {
		ivan.style.display = 'none';
		$('#expandIvan').html('More details <i class="fas fa-plus-circle"></i>');
	}
}

function showAna() {
	if (ana.style.display === 'none') {
		ana.style.display = 'block';
		$('#expandAna').html('Close details <i class="fas fa-minus-circle"></i>');
	} else {
		ana.style.display = 'none';
		$('#expandAna').html('More details <i class="fas fa-plus-circle"></i>');
	}
}