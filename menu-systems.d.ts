declare module "menu-systems" {
  export interface Menu {
    item(label: string, accelerator: Accelerator, onclick: () => void): Menu;
  }

  export type Accelerator =
    | `${MetaKey}+${FigureKey}`
    | `${AltKey}+${FigureKey}`
    | `${MetaKey}+${ShiftKey}+${FigureKey}`
    | `${AltKey}+${ShiftKey}+${FigureKey}`
    | `${MetaKey}+${AltKey}+${FigureKey}`
    | `${AltKey}+${ShiftKey}+${FigureKey}`
    | `${MetaKey}+${AltKey}+${ShiftKey}+${FigureKey}`;

  export type MetaKey = "Super" | "Cmd" | "Ctrl";

  export type ShiftKey = "Shift";

  export type AltKey = "Alt";

  // Array.from({ length: 26 }, (_,i) => i + 65).map(c => String.fromCharCode(c))
  export type AlphabeticKey = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";

  export type NumericKey = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

  export type FigureKey = AlphabeticKey | NumericKey;

  export function createMenu(): Menu;
}
