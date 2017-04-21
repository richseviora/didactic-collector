"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var card_object_1 = require("./card_object");
var Cheerio = require("cheerio");
/**
 * The LevelledCardObject parses the card information and provides the inventory data for the card.
 *
 * @export
 * @class LevelledCardObject
 * @extends {CardObject}
 */
var LevelledCardObject = (function (_super) {
    __extends(LevelledCardObject, _super);
    function LevelledCardObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LevelledCardObject.prototype, "currentLevel", {
        get: function () {
            return this.levelImageBaseString().current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LevelledCardObject.prototype, "maxLevel", {
        get: function () {
            return this.levelImageBaseString().max;
        },
        enumerable: true,
        configurable: true
    });
    LevelledCardObject.prototype.levelImageBaseString = function () {
        var regex = /.*\/(\d+)-(\d+)\.png/;
        var results = regex.exec(this.levelImageString);
        return {
            max: parseInt(results[1]),
            current: parseInt(results[2])
        };
    };
    Object.defineProperty(LevelledCardObject.prototype, "levelImageString", {
        get: function () {
            return Cheerio(this.card.find('img').get(1)).attr('src');
        },
        enumerable: true,
        configurable: true
    });
    return LevelledCardObject;
}(card_object_1.CardObject));
exports.LevelledCardObject = LevelledCardObject;
//# sourceMappingURL=levelled_card_object.js.map