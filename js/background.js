chrome.contextMenus.create({
    id: 'vela-search',
    title: 'vela-serach',
	contexts: ['selection']
});

chrome.contextMenus.create({
    id: 'crux-search',
    title: 'crux table search',
	contexts: ['selection']
});


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    switch(info.menuItemId){
        case 'crux-search':
			chrome.tabs.create({url: 'https://data.devops.xiaohongshu.com/sql_lab/data_dict/tables?queryTable=' + encodeURI(info.selectionText) + '&engine=hive'});
			break;
		case 'vela-search':
			chrome.tabs.create({url: 'https://data.devops.xiaohongshu.com/sql/data-vela?tableName=' + encodeURI(info.selectionText)});
			break;
    }
});

