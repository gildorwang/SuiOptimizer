var storeList = document.getElementById("ul_tb-store");
var accountList = document.getElementById("ul_tb-outAccount-1");

sortList(storeList, true);
sortList(accountList, false);

var datePicker = document.getElementById("tb-datepicker");
var d = new Date();
var timeString = d.getFullYear() + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
datePicker.value = timeString;

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
        return a.innerHTML == b.innerHTML ? 0 : (a.innerHTML > b.innerHTML ? 1 : -1);
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
