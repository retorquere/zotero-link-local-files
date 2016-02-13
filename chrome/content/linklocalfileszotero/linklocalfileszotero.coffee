Zotero.LinkLocalFiles = init: ->
  # monkey-patch Zotero.Attachments
  Zotero.Attachments.importFromFile = ((original) ->
    return (file, sourceItemID, libraryID) ->
      Zotero.debug("LLF: libraryID=#{libraryID}, file=#{file.path}, relpath=#{Zotero.Attachments.getBaseDirectoryRelativePath(file.path)}")
      if !libraryID && Zotero.Attachments.getBaseDirectoryRelativePath(file.path).indexOf(Zotero.Attachments.BASE_PATH_PLACEHOLDER) == 0
        return Zotero.Attachments.linkFromFile(file, sourceItemID)
      else
        return original.apply(@, arguments)
  )(Zotero.Attachments.importFromFile)

  return

# Initialize the utility
window.addEventListener('load', ((e) ->
  Zotero.LinkLocalFiles.init()
  return
), false)
