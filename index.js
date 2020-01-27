// Write your code here!
const main = document.querySelector('main#main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Your name is the champion';
document.querySelectoy('body').appendChild(newHeader);