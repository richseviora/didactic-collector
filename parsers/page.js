"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio = require("cheerio");
/**
 * The Page class is responsible for parsing an HTML inventory page and returning the component inventory items.
 *
 * @export
 * @class Page
 * @implements {IPageParser}
 */
var Page = (function () {
    function Page() {
    }
    Page.prototype.parsePage = function (html) {
        throw new Error('Method not implemented.');
    };
    Page.prototype.getItemList = function (html) {
        var page = cheerio(html);
        var inventorySection = page.find('#inventory_content');
        var weaponsCards = page.find('#weapons_content div.card');
    };
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.js.map