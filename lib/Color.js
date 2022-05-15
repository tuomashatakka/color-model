"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor({ red, green, blue, alpha }) {
        this._red = red !== null && red !== void 0 ? red : 0;
        this._green = green !== null && green !== void 0 ? green : 0;
        this._blue = blue !== null && blue !== void 0 ? blue : 0;
        this._alpha = alpha !== null && alpha !== void 0 ? alpha : 0;
    }
    /**
     * Check if two Color instances are of same color
     */
    static is(color1, color2) {
        return checkEquality(color1, color2);
    }
    /**
     * Check if the Color is of same color with a given color
     */
    is(color) {
        return checkEquality(this, color);
    }
    get red() {
        return this._red;
    }
    get green() {
        return this._green;
    }
    get blue() {
        return this._green;
    }
    get alpha() {
        return this._alpha;
    }
    get channels() {
        return [this.red, this.green, this.blue];
    }
    toString() {
        return this.toHex();
    }
    toHex() {
        return '#' + this.channels.map(toHex).join('');
    }
    toRGB() {
        return `rgb(${this.channels.join(', ')})`;
    }
    toRGBA() {
        return `rgba(${this.channels.join(', ')}, ${this.alpha / 255})`;
    }
    toJSON() {
        const { red, green, blue, alpha } = this;
        return { red, green, blue, alpha };
    }
}
exports.default = Color;
const toHex = (c) => {
    let colorString = c === null || c === void 0 ? void 0 : c.toString(16);
    while (colorString.length < 2)
        colorString = '0' + colorString;
    return colorString.substring(0, 2);
};
const checkEquality = (c1, c2) => c1.alpha === c2.alpha &&
    c1.green === c2.green &&
    c1.blue === c2.blue &&
    c1.red === c2.red;
//# sourceMappingURL=Color.js.map