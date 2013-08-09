zotero-link-local-files
=======================

When installed, this extension will silently link instead of import files as they are dropped om zotero (or otherwise
offered for import) when the are in the base directory. This behavior is Zotero-wide, and has no configuration; if you
no longer want this behavior, remove or disable the extension and restart Firefox/Zotero.

I created this plugin because I want my PDFs organized along with my articles, and I do extensive markup  on my tablet,
which is gdrive-synced to my PCs; until Zotero offers a proper twp-way tablet sync with conflict handling, this is my
preferred way of working.

Caveats: import is the default over linking for immensely good reasons. Linking instead of importing is fragile; a file
rename will render the link broken, and while the PDF can neatly be organized along with your research, the PDF can
typically reside in only one directory, which means that you can't easily use this mode of organisation for more than
one research project. The expection here is GDrive, which does allow one file to be in multiple directories and still
sync it properly.
