

/**
 * The IPageParser interface is responsible for parsing the HTML representation of the inventory.
 * 
 * @export
 * @interface IPageParser
 */
import { IInventoryEntry } from "../models/inventory_entry";
import * as cheerio from 'cheerio';

export interface IPageParser {
    /**
     * Parses the HTML provided and returns an array of inventory entries.
     * 
     * @param {string} html 
     * @returns {IInventoryEntry[]} 
     * 
     * @memberOf IPageParser
     */
    parsePage(html: string): IInventoryEntry[];
}

/**
 * The Page class is responsible for parsing an HTML inventory page and returning the component inventory items.
 * 
 * @export
 * @class Page
 * @implements {IPageParser}
 */
export class Page implements IPageParser {

    public parsePage(html: string): IInventoryEntry[] {
        throw new Error('Method not implemented.');
    }

    private getItemList(html: string): any[] {
        const page = cheerio(html);
        const inventorySection = page.find('#inventory_content');
        const weaponsCards = page.find('#weapons_content div.card');
    }

}