chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "formatMessages") {
        console.log("format message message received.");

        $("#msg-wrapper .box tr") 
            .filter(function (index, item) {
                return $(item).children("th").text().indexOf("Payload") >= 0                
            })   
            .children("td")
            .html(function() {
                let unformattedText = $(this).find(".msg-payload").text();                                                         

                //unformattedText = unformattedText.replaceAll(new RegExp(/\\"/, 'g'), '"');                            
                //unformattedText = unformattedText.replace(new RegExp(/\r\n/, 'g'), "\n");                  

                let obj = JSON.parse(unformattedText);

                let formattedText = syntaxHighlight(obj);

                return formattedText;
            });            
            // .css("background-color", "red");                
    }
});

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function buttonFactory() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("HIDE");
    btn.appendChild(t);
    return btn
};

function syntaxHighlight(json) {
   if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 4);
   }
   json = json
    // .replace(/&/g, '&amp;')
    // .replace(/</g, '&lt;')
    // .replace(/>/g, '&gt;')
    .replace(/"\s*{\\/g, '{')
    .replace(/}\s*"/g, '}')    
    .replace(/\\"/g, '"');

   return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
       var cls = 'number';
       if (/^"/.test(match)) {
           if (/:$/.test(match)) {
               cls = 'key';
           } else {
               cls = 'string';
           }
       } else if (/true|false/.test(match)) {
           cls = 'boolean';
       } else if (/null/.test(match)) {
           cls = 'null';
       }
       return '<span class="' + cls + '">' + match + '</span>';
   });
};

let message = {
    action: "show"
}

chrome.runtime.sendMessage(message);