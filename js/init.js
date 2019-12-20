// Scroll to top function
function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

$(window).scroll(function() {
	if (getScrollPercent() >= 60) {        	// If page is scrolled more than 50px
		$('#return-to-top').fadeIn(200);    // Fade in the arrow
	} else {
		$('#return-to-top').fadeOut(200);   // Else fade out the arrow
	}
});

// Randomly Choose Gdrive link
// Could do with re-write as only all in one files are region bound, to reduce script length
function driveLink(type, langauge){

	var langKey = 0;

		if (langauge == "de"){
			langKey = 1;
		}else if (langauge == "es"){
			langKey = 2;
		}


		var matrix = [

			[	// GB
				[	// Client Files (V0.6.0)
					'https://drive.google.com/uc?id=1vWBWIB8pNCAbWCjPk9B6kCwFF3DNurGi',
					'https://drive.google.com/uc?id=1V0zFB0L-s22PeqF374rtyfGKtNttNPfE',
					'https://drive.google.com/uc?id=1HZOaV__EWFu-_7zmWgBONajQA7GxV5lB',
					'https://iw4x-my.sharepoint.com/:u:/g/personal/emosewaj_iw4x_onmicrosoft_com/ET2Co4H-H4lGqKUBxlY66V4Bn4UOQjUSHjK3hZIeDLSXhQ?e=AwyZBZ&download=1'
				],
				[	// DLC Files
					'https://drive.google.com/uc?id=1d7mpdtyZdCiS4Trf_XHhU1Wxfpa22kYM',
					'https://drive.google.com/uc?id=1Kb_bD-Tdguy75On2D2jN5Xvo1yo5zhIT',
					'https://drive.google.com/uc?id=1MHQRFNO81ggf7xS2jxR1L8oM6-vMaUiU',
					'https://iw4x-my.sharepoint.com/:u:/g/personal/emosewaj_iw4x_onmicrosoft_com/EYnWYmCXExpEvn-bL2262Q0BSy0jVZF0FXslvpJEDPE5Fw?e=gPx8RF&download=1'
				],
				[	// All in one Files (V0.6.0)		
					'https://drive.google.com/uc?id=1wRPdUV-oz9J8DCBgj3RNk2rT_xMiZyIY',
					'https://drive.google.com/uc?id=1RChya7NJ_wPTlB8-lXv4cJzv3T-8Pwfl',
					'https://drive.google.com/uc?id=1WWEtzJD0awmg6NlVyu5ezAKx_l_71Cie',
					'https://drive.google.com/uc?id=1ALqtTIT7JDd97_ZD5oMVAh-1Oox0XZ7e',
					'https://drive.google.com/uc?id=1cLJZpb4QbmT62QkoZB8v91tgzpGuYHMa',
					'https://drive.google.com/uc?id=18pTq_z2fHIqxLMu8gTetRUHBRGbgeU6I',
					'https://drive.google.com/uc?id=11ZWM7jG65LP9F6e8xNy788K4rtq4KYt1',
					'https://drive.google.com/uc?id=1uyza2ezlL64-T4xAPwcH2vzPTvOnwqyb',
					'https://drive.google.com/uc?id=10TYAz9Lkh4wlvvkBKhBliaU0ASYi_V--',
					'https://drive.google.com/uc?id=11_AfnVPT47167HivGGT0hKyHGtwlIh1j',
					'https://drive.google.com/uc?id=18OYArKiasC7_LC2I0kIzkN9LYxBKTNDm',
					'https://drive.google.com/uc?id=1BNixhVuTrGUXRP__w5RUyVjH3_nF4vaA',
					'https://drive.google.com/uc?id=18Omb6nxNWPXr12aleEvDf1zD5pGbopaJ',
					'https://drive.google.com/uc?id=1AXnjtBOFChDlC44YNoa_1FncTiYgWOIg',
					'https://drive.google.com/uc?id=1NCj4cmzGSiP19wsoAGTTT6pDAOCtpSuc',
					'https://drive.google.com/uc?id=1O_wFOvcsqVgl8yWgI0rkxHPUB23yQiU8',
					'https://drive.google.com/uc?id=1S7lrJMFMVUWNIAb_SsENuKPXePLMT47G',
					'https://drive.google.com/uc?id=1djQVjGR8HrKq79S_W1aCj_bycpHT5r3S',
					'https://drive.google.com/uc?id=1fpVHo25UoGrneTGa6uKv_cu7E6F2ruSs'
				]
			],
			[	// DE
				[	// Client Files (V0.6.0)
					'https://drive.google.com/uc?id=1vWBWIB8pNCAbWCjPk9B6kCwFF3DNurGi',
					'https://drive.google.com/uc?id=1V0zFB0L-s22PeqF374rtyfGKtNttNPfE',
					'https://drive.google.com/uc?id=1HZOaV__EWFu-_7zmWgBONajQA7GxV5lB',
					'https://iw4x-my.sharepoint.com/:u:/g/personal/emosewaj_iw4x_onmicrosoft_com/ET2Co4H-H4lGqKUBxlY66V4Bn4UOQjUSHjK3hZIeDLSXhQ?e=AwyZBZ&download=1'
				],
				[	// DLC Files
					'https://drive.google.com/uc?id=1d7mpdtyZdCiS4Trf_XHhU1Wxfpa22kYM',
					'https://drive.google.com/uc?id=1Kb_bD-Tdguy75On2D2jN5Xvo1yo5zhIT',
					'https://drive.google.com/uc?id=1MHQRFNO81ggf7xS2jxR1L8oM6-vMaUiU',
					'https://iw4x-my.sharepoint.com/:u:/g/personal/emosewaj_iw4x_onmicrosoft_com/EYnWYmCXExpEvn-bL2262Q0BSy0jVZF0FXslvpJEDPE5Fw?e=gPx8RF&download=1'
				],
				[	// All in one Files (V0.6.0)
					'https://drive.google.com/uc?id=1y0xrnmkZGmblWeFaSVSSn1PTsg_YXj2I',
					'https://drive.google.com/uc?id=17wx-9T1GN0uL0JpPR0V_5kTmA8yyW1-s',
					'https://drive.google.com/uc?id=1CCGElHGv7k-eQRHqjM04eeIXmQ9Fu7Z_',
					'https://drive.google.com/uc?id=1HW8ditvKdKf6HBMnAe4Jol3mV2phI3qr',
					'https://drive.google.com/uc?id=1OGmGJ8gdUwbSY0l_JSqguFZLHDyNsfRE',
					'https://drive.google.com/uc?id=1bjjnqkril9MRadTNr_A0JOaQ7hQSXYYn',
					'https://drive.google.com/uc?id=1dLqxyrP20hNbs3DDR6viIFAvWno7tjwp',
					'https://drive.google.com/uc?id=1rIgVjCsZzjyA4gsP0Mgsfc2A72H3x3sf',
					'https://drive.google.com/uc?id=1zJuEsmQPuMd3RIpb15KmQCv3e1Ufz9OV',
					'https://drive.google.com/uc?id=1wCPoJda7Sopdc4KQIgYbd7hAdgmLebLe',
					'https://drive.google.com/uc?id=1zgjwTV99qOn8RD6x_MxMnP1zD4N-Dtjr',
				]
			],
			[	// ES
				[	// Client Files (V0.6.0)
					'https://drive.google.com/uc?id=1vWBWIB8pNCAbWCjPk9B6kCwFF3DNurGi',
					'https://drive.google.com/uc?id=1V0zFB0L-s22PeqF374rtyfGKtNttNPfE',
					'https://drive.google.com/uc?id=1HZOaV__EWFu-_7zmWgBONajQA7GxV5lB',
					'https://iw4x-my.sharepoint.com/:u:/g/personal/emosewaj_iw4x_onmicrosoft_com/ET2Co4H-H4lGqKUBxlY66V4Bn4UOQjUSHjK3hZIeDLSXhQ?e=AwyZBZ&download=1'
				],
				[	// DLC Files
					'https://drive.google.com/uc?id=1d7mpdtyZdCiS4Trf_XHhU1Wxfpa22kYM',
					'https://drive.google.com/uc?id=1Kb_bD-Tdguy75On2D2jN5Xvo1yo5zhIT',
					'https://drive.google.com/uc?id=1MHQRFNO81ggf7xS2jxR1L8oM6-vMaUiU',
					'https://iw4x-my.sharepoint.com/:u:/g/personal/emosewaj_iw4x_onmicrosoft_com/EYnWYmCXExpEvn-bL2262Q0BSy0jVZF0FXslvpJEDPE5Fw?e=gPx8RF&download=1'
				],
				[	// All in one Files	(V0.6.0)
					'https://drive.google.com/uc?id=1fDMeUiPmZn3kbUZpto936CKkL4jDY3Ja',
					'https://drive.google.com/uc?id=1aup80Hx8shVpm_xuHhVOSn_oC12oHDCp',
					'https://drive.google.com/uc?id=1nWZ5aZ7xxuskx8mfPrykgHEjbssBHiOo',
					'https://drive.google.com/uc?id=1kg9N_w5k2EsYWW-hmJibiDWHK9CestF4',
					'https://drive.google.com/uc?id=1Q8UHQymUsbQ7v_snPLN11x0CsiJSo6fg',
					'https://drive.google.com/uc?id=1DAlqg-l1FRtruZIka36x6eOxR3YtngkG',
					'https://drive.google.com/uc?id=1z7k2kbb2q9nRUUt8DClpznIAYLpI_wz5',
					'https://drive.google.com/uc?id=1z7k2kbb2q9nRUUt8DClpznIAYLpI_wz5',
					'https://drive.google.com/uc?id=1z7k2kbb2q9nRUUt8DClpznIAYLpI_wz5'
				]
			]
	
		];

	return matrix[langKey][type][parseInt(Math.random() * (matrix[langKey][type].length))];
};

window.onload = function() {

	var currentUrlLang = new URL(window.location.href).searchParams.get("lang");
	if (currentUrlLang == null){
		// No URL langauge param present
		// Retrieve language from local storage if available
		// Don't switch to english on load, as hardcoded text is english
		var currentLangauge = localStorage.language;
		if (currentLangauge != null && currentLangauge != "gb"){
			switchLanguage(currentLangauge);
		}else{
			downloadSwitcherGB();
		}

	}else{
		// URL language param present -> switch
		switchLanguage(currentUrlLang);
	}

};

var xhttp = new XMLHttpRequest();
var langDocument = {};
var currentLangauge = null;

function switchLanguage(language){

	// Save language state
	localStorage.language = language;
	currentLangauge = language;

	// Switch navbar icon
	iconSwitch(language);

	var langFullNames = ["english", "german", "spanish"];
	var currentLangFullName = "";

	if (language == "gb"){
		currentLangFullName = langFullNames[0];
	}else if (language == "de"){
		currentLangFullName = langFullNames[1];
	}else if (language == "es"){
		currentLangFullName = langFullNames[2];
	}

	if (language == "gb"){
		history.pushState({}, null, window.location.pathname);
	}else{
		history.pushState({}, null, window.location.pathname + "?lang=" + language);
	}

	// Json request
	xhttp.open("GET", "i18n/" + currentLangFullName + ".json", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
}

// Hooks events
xhttp.onreadystatechange = function(){
	
	if (this.readyState === 4 && this.status === 200) {
		langDocument = JSON.parse(this.responseText);
		processLangDocument();
	}else if(this.readyState === 4){
		alert("Language json failed to load.");
	}
};

function iconSwitch(language){

	document.getElementById("currentFlag").className = "flag-icon flag-icon-" + language;

	var mobileNavbar = document.getElementById("_currentFlag");
    if(mobileNavbar){
		document.getElementById("_currentFlag").className = "flag-icon flag-icon-" + language;
    }
}

//------
function processLangDocument(){
	var tags = document.querySelectorAll('span,img,a,label,li,option,h1,h2,h3,h4,h5,h6,p');
	Array.from(tags).forEach(function(value, index){
		var key = value.dataset.langkey;
		var hrefKey = value.dataset.downloadkey;
		if(langDocument[key]) value.innerHTML = langDocument[key];
		if(hrefKey){
			if (value.id == "gdrive0") {						// If Id present use gdrive function
				value.href = driveLink(0, currentLangauge);
			}else if (value.id == "gdrive1") {
				value.href = driveLink(1, currentLangauge);
			}else if (value.id == "gdrive2") {
				value.href = driveLink(2, currentLangauge);
			}else if (langDocument[hrefKey]){
				value.href = langDocument[hrefKey];				// Replace HREF using string in JSON
			}
		}
	});
}

// Lightweight version of above function without language replace functionality
function downloadSwitcherGB(){
	var tags = document.querySelectorAll('a');
	Array.from(tags).forEach(function(value, index){
		var hrefKey = value.dataset.downloadkey;
		if(hrefKey){
			if (value.id == "gdrive0") {						// If Id present use gdrive function
				value.href = driveLink(0, 0);
			}else if (value.id == "gdrive1") {
				value.href = driveLink(1, 0);
			}else if (value.id == "gdrive2") {
				value.href = driveLink(2, 0);
			}
		}
	});
}
//------

function christmasSnow(){
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.src = 'js/snowstorm.js';
	script.type = 'text/javascript';
	head.appendChild(script);
}



/*
	Drift by Pixelarity
	pixelarity.com @pixelarity
	License: pixelarity.com/license
*/
(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: { href: 'css/style.css', containers: 1400, grid: { gutters: ['2em', 0] } },
			xlarge: { media: '(max-width: 1680px)', href: 'css/style-xlarge.css', containers: 1200 },
			large: { media: '(max-width: 1280px)', href: 'css/style-large.css', containers: 960, grid: { gutters: ['1.5em', 0] }, viewport: { scalable: false } },
			medium: { media: '(max-width: 980px)', href: 'css/style-medium.css', containers: '90%', grid: { zoom: 2 } },
			small: { media: '(max-width: 736px)', href: 'css/style-small.css', containers: '90%!', grid: { gutters: ['1.25em', 0], zoom: 3 } },
			xsmall: { media: '(max-width: 480px)', href: 'css/style-xsmall.css' }
		},
		plugins: {
			layers: {

				// Config.
					config: {
						transformTest: function() { return skel.vars.isMobile; }
					},

				// Navigation Button.
					navButton: {
						breakpoints: 'medium',
						height: '4em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top-left',
						side: 'top',
						width: '6em'
					},

				// Navigation Panel.
					navPanel: {
						animation: 'overlayX',
						breakpoints: 'medium',
						clickToHide: true,
						height: '100%',
						hidden: true,
						html: '<div data-action="navList" data-args="nav"></div>',
						orientation: 'vertical',
						position: 'top-left',
						side: 'left',
						width: 250
					}

			}
		}
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$banner = $('#banner'),
			$bannerSkinny = $('#bannerSkinny'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 500);
			});

		// Forms (IE<10).
			var $form = $('form');
			if ($form.length > 0) {

				$form.find('.form-button-submit')
					.on('click', function() {
						$(this).parents('form').submit();
						return false;
					});

				if (skel.vars.IEVersion < 10) {
					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();
				}

			}

		// Scrolly links.
		$('.scrolly').scrolly();

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
			if ($header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		0.98,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

					skel.change(function() {

						if (skel.isActive('medium'))
							$banner.scrollwatchSuspend();
						else
							$banner.scrollwatchResume();

					});

				});

			}

			if ($header.hasClass('alt')
			&&	$bannerSkinny.length > 0) {

				$window.on('load', function() {

					$bannerSkinny.scrollwatch({
						delay:		0,
						range:		0.98,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

					skel.change(function() {

						if (skel.isActive('medium'))
							$bannerSkinny.scrollwatchSuspend();
						else
							$bannerSkinny.scrollwatchResume();

					});

				});

			}
		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right'
			});

		// Slider.
			var $sliders = $('.slider');

			if ($sliders.length > 0) {

				$sliders.slidertron({
					mode: 'fadeIn',
					seamlessWrap: true,
					viewerSelector: '.viewer',
					reelSelector: '.viewer .reel',
					slidesSelector: '.viewer .reel .slide',
					advanceDelay: 0,
					speed: 400,
					fadeInSpeed: 1000,
					autoFit: true,
					autoFitAspectRatio: (840 / 344),
					navPreviousSelector: '.nav-previous',
					navNextSelector: '.nav-next',
					indicatorSelector: '.indicator ul li',
					slideLinkSelector: '.link'
				});

				$window
					.on('resize load', function() {
						$sliders.trigger('slidertron_reFit');
					})
					.trigger('resize');

			}

	});

	if (new Date().getMonth() == 11){
		christmasSnow();
	}

})(jQuery);
