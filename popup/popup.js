// Function to update the status message in the popup
function updateStatus(status) {
    const statusElement = document.getElementById("status");
    statusElement.textContent = status;
  }
  
  // Function to check the current tab's URL and update the popup
  function checkCurrentTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const currentURL = currentTab.url;
  
      // Send the URL to your server for analysis (you should replace this with your server URL)
      // Once you receive the result, update the status accordingly
      updateStatus("Checking...");
    });
  }
  
  // Add a click event listener to the extension icon
  chrome.action.onClicked.addListener(() => {
    checkCurrentTab();
  });
  
  // Check the current tab when the extension is loaded
  checkCurrentTab();
  