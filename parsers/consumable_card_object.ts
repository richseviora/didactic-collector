import { CardObject, ICardObject } from "./card_object";

export interface IConsumableCardObject extends ICardObject {
    quantity: number;
}

/**
 * ConsumableCardObject is a wrapper around a Cheerio object that parses the data available.
 * 
 * @export
 * @class ConsumableCardObject
 * @extends {CardObject}
 */
export class ConsumableCardObject extends CardObject {

    private nameMatches: RegExpExecArray;

    public get humanName(): string {
        return this.parseSpanText[1];
    }

    public get quantity(): number {
        return parseInt(this.parseSpanText[2]);
    }

    private get parseSpanText(): RegExpExecArray {
        return this.nameMatches != null ?
            this.nameMatches : this.nameMatches = /(.+) - (\d+)/.exec(this.spanContents().text());
    }


}