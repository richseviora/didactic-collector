import { ICardParser, CardParser } from "./card";
import { ILeveledInventoryEntry } from "../models/inventory_entry";

export class WeaponCardParser extends CardParser<ILeveledInventoryEntry> implements ICardParser<ILeveledInventoryEntry> {
    parseCard(item: Cheerio): ILeveledInventoryEntry {
        throw new Error('Method not implemented.');
    }


}