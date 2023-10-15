const list = documentQuerySelector('ul');
const input = documentQuerySelector('input');
const but = documentQuerySelector('button');


button.addEventListener('click', () =>{
    const myItem = input.value;
    input = '';

    const myList = document.createElement('li');
    const myText = document.createElement('span');
    const myBtn = document.createElement('button');

    myList.appendChild(myText);
    myList.appendChild(myBtn);
    myText.textContent(myItem);
    myBtn.textContent("Delete");
    myList.appendChild(myItem);
    

})


addEventListener("click", press());