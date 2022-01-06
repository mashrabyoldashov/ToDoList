let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elInput2 = document.querySelector(".input-2");
let elList = document.querySelector(".list");
let elDiv = document.querySelector(".div");
const todos = []



elForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  let inputValue = elInput.value.trim();
  let inputValue2 = elInput2.value.trim();

  elDiv.textContent = `${inputValue2} kiritgan ToDolar` 
 

  let todo = {
    name: inputValue,
    id: todos.length,
  }

  todos.push(todo)
  elInput.value = null;
  elList.innerHTML = null;

  elInput2.style.display = "none"

  for(let item of todos){
    
    let newItem = document.createElement('li');
    let newInput = document.createElement('input');

  
    newItem.textContent = item.name;

   
    newItem.setAttribute('class', 'alert alert-warning fs-3 w-100 d-flex justify-content-between mb-3') 
    newItem.appendChild(newInput);
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('class', 'form-check-input checked-input');
    elList.appendChild(newItem);
     
    


  
  }

})


