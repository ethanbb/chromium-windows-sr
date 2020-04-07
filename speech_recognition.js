window.webkitSpeechRecognition = function() {
    console.log('Hello, world!');
};

window.speechLogMessage = function(message) {
    window.postMessage({message: message}, window.location);
};
