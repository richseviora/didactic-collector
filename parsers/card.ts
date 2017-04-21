import { IInventoryEntry, ILeveledInventoryEntry } from "../models/inventory_entry";
import * as Cheerio from 'cheerio';

export interface ICardParser<T extends IInventoryEntry> {
    parseCard(item: Cheerio): T;
}

export abstract class CardParser<T extends IInventoryEntry> implements ICardParser<T> {
    public abstract parseCard(item: Cheerio): T;
}