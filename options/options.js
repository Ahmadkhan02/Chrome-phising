// Set the API URL
const apiUrl = "https://your-api-url.com";

// Function to save the API URL to Chrome storage
function saveAPIUrl() {
    // Save the API URL (if needed)
    chrome.storage.sync.set({ apiUrl: apiUrl }, () => {
        // Notify the user that the API URL has been saved
        const status = document.getElementById("status");
        status.textContent = "API URL saved!";
    });
}

// Function to display the API URL
function displayAPIUrl() {
    const apiURLSpan = document.getElementById("api-url");
    apiURLSpan.textContent = apiUrl;
}

// Add a click event listener to the "Save" button
document.getElementById("save-button").addEventListener("click", saveAPIUrl);

// Display the API URL when the options page is loaded
document.addEventListener("DOMContentLoaded", displayAPIUrl);
