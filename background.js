// listens for messages and, for now, logs them
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.tabs.executeScript({
            code: `console.log('Message from ${sender.tab.url}: ${request.message}');`
        });
        sendResponse({farewell: 'Message received!'});
    }
);