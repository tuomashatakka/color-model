import { ColorComponentValue, RawColorObject } from "./types";
export default class Color {
    private _red;
    private _green;
    private _blue;
    private _alpha;
    constructor({ red, green, blue, alpha }: RawColorObject);
    /**
     * Check if two Color instances are of same color
     */
    static is(color1: Color, color2: Color): boolean;
    /**
     * Check if the Color is of same color with a given color
     */
    is(color: Color): boolean;
    get red(): import("./types").Uint8;
    get green(): import("./types").Uint8;
    get blue(): import("./types").Uint8;
    get alpha(): import("./types").Uint8;
    get channels(): [ColorComponentValue, ColorComponentValue, ColorComponentValue];
    toString(): string;
    toHex(): string;
    toRGB(): string;
    toRGBA(): string;
    toJSON(): RawColorObject;
}
