"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cheerio = require("cheerio");
var CardParser = (function () {
    function CardParser() {
    }
    CardParser.prototype.getHumanName = function (card) {
    };
    CardParser.prototype.getMaxLevel = function (card) {
    };
    CardParser.prototype.getCurrentLevel = function (card) {
    };
    return CardParser;
}());
exports.CardParser = CardParser;
var CardObject = (function () {
    function CardObject(card) {
        this.card = card;
    }
    Object.defineProperty(CardObject.prototype, "humanName", {
        get: function () {
            return this.card.find('span').text();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "internalName", {
        get: function () {
            return this.card.find('img').attr('src');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "currentLevel", {
        get: function () {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "maxLevel", {
        get: function () {
        },
        enumerable: true,
        configurable: true
    });
    CardObject.prototype.levelImageString = function () {
        return Cheerio(this.card.find('img').get(1)).attr('src');
    };
    return CardObject;
}());
exports.CardObject = CardObject;
var s = '<div class="card off" style="background: url(\'//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/cards/ultrarare-off.png\') no-repeat 50% 0;"><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/guns/Pistol_Eagle.png" width="160" height="120" alt="Accurate, rapid-fire handgun." title="Accurate, rapid-fire handgun."><span>N7 Eagle</span><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/levels/10-0.png" alt="" width="160" height="6"></div>';
//# sourceMappingURL=card.js.map