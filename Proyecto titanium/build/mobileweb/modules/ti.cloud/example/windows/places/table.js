var WindowManager = require('helper/WindowManager');
var Utils = require('helper/Utils');
var Cloud = require('ti.cloud');
WindowManager.include(

    '/windows/places/create',
    '/windows/places/query',
    '/windows/places/remove',
    '/windows/places/search',
    '/windows/places/show',
    '/windows/places/update'
);
exports['Places'] = function (evt) {
    var win = WindowManager.createWindow({
        backgroundColor: 'white'
    });
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: 0,
        data: Utils.createRows([
            'Create Place',
            'Query Place',
            'Search Place'
        ])
    });
    table.addEventListener('click', WindowManager.handleOpenWindow);
    win.add(table);
    return win;
};