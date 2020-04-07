const script_url = chrome.runtime.getURL('speech_recognition.js');

var s = document.createElement("script");
s.src = script_url;

document.body.appendChild(s);

// relay messages to the background script
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
    // We only accept messages from ourselves
    if (event.source !== window || event.data.type !== 'SPEECH_MSG') {
        return;
    }

    chrome.runtime.sendMessage(event.data, function(response) {
        console.log(response.farewell);
    });
}
