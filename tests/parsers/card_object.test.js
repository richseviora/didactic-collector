"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var levelled_card_object_1 = require("../../parsers/levelled_card_object");
var Cheerio = require("cheerio");
var leveledCard = '<div class="card off" style="background: url(\'//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/cards/ultrarare-off.png\') no-repeat 50% 0;"><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/guns/Pistol_Eagle.png" width="160" height="120" alt="Accurate, rapid-fire handgun." title="Accurate, rapid-fire handgun."><span>N7 Eagle</span><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/levels/10-0.png" alt="" width="160" height="6"></div>';
describe('CardObject', function () {
    var cp;
    beforeAll(function () {
        var ch = Cheerio(leveledCard);
        cp = new levelled_card_object_1.LevelledCardObject(ch);
    });
    it('returns the correct name', function () {
        expect(cp.humanName).toEqual('N7 Eagle');
    });
    it('returns the correct maximum level', function () {
        expect(cp.maxLevel).toEqual(10);
    });
    it('returns the correct current level', function () {
        expect(cp.currentLevel).toEqual(0);
    });
    it('returns the correct rarity', function () {
        expect(cp.rarity).toEqual('ultrarare');
    });
});
//# sourceMappingURL=card_object.test.js.map