chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("amazon.com")) {
    chrome.tabs.sendMessage(tabId, {
      type: "AMAZON",
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, response) => {
  if (message.type === "PRODUCT") {
    console.log(message.data);
  }
});
