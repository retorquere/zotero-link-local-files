declare const Zotero: any

const marker = 'LinkLocalFilesMonkeyPatched'

function patch(object, method, patcher) {
  if (object[method][marker]) return
  object[method] = patcher(object[method])
  object[method][marker] = true
}

export = new class LinkLocalFiles {
  constructor() {
    window.addEventListener('load', e => { this.load() }, false)
  }

  public async load() {
    // monkey-patch Zotero.Attachments

    patch(Zotero.Attachments, 'importFromFile', original => Zotero.Promise.coroutine(function* importFromFile(options) {
      const libraryID = options.libraryID
      const file = Zotero.File.pathToFile(options.file)
      const relpath = Zotero.Attachments.getBaseDirectoryRelativePath(file.path)

      const link = 
        (Zotero.Prefs.get('link-local-files.groups') || typeof libraryID === 'undefined' || libraryID === Zotero.Libraries.userLibraryID)
        &&
        (!Zotero.Prefs.get('link-local-files.base') || relpath.startsWith(Zotero.Attachments.BASE_PATH_PLACEHOLDER))

      Zotero.debug(`LLF: libraryID=${libraryID}, file=${file.path}, relpath=${relpath}, link=${link}`)

      if (link) {
        return yield Zotero.Attachments.linkFromFile(options)
      } else {
        return yield original.apply(this, arguments)
      }
    }))
  }
}
