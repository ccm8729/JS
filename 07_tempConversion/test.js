// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'this is red text';
para.setAttribute('style', 'color: red')
container.appendChild(para);

const head = document.createElement('h3');
head.classList.add('head');
head.textContent = 'this is H3 content';
head.setAttribute('style', 'color: blue');
container.appendChild(head);

const within = document.createElement('h1');
within.classList.add('h1');
within.textContent = 'Im in a div';

const pw = document.createElement('p');
pw.classList.add('p');
pw.textContent = 'ME TOO!';



const divi = document.createElement('div');
divi.appendChild(within);
divi.appendChild(pw);
divi.classList.add('divi');
divi.setAttribute('style', 'border: solid blue');
container.appendChild(divi);


btn.addEventListener('click', function (e) {
    console.log(e.target);
  });



