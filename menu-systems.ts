import { type Accelerator } from "./keyboard.ts";

export interface Menu {
  item(label: string, accelerator: Accelerator, onclick: () => void): Menu;
}

export declare function createMenu(): Menu;
