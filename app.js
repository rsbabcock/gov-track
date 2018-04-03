
// With JavaScript, use document.querySelector() to obtain a programmatic reference to your DOM <article> element that you created. With that reference, update its contents with another sub-component that displays a fictitious mission statement for your representative.

// const articleRef = document.querySelector('#rep');


const node = document.createElement("H2");
// node creates h2 element
const textNode = document.createTextNode("To save the world one penguin at a time");
// textNode creates a text node in a variable (createTextNode) is a javascript function
node.appendChild(textNode);
// node. is referencing the node variable and appending a child to it, in this case the textNode
document.getElementById('rep').appendChild(node);
// acesses dom with getElementById and id=rep, then appends Child, with the node.
