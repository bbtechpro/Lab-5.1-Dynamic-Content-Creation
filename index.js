// 1. Select Elements
let addBtn = document.getElementById('add')
let subBtn = document.getElementById('sub')
let countValue = document.getElementById('count')

// 2. Add Event Listeners
subBtn.addEventListener('click', function (){
  countValue.textContent= Number(countValue.textContent) - 1
})

addBtn.addEventListener('click', function (){
  countValue.textContent = Number(countValue.textContent) + 1
})

// 3. Modify Content in Response to Events