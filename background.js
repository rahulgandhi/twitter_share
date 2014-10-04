var getHostName = function(href){
	var l = document.createElement("a");
	l.href = href;
	return l;
}

chrome.browserAction.onClicked.addListener(function(tab){
	//alert("Tweeting " + tab.url + " " + tab.title);
	var l = getHostName(tab.url);
	var arr = l.hostname.split(".");
	var base_url = "https://twitter.com/intent/tweet?";
	var url = encodeURIComponent(tab.url);
	var tt = tab.title;
	for(var i=0; i<arr.length-1; ++i)
		tt += " #" + arr[i];
	alert(tt);
	var text = encodeURIComponent(tt);
	var tweet_url = base_url + "text=" + text + "&url=" + url;
	//alert(arr[0]);
	//alert(tweet_url);
	chrome.tabs.create({"url":tweet_url, "selected":true});
});