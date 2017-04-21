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
var LevelledConsumableCardObject = (function (_super) {
    __extends(LevelledConsumableCardObject, _super);
    function LevelledConsumableCardObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LevelledConsumableCardObject.prototype, "entries", {
        get: function () {
            if (this.entryItems) {
                return this.entryItems;
            }
            this.entryItems = this.getLevelEntries();
            return this.entryItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LevelledConsumableCardObject.prototype, "humanName", {
        get: function () {
            var initialValue = this.spanContents();
            var initialName = initialValue.first().text();
            return this.parseSpanText(initialName).name;
        },
        enumerable: true,
        configurable: true
    });
    LevelledConsumableCardObject.prototype.parseSpanText = function (text) {
        var results = LevelledConsumableCardObject.spanRegex.exec(text);
        var name = results[1];
        var level = this.convertRomanNumeral(results[2]);
        var quantity = parseInt(results[3]);
        return {
            name: name, level: level, quantity: quantity
        };
    };
    LevelledConsumableCardObject.prototype.convertRomanNumeral = function (numeralString) {
        switch (numeralString) {
            case 'I': return 1;
            case 'II': return 2;
            case 'III': return 3;
            case 'IV': return 4;
            case 'V': return 5;
            case 'VI': return 6;
            case 'VII': return 7;
            case 'VIII': return 8;
            case 'IX': return 9;
            case 'X': return 10;
            default: return 0;
        }
    };
    LevelledConsumableCardObject.prototype.getLevelEntries = function () {
        var _this = this;
        var levelEntries = this.spanContents();
        var mapResult = levelEntries.map(function (index, element) {
            return _this.parseSpanText(Cheerio(element).text());
        });
        return mapResult.toArray();
    };
    return LevelledConsumableCardObject;
}(card_object_1.CardObject));
LevelledConsumableCardObject.spanRegex = /(.+) ([IVX]+) - (\d+)/;
exports.LevelledConsumableCardObject = LevelledConsumableCardObject;
//# sourceMappingURL=levelled_consumable_card_object.js.map