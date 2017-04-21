"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardObject = (function () {
    function CardObject(card) {
        this.card = card;
    }
    Object.defineProperty(CardObject.prototype, "rarity", {
        get: function () {
            var rarityString = this.card.attr('style');
            var matches = /(\w+)-(on|off).png/.exec(rarityString);
            var returnedRare = matches[1];
            switch (returnedRare) {
                case 'common':
                case 'uncommon':
                case 'rare':
                case 'ultrarare':
                    return returnedRare;
                default:
                    throw new Error("Unexpected Rarity: " + returnedRare);
            }
        },
        enumerable: true,
        configurable: true
    });
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
    return CardObject;
}());
exports.CardObject = CardObject;
//# sourceMappingURL=card_object.js.map