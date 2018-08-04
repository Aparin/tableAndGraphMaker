export default function makeDOMelement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};