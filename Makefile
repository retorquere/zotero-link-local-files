all: Makefile.in

-include Makefile.in

RELEASE:=$(shell grep em:version install.rdf | head -n 1 | sed -r 's/^.*>(.*)<.*$$/\1/')

zotero.xpi: FORCE
	rm -rf $@
	#zip -r $@ chrome chrome.manifest defaults install.rdf
	zip -r $@ chrome chrome.manifest install.rdf

zotero-%-linklocalfileszotero.xpi: zotero.xpi
	mv $< $@

Makefile.in: install.rdf
	echo "all: zotero-${RELEASE}-linklocalfileszotero.xpi" > Makefile.in

FORCE:
