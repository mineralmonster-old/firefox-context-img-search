browser.menus.onShown.addListener((info, tab) => {
  if (info.mediaType === 'image') {
    browser.menus.create({
      id: "search-image",
      title: browser.i18n.getMessage("extensionName"),
      icons: {
        "16": "icons/google.svg"
      }
    });
    browser.menus.refresh();
  }
})

browser.menus.onHidden.addListener((info, tab) => {
  browser.menus.remove("search-image");
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-image") {
    browser.tabs.create({
      url:"http://www.google.com/searchbyimage?image_url=" + info.srcUrl
    });
  }
});