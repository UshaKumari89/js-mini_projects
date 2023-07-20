const text = `This is a mini project to practice how 
can we write auto text using js`

let index = 0;

function writeText() {
document.body.innerText = text.slice(0, index)
index++;
if (index > text.length -1){
  index = 0;
}
  
}

setInterval(writeText , 100)