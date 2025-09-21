import { type Accelerator } from "./accelerator.ts";

export function toAccelerator(event: KeyboardEvent): Accelerator {
  const { metaKey, ctrlKey, shiftKey, altKey, key } = event;
}

export type ShortcutCallback = (event: KeyboardEvent) => void;

export class Shortcut implements Disposable {
  private readonly listener: ShortcutCallback = event => {
    const accelerator: Accelerator = toAccelerator(event);
    if (accelerator !== this.accelerator) return;
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
