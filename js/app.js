//      ------ Cached Elements ------
const input = document.getElementById('input');
const btn = document.getElementById('submit-button')
const resetBtn = document.getElementById('reset')
const uList = document.getElementById('todo-list')


//      ------ Event Listeners ------
btn.addEventListener('click', getList);
resetBtn.addEventListener('click', resetAll);



//       ------ Functions -----
function getList(list) {
  if(input.value.trim() === '') return;
  const listElement = document.createElement('li')
  // console.log(listElement);
  listElement.textContent = input.value
  uList.appendChild(listElement)
  input.value = ''
}


function resetAll(clear){
  uList.innerHTML = ''
}
