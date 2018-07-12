chrome.runtime.onInstalled.addListener(function() {
    console.log("walawala");
});

chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        file: 'optimize.js'
    });
}, {url: [{urlMatches : 'https://www.sui.com/tally/new.do'}]});

