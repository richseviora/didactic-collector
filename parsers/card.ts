import { IInventoryEntry, ILeveledInventoryEntry } from "../models/inventory_entry";
import * as Cheerio from 'cheerio';

export interface ICardParser<T extends IInventoryEntry> {
    parseCard(item: Cheerio): T;
}

export abstract class CardParser<T extends IInventoryEntry> implements ICardParser<T> {

    public abstract parseCard(item: Cheerio): T;

    protected getHumanName(card: Cheerio): string {
        return '';
    }

    protected getMaxLevel(card: Cheerio): string {
        return '';
    }

    protected getCurrentLevel(card: Cheerio): string {
        return '';
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