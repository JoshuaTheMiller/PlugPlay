// add listener for page load
// look at URL, if matches, then do logic

// add listener for specific button click
// look at URL and even name, if matches, then do logic

let menuItemId = "addProtein";

let menuItem = {
    "id" : menuItemId,
    "title" :"Test Extension",
    "contexts":[
        "selection"
    ]
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {

    console.log("Interesting, this does not appear in the normal console.");
    // To view, check out Inspect views background page (hopefully that helps 
    // with a Google search)

    let selectionText = clickData.selectionText;

    if(clickData.menuItemId === menuItemId && selectionText) {
        let options = {
            type: "basic",
            title: "Test Notification!",
            message: "This is a test of the context menu!",
            iconUrl: "icon.png"
        }
    
        let id = 'test';
        chrome.notifications.create(id, options, function() {});
    }
});