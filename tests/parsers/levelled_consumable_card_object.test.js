"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var levelled_consumable_card_object_1 = require("../../parsers/levelled_consumable_card_object");
var Cheerio = require("cheerio");
describe('LevelledConsumableCardObject', function () {
    var sampleCard = '<div class="card" style="background: url(\'//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/cards/common-on.png\') no-repeat 50% 0;"><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/consumables/WeaponDamageBonus_AssaultRifle.png"><span>Assault Rifle Rail Amp I - 0</span><span>Assault Rifle Rail Amp II - 0</span><span>Assault Rifle Rail Amp III - 0</span></div>';
    var co;
    beforeAll(function () {
        var card = Cheerio(sampleCard);
        co = new levelled_consumable_card_object_1.LevelledConsumableCardObject(card);
    });
    it('returns the correct name', function () {
        expect(co.humanName).toEqual('Assault Rifle Rail Amp');
    });
});
//# sourceMappingURL=levelled_consumable_card_object.test.js.map