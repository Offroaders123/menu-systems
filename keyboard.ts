import { type Accelerator, type AcceleratorState, parseAccelerator } from "./accelerator.ts";

export function hasAccelerator(event: KeyboardEvent, accelerator: Accelerator): boolean {
  const { meta, shift, alt, figure }: AcceleratorState = parseAccelerator(accelerator);
  if (event.shiftKey !== shift) return false;
  if (event.altKey !== alt) return false;
  if (event.key.toUpperCase() !== figure) return false;
  return true;
}

export type ShortcutCallback = (event: KeyboardEvent) => void;

export class Shortcut implements Disposable {
  private readonly listener: ShortcutCallback = event => {
    if (!hasAccelerator(event, this.accelerator)) return;
    this.callback(event);
  };

  constructor(
    private readonly accelerator: Accelerator,
    private readonly callback: ShortcutCallback
  ) {
    document.addEventListener("keydown", this.listener, { once: true });
  }

  [Symbol.dispose](): void {
    document.removeEventListener("keydown", this.listener);
  }
}
