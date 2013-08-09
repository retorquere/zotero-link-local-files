// Only create main object once
if (!Zotero.LinkLocalFiles) {
	var loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
                                  .getService(Components.interfaces.mozIJSSubScriptLoader);
	loader.loadSubScript("chrome://linklocalfileszotero/content/linklocalfileszotero.js");
}
