import * as Cheerio from 'cheerio';
import { Rarity } from "../models/rarity";

export class CardObject {

    private card: Cheerio;

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
        return this.card.find('span').text();
    }

    public get internalName(): string {
        return this.card.find('img').attr('src');
    }

    public get currentLevel(): number {
        return this.levelImageBaseString().current;
    }

    public get maxLevel(): number {
        return this.levelImageBaseString().max;
    }

    private levelImageBaseString(): {max: number, current: number} {
        const regex = /.*\/(\d+)-(\d+)\.png/;
        const results = regex.exec(this.levelImageString);
        return {
            max: parseInt(results[1]),
            current: parseInt(results[2])
        }
    }

    private get levelImageString(): string {
        return Cheerio(this.card.find('img').get(1)).attr('src');
    }
}