import {LevelledConsumableCardObject} from '../../parsers/levelled_consumable_card_object';
import * as Cheerio from 'cheerio';


describe('LevelledConsumableCardObject', () => {

    let sampleCard = '<div class="card" style="background: url(\'//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/cards/common-on.png\') no-repeat 50% 0;"><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/consumables/WeaponDamageBonus_AssaultRifle.png"><span>Assault Rifle Rail Amp I - 0</span><span>Assault Rifle Rail Amp II - 0</span><span>Assault Rifle Rail Amp III - 0</span></div>'

    let co: LevelledConsumableCardObject;
    beforeAll(() => {
        const card = Cheerio(sampleCard);
        co = new LevelledConsumableCardObject(card);
    });
    it('returns the correct name',()=> {
        expect(co.humanName).toEqual('Assault Rifle Rail Amp');
    });
});