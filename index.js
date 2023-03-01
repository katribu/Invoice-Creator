const listedChores = document.getElementById("listedChores")
const sendBtn = document.getElementById('sendBtn')
const addBtn = document.getElementById('addBtn')
const totalBtn = document.getElementById('totalBtn')
let numberInput = document.getElementById('number')
let choreInput = document.getElementById('chore')
let total = document.getElementById('total')
let tasks = []

addBtn.addEventListener("click", function(){
    let chore = choreInput.value
    let amount = numberInput.value

    if(!chore && !amount){
        return;
    }else{
        tasks.push({
           chore,amount
        })
    }
    numberInput.value = ""
    choreInput.value = ""
    renderHTML()
})


function renderHTML(){
    const chores = tasks.map(data => {
        return `
        <div id='chores'>
        <p class="choreData"> ${data.chore}</p>
        <p>${data.amount}</p>
        </div>
        `
    }).join('')
    listedChores.innerHTML = chores
}

function getTotal(){
const reducedTasks = tasks.reduce((acc, obj)=> acc + Number(obj.amount), 0)

total.innerHTML = `
<h3>Total Amount: $${reducedTasks} </h3>
`
}

totalBtn.addEventListener("click", getTotal)

sendBtn.addEventListener("click", function(){
    listedChores.innerHTML = `<h3>Add a chore....</h3>`
    total.innerHTML = ""
    numberInput.value = ""
    choreInput.value = ""
    tasks=[]
    alert("Invoice was sent")  
})