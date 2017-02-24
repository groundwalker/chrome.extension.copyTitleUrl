chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];

        var text_area = document.createElement('textarea');
        // ここを変更すれば任意の形式にできるよ
        text_area.value = "[" + tab.title + "](" + tab.url + ")";
        document.body.appendChild(text_area);

        text_area.select();
        document.execCommand('copy');

        document.body.removeChild(text_area);
    });
});
