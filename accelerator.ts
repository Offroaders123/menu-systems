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

export const MetaFigureKey: MetaFigureKey[] = FigureKey.map(figure => MetaKey.map((meta): MetaFigureKey => `${meta}+${figure}`)).flat(1).sort();
export type MetaFigureKey = `${MetaKey}+${FigureKey}`;

export const AltFigureKey: AltFigureKey[] = FigureKey.map((figure): AltFigureKey => `${AltKey}+${figure}`).sort();
export type AltFigureKey = `${AltKey}+${FigureKey}`;

export const MetaShiftKey: MetaShiftKey[] = FigureKey.map(figure => MetaKey.map((meta): MetaShiftKey => `${meta}+${ShiftKey}+${figure}`)).flat(1).sort();
export type MetaShiftKey = `${MetaKey}+${ShiftKey}+${FigureKey}`;

export const AltShiftKey: AltShiftKey[] = FigureKey.map((figure): AltShiftKey => `${AltKey}+${ShiftKey}+${figure}`).sort();
export type AltShiftKey = `${AltKey}+${ShiftKey}+${FigureKey}`;

export const MetaAltFigureKey: MetaAltFigureKey[] = FigureKey.map(figure => MetaKey.map((meta): MetaAltFigureKey => `${meta}+${AltKey}+${figure}`)).flat(1).sort();
export type MetaAltFigureKey = `${MetaKey}+${AltKey}+${FigureKey}`;

export const MetaAltShiftFigureKey: MetaAltShiftFigureKey[] = FigureKey.map(figure => MetaKey.map((meta): MetaAltShiftFigureKey => `${meta}+${AltKey}+${ShiftKey}+${figure}`)).flat(1).sort();
export type MetaAltShiftFigureKey = `${MetaKey}+${AltKey}+${ShiftKey}+${FigureKey}`;

export const Accelerator: (MetaFigureKey | AltFigureKey | MetaShiftKey | AltShiftKey | MetaAltFigureKey | MetaAltShiftFigureKey)[] = [...MetaFigureKey, ...AltFigureKey, ...MetaShiftKey, ...AltShiftKey, ...MetaAltFigureKey, ...MetaAltShiftFigureKey].sort();
export type Accelerator = typeof Accelerator[number];
