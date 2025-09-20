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
    (figure: FigureKey): Accelerator[] => MetaKey.map(meta => `${meta}+${figure}` as const),
    (figure: FigureKey): Accelerator[] => [`${AltKey}+${figure}`],
    (figure: FigureKey): Accelerator[] => MetaKey.map(meta => `${meta}+${ShiftKey}+${figure}` as const),
    (figure: FigureKey): Accelerator[] => [`${AltKey}+${ShiftKey}+${figure}`],
    (figure: FigureKey): Accelerator[] => MetaKey.map(meta => `${meta}+${AltKey}+${figure}` as const),
    (figure: FigureKey): Accelerator[] => MetaKey.map(meta => `${meta}+${AltKey}+${ShiftKey}+${figure}` as const),
  ]
    .map(accs =>
      accs(figure)
    )
  )
  .flat(2)
  .sort();

export type Accelerator =
  | `${MetaKey}+${FigureKey}`
  | `${AltKey}+${FigureKey}`
  | `${MetaKey}+${ShiftKey}+${FigureKey}`
  | `${AltKey}+${ShiftKey}+${FigureKey}`
  | `${MetaKey}+${AltKey}+${FigureKey}`
  | `${MetaKey}+${AltKey}+${ShiftKey}+${FigureKey}`;
