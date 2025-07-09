chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.query({ url: "*://kick.com/*" }, function (tabs) {
    for (const tab of tabs) {
      chrome.tabs.sendMessage(tab.id, { type: "SEND_STARTER" });
    }
  });
});