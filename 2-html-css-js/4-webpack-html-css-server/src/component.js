
import { join } from "lodash-es";


export function component() {
  const element = document.createElement("div");

  element.innerHTML = join(["Hello esta demio perro", "webpack"], " ");

  return element;
}