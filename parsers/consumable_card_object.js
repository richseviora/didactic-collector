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
/**
 * ConsumableCardObject is a wrapper around a Cheerio object that parses the data available.
 *
 * @export
 * @class ConsumableCardObject
 * @extends {CardObject}
 */
var ConsumableCardObject = (function (_super) {
    __extends(ConsumableCardObject, _super);
    function ConsumableCardObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ConsumableCardObject.prototype, "humanName", {
        get: function () {
            return this.parseSpanText[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsumableCardObject.prototype, "quantity", {
        get: function () {
            return parseInt(this.parseSpanText[2]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsumableCardObject.prototype, "parseSpanText", {
        get: function () {
            return this.nameMatches != null ?
                this.nameMatches : this.nameMatches = /(.+) - (\d+)/.exec(this.spanContents().text());
        },
        enumerable: true,
        configurable: true
    });
    return ConsumableCardObject;
}(card_object_1.CardObject));
exports.ConsumableCardObject = ConsumableCardObject;
//# sourceMappingURL=consumable_card_object.js.map