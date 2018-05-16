var target = document.getElementById('target');
var text = 'Platforma pro sociální bydlení'
var mainText

resetText()

setInterval(removeSecondLast, 100)

function removeSecondLast() {
  mainText.splice(mainText.length - 2, 1)
  if (mainText.length < 2) resetText()
  setTarget()
}

function setTarget() {
  target.innerHTML = mainText.join('')
}

function resetText() {
  mainText = text.split('');
}