window.webkitSpeechRecognition = function() {
    console.log('Hello, world!');
};

window.speechLogMessage = function(message) {
    window.postMessage({type: 'SPEECH_MSG', message: message}, window.location);
};
