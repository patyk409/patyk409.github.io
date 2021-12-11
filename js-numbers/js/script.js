// create a main container
const container = document.createElement('div')
document.body.prepend(container)

// function that creates tables dynamically
const createElement = (parentElement, elementType, attr, attrVal) => {
  const elementName = document.createElement(elementType)
  elementName.setAttribute(attr, attrVal)
  parentElement.appendChild(elementName)
}

// create button
createElement(container, 'button', 'class', 'btn')
const btn = document.querySelector('.btn')
btn.innerText = 'Generate Random Numbers'

// create table of numbers
createElement(container, 'div', 'class', 'table')

// create odd and even column
createElement(document.querySelector('.table'), 'div', 'class', 'odd-column')
createElement(document.querySelector('.table'), 'div', 'class', 'even-column')

// create odd and even title
createElement(document.querySelector('.odd-column'), 'p', 'class', 'odd-title')
const oddColumn = document.querySelector('.odd-column')
oddColumn.innerHTML = '<p>Odd Column</p>'

createElement(
  document.querySelector('.even-column'),
  'p',
  'class',
  'even-title',
)
const evenColumn = document.querySelector('.even-column')
evenColumn.innerHTML = '<p>Even Column</p>'

// compares numbers passed to function as a parameters
const compareNumbers = (num1, num2) => {
  return num1 - num2
}

// generates amount of random numbers, sorts into odd/even and passes them to the proper columns
const generateAndSortNumbers = () => {
  const min = 1
  const max = 100
  const amount = 20
  const oddArr = []
  const evenArr = []

  // clear columns before next generating
  oddColumn.innerHTML = '<p>Odd Column</p>'
  evenColumn.innerHTML = '<p>Even Column</p>'

  // loop that generates random numbers and sorts them into odd/even
  for (let i = 0; i < amount; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    if (!(randomNum % 2 === 0)) {
      oddArr.push(randomNum)
      oddArr.sort(compareNumbers)
    } else {
      evenArr.push(randomNum)
      evenArr.sort(compareNumbers)
    }
  }

  // passes sorted numbers to proper column
  oddArr.forEach((el) => {
    const oddNum = document.createElement('p')
    document.querySelector('.odd-column').appendChild(oddNum)
    oddNum.innerText = el
  })

  // passes sorted numbers to proper column
  evenArr.forEach((el) => {
    const evenNum = document.createElement('p')
    document.querySelector('.even-column').appendChild(evenNum)
    evenNum.innerText = el
  })
}

btn.addEventListener('click', generateAndSortNumbers)
