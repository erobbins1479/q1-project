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
