$(function () {
    $("#formatMessagesButton").click(function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            let message = {
                action: "formatMessages"
            }

            chrome.tabs.sendMessage(tabs[0].id, message);
        })
    });
});