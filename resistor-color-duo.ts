type Color = "black"|"brown"|"red"|"orange"|"yellow"|"green"|"blue"|"violet"|"grey"|"white";
type ColorCode = number;
const MAX_COLORS=2;
export class ResistorColor {
  private colors: Color[];
  
 private color_code: Record<Color,ColorCode> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }
 
  constructor(colors: Color[]) {
 
    this.colors = colors;
    if(this.colors.length < MAX_COLORS){
      throw Error( "At least two colors need to be present");
    }
  }
  value = (): number => parseInt(this.color_code[this.colors[0]]+''+this.color_code[this.colors[1]])
}
