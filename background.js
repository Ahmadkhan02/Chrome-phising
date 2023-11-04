chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    const tabUrl = tab.url;

    const rawResponse = await fetch('http://127.0.0.1:8000/api/check', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5MjEwNzI1LCJpYXQiOjE2OTkxMjQzMjUsImp0aSI6IjU3ODI0YzY2NmI5ZjQzOWI5MTBhZmVkMzM5YjBkNjc3IiwidXNlcl9pZCI6MX0.ndUU3m_ruE2qTNHgYV-JHblqedJSwvK6_6qUsaMOzFM'
      },
      body: JSON.stringify({ urls: tabUrl })
    });

    const content = await rawResponse.json();
    console.log(content);

    if (content.error) {
      chrome.runtime.sendMessage({ action: 'error_encountered' });
    } else if (content.result) {
      chrome.runtime.sendMessage({ action: 'site_unsafe' });
      const notificationOptions = {
        type: "basic",
        title: "Phishing Alert",
        message: "Not safe",
        iconUrl: "logo.png"
      };

      chrome.notifications.create("phishingNotification", notificationOptions);
    }
  }
});
