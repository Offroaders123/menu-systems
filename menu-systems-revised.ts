import { createMenu, type Menu } from "./menu-systems.ts";

declare function createEditor(): void;
declare function openEditor(): void;
declare function saveEditor(): void;
declare function saveEditorAs(): void;

const file: Menu = createMenu()
  .item("New", "Super+N", () => {
    createEditor();
  })
  .item("Open", "Super+O", () => {
    openEditor();
  })
  .item("Save", "Super+S", () => {
    saveEditor();
  })
  .item("Save As...", "Super+Shift+S", () => {
    saveEditorAs();
  });
