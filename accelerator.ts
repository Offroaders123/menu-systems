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

export const FigureKey: FigureKey[] = [...AlphabeticKey, ...NumericKey];
export type FigureKey = AlphabeticKey | NumericKey;

export const MetaFigureKey = FigureKey.map(figure => MetaKey.map(meta => `${meta}+${figure}` as const)).flat(1).sort();
export type MetaFigureKey = typeof MetaFigureKey[number];

export const AltFigureKey = FigureKey.map(figure => `${AltKey}+${figure}` as const).sort();
export type AltFigureKey = typeof AltFigureKey[number];

export const MetaShiftKey = FigureKey.map(figure => MetaKey.map(meta => `${meta}+${ShiftKey}+${figure}` as const)).flat(1).sort();
export type MetaShiftKey = typeof MetaShiftKey[number];

export const AltShiftKey = FigureKey.map(figure => `${AltKey}+${ShiftKey}+${figure}` as const).sort();
export type AltShiftKey = typeof AltShiftKey[number];

export const MetaAltFigureKey = FigureKey.map(figure => MetaKey.map(meta => `${meta}+${AltKey}+${figure}` as const)).flat(1).sort();
export type MetaAltFigureKey = typeof MetaAltFigureKey[number];

export const MetaAltShiftFigureKey = FigureKey.map(figure => MetaKey.map(meta => `${meta}+${AltKey}+${ShiftKey}+${figure}` as const)).flat(1).sort();
export type MetaAltShiftFigureKey = typeof MetaAltShiftFigureKey[number];

export const Accelerator: Accelerator[] = [...MetaFigureKey, ...AltFigureKey, ...MetaShiftKey, ...AltShiftKey, ...MetaAltFigureKey, ...MetaAltShiftFigureKey].sort();
export type Accelerator = MetaFigureKey | AltFigureKey | MetaShiftKey | AltShiftKey | MetaAltFigureKey | MetaAltShiftFigureKey;
