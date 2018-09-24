# Link local files [![Build Status](https://travis-ci.org/ZotPlus/zotero-link-local-files.svg?branch=master)](https://travis-ci.org/ZotPlus/zotero-link-local-files)

When installed, and the Zotero base directory is configured (`Edit - `Preferences` - `Advanced` - `Files and Folders` -  `Linked Attachments Base Directory`),
this extension will silently link instead of import files as they are dropped on zotero (or otherwise
offered for import) when the dropped file lives in the base directory. This behavior is Zotero-wide, and has no configuration; if you no longer want this behavior, remove or disable the
extension and restart Firefox/Zotero.

I created this plugin because I want my PDFs organized along with my own papers, and I do extensive markup on my tablet,
which is gdrive-synced to my PCs; until Zotero offers a proper two-way tablet sync with conflict handling, this is my
preferred way of working.

**Caveats**: import is the default over linking for immensely good reasons:

* Linking instead of importing is fragile; a file rename will render the link broken, and while the PDF can neatly be organized along with your research, the PDF can
  typically reside in only one directory, which means that you can't easily use this mode of organisation for more than
  one research project.
* If you sync your library with others, they won't get the attachments
* Imported/dropped files that do not live in the base directory are imported as usual, not linked, and there is no UI feedback on this.

You can find the latest release [here](https://github.com/ZotPlus/zotero-link-local-files/releases/latest)

If you experience any problems, or are unclear on how to use it, I'll be glad to [help](https://github.com/ZotPlus/zotero-link-local-files/issues).
