// Write your code here!
let main = document.querySelector("main")
main.remove()

var newHeader = document.createElement('h1')
document.body.appendChild(newHeader)

newHeader.id = 'victory'
newHeader.innerText = 'Falafel is the champion'
