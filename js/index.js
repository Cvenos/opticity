(function (a) {
	"use strict";
	navigator.userAgent.indexOf("Cydia")!=-1?(a.title=a.title.split(" \u00b7 ")[0],a.documentElement.classList.add("cydia")):a.documentElement.classList.remove("cydia","depiction")
	if (navigator.userAgent.indexOf("Cydia") != -1) {
		a.title = a.title.split(" \u00b7 ")[0];
		a.documentElement.classList.add("cydia");
	} else {
		a.documentElement.classList.remove("cydia","depiction");
	}
})(document)