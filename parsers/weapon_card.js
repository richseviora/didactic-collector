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
var card_1 = require("./card");
var WeaponCardParser = (function (_super) {
    __extends(WeaponCardParser, _super);
    function WeaponCardParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeaponCardParser.prototype.parseCard = function (item) {
        throw new Error('Method not implemented.');
    };
    return WeaponCardParser;
}(card_1.CardParser));
exports.WeaponCardParser = WeaponCardParser;
//# sourceMappingURL=weapon_card.js.map