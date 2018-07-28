// Expense page
sortList(document.getElementById("ul_tb-outAccount-1"), false);
// Income page
sortList(document.getElementById("ul_tb-inAccount-5"), false);
// Transfer page
sortList(document.getElementById("ul_tb-outAccount-2"), false);
sortList(document.getElementById("ul_tb-inAccount-2"), false);

// Common
sortList(document.getElementById("ul_tb-store"), true);
sortList(document.getElementById("ul_tb-project"), true);

var datePicker = document.getElementById("tb-datepicker");
var d = new Date();
var timeString = d.getFullYear() + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
datePicker.value = timeString;

// Create an iframe to host and periodically refresh the current page
var iframeId = "sui_optimizer_hidden_reload_frame";
if (!document.getElementById(iframeId)) {
    var iframe = document.createElement("iframe");
    iframe.id = iframeId;
    iframe.style.display = "none";
    iframe.src = document.location.href;
    document.body.appendChild(iframe);
    setInterval(function() {
        console.debug("reloading iframe.")
        iframe.contentWindow.location.reload();
    }, 10 * 60 * 1000);
}

function sortList(listElement, keepFirst) {
    var items = listElement.childNodes;
    var itemsArr = [];
    items.forEach(function (item) {
        // Filter the blank text nodes
        if (item.nodeType == 1) {
            itemsArr.push(item);
        }
    });
    
    if (keepFirst) {
        // Extract the first item which is a special "无"
        var firstItem = itemsArr.shift();
    }

    // Sort the remaining ones
    itemsArr.sort(function (a, b) {
        return a.innerHTML.localeCompare(b.innerHTML, "zh-CN", {"sensitivity": "base"})
    });
    // Clear the original DOM list
    while (listElement.lastChild) {
        listElement.removeChild(listElement.lastChild);
    }
    // Append the new sorted ones
    if (keepFirst) {
        listElement.appendChild(firstItem);
    }
    itemsArr.forEach(function (item) {
        listElement.appendChild(item);
    });
}
