export const MetaKey = ["Super", "Cmd", "Ctrl"] as const;
export type MetaKey = typeof MetaKey[number];

export const ShiftKey = "Shift";
export type ShiftKey = typeof ShiftKey;

export const AltKey = "Alt";
export type AltKey = typeof AltKey;

export const AlphabeticKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] as const;
export type AlphabeticKey = typeof AlphabeticKey[number];

export const NumericKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type NumericKey = typeof NumericKey[number];

export const FigureKey: (AlphabeticKey | NumericKey)[] = [...AlphabeticKey, ...NumericKey];
export type FigureKey = typeof FigureKey[number];

export const Accelerator: Accelerator[] = FigureKey
  .map(figure => [
    (figure: FigureKey): MetaFigureKey[] => MetaKey.map((meta): MetaFigureKey => `${meta}+${figure}`),
    (figure: FigureKey): AltFigureKey[] => [`${AltKey}+${figure}`],
    (figure: FigureKey): MetaShiftKey[] => MetaKey.map((meta): MetaShiftKey => `${meta}+${ShiftKey}+${figure}`),
    (figure: FigureKey): AltShiftKey[] => [`${AltKey}+${ShiftKey}+${figure}`],
    (figure: FigureKey): MetaAltFigureKey[] => MetaKey.map((meta): MetaAltFigureKey => `${meta}+${AltKey}+${figure}`),
    (figure: FigureKey): MetaAltShiftFigureKey[] => MetaKey.map((meta): MetaAltShiftFigureKey => `${meta}+${AltKey}+${ShiftKey}+${figure}`),
  ]
    .map(accs =>
      accs(figure)
    )
  )
  .flat(2)
  .sort();

export type Accelerator = MetaFigureKey | AltFigureKey | MetaShiftKey | AltShiftKey | MetaAltFigureKey | MetaAltShiftFigureKey;
export type MetaFigureKey = `${MetaKey}+${FigureKey}`;
export type AltFigureKey = `${AltKey}+${FigureKey}`;
export type MetaShiftKey = `${MetaKey}+${ShiftKey}+${FigureKey}`;
export type AltShiftKey = `${AltKey}+${ShiftKey}+${FigureKey}`;
export type MetaAltFigureKey = `${MetaKey}+${AltKey}+${FigureKey}`;
export type MetaAltShiftFigureKey = `${MetaKey}+${AltKey}+${ShiftKey}+${FigureKey}`;
