$(function() {
    console.log("Hi!")


    $('#testButton').click(function() {
        let options = {
            type: "basic",
            title: "Test Notification!",
            message: "This is a test!",
            iconUrl: "icon.png"
        }
    
        let id = 'test';
        chrome.notifications.create(id, options, function() {});
    })
});