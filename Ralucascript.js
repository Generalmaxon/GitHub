// ==UserScript==
// @name         Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://mush.twinoid.es/
// @include     http://mush.twinoid.com/*
// @include     http://mush.twinoid.es/*
// @grant        none
// ==/UserScript==

//ICONS

(function() {
    'use strict';

    // Your code here...
var oldSrc = '//data.mush.twinoid.es/img/icons/skills/engineer.png';
var newSrc = 'https://s31.postimg.org/6h1mwf7uz/engineergif.gif';
$('img[src="' + oldSrc + '"]').attr('src', newSrc);
})();

(function() {
    'use strict';

    // Your code here...
var oldSrc = '//data.mush.twinoid.com/img/icons/skills/sturdy.png';
var newSrc = 'https://s32.postimg.org/gwzf38adx/botanicgif.gif';
$('img[src="' + oldSrc + '"]').attr('src', newSrc);
})();

(function() {
    'use strict';

    // Your code here...
var oldSrc = '/img/art/char/raluca_tomescu.jpg';
var newSrc = 'http://25.media.tumblr.com/966339247c3c799c0772be7769161429/tumblr_mi3lxlQwxy1r4rj25o1_250.gif';
$('img[src="' + oldSrc + '"]').attr('src', newSrc);
})();


