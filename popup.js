// Check for the token and show a notification if it's missing
chrome.storage.local.get(['token'], (data) => {
  if (!data.token) {
    const notificationOptions = {
      type: 'basic',
      title: 'Token Missing',
      message: 'Visit out site to get your token',
      iconUrl: 'logo.png',
      buttons: [
        { title: 'Get Token' }
      ]
    };

    chrome.notifications.create('tokenMissingNotification', notificationOptions);
  }
});

chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (notificationId === 'tokenMissingNotification' && buttonIndex === 0) {
    chrome.tabs.create({ url: 'http://127.0.0.1:8000/login' });
  }
});



