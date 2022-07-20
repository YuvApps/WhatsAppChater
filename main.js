chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "StartNewChat",
    title: "Start New Chat",
    type: "normal",
    contexts:["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(
    (info) => {
      let number = encodeURIComponent(info.selectionText)

    chrome.tabs.create({url: "https://wa.me/" + number
  });
});
