import { IInventoryEntry, ILeveledInventoryEntry } from "../models/inventory_entry";
import * as Cheerio from 'cheerio';

export interface ICardParser<T extends IInventoryEntry> {
    parseCard(item: Cheerio): T;
}

export abstract class CardParser<T extends IInventoryEntry> implements ICardParser<T> {

    public abstract parseCard(item: Cheerio): T;

    protected getHumanName(card: Cheerio): string {

    }

    protected getMaxLevel(card: Cheerio): string {

    }

    protected getCurrentLevel(card: Cheerio): string {

    }

}

export class CardObject {

    private card: Cheerio;

    public constructor(card: Cheerio) {
        this.card = card;
    }

    public get humanName(): string {
        return this.card.find('span').text();
    }

    public get internalName(): string {
        return this.card.find('img').attr('src');
    }

    public get currentLevel(): number {

    }

    public get maxLevel(): number {

    }

    private levelImageString(): string {
        return Cheerio(this.card.find('img').get(1)).attr('src');
    }
}
let s = '<div class="card off" style="background: url(\'//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/cards/ultrarare-off.png\') no-repeat 50% 0;"><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/guns/Pistol_Eagle.png" width="160" height="120" alt="Accurate, rapid-fire handgun." title="Accurate, rapid-fire handgun."><span>N7 Eagle</span><img src="//lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/masseffect3/n7hq/game2webaxis/images/masseffect3/icons/multiplayer/levels/10-0.png" alt="" width="160" height="6"></div>';