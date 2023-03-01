const wash = document.getElementById('wash')
const grass = document.getElementById('grass')
const weeds = document.getElementById('weeds')
const addService = []
const addCost = []

//functions//
function renderServices(){
    document.getElementById('addServices').innerHTML = addService.join('')
}

function getTotal(){
    let total = addCost.reduce(((a,b) => a+b),0)
    document.getElementById('total').innerHTML = `<div>Total:</div> <div class = 'total'> $${total}</div>`
}

//adding functionality to the different buttons//
wash.addEventListener('click',function(){
    addCost.push(20)
    addService.push(`<div class = 'choresCol'><h3 class = 'h3'>Wash Bathroom</h3> <p class = 'price'>20</p></div>`)
    renderServices()
    getTotal()
    wash.disabled = true
})

grass.addEventListener('click', function(){
    addCost.push(15)
    addService.push(`<div class = 'choresCol'><h3 class = 'h3'>Cut Grass</h3> <p class = 'price'>15</p></div>`)
    renderServices()
    getTotal()
    grass.disabled = true
})

weeds.addEventListener('click', function(){
    addCost.push(10)
    addService.push(`<div class = 'choresCol'><h3 class = 'h3'>Pull Weeds</h3> <p class = 'price'>10</p></div>`)
    renderServices()
    getTotal()
    weeds.disabled = true
})


//functionality of remove buttons -- need to fix it to my data.//
function removeWeed() {
    const index = serviceArr.indexOf(
      `<div class="item"><p>Pull Weeds</p> <button class="idBtn" id="idBtn" onclick="removeWeed()">Remove</button> <p class="price"><span class="dollar">$</span>30</p></div>`
    );
    serviceArr.splice(index, 1);
    valueArr.splice(index, 1);
    displayService();
    displayTotal();
    weedBtn.disabled = false;
  }