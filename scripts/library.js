let myLibrary = [];


function Book(title, author, publishDate, pages, read){
  //constructor
  this.title = title;
  this.author = author;
  this.publishDate = publishDate;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e){

  displayForm();
}

function displayForm(){
  let form = document.createElement('form');

  document.body.appendChild(form);

  let labelText = ['Title','Author','Publish Date','Pages','Read'];
  let id = ['title','author','publishDate','pages','read'];

  for(let i=0; i < id.length; i++){
    let label = createFormElement('label', 'for', labelText[i], id[i]);
    let input = createFormElement('input', 'id', null, id[i]);

    let div = document.createElement('div');
    form.appendChild(div);

    div.appendChild(label);
    div.appendChild(input);
  }

}

function createFormElement(elementTag, elementAttribute, text, id){
  let element = document.createElement(elementTag);
  if(elementTag === 'label'){
    element.textContent = text;
  }

  if(elementTag === 'input' && id === 'read'){
    element.setAttribute('type', 'checkbox');
  }

  element.setAttribute(elementAttribute, id);
  return element;
}

let addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', addBookToLibrary);
