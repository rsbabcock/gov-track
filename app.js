
// With JavaScript, use document.querySelector() to obtain a programmatic reference to your DOM <article> element that you created. With that reference, update its contents with another sub-component that displays a fictitious mission statement for your representative.

// const articleRef = document.querySelector('#rep');
const node = document.createElement("H2");
const textNode = document.createTextNode("To save the world one penguin at a time");
node.appendChild(textNode);
document.getElementById('rep').appendChild(node);

