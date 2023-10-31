// Function to save the API URL to Chrome storage
function saveAPIUrl() {
    const apiUrl = document.getElementById("api-url").value;
  
    chrome.storage.sync.set({ apiUrl: apiUrl }, () => {
      // Notify the user that the API URL has been saved
      const status = document.getElementById("status");
      status.textContent = "API URL saved!";
    });
  }
  
  // Function to restore the API URL from Chrome storage
  function restoreOptions() {
    chrome.storage.sync.get({ apiUrl: "" }, (items) => {
      document.getElementById("api-url").value = items.apiUrl;
    });
  }
  
  // Add a click event listener to the "Save" button
  document.getElementById("save-button").addEventListener("click", saveAPIUrl);
  
  // Restore the API URL when the options page is loaded
  document.addEventListener("DOMContentLoaded", restoreOptions);
  