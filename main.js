startNewChat = function(word){
  var query = word.selectionText;
  if (!query.startsWith("+972"))
  {
    query.replace("0", "+972");
  }
  chrome.tabs.create({url: "https://wa.me/" + query});
};

chrome.contextMenus.create({
  title: "Search in Wikipedia",
  contexts:["selection"],
  onclick: startNewChat
});
