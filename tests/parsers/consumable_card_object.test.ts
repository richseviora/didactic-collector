import { ConsumableCardObject } from "../../parsers/consumable_card_object";
import * as Cheerio from 'cheerio';

let sampleCardText = '<div class="card" style="background: url(\'//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/cards/common-on.png\') no-repeat 50% 0;"><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/consumables/Consumable_Revive.png" width="160" height="120" alt="Revive yourself when incapacitated in combat." title="Revive yourself when incapacitated in combat."><span>Medi-Gel - 4</span></div>'

describe('ConsumableCardObject', () => {
    let co: ConsumableCardObject;
    beforeAll(() => {
        const cheerio = Cheerio(sampleCardText);
        co = new ConsumableCardObject(cheerio);
    });
    it('returns the correct name', () => {
        expect(co.humanName).toEqual('Medi-Gel')
    });
    it('returns the correct quantity', () => {
        expect(co.quantity).toEqual(4)
    });
});