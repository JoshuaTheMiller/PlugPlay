let greetCount = 0;

$(function() {
    $('#name').keyup(function() {
        $('#greeting').text('Hi, ' + $('#name').val() + '!');
        greetCount++;
        chrome.browserAction.setBadgeText({
            'text':greetCount.toString()
        });        
    })
})