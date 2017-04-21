import * as Cheerio from 'cheerio';
import { Rarity } from "../models/rarity";

export interface ICardObject {
    readonly rarity: Rarity;
    readonly humanName: string;
    readonly internalName: string;
}

export abstract class CardObject implements ICardObject {

    protected card: Cheerio;

    public constructor(card: Cheerio) {
        this.card = card;
    }

    public get rarity(): Rarity {
        const rarityString = this.card.attr('style');
        const matches = /(\w+)-(on|off).png/.exec(rarityString);
        const returnedRare = matches[1];
        switch(returnedRare) {
            case 'common':
            case 'uncommon':
            case 'rare':
            case 'ultrarare':
                return returnedRare;
            default:
                throw new Error(`Unexpected Rarity: ${returnedRare}`);
        }
    }

    public get humanName(): string {
        return this.spanContents().first().text();
    }

    public get internalName(): string {
        return this.card.find('img').attr('src');
    }

    protected spanContents(): Cheerio {
        return this.card.find('span');
    }

}
