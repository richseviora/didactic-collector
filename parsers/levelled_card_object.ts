import {CardObject} from './card_object';
import * as Cheerio from 'cheerio';

export class LevelledCardObject extends CardObject {

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