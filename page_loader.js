"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var PageLoader = (function () {
    function PageLoader() {
    }
    PageLoader.loadURL = function (url, callback) {
        http.get(url, callback);
    };
    return PageLoader;
}());
exports.PageLoader = PageLoader;
//# sourceMappingURL=page_loader.js.map