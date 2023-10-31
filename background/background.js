// Function to handle URL analysis results
function handleAnalysisResult(result) {
    // Update the popup with the result
    const status = result.isPhishing ? "Phishing Site" : "Safe Site";
    chrome.action.setBadgeText({ text: status });
  }
  
  // Listen for messages from content scripts
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "analyzeURL") {
      // You should implement the logic to send the URL for analysis to your server
      // For this example, we'll assume you get a result from your server
      const result = {
        isPhishing: false, // Replace with the actual result
      };
      handleAnalysisResult(result);
    }
  });
  