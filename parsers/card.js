"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cheerio = require("cheerio");
var CardParser = (function () {
    function CardParser() {
    }
    CardParser.prototype.getHumanName = function (card) {
        return '';
    };
    CardParser.prototype.getMaxLevel = function (card) {
        return '';
    };
    CardParser.prototype.getCurrentLevel = function (card) {
        return '';
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
            return this.levelImageBaseString().current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "maxLevel", {
        get: function () {
            return this.levelImageBaseString().max;
        },
        enumerable: true,
        configurable: true
    });
    CardObject.prototype.levelImageBaseString = function () {
        var regex = /.*\/(\d+)-(\d+)\.png/;
        var results = regex.exec(this.levelImageString);
        return {
            max: parseInt(results[1]),
            current: parseInt(results[2])
        };
    };
    Object.defineProperty(CardObject.prototype, "levelImageString", {
        get: function () {
            return Cheerio(this.card.find('img').get(1)).attr('src');
        },
        enumerable: true,
        configurable: true
    });
    return CardObject;
}());
exports.CardObject = CardObject;
//# sourceMappingURL=card.js.map