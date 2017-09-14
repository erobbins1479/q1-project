var form = document.getElementById('bill-calculator')
var outputTag = document.getElementById('total')
var triviaTag = document.getElementById('trivia')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  var rent = parseFloat(event.target.elements.rentTotal.value)
  var energy = parseFloat(event.target.elements.energyTotal.value)
  var internet = parseFloat(event.target.elements.internetTotal.value)
  var miscExpenses = parseFloat(event.target.elements.miscExpenses.value)
  var people = parseFloat(event.target.elements.numberOfPeople.value)

  var result = (rent + energy + internet + miscExpenses)/people

  var total = document.getElementById('total')
  total.innerHTML = 'Each roomie owes: $' + result.toFixed(2)

  var triviaNumber = parseInt(result)
  console.log(triviaNumber)

  fetch(`http://numbersapi.com/${triviaNumber}/trivia?json`)
    .then(function(response) {
      return response.json()
        .then(function(numberData) {
          addData(numberData)
        })
    })
})

function addData(numberData) {
  triviaTag.innerText = (numberData.text)
}

// var counter = 0
//
// function moreNames () {
//   counter ++;
//   var newNames = document.getElementById('roommates').cloneNode(true)
//   newNames.id = ''
//   newNames.style.display = 'block'
//
//   var newName = newNames.childNodes
//   for (var i = 0; i < newName.length; i++) {
//     var theName = newName[i].newName
//     if (theName)
//       newName[i].name = theName + counter
//   }
//   var insertHere = document.getElementById('writeroot');
//   insertHere.parentNode.insertBefore(newNames,insertHere);
// }
// window.onload = moreNames
