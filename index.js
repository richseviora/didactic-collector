"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_loader_1 = require("./page_loader");
var callback = function (res) {
    console.info('Rendering Response');
    var rawData = '';
    res.on('data', function (chunk) { rawData += chunk; });
    res.on('end', function () {
        console.log(rawData);
    });
};
console.info('Starting');
page_loader_1.PageLoader.loadURL('http://n7hq.masseffect.com/home/inventory/?name=deadskip&platform=pc#', callback);
//# sourceMappingURL=index.js.map