import { join }  from 'lodash-es';

export function component(){
    const element = document.createElement("div");

    element.innerHTML = join(
        ["Holasa", "webpack"],
        " "
    );
    return element;
}