"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consumable_card_object_1 = require("../../parsers/consumable_card_object");
var Cheerio = require("cheerio");
var sampleCardText = '<div class="card" style="background: url(\'//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/cards/common-on.png\') no-repeat 50% 0;"><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/consumables/Consumable_Revive.png" width="160" height="120" alt="Revive yourself when incapacitated in combat." title="Revive yourself when incapacitated in combat."><span>Medi-Gel - 4</span></div>';
describe('ConsumableCardObject', function () {
    var co;
    beforeAll(function () {
        var cheerio = Cheerio(sampleCardText);
        co = new consumable_card_object_1.ConsumableCardObject(cheerio);
    });
    it('returns the correct name', function () {
        expect(co.humanName).toEqual('Medi-Gel');
    });
    it('returns the correct quantity', function () {
        expect(co.quantity).toEqual(4);
    });
});
//# sourceMappingURL=consumable_card_object.test.js.map