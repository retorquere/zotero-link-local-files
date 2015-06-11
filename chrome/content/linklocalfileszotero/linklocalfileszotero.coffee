Zotero.LinkLocalFiles = init: ->
  # monkey-patch Zotero.Attachments
  Zotero.Attachments.importFromFile = ((original) ->
    return (file, sourceItemID, libraryID) ->
      if libraryID == null and Zotero.Attachments.getBaseDirectoryRelativePath(file.persistentDescriptor).indexOf('attachments:') == 0
        Zotero.Attachments.linkFromFile(file, sourceItemID)
      else
        original.apply(@, arguments)
  )(Zotero.Attachments.importFromFile)
  return

# Initialize the utility
window.addEventListener('load', ((e) ->
  Zotero.LinkLocalFiles.init()
  return
), false)
