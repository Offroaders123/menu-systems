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

export const Accelerator: ((fig: string) => string[])[] = [
  fig => MetaKey.map(m => `${m}+${fig}`),
  fig => [`${AltKey}+${fig}`],
  fig => MetaKey.map(m => `${m}+${ShiftKey}+${fig}`),
  fig => [`${AltKey}+${ShiftKey}+${fig}`],
  fig => MetaKey.map(m => `${m}+${AltKey}+${fig}`),
  fig => MetaKey.map(m => `${m}+${AltKey}+${ShiftKey}+${fig}`),
];

function generateAccelerators(): string[] {
  return FigureKey
    .map(abc => Accelerator
      .map(accs =>
        accs(`${abc}`)
      )
    )
    .flat(2)
    .sort();
}

for (const acc of generateAccelerators()) {
  console.log(acc);
}
