export const MetaKey = ["Super", "Cmd", "Ctrl"] as const;

export const ShiftKey = "Shift";

export const AltKey = "Alt";

// Array.from({ length: 26 }, (_,i) => i + 65).map(c => String.fromCharCode(c))
export const AlphabeticKey: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export const NumericKey: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const FigureKey: (string | number)[] = [...AlphabeticKey, ...NumericKey];

export const Accelerator: ((fig: string) => string[])[] = [
  fig => MetaKey.map(m => `${m}+${fig}`),
  fig => [`${AltKey}+${fig}`],
  fig => MetaKey.map(m => `${m}+${ShiftKey}+${fig}`),
  fig => [`${AltKey}+${ShiftKey}+${fig}`],
  fig => MetaKey.map(m => `${m}+${AltKey}+${fig}`),
  fig => MetaKey.map(m => `${m}+${AltKey}+${ShiftKey}+${fig}`),
];

// for (const abc of FigureKey) {
//   for (const accs of Accelerator) {
//     for (const acc of accs(`${abc}`)) {
//       console.log(acc);
//     }
//   }
// }

// function generateAccelerators(): string[] {
//   const accelerators: string[] = [];

//   for (const abc of FigureKey) {
//     for (const accs of Accelerator) {
//       for (const acc of accs(`${abc}`)) {
//         accelerators.push(acc);
//       }
//     }
//   }

//   accelerators.sort();

//   return accelerators;
// }

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
