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
    let submitBtn = displayForm();
    submitBtn.addEventListener('click',submitBook);
  }
}

function submitBook(e){
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let publishDate = document.querySelector('#publish-date').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let book = new Book(title, author, publishDate, pages, read);

  myLibrary.push(book);

  console.table(myLibrary);

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

    let label = document.createElement('label');
    label.setAttribute('for', id[i]);
    label.textContent = labelText[i] + ': ';

    let input = document.createElement('input');
    input.setAttribute('id', id[i]);
    input.setAttribute('name', id[i]);
    input.setAttribute('type', type[i]);


    let div = document.createElement('div');
    form.appendChild(div);

    div.appendChild(label);
    div.appendChild(input);
  }

  let submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submit-button');
  submitBtn.textContent = 'Add Book';

  form.appendChild(submitBtn);
  return submitBtn;

}



let addBtn = document.querySelector('#add-book');

addBtn.addEventListener('click', addBookToLibrary);
