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
      const file = Zotero.File.pathToFile(options.file)
      const libraryID = options.libraryID
      const parentItemID = options.parentItemID

      const relpath = Zotero.Attachments.getBaseDirectoryRelativePath(file.path)

      Zotero.debug(`LLF: libraryID=${libraryID}, file=${file.path}, relpath=${relpath}`)

      if (libraryID === Zotero.Libraries.userLibraryID && relpath.startsWith(Zotero.Attachments.BASE_PATH_PLACEHOLDER)) {
        return yield Zotero.Attachments.linkFromFile(options)
      } else {
        return yield original.apply(this, arguments)
      }
    }))
  }
}
