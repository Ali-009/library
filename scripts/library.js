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

  if(!document.querySelector('#book-form')){
    displayForm();
  }
}

function displayForm(){
  let form = document.createElement('div');
  form.setAttribute('id','book-form');
  document.body.appendChild(form);

  let labelText = ['Title','Author','Publish Date','Pages','Read'];
  let id = ['title','author','publish-date','pages','read'];
  let type = ['text', 'text', 'date', 'text', 'checkbox'];

  //Creating form elements
  for(let i=0; i < id.length; i++){
    let label = createFormElement('label', null, labelText[i], id[i]);
    let input = createFormElement('input', type[i], null, id[i]);

    let div = document.createElement('div');
    form.appendChild(div);

    div.appendChild(label);
    div.appendChild(input);
  }

  let submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submit-button');
  submitBtn.textContent = 'Add Book';

  form.appendChild(submitBtn);

}

function createFormElement(tag, type, text, id){

  let element = document.createElement(tag);

  //setting attributes and textContent of labels
  if(tag === 'label'){
    element.setAttribute('for', id);
    element.textContent = text + ': ';
  }

  //Setting attributes of form inputs
  if(tag === 'input'){
    element.setAttribute('id', id);
    element.setAttribute('name', id);
    element.setAttribute('type', type);
  }

  return element;
}

let addBtn = document.querySelector('#add-book');

addBtn.addEventListener('click', addBookToLibrary);
