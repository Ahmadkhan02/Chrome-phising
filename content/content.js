// Function to send the URL to the background script for analysis
function sendURLForAnalysis(url) {
    chrome.runtime.sendMessage({ type: "analyzeURL", url: url });
}

// Capture the current URL and send it for analysis
const currentURL = window.location.href;
sendURLForAnalysis(currentURL);
