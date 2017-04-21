/**
 * The IInventoryEntry interface represents all inventory items.
 * 
 * @export
 * @interface IInventoryEntry
 */
import { Rarity } from "./rarity";

export interface IInventoryEntry {
    humanName: string;
    internalName: string;
    rarity: Rarity;
    category: any;
}

/**
 * The ILeveledInventoryEntry object represents an inventory entry that is permanent and has multiple levels.
 * An exmaple is a gun, which can be levels (0 not present) through to 10.
 * 
 * @export
 * @interface ILeveledInventoryEntry
 * @extends {IInventoryEntry}
 */
export interface ILeveledInventoryEntry extends IInventoryEntry {
    
    /**
     * The maxLevel property is the maximum level possible for this inventory entry.
     * 
     * @type {number}
     * @memberOf ILeveledInventoryEntry
     */
    maxLevel: number;
    
    /**
     * The currentLevel property is the current level of this inventory entry.
     * The value of this must be between 0 (not present) and {@link maxLevel}.
     * 
     * @type {number}
     * @memberOf ILeveledInventoryEntry
     */
    currentLevel: number;
}