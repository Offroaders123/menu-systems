import { type Accelerator } from "./accelerator.ts";

export interface Menu {
  item(label: string, accelerator: Accelerator, onclick: () => void): Menu;
}

export declare function createMenu(): Menu;
