const form = document.querySelector('.book-form')
const title = document.querySelector('.title-input')
const author = document.querySelector('.author-input')
const priority = document.querySelector('.priority')
const category = document.querySelector('.category')
const submit = document.querySelector('.submit-btn')

// creates list of validation warnings
const warningList = document.createElement('ul')
form.insertBefore(warningList, submit)

// creates list of added books
const bookList = document.createElement('ul')
bookList.setAttribute('class', 'book-list')
document.body.appendChild(bookList)

// gets an array of added books from local storage
let storageBook = JSON.parse(localStorage.getItem('library'))
  ? JSON.parse(localStorage.getItem('library'))
  : []

// creates a list item of book list
const createBookList = () => {
  bookList.innerHTML = ''

  for (let i = 0; i < storageBook.length; i++) {
    const bookListItem = document.createElement('li')
    bookListItem.setAttribute('class', 'book-list-item')
    bookList.appendChild(bookListItem)

    const bookHeading = document.createElement('div')
    bookHeading.setAttribute('class', 'book-heading')
    bookListItem.appendChild(bookHeading)

    const bookImage = document.createElement('img')
    bookImage.setAttribute('src', './img/book.png')
    bookImage.setAttribute('alt', 'book-img')
    bookHeading.appendChild(bookImage)

    const bookInfo = document.createElement('div')
    bookInfo.setAttribute('class', 'book-info')
    bookHeading.appendChild(bookInfo)

    const bookTitle = document.createElement('p')
    bookTitle.setAttribute('class', 'book-title')
    bookTitle.innerHTML = `<span>Title:</span> ${storageBook[i].title}`
    bookInfo.appendChild(bookTitle)

    const bookAuthor = document.createElement('p')
    bookAuthor.setAttribute('class', 'book-author')
    bookAuthor.innerHTML = `<span>Author:</span> ${storageBook[i].author}`
    bookInfo.appendChild(bookAuthor)

    const bookPriority = document.createElement('p')
    bookPriority.setAttribute('class', 'book-priority')
    bookPriority.innerHTML = `<span>Priority:</span> ${storageBook[i].priority}/5`
    bookInfo.appendChild(bookPriority)

    const bookCategory = document.createElement('p')
    bookCategory.setAttribute('class', 'book-category')
    bookCategory.innerHTML = `<span>Category:</span> ${storageBook[i].category}`
    bookInfo.appendChild(bookCategory)
  }
}
createBookList()

// adds books to the list
const addBook = () => {
  const book = {
    title: title.value,
    author: author.value,
    priority: priority.value,
    category: category.value,
    id: Date.now(),
  }

  storageBook.push(book)
  localStorage.setItem('library', JSON.stringify(storageBook))

  createBookList()

  title.value = ''
  author.value = ''
  priority.value = ''
  category.value = ''
}

// form validation adding books to the library
const formValidation = (event) => {
  event.preventDefault()

  warningList.innerHTML = ''

  const minTitleLength = 1
  const minAuthorLength = 3

  if (title.value.length <= minTitleLength) {
    title.classList.add('warning')
    const warning = document.createElement('li')
    warningList.appendChild(warning)
    warning.innerText = '*Title field must have at least 1 character!'
  } else {
    title.classList.remove('warning')
  }

  if (author.value.length <= minAuthorLength) {
    author.classList.add('warning')
    const warning = document.createElement('li')
    warningList.appendChild(warning)
    warning.innerText = '*Author field must have at least 3 characters!'
  } else {
    author.classList.remove('warning')
  }

  if (priority.value === '') {
    priority.classList.add('warning')
    const warning = document.createElement('li')
    warningList.appendChild(warning)
    warning.innerText = '*Select a reading priority!'
  } else {
    priority.classList.remove('warning')
  }

  if (category.value === '') {
    category.classList.add('warning')
    const warning = document.createElement('li')
    warningList.appendChild(warning)
    warning.innerText = '*Select a book category!'
  } else {
    category.classList.remove('warning')
  }

  warningList.innerHTML === '' ? addBook() : null
}

form.addEventListener('submit', formValidation)
