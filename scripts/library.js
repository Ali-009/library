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

  //Formatting the date
  let unformattedDate = document.querySelector('#publish-date').value;
  let splitDate = unformattedDate.split('-');
  let publishDate = splitDate.reverse().join('/');

  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let book = new Book(title, author, publishDate, pages, read);

  myLibrary.push(book);

  //remove the form and display the library
  document.querySelector('#book-form').remove();
  displayLibrary();
}

function displayLibrary(){

  if(document.querySelector('tbody')){
    document.querySelector('tbody').remove();
  }

  //All books are part of the table body of #library-table
  let library = document.createElement('tbody');
  document.querySelector('#library-table').appendChild(library);

  //creating a row for metadata
  let metaRow = document.createElement('tr');
  library.appendChild(metaRow);
  let metaText = ['Title','Author','Published','Pages','Read', 'Remove'];

  //Metadata cells
    for(let i = 0; i < 6; i++){
      let metadata = document.createElement('td');
      metadata.textContent = metaText[i];
      metaRow.appendChild(metadata);
    }

  //Goes through myLibrary Array to display each book
  for(let i = 0; i < myLibrary.length; i++){

    let book = document.createElement('tr');
    book.setAttribute('data-book', i);
    library.appendChild(book);

    //put each book property in a table cell (td)
    for(info in myLibrary[i]){

      let bookData = document.createElement('td');

      //A checkbox is used to display whether the book has been read
      if(info === 'read'){
        let readCheckBox = document.createElement('input');
        readCheckBox.setAttribute('type', 'checkbox');

        //Added functionality to the readCheckBox
        readCheckBox.addEventListener('click', (e) =>
            myLibrary[i][info] = !myLibrary[i][info]);

        if(myLibrary[i][info]){
          readCheckBox.setAttribute('checked', '');
        }
        bookData.appendChild(readCheckBox);
        book.appendChild(bookData);
        continue;
      }

      bookData.textContent = myLibrary[i][info];
      book.appendChild(bookData);
    }

    //Add a remove button to each book
    let removeBtnCell = document.createElement('td');
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    book.appendChild(removeBtnCell);
    removeBtnCell.appendChild(removeBtn);

    removeBtn.addEventListener('click', (e) => {
      myLibrary.splice(i,1);
      document.querySelector(`tr[data-book="${i}"]`).remove();
    });
  }
}

function displayForm(){
  let form = document.createElement('div');
  form.setAttribute('id','book-form');
  document.querySelector('#wrapper').appendChild(form);

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
    div.classList.add('form-control');
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
