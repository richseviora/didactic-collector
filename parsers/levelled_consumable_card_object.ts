import { CardObject } from "./card_object";
import * as Cheerio from 'cheerio';

export class LevelledConsumableCardObject extends CardObject {

    private static spanRegex = /(.+) ([IVX]+) - (\d+)/;

    private entryItems: ILevelEntry[];

    public get entries(): ILevelEntry[] {
        if(this.entryItems) {
            return this.entryItems;
        }
        this.entryItems = this.getLevelEntries();
        return this.entryItems;
    }

    public get humanName(): string {
        const initialValue = this.spanContents();
        const initialName:string = initialValue.first().text();
        return this.parseSpanText(initialName).name;
    }

    private parseSpanText(text: string): ILevelEntry {
        const results = LevelledConsumableCardObject.spanRegex.exec(text);
        const name = results[1];
        const level = this.convertRomanNumeral(results[2]);
        const quantity = parseInt(results[3]);
        return {
            name, level, quantity
        };
    }

    private convertRomanNumeral(numeralString: string): number {
        switch(numeralString) {
            case 'I': return 1;
            case 'II': return 2;
            case 'III': return 3;
            case 'IV': return 4;
            case 'V': return 5;
            case 'VI': return 6;
            case 'VII': return 7;
            case 'VIII': return 8;
            case 'IX': return 9;
            case 'X': return 10;
            default: return 0;
        }
    }

    private getLevelEntries(): ILevelEntry[] {
        const levelEntries = this.spanContents();
        const mapResult = levelEntries.map((index, element) => {
            return this.parseSpanText(Cheerio(element).text());
        });
        return mapResult.toArray() as any as ILevelEntry[];
    }
}

export interface ILevelEntry {
    name: string;
    level: number;
    quantity: number;
}