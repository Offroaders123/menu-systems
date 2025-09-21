import { type Accelerator } from "./accelerator.ts";

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
