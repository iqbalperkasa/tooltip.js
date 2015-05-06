/* v1.0.3, http://git.io/tooltip */

document.addEventListener("DOMContentLoaded", function() {
	'use strict';

	var options = {
		'offset': {
			'top': 5,
			'left': 10
		},
		'maxWidth': '400px'
	};

	var tooltips = document.querySelectorAll('[title]');
	var arrow = document.createElement('div');

	for (var i = 0; i < tooltips.length; i++) {
		tooltips[i].onmouseover = function(m) {
			window.titl = this.title;
			this.removeAttribute('title');
			var rect = this.getBoundingClientRect();
			var tooltip = document.createElement('div');
			tooltip.innerHTML += window.titl;
			tooltip.id = 'tooltip-show';
			tooltip.appendChild(arrow);
			document.body.appendChild(tooltip);
			tooltip.setAttribute('style', 'max-width:' + options.maxWidth + ';z-index:999;background-color:rgba(0,0,0,.9);font:11px/15px normal;font-family:sans-serif;color:white;padding:7px;border-radius:0 3px 3px 3px;position:absolute;top:' + (m.pageY + 7 + options.offset.top) + 'px;left:' + (m.pageX + options.offset.left) + 'px');
			arrow.setAttribute('style', 'width:0;height:0;border:4px solid transparent;border-top-color:rgba(0,0,0,.9);transform:rotate(45deg);position:absolute;top:-4px;left:-4px');
			if (tooltip.getBoundingClientRect().right >= window.innerWidth) tooltip.setAttribute('style', tooltip.getAttribute('style') + ';right:6px');
		}
		tooltips[i].onmouseout = function() {
			document.getElementById('tooltip-show').outerHTML = '';
			this.title = window.titl;
		}
	}
});
