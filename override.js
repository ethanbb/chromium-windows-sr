script_url = chrome.runtime.getURL('speech_recognition.js');

var s = document.createElement("script");
s.src = script_url;
document.body.appendChild(s);
