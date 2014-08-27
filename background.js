chrome.browserAction.onClicked.addListener(function(tab){
	//alert("Tweeting " + tab.url + " " + tab.title);
	var base_url = "https://twitter.com/intent/tweet?";
	var url = encodeURIComponent(tab.url);
	var text = encodeURIComponent(tab.title);
	var tweet_url = base_url + "text=" + text + "&url=" + url;
	//alert(tweet_url);
	chrome.tabs.create({"url":tweet_url, "selected":true});
});