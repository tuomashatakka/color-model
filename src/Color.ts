import { ColorComponentValue, AlphaComponentValue, RawColorObject } from "./types"

export default class Color {  
  private _red: ColorComponentValue;
  private _green: ColorComponentValue;
  private _blue: ColorComponentValue;
  private _alpha: AlphaComponentValue;

  constructor({ red, green, blue, alpha }: RawColorObject) {
    this._red     = red ?? 0
    this._green   = green ?? 0
    this._blue    = blue ?? 0
    this._alpha   = alpha ?? 0
  }

  /**
   * Check if two Color instances are of same color
   */
  static is (color1: Color, color2: Color) {
    return checkEquality(color1, color2)
  }
  
  /**
   * Check if the Color is of same color with a given color
   */
  is (color: Color): boolean {
    return checkEquality(this, color)
  }
  
  
  public get red () {
    return this._red
  }

  public get green () {
    return this._green
  }

  public get blue () {
    return this._green
  }

  public get alpha () {
    return this._alpha
  }

  get channels (): [ ColorComponentValue, ColorComponentValue, ColorComponentValue ] {
    return [ this.red, this.green, this.blue ]
  }

  toString () {
    return this.toHex()
  }

  toHex () {
    return '#' + this.channels.map(toHex).join('')
  }

  toRGB () {
    return `rgb(${this.channels.join(', ')})`
  }

  toRGBA () {
    return `rgba(${this.channels.join(', ')}, ${this.alpha/255})`
  }

  toJSON (): RawColorObject {
    const { red, green, blue, alpha } = this
    return { red, green, blue, alpha }
  }
}



const toHex = (c: ColorComponentValue): string => {
  let colorString = c?.toString(16)
  while (colorString.length < 2)
    colorString = '0' + colorString
  return colorString.substring(0, 2)
}

const checkEquality = (c1: Color, c2: Color): boolean =>
  c1.alpha === c2.alpha &&
  c1.green === c2.green &&
  c1.blue === c2.blue &&
  c1.red === c2.red
