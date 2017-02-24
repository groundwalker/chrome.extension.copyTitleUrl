chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];

        var text_area = document.createElement('textarea');
        text_area.value = "[" + tab.title + "](" + tab.url + ")";
        document.body.appendChild(text_area);

        text_area.select();
        document.execCommand('copy');

        // 3. テキストエリアを削除
        document.body.removeChild(text_area);
    });
});
